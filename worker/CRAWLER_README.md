# 🧄 Garlic Model News Crawler

自动爬取并展示关于 OpenAI Garlic Model 的最新新闻报道。

---

## 📋 系统架构

```
┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│  Google News    │──────▶│ Cloudflare       │──────▶│  Vue.js 前端    │
│  RSS Feed       │      │ Worker + KV      │      │  网站           │
└─────────────────┘      └──────────────────┘      └─────────────────┘
                              │                           │
                              │ Cron Triggers             │ API Calls
                              │ (每天5次)                  │
                              ▼                           ▼
                         自动爬取新闻              实时展示最新报道
```

### 核心功能

✅ **自动爬取**: 每天 00:00, 08:00, 12:00, 16:00, 20:00 (UTC+8) 自动爬取  
✅ **智能分类**: AI 自动识别 media/rumor/speculation  
✅ **去重过滤**: 避免重复新闻  
✅ **数据合并**: 动态数据与静态精选内容合并展示  
✅ **完全免费**: 使用 Google News RSS，无 API 费用  
✅ **无服务器**: 基于 Cloudflare Workers，零维护成本  

---

## 🚀 快速开始

### 前置要求

- Cloudflare 账号（免费）
- Node.js 18+
- npm 或 yarn

### 1. 部署 Cloudflare Worker

```bash
# 进入 worker 目录
cd worker

# 运行自动部署脚本
./deploy.sh
```

脚本会自动：
- 安装 Wrangler CLI
- 登录 Cloudflare
- 创建 KV Namespace
- 部署 Worker

首次运行会提示你创建 KV Namespace 并更新配置文件。

### 2. 配置前端环境变量

部署成功后，在项目根目录创建 `.env.local`：

```bash
cd ..  # 回到项目根目录
echo 'VITE_WORKER_API_URL=https://garlic-news-crawler.你的账号.workers.dev/api/reports' > .env.local
```

**重要**: 将 `你的账号` 替换为部署时显示的实际账号名。

### 3. 启动前端

```bash
npm run dev
```

访问 `http://localhost:5173`，即可看到动态新闻！

---

## 📁 项目结构

```
garlic-model/
├── src/                      # 前端源码
│   ├── views/
│   │   └── Reports.vue      # 新闻展示页面（已集成 API）
│   └── data/
│       └── reports.ts       # 静态精选新闻
├── worker/                   # Cloudflare Worker 爬虫
│   ├── src/
│   │   └── index.js        # Worker 主逻辑
│   ├── wrangler.toml       # Worker 配置
│   ├── deploy.sh           # 自动部署脚本
│   ├── README.md           # Worker 使用说明
│   └── INTEGRATION.md      # 详细集成指南
└── .env.local              # 环境变量（需手动创建）
```

---

## 🔧 API 端点

### 获取新闻列表

```bash
GET https://garlic-news-crawler.你的账号.workers.dev/api/reports
```

**响应示例**:

```json
{
  "success": true,
  "count": 15,
  "lastUpdate": "2025-12-08T04:00:00.000Z",
  "reports": [
    {
      "id": "r1a2b3c",
      "title": "OpenAI Garlic Model Shows Promise...",
      "source": "TechCrunch",
      "sourceUrl": "https://...",
      "date": "2025-12-08",
      "category": "media",
      "excerpt": "Latest tests show...",
      "tags": ["garlic", "benchmark"],
      "crawledAt": "2025-12-08T04:00:00.000Z"
    }
  ]
}
```

### 手动触发爬取

```bash
POST https://garlic-news-crawler.你的账号.workers.dev/api/crawl
```

---

## ⏱️ 定时任务

Worker 已配置 5 个定时任务（UTC+8 时区）：

| 时间 (UTC+8) | 说明 |
|-------------|------|
| 00:00       | 半夜更新 |
| 08:00       | 早晨更新 |
| 12:00       | 中午更新 |
| 16:00       | 下午更新 |
| 20:00       | 晚上更新 |

部署后自动生效，无需任何配置。

---

## 🎨 前端展示效果

### 加载状态
```
🔄 Loading latest news...
```

### 更新信息
```
🕐 Last updated: 5 mins ago
✅ 15 live updates
```

### 新闻卡片
- 分类标签（Media Reports / Rumor / Speculation）
- 来源和日期
- 文章摘要
- "Read More" 链接

