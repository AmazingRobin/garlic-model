# Cloudflare Worker 爬虫部署指南

## 📋 功能概述

此 Worker 自动爬取 Google News 关于 "garlic model"、"garlic LLM"、"garlic openai" 的最新新闻报道，并提供 REST API 供前端调用。

### 核心功能
- ✅ 每天 5 次定时爬取（00:00, 08:00, 12:00, 16:00, 20:00 UTC+8）
- ✅ 智能分类（media/rumor/speculation）
- ✅ 自动去重
- ✅ RESTful API 接口
- ✅ CORS 跨域支持

---

## 🚀 部署步骤

### 1. 安装 Wrangler CLI

```bash
npm install -g wrangler
```

### 2. 登录 Cloudflare 账号

```bash
wrangler login
```

这将打开浏览器，授权 Wrangler 访问你的 Cloudflare 账户。

### 3. 创建 KV Namespace

```bash
# 创建生产环境 KV
wrangler kv:namespace create "NEWS_STORAGE"

# 创建预览环境 KV（可选）
wrangler kv:namespace create "NEWS_STORAGE" --preview
```

执行后，你会看到类似输出：
```
✨ Success!
Add the following to your wrangler.toml:
{ binding = "NEWS_STORAGE", id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }
```

### 4. 更新 `wrangler.toml`

将上一步获得的 KV Namespace ID 填入 `worker/wrangler.toml`：

```toml
kv_namespaces = [
  { binding = "NEWS_STORAGE", id = "你的KV_ID", preview_id = "你的预览KV_ID" }
]
```

### 5. 部署 Worker

```bash
cd worker
wrangler deploy
```

部署成功后，你会看到：
```
✨ Success! Deployed garlic-news-crawler
   https://garlic-news-crawler.你的账号.workers.dev
```

记下这个 URL，后面会用到。

---

## 🔧 API 使用

### 1. 获取新闻列表

**端点**: `GET https://garlic-news-crawler.你的账号.workers.dev/api/reports`

**响应示例**:
```json
{
  "success": true,
  "count": 15,
  "lastUpdate": "2025-12-08T12:00:00.000Z",
  "reports": [
    {
      "id": "r1a2b3c",
      "title": "OpenAI Garlic Model Shows Promise in Benchmark Tests",
      "source": "TechCrunch",
      "sourceUrl": "https://...",
      "date": "2025-12-08",
      "category": "media",
      "excerpt": "Latest tests show...",
      "tags": ["garlic", "benchmark"],
      "crawledAt": "2025-12-08T12:00:00.000Z"
    }
  ]
}
```

### 2. 手动触发爬取（可选）

**端点**: `POST https://garlic-news-crawler.你的账号.workers.dev/api/crawl`

```bash
curl -X POST https://garlic-news-crawler.你的账号.workers.dev/api/crawl
```

---

## 📅 定时任务配置

Worker 已配置 5 个 Cron Triggers（UTC+8 时区）：

| UTC+8 时间 | UTC 时间 | Cron 表达式 |
|-----------|---------|------------|
| 00:00     | 16:00   | `0 16 * * *` |
| 08:00     | 00:00   | `0 0 * * *` |
| 12:00     | 04:00   | `0 4 * * *` |
| 16:00     | 08:00   | `0 8 * * *` |
| 20:00     | 12:00   | `0 12 * * *` |

部署后，Cloudflare 会自动执行这些定时任务。

---

## 🧪 本地测试

### 1. 本地开发模式

```bash
cd worker
wrangler dev
```

这会启动本地开发服务器：`http://localhost:8787`

### 2. 测试 API

```bash
# 获取新闻
curl http://localhost:8787/api/reports

# 手动触发爬取
curl -X POST http://localhost:8787/api/crawl
```

### 3. 模拟 Cron 触发

在浏览器访问：
```
http://localhost:8787/__scheduled?cron=0+16+*+*+*
```

---

## 🐛 故障排查

### 问题：KV Namespace 未找到

**症状**: 部署后访问 API 报错 `KV Namespace not found`

**解决方案**:
1. 确认已执行 `wrangler kv:namespace create`
2. 检查 `wrangler.toml` 中的 KV ID 是否正确
3. 重新部署 `wrangler deploy`

### 问题：Cron 未触发

**症状**: 定时任务没有执行

**解决方案**:
1. 检查 Cloudflare Dashboard > Workers > Triggers
2. 确认 Cron Triggers 已启用
3. 等待下一个触发时间（首次部署需要等待）

### 问题：爬取失败

**症状**: 没有新数据

**解决方案**:
1. 检查 Worker Logs：Dashboard > Workers > Logs
2. 确认 Google News RSS 可访问
3. 手动触发测试：`curl -X POST .../api/crawl`

---

## 📊 监控与日志

### 查看实时日志

```bash
wrangler tail
```

### Cloudflare Dashboard

访问：**Cloudflare Dashboard > Workers & Pages > garlic-news-crawler**

可查看：
- 请求统计
- CPU 使用
- 错误日志
- Cron 执行历史

---

## 🔒 安全建议

1. **限流保护**（可选）：如需限制 API 调用频率，可添加 Rate Limiting
2. **API Key**（可选）：如需私有 API，可添加简单的 token 验证
3. **CORS 限制**：生产环境建议限制 `Access-Control-Allow-Origin` 为你的域名

示例（修改 `src/index.js`）：
```javascript
'Access-Control-Allow-Origin': 'https://garlic-model.com',
```

---

## 📝 后续优化

1. **添加更多新闻源**：NewsAPI, Bing News API
2. **情感分析**：使用 AI 分析新闻情感倾向
3. **邮件通知**：重大新闻自动发送邮件
4. **数据分析**：统计热门话题和趋势

---

## 🆘 需要帮助？

- Cloudflare Workers 文档：https://developers.cloudflare.com/workers/
- Wrangler CLI 文档：https://developers.cloudflare.com/workers/wrangler/
- KV 存储文档：https://developers.cloudflare.com/kv/
