# Worker 与前端集成指南

## 🎯 集成概述

此文档说明如何将 Cloudflare Worker 爬虫与前端 Vue.js 应用集成，实现动态新闻展示。

---

## 📝 集成流程

### 1️⃣ 部署 Worker

```bash
# 进入 worker 目录
cd worker

# 安装 Wrangler（如果还没安装）
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 创建 KV Namespace
wrangler kv:namespace create "NEWS_STORAGE"

# 记录输出的 KV ID，示例：
# { binding = "NEWS_STORAGE", id = "abc123def456..." }
```

### 2️⃣ 更新 wrangler.toml

将获得的 KV Namespace ID 填入 `worker/wrangler.toml`：

```toml
kv_namespaces = [
  { binding = "NEWS_STORAGE", id = "你的实际KV_ID" }
]
```

### 3️⃣ 部署到 Cloudflare

```bash
# 在 worker 目录下执行
wrangler deploy
```

成功后你会看到：
```
✨ Success! Deployed garlic-news-crawler
   https://garlic-news-crawler.你的账号.workers.dev
```

**记下这个 URL！** 这是你的 Worker API 地址。

### 4️⃣ 配置前端环境变量

返回项目根目录，创建 `.env.local` 文件：

```bash
cd ..  # 回到项目根目录
```

创建 `.env.local` 文件（或直接编辑）：

```env
VITE_WORKER_API_URL=https://garlic-news-crawler.你的账号.workers.dev/api/reports
```

**重要**：将 `你的账号` 替换为你实际的 Cloudflare Workers 子域名。

### 5️⃣ 测试 Worker API

```bash
# 测试获取新闻
curl https://garlic-news-crawler.你的账号.workers.dev/api/reports

# 手动触发爬取（首次部署后建议执行一次）
curl -X POST https://garlic-news-crawler.你的账号.workers.dev/api/crawl
```

首次部署时，KV 是空的，需要手动触发一次爬取。

### 6️⃣ 重启开发服务器

```bash
# 停止当前的 dev server（Ctrl+C）
# 重新启动以加载环境变量
npm run dev
```

现在访问 `http://localhost:5173`，前端会自动从 Worker API 获取新闻数据！

---

## 🔍 验证集成

### 检查浏览器控制台

打开浏览器开发者工具（F12），在 Console 中应该看到：

```
✅ Loaded 10 dynamic reports from Worker API
```

如果看到警告：
```
⚠️ Failed to fetch dynamic reports, using static data only
```

说明 API 调用失败，请检查：
1. `.env.local` 中的 URL 是否正确
2. Worker 是否成功部署
3. CORS 配置是否正确

### 检查页面显示

在 "Media Reports & Discussions" 部分，你应该看到：

1. **加载指示器**（首次加载时）：
   ```
   🔄 Loading latest news...
   ```

2. **更新时间**：
   ```
   🕐 Last updated: 5 mins ago
   ```

3. **动态数据统计**：
   ```
   ✅ 15 live updates
   ```

---

## 🛠️ 故障排查

### 问题 1: 环境变量未生效

**症状**: 控制台显示 API URL 错误或为默认占位符

**解决方案**:
1. 确认 `.env.local` 文件在项目根目录
2. 确认文件名正确（不是 `.env.local.txt`）
3. 重启开发服务器（环境变量只在启动时加载）
4. 检查 `VITE_` 前缀（Vite 要求）

### 问题 2: CORS 错误

**症状**: 浏览器控制台显示 CORS 错误

**解决方案**:
Worker 已默认配置 CORS，如果仍有问题，检查：
1. Worker 代码中的 CORS headers 是否正确
2. 是否使用了 HTTPS（某些浏览器要求）

### 问题 3: 没有数据返回

**症状**: API 返回空数组 `{ reports: [] }`

**解决方案**:
1. 手动触发一次爬取：
   ```bash
   curl -X POST https://你的worker.workers.dev/api/crawl
   ```
2. 等待几秒后再次获取数据
3. 检查 Worker Logs（Dashboard > Workers > Logs）

### 问题 4: 定时任务未执行

**症状**: 数据长时间不更新

**解决方案**:
1. 检查 Cloudflare Dashboard > Workers > Triggers
2. 确认 Cron Triggers 已启用
3. 首次部署需等待第一个触发时间（最多等待8小时）
4. 手动触发测试

---

## 📊 生产环境部署

### Cloudflare Pages 环境变量

如果你使用 Cloudflare Pages 部署前端：

1. 进入 Cloudflare Dashboard
2. 选择你的 Pages 项目
3. 进入 **Settings > Environment Variables**
4. 添加变量：
   - Key: `VITE_WORKER_API_URL`
   - Value: `https://garlic-news-crawler.你的账号.workers.dev/api/reports`
5. 重新部署

### 自定义域名（可选）

如果你想使用自定义域名访问 Worker API：

1. Cloudflare Dashboard > Workers > garlic-news-crawler
2. Triggers > Custom Domains
3. 添加子域名，例如：`api.garlic-model.com`
4. 更新环境变量：
   ```env
   VITE_WORKER_API_URL=https://api.garlic-model.com/api/reports
   ```

---

## 🎨 自定义配置

### 修改爬取关键词

编辑 `worker/src/index.js`：

```javascript
const SEARCH_KEYWORDS = [
  'garlic model openai',
  'garlic LLM',
  'openai garlic',
  'garlic AI model',
  // 添加你自己的关键词
  'openai garlic release',
  'garlic gpt-5'
];
```

### 修改定时任务时间

编辑 `worker/wrangler.toml`：

```toml
[triggers]
crons = [
  "0 0 * * *",   # 每天 00:00 UTC
  "0 6 * * *",   # 每天 06:00 UTC
  "0 12 * * *",  # 每天 12:00 UTC
  "0 18 * * *"   # 每天 18:00 UTC
]
```

修改后重新部署：
```bash
cd worker
wrangler deploy
```

### 添加更多新闻源

Worker 当前使用 Google News RSS。你可以添加其他源：

1. NewsAPI（需要 API Key）
2. Bing News API
3. Reddit RSS Feed
4. HackerNews API

参考 `worker/src/index.js` 中的 `fetchGoogleNews` 函数，添加类似的函数。

---

## 📈 监控与维护

### 查看实时日志

```bash
cd worker
wrangler tail
```

### 查看统计数据

Cloudflare Dashboard > Workers > garlic-news-crawler > Metrics

可查看：
- 总请求数
- 错误率
- CPU 使用时间
- Cron 执行历史

### KV 存储管理

查看 KV 中的数据：

```bash
# 列出所有 keys
wrangler kv:key list --binding NEWS_STORAGE

# 查看 reports 数据
wrangler kv:key get "reports" --binding NEWS_STORAGE
```

---

## ✅ 集成完成检查清单

- [ ] Worker 成功部署
- [ ] KV Namespace 已创建并配置
- [ ] 环境变量 `.env.local` 已创建
- [ ] 手动触发过一次爬取
- [ ] 前端能显示动态新闻
- [ ] 浏览器控制台无错误
- [ ] 定时任务已配置
- [ ] 生产环境环境变量已设置

全部完成后，你的爬虫系统就成功运行了！🎉

---

## 🆘 需要帮助？

如遇到问题，请检查：
1. Worker Logs（实时日志）
2. 浏览器控制台（前端错误）
3. Network 标签（API 请求详情）

或参考：
- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [Vite 环境变量文档](https://vitejs.dev/guide/env-and-mode.html)
