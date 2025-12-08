#!/bin/bash

##############################################
# Cloudflare Worker 快速部署脚本
# 用于自动化部署 Garlic News Crawler
##############################################

set -e  # 遇到错误立即退出

echo "🚀 开始部署 Garlic News Crawler Worker..."
echo ""

# 检查是否在 worker 目录
if [ ! -f "wrangler.toml" ]; then
    echo "❌ 错误: 请在 worker 目录下运行此脚本"
    echo "   cd worker && ./deploy.sh"
    exit 1
fi

# 检查 wrangler 是否安装
if ! command -v wrangler &> /dev/null; then
    echo "📦 Wrangler 未安装，正在安装..."
    npm install -g wrangler
    echo "✅ Wrangler 安装完成"
else
    echo "✅ Wrangler 已安装"
fi

echo ""

# 检查是否已登录
echo "🔐 检查 Cloudflare 登录状态..."
if ! wrangler whoami &> /dev/null; then
    echo "需要登录到 Cloudflare 账号"
    wrangler login
    echo "✅ 登录成功"
else
    echo "✅ 已登录"
fi

echo ""

# 检查 KV Namespace 是否配置
if grep -q "YOUR_KV_NAMESPACE_ID" wrangler.toml; then
    echo "📦 创建 KV Namespace..."
    echo ""
    echo "执行以下命令："
    echo "  wrangler kv namespace create NEWS_STORAGE"
    echo ""
    
    wrangler kv namespace create "NEWS_STORAGE"
    
    echo ""
    echo "⚠️  请将上面输出的 KV ID 复制到 wrangler.toml 文件中"
    echo "   找到这一行："
    echo "   { binding = \"NEWS_STORAGE\", id = \"YOUR_KV_NAMESPACE_ID\", preview_id = \"YOUR_PREVIEW_KV_ID\" }"
    echo ""
    echo "   替换为实际的 ID"
    echo ""
    echo "   完成后请重新运行此脚本: ./deploy.sh"
    exit 0
fi

echo "✅ KV Namespace 已配置"
echo ""

# 部署 Worker
echo "🚀 部署 Worker 到 Cloudflare..."
wrangler deploy

echo ""
echo "✅ 部署完成！"
echo ""

# 获取 Worker URL
WORKER_URL=$(wrangler deployments list --json 2>/dev/null | grep -o 'https://[^"]*' | head -1 || echo "")

if [ -z "$WORKER_URL" ]; then
    echo "📝 Worker 已部署，URL 格式通常为："
    echo "   https://garlic-news-crawler.你的账号.workers.dev"
else
    echo "📝 Worker URL: $WORKER_URL"
fi

echo ""
echo "🎯 下一步操作："
echo ""
echo "1. 手动触发首次爬取（获取初始数据）："
echo "   curl -X POST https://garlic-news-crawler.你的账号.workers.dev/api/crawl"
echo ""
echo "2. 测试 API："
echo "   curl https://garlic-news-crawler.你的账号.workers.dev/api/reports"
echo ""
echo "3. 在项目根目录创建 .env.local 文件："
echo "   cd .."
echo "   echo 'VITE_WORKER_API_URL=https://garlic-news-crawler.你的账号.workers.dev/api/reports' > .env.local"
echo ""
echo "4. 重启前端开发服务器："
echo "   npm run dev"
echo ""
echo "🎉 完成！查看 INTEGRATION.md 了解更多详情"
