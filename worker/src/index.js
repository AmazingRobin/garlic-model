/**
 * Cloudflare Worker for Garlic Model News Crawler
 * 自动爬取 Google News 关于 "garlic model", "garlic LLM", "garlic openai" 的新闻
 * 定时任务：00:00, 08:00, 12:00, 16:00, 20:00 (UTC+8)
 */

// 搜索关键词列表
const SEARCH_KEYWORDS = [
  'garlic model openai',
  'garlic LLM',
  'openai garlic',
  'garlic AI model'
];

// Google News RSS Base URL
const GOOGLE_NEWS_RSS = 'https://news.google.com/rss/search';

/**
 * 主入口函数
 */
export default {
  /**
   * Fetch Handler - 处理 HTTP 请求
   */
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // CORS 预检请求
    if (request.method === 'OPTIONS') {
      return handleCORS();
    }

    // API 路由
    if (url.pathname === '/api/reports') {
      return handleGetReports(env);
    }

    if (url.pathname === '/api/crawl' && request.method === 'POST') {
      // 手动触发爬取（可选）
      await crawlAndStore(env);
      return jsonResponse({ success: true, message: 'Crawl triggered successfully' });
    }

    // 默认响应
    return jsonResponse({ 
      service: 'Garlic News Crawler API',
      endpoints: {
        reports: '/api/reports',
        crawl: '/api/crawl [POST]'
      }
    });
  },

  /**
   * Scheduled Handler - 处理定时任务
   */
  async scheduled(event, env, ctx) {
    console.log('Scheduled crawl triggered at:', new Date(event.scheduledTime).toISOString());
    ctx.waitUntil(crawlAndStore(env));
  }
};

/**
 * 爬取并存储新闻数据
 */
