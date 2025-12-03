# Cloudflare Pages 部署指南

## 方式一：Git集成部署（推荐）

### 1. 准备Git仓库

```bash
# 初始化git仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Garlic Model Info website"

# 添加远程仓库（GitHub/GitLab）
git remote add origin https://github.com/your-username/garlic-model.git

# 推送到远程
git push -u origin main
```

### 2. 连接到 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Pages** 页面
3. 点击 **创建项目 (Create a project)**
4. 选择 **连接到 Git (Connect to Git)**
5. 选择您的 GitHub/GitLab 仓库
6. 配置构建设置：
   - **项目名称**: `garlic-model` (或自定义)
   - **生产分支**: `main`
   - **构建命令**: `npm run build`
   - **构建输出目录**: `dist`
   - **Node版本**: 18 或更高

7. 点击 **保存并部署 (Save and Deploy)**

### 3. 自定义域名（可选）

1. 在 Cloudflare Pages 项目设置中
2. 进入 **自定义域 (Custom domains)**
3. 添加域名 `garlic-model.com`
4. 按照指示配置 DNS 记录

## 方式二：直接上传部署

### 1. 构建项目

```bash
npm run build
```

### 2. 使用 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
wrangler pages deploy dist --project-name=garlic-model
```

## 环境变量配置

### Google Analytics

在 `src/main.ts` 中修改：

```typescript
const GA_ID = 'G-XXXXXXXXXX' // 替换为您的 GA4 跟踪 ID
```

重新构建和部署。

## 域名配置

### DNS 设置（使用 garlic-model.com）

在您的域名注册商或 Cloudflare DNS 中添加：

```
类型: CNAME
名称: @
内容: garlic-model.pages.dev
代理状态: 已代理（推荐）
```

## 构建优化建议

### 1. 添加 _headers 文件（已包含）

位置：`public/_headers`

功能：
- 安全头部配置
- 缓存策略
- 性能优化

### 2. 添加 _redirects 文件（已包含）

位置：`public/_redirects`

功能：
- SPA路由支持
- 所有路径fallback到index.html

### 3. robots.txt（已包含）

位置：`public/robots.txt`

功能：
- SEO优化
- 搜索引擎爬取指示

## 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 所有页面路由正常工作
- [ ] SEO meta标签正确显示
- [ ] sitemap.xml 可以访问 (yoursite.com/sitemap.xml)
- [ ] robots.txt 可以访问 (yoursite.com/robots.txt)
- [ ] 多语言切换功能正常
- [ ] Google Analytics 正常tracking（如已配置）
- [ ] 所有外部链接正常工作
- [ ] OpenGraph预览正常（在社交媒体分享测试）
- [ ] 移动端responsive显示正常

## 性能优化

Cloudflare Pages 自动提供：
- ✅ 全球CDN加速
- ✅ 自动HTTPS
- ✅ 自动压缩（Brotli/Gzip）
- ✅ HTTP/2 支持
- ✅ 无限带宽

## 更新网站内容

### 方式一：通过Git（推荐）

```bash
# 修改内容
# 编辑 src/data/ 下的文件

# 提交更改
git add .
git commit -m "Update content"
git push

# Cloudflare会自动重新构建和部署
```

### 方式二：手动重新部署

```bash
# 构建
npm run build

# 重新部署
wrangler pages deploy dist --project-name=garlic-model
```

## 监控和分析

### Cloudflare Analytics

1. 在 Cloudflare Pages 项目中
2. 查看 **Analytics** 标签
3. 可以看到：
   - 访问量
   - 带宽使用
   - 请求数
   - 地理分布

### Google Analytics（如已配置）

可在 Google Analytics Dashboard 查看详细分析。

## 故障排除

### 构建失败

检查：
- Node版本是否 >= 18
- 依赖是否正确安装
- 构建命令是否正确

### 路由404错误

检查：
- `_redirects` 文件是否存在
- 内容是否正确：`/*    /index.html   200`

### SEO不工作

检查：
- meta标签是否正确
- robots.txt是否允许爬取
- sitemap.xml是否生成

## 相关链接

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
- [Vue.js 部署文档](https://vuejs.org/guide/best-practices/production-deployment.html)
