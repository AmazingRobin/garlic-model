# 🚀 快速开始指南

## 1. 检查项目状态

项目已完整构建并ready to deploy！

```bash
# 当前目录
cd /Applications/MxSrvs/www/seo/garlic-model

# 查看项目结构
ls -la
```

## 2. 构建验证

✅ 项目已成功构建！`dist/` 目录包含所有生产文件。

查看构建输出：
```bash
ls -la dist/
```

应该包含：
- `index.html` - 主页面
- `assets/` - JS和CSS文件
- `sitemap.xml` - SEO地图（✅ 已生成，包含所有多语言路由）
- `robots.txt` - 搜索引擎指引（✅ 已配置）
- `_headers` - Cloudflare Pages头部配置（✅ 已配置）
- `_redirects` - SPA路由重定向（✅ 已配置）

## 3. 下一步行动

### 选项A：立即部署到Cloudflare Pages

#### 方式1：Git部署（推荐）

```bash
# 1. 初始化Git仓库（如需要）
git init

# 2. 添加.gitignore（已有）
# node_modules/ 和 dist/ 已被忽略

# 3. 提交所有文件
git add .
git commit -m "Initial commit: Garlic Model Info website"

# 4. 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/garlic-model.git

# 5. 推送到GitHub
git push -u origin main
```

然后：
1. 访问 [Cloudflare Pages](https://dash.cloudflare.com/)
2. 创建新项目，连接到你的GitHub仓库
3. 构建设置：
   - **构建命令**: `npm run build`
   - **输出目录**: `dist`
   - **Node版本**: 18+

#### 方式2：直接上传

```bash
# 安装Wrangler CLI
npm install -g wrangler

# 登录Cloudflare
wrangler login

# 部署（dist/目录已ready）
wrangler pages deploy dist --project-name=garlic-model
```

### 选项B：完成剩余工作后再部署

#### 1. 配置Google Analytics（可选但推荐）

编辑 `src/main.ts`：
```typescript
const GA_ID = 'G-XXXXXXXXXX' // 替换为你的GA4 ID
```

然后重新构建：
```bash
npm run build
```

#### 2. 完成多语言翻译（重要）

参考 `TRANSLATION_TODO.md`，需要翻译9种语言：

```bash
# 创建翻译文件（基于 src/locales/en.json）
# 需要创建：
src/locales/zh.json   # 中文
src/locales/ja.json   # 日语
src/locales/ru.json   # 俄语
src/locales/ko.json   # 韩语
src/locales/fil.json  # 菲律宾语
src/locales/pt.json   # 葡萄牙语
src/locales/de.json   # 德语
src/locales/fr.json   # 法语
src/locales/es.json   # 西班牙语
```

翻译完成后重新构建：
```bash
npm run build
```

#### 3. 自定义内容（可选）

你可以编辑以下文件来更新内容：

- **新闻报道**: `src/data/reports.ts`
- **功能特性**: `src/data/features.ts`
- **模型对比**: `src/data/comparison.ts`
- **FAQ**: `src/data/faq.ts`
- **时间线**: `src/data/timeline.ts`

编辑后重新构建：
```bash
npm run build
```

## 4. 本地预览（可选）

如果要在本地预览构建结果：

```bash
npm run preview
```

**注意**: 如果遇到端口/网络问题，可以直接查看 `dist/index.html` 或部署到Cloudflare Pages后在线预览。

## 5. 域名配置

部署到Cloudflare Pages后：

1. 在Cloudflare Pages项目设置中
2. 进入"Custom domains"
3. 添加你的域名 `garlic-model.com`
4. 按照指示配置DNS

详见：`DEPLOYMENT.md`

## 6. 验证部署

部署成功后，访问你的网站并检查：

- [ ] 主页正常显示
- [ ] 所有导航链接工作正常
- [ ] 语言切换功能正常（英文可用）
- [ ] 访问 `/sitemap.xml` 查看sitemap
- [ ] 访问 `/robots.txt` 查看robots配置
- [ ] 移动端显示正常
- [ ] 社交媒体分享预览正常（OpenGraph）

## 📚 参考文档

- **项目总览**: `PROJECT_SUMMARY.md`
- **详细README**: `README.md`
- **部署详情**: `DEPLOYMENT.md`
- **翻译任务**: `TRANSLATION_TODO.md`

## ⚡ 推荐工作流

### 最小启动（立即部署）
```bash
# 项目已ready，直接部署
git init
git add .
git commit -m "Initial commit"
git push
# 在Cloudflare Pages连接仓库并部署
```

### 完整启动（翻译后部署）
```bash
# 1. 完成翻译工作
# ... 创建并翻译所有9个语言文件

# 2. （可选）配置GA
# 编辑 src/main.ts

# 3. 重新构建
npm run build

# 4. 提交并部署
git add .
git commit -m "Add translations"
git push
```

## 🎯 快速决策

**如果你想立即上线展示网站**:
→ 选择"最小启动"，英文版已完整

**如果你想提供完整的多语言体验**:
→ 选择"完整启动"，先完成翻译

**如果你想在本地开发/测试**:
→ 注意：当前dev server有网络配置问题
   建议直接构建后部署或使用 `npm run preview`

---

**当前状态**: ✅ 生产构建完成，dist/目录ready for deployment

**建议**: 先部署基础版本（英文），然后持续迭代添加翻译和内容
