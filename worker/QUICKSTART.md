# 🚀 Cloudflare Worker 爬虫快速部署指南

## 📋 准备工作

- ✅ 已有 Cloudflare 账号
- ✅ 网站已部署在 Cloudflare Pages
- ✅ Node.js 18+ 已安装

---

## ⚡ 3 步快速部署

### 第 1 步：部署 Worker

```bash
cd worker
./deploy.sh
```

**首次运行**会提示创建 KV Namespace：

```
执行以下命令：
  wrangler kv:namespace create NEWS_STORAGE

✨ Success!
Add the following to your wrangler.toml:
{ binding = "NEWS_STORAGE", id = "abc123...xyz789" }
```

**复制输出的 ID**，编辑 `worker/wrangler.toml`：

```toml
kv_namespaces = [
  { binding = "NEWS_STORAGE", id = "abc123...xyz789" }
]
```

**再次运行部署脚本**：

```bash
./deploy.sh
```

成功后会显示：

```
✨ Success! Deployed garlic-news-crawler
   https://garlic-news-crawler.你的账号.workers.dev
```

**记下这个 URL！**

---

### 第 2 步：手动触发首次爬取

部署后 KV 是空的，需要手动触发一次：

```bash
curl -X POST https://garlic-news-crawler.你的账号.workers.dev/api/crawl
```

等待几秒后验证数据：

```bash
curl https://garlic-news-crawler.你的账号.workers.dev/api/reports
```

应该看到 JSON 格式的新闻数据。

---

### 第 3 步：配置前端环境变量

回到项目根目录：

```bash
cd ..
```

创建 `.env.local` 文件：

```bash
echo 'VITE_WORKER_API_URL=https://garlic-news-crawler.你的账号.workers.dev/api/reports' > .env.local
```

**重要**：将 `你的账号` 替换为实际的 Cloudflare Workers 子域名！

重启开发服务器：

```bash
# Ctrl+C 停止当前服务器
npm run dev
```

---

## ✅ 验证部署

访问 `http://localhost:5173`，打开浏览器控制台（F12），应该看到：

```
✅ Loaded 10 dynamic reports from Worker API
```

在 "Media Reports & Discussions" 部分，你会看到：

1. **加载状态**（首次加载）：
   ```
   🔄 Loading latest news...
   ```

2. **更新时间**：
   ```
   🕐 Last updated: 2 mins ago
   ```

3. **动态数据统计**：
   ```
   ✅ 10 live updates
   ```

如果看到这些，说明集成成功！🎉

---

## 🌐 生产环境配置

### Cloudflare Pages 环境变量

1. 登录 Cloudflare Dashboard
2. 进入 **Workers & Pages** > **你的 Pages 项目** > **Settings**
3. 点击 **Environment variables**
4. 添加变量：
   - **Variable name**: `VITE_WORKER_API_URL`
   - **Value**: `https://garlic-news-crawler.你的账号.workers.dev/api/reports`
   - **Environment**: Production (和 Preview，如果需要)
5. 点击 **Save**
6. 重新部署网站（或等待下次自动部署）

完成后，生产环境也能显示动态新闻了！

---

## 🔧 常见问题

### Q: 前端看不到动态数据？

**A**: 检查以下几点：

1. `.env.local` 文件是否创建
2. Worker URL 是否正确
3. 是否重启了开发服务器
4. 浏览器控制台是否有错误

### Q: Worker API 返回空数据？

**A**: 首次部署后需要手动触发爬取：

```bash
curl -X POST https://garlic-news-crawler.你的账号.workers.dev/api/crawl
```

### Q: 如何查看 Worker 日志？

**A**: 

```bash
cd worker
wrangler tail
```

实时查看 Worker 执行日志。

### Q: 定时任务何时开始工作？

**A**: 部署后，Cloudflare 会在以下时间自动执行爬取（UTC+8）：

- 00:00（半夜）
- 08:00（早上）
- 12:00（中午）
- 16:00（下午）
- 20:00（晚上）

首次执行需要等待下一个触发时间。

---

## 📚 进一步阅读

- [Worker 完整文档](./CRAWLER_README.md) - 详细功能说明
- [集成指南](./INTEGRATION.md) - 高级配置和故障排查
- [Worker 部署说明](./README.md) - Worker 基础信息

---

## 🎉 完成！

现在你的网站已经具备：

✅ 每天 5 次自动爬取最新新闻  
✅ 智能分类和去重  
✅ 动态数据与静态精选内容合并展示  
✅ 完全免费无 API 成本  
✅ 零维护无服务器架构  

如有问题，查看详细文档或检查 Worker Logs。

**祝你使用愉快！** 🚀