所有动态新闻与 6 条静态精选新闻合并展示，按日期降序排列。

---

## 🐛 故障排查

### 前端看不到动态数据

1. **检查环境变量**:
   ```bash
   cat .env.local
   # 应该看到正确的 VITE_WORKER_API_URL
   ```

2. **检查浏览器控制台**:
   - 打开 F12 开发者工具
   - 查看 Console 是否有错误
   - 查看 Network 标签，检查 API 请求

3. **重启开发服务器**:
   ```bash
   # Ctrl+C 停止
   npm run dev  # 重新启动
   ```

### Worker API 返回空数据

首次部署后，KV 存储是空的，需要手动触发一次爬取：

```bash
curl -X POST https://garlic-news-crawler.你的账号.workers.dev/api/crawl
```

等待几秒后再查看：

```bash
curl https://garlic-news-crawler.你的账号.workers.dev/api/reports
```

### CORS 错误

Worker 已配置 CORS 允许所有来源。如果仍有问题：

1. 检查 Worker 是否成功部署
2. 使用 `https://` 而非 `http://`（某些浏览器限制）
3. 查看 Worker Logs：`wrangler tail`

---

## 📊 监控与管理

### 查看实时日志

```bash
cd worker
wrangler tail
```

### Cloudflare Dashboard

访问: **Cloudflare Dashboard → Workers & Pages → garlic-news-crawler**

可查看：
- 请求统计
- 错误日志
- CPU 使用
- Cron 执行历史

### KV 存储管理

```bash
# 查看所有 keys
wrangler kv:key list --binding NEWS_STORAGE

# 查看 reports 数据
wrangler kv:key get "reports" --binding NEWS_STORAGE

# 清空数据（慎用）
wrangler kv:key delete "reports" --binding NEWS_STORAGE
```

---

## 🔄 更新与维护

### 更新 Worker 代码

修改 `worker/src/index.js` 后：

```bash
cd worker
wrangler deploy
```

### 修改爬取关键词

编辑 `worker/src/index.js`:

```javascript
const SEARCH_KEYWORDS = [
  'garlic model openai',
  'garlic LLM',
  'openai garlic',
  // 添加新关键词
  'garlic gpt-5',
  'openai garlic release'
];
```

### 修改定时任务

编辑 `worker/wrangler.toml`:

```toml
[triggers]
crons = [
  "0 0 * * *",   # 每天 00:00 UTC
  "0 12 * * *"   # 每天 12:00 UTC
]
```

---

## 🚀 生产环境部署

### Cloudflare Pages 配置

如果前端部署在 Cloudflare Pages：

1. **Dashboard → Pages → 你的项目 → Settings → Environment Variables**
2. 添加变量:
   - Key: `VITE_WORKER_API_URL`
   - Value: `https://garlic-news-crawler.你的账号.workers.dev/api/reports`
3. 重新部署

### 自定义域名（可选）

为 Worker 添加自定义域名：

1. **Dashboard → Workers → garlic-news-crawler → Triggers → Add Custom Domain**
2. 添加子域名: `api.garlic-model.com`
3. 更新环境变量为新域名

---

## 💡 优化建议

### 1. 添加更多新闻源

除了 Google News RSS，还可以集成：
- NewsAPI.org
- Bing News API
- Reddit API
- HackerNews API

### 2. 智能过滤

添加内容质量过滤：
- 过滤垃圾新闻
- 优先展示权威媒体
- 检测重复内容

### 3. 邮件通知

重要新闻发布时发送邮件通知（使用 Cloudflare Email Workers）。

### 4. 数据分析

统计：
- 热门话题
- 新闻来源分布
- 更新频率趋势

---

## 📚 相关文档

- [Worker 部署指南](./worker/README.md) - 详细的 Worker 部署说明
- [集成指南](./worker/INTEGRATION.md) - 前后端集成步骤
- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)

---

## 📝 许可证

MIT License

---

## 🆘 需要帮助？

遇到问题可以：
1. 查看 [故障排查](#-故障排查) 部分
2. 检查 [集成指南](./worker/INTEGRATION.md)
3. 查看 Worker Logs: `wrangler tail`
4. 提交 GitHub Issue

---

**祝你使用愉快！🎉**