async function crawlAndStore(env) {
  try {
    const allNews = [];
    
    // 遍历每个关键词
    for (const keyword of SEARCH_KEYWORDS) {
      console.log(`Fetching news for keyword: ${keyword}`);
      const news = await fetchGoogleNews(keyword);
      allNews.push(...news);
    }

    // 去重（基于 title）
    const uniqueNews = deduplicateNews(allNews);
    
    // 获取现有数据
    const existingData = await env.NEWS_STORAGE.get('reports', { type: 'json' }) || [];
    
    // 合并新数据（避免重复）
    const mergedNews = mergeNews(existingData, uniqueNews);
    
    // 存储到 KV
    await env.NEWS_STORAGE.put('reports', JSON.stringify(mergedNews));
    
    // 存储最后更新时间
    await env.NEWS_STORAGE.put('last_update', new Date().toISOString());
    
    console.log(`Successfully crawled and stored ${uniqueNews.length} new items`);
    return { success: true, newItems: uniqueNews.length };
  } catch (error) {
    console.error('Crawl error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * 从 Google News RSS 获取新闻
 */
async function fetchGoogleNews(keyword) {
  const rssUrl = `${GOOGLE_NEWS_RSS}?q=${encodeURIComponent(keyword)}&hl=en-US&gl=US&ceid=US:en`;
  
  try {
    const response = await fetch(rssUrl);
    const xmlText = await response.text();
    
    return parseGoogleNewsRSS(xmlText, keyword);
  } catch (error) {
    console.error(`Error fetching news for "${keyword}":`, error);
    return [];
  }
}

/**
 * 解析 Google News RSS XML
 */
function parseGoogleNewsRSS(xmlText, keyword) {
  const items = [];
  
  // 使用正则提取 RSS item 节点
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const matches = [...xmlText.matchAll(itemRegex)];
  
  for (const match of matches) {
    const itemXml = match[1];
    
    // 提取各字段
    const title = extractTag(itemXml, 'title');
    const link = extractTag(itemXml, 'link');
    const pubDate = extractTag(itemXml, 'pubDate');
    const description = extractTag(itemXml, 'description');
    const source = extractTag(itemXml, 'source');
    
    if (title && link) {
      items.push({
        id: generateId(title, pubDate),
        title: cleanText(title),
        source: cleanText(source) || 'Google News',
        sourceUrl: link,
        date: formatDate(pubDate),
        category: categorizeNews(title, description),
        excerpt: cleanText(description) || extractExcerpt(title),
        tags: extractTags(keyword, title, description),
        crawledAt: new Date().toISOString()
      });
    }
  }
  
  return items;
}

/**
 * 从 XML 中提取标签内容
 */
function extractTag(xml, tagName) {
  const regex = new RegExp(`<${tagName}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\/${tagName}>|<${tagName}[^>]*>([\\s\\S]*?)<\/${tagName}>`, 'i');
  const match = xml.match(regex);
  return match ? (match[1] || match[2] || '').trim() : '';
}

/**
 * 清理文本（移除 HTML 标签和多余空格）
 */
function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/<[^>]+>/g, '') // 移除所有 HTML 标签
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ') // 合并空白字符
    .trim();
}

/**
 * 格式化日期为 YYYY-MM-DD
 */
function formatDate(dateString) {
  if (!dateString) return new Date().toISOString().split('T')[0];
  
  try {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * 生成唯一 ID
 */
function generateId(title, date) {
  const str = `${title}${date}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `r${Math.abs(hash).toString(36)}`;
}

/**
 * 智能分类新闻类别
 */
function categorizeNews(title, description) {
  const text = `${title} ${description}`.toLowerCase();
  
  // 媒体报道特征
  if (text.match(/official|confirmed|announced|press release|statement/i)) {
    return 'media';
  }
  
  // 传闻特征
  if (text.match(/rumor|rumoured|reportedly|allegedly|sources say|insider/i)) {
    return 'rumor';
  }
  
  // 推测特征
  if (text.match(/speculation|could|might|expected|predicted|analysis/i)) {
    return 'speculation';
  }
  
  // 默认为媒体报道
  return 'media';
}

/**
 * 提取标签
 */
function extractTags(keyword, title, description) {
  const tags = [keyword.replace(/\s+/g, '-').toLowerCase()];
  const text = `${title} ${description}`.toLowerCase();
  
  // 添加相关标签
  if (text.includes('code red')) tags.push('code-red');
  if (text.includes('gemini')) tags.push('gemini');
  if (text.includes('claude')) tags.push('claude');
  if (text.includes('gpt')) tags.push('gpt');
  if (text.includes('benchmark')) tags.push('benchmark');
  if (text.includes('reasoning')) tags.push('reasoning');
  if (text.includes('coding')) tags.push('coding');
  
  return [...new Set(tags)];
}

/**
 * 从标题提取摘要
 */
function extractExcerpt(title) {
  return title.length > 150 ? title.substring(0, 147) + '...' : title;
}

/**
 * 去重新闻（基于标题相似度）
 */
function deduplicateNews(newsArray) {
  const seen = new Set();
  return newsArray.filter(item => {
    const key = item.title.toLowerCase().replace(/\s+/g, '');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * 合并新旧数据，避免重复
 */
function mergeNews(existingNews, newNews) {
  const existingIds = new Set(existingNews.map(n => n.id));
  const existingTitles = new Set(existingNews.map(n => n.title.toLowerCase().replace(/\s+/g, '')));
  
  // 只添加不存在的新闻
  const uniqueNewNews = newNews.filter(item => {
    const titleKey = item.title.toLowerCase().replace(/\s+/g, '');
    return !existingIds.has(item.id) && !existingTitles.has(titleKey);
  });
  
  // 新闻在前，按日期降序排列
  return [...uniqueNewNews, ...existingNews].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

/**
 * 处理获取报告请求
 */
async function handleGetReports(env) {
  try {
    const reports = await env.NEWS_STORAGE.get('reports', { type: 'json' }) || [];
    const lastUpdate = await env.NEWS_STORAGE.get('last_update');
    
    return jsonResponse({
      success: true,
      count: reports.length,
      lastUpdate,
      reports
    });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: error.message
    }, 500);
  }
}

/**
 * CORS 响应
 */
function handleCORS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    }
  });
}

/**
 * JSON 响应助手
 */
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
