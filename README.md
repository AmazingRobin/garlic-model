# Garlic Model Info - OpenAI Garlic Model Information Hub

An independent, third-party information website aggregating publicly available reports, media coverage, and community discussions about OpenAI's rumored next-generation AI model codenamed "Garlic".

🌐 **Live Site**: [garlic-model.com](https://garlic-model.com)

## ⚠️ Important Disclaimer

This is an **unofficial** website and is **NOT affiliated** with OpenAI in any way. All information presented is based on publicly available media reports, online discussions, and community speculation. None of the information about the "Garlic" model has been officially confirmed by OpenAI.

## 🎯 Features

- **📰 Media Reports Aggregation**: Comprehensive collection of news and reports from various sources
- **🔬 Technical Analysis**: In-depth analysis based on available information  
- **📊 Model Comparison**: Compare Garlic with other frontier AI models
- **❓ Comprehensive FAQ**: Common questions about the Garlic model
- **🕐 Timeline**: Chronological tracker of media coverage
- **🌍 Multi-language Support**: 10 languages (English, Chinese, Japanese, Russian, Korean, Filipino, Portuguese, German, French, Spanish)
- **⚡ SEO Optimized**: Full Schema.org structured data, meta tags, sitemap
- **📱 Responsive Design**: Beautiful UI that works on all devices

## 🛠️ Tech Stack

- **Framework**: Vite + Vue 3.5 + TypeScript
- **Styling**: TailwindCSS v3
- **Routing**: Vue Router 4
- **i18n**: Vue I18n 9
- **Markdown**: markdown-it
- **SEO**: Auto-generated sitemap, Schema.org, OpenGraph

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Output will be in the `dist/` directory.

## 📁 Project Structure

```
garlic-model/
├── public/              # Static assets
│   ├── robots.txt      # SEO
│   ├── _headers        # Cloudflare Pages headers
│   └── _redirects      # SPA routing
├── src/
│   ├── components/     # Reusable components
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── Timeline.vue
│   │   └── ComparisonTable.vue
│   ├── views/          # Page components
│   │   ├── Home.vue
│   │   ├── Reports.vue
│   │   ├── TechAnalysis.vue
│   │   ├── Comparison.vue
│   │   ├── FAQ.vue
│   │   └── About.vue
│   ├── data/           # Static data
│   │   ├── reports.ts
│   │   ├── features.ts
│   │   ├── comparison.ts
│   │   ├── faq.ts
│   │   ├── timeline.ts
│   │   └── locales.ts
│   ├── locales/        # i18n translations
│   │   ├── en.json
│   │   └── index.ts
│   ├── router/         # Vue Router
│   ├── types/          # TypeScript types
│   ├── utils/          # Utilities
│   │   └── seo.ts
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── dist/               # Build output
└── README.md
```

## 🌍 Adding New Languages

Currently only English is implemented. To add other languages:

1. Create translation file in `src/locales/{lang}.json` based on `en.json`
2. Add all translated strings
3. The language will be automatically available in the language selector

Supported languages: `en`, `zh`, `ja`, `ru`, `ko`, `fil`, `pt`, `de`, `fr`, `es`

## 📝 Updating Content

All content is stored as TypeScript objects in `src/data/`:

- **Reports**: Edit `src/data/reports.ts`
- **Features**: Edit `src/data/features.ts`  
- **Comparison**: Edit `src/data/comparison.ts`
- **FAQ**: Edit `src/data/faq.ts`
- **Timeline**: Edit `src/data/timeline.ts`

## 🚢 Deployment to Cloudflare Pages

### Via Git Integration (Recommended)

1. Push code to GitHub/GitLab
2. Connect repository to Cloudflare Pages
3. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 or later

### Via Direct Upload

```bash
# Build the project
npm run build

# Upload dist/ directory to Cloudflare Pages
```

### Environment Variables

Optional: Add Google Analytics ID

- **GA_ID**: Your Google Analytics 4 measurement ID (edit in `src/main.ts`)

## 📊 SEO Features

- ✅ Automatic sitemap.xml generation
- ✅ robots.txt configuration
- ✅ Schema.org structured data (Article, FAQPage, Breadcrumb)
- ✅ OpenGraph tags for social sharing
- ✅ Twitter Card support
- ✅ Dynamic meta tags per page
- ✅ Canonical URLs
- ✅ Semantic HTML structure

## 🎨 Design System

The site uses a dark theme with:
- **Primary Colors**: Blue-cyan gradient (`#0ea5e9` to cyan)
- **Dark Background**: Deep dark (`#020617`)
- **Typography**: Inter (body) + Space Grotesk (headings)
- **Animations**: Smooth micro-interactions

## 📄 License

This project is for informational purposes only. Content is aggregated from public sources.

## 🔗 Links

- OpenAI Official: [openai.com](https://openai.com)
- Project Repository: [GitHub](https://github.com/yourusername/garlic-model)

---

**Remember**: This is an unofficial information site. Always verify AI model information through official channels.
