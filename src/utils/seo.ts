export function generateFAQSchema(faqItems: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  }
}

export function generateArticleSchema(article: {
  headline: string
  description: string
  datePublished: string
  dateModified: string
  author?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.headline,
    'description': article.description,
    'datePublished': article.datePublished,
    'dateModified': article.dateModified,
    'author': {
      '@type': 'Organization',
      'name': article.author || 'Garlic Model Info'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Garlic Model Info',
      'logo': {
        '@type': 'ImageObject',
        'url': article.image || 'https://garlic-model.com/logo.png'
      }
    }
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  }
}

export function injectSchema(schema: object) {
  if (typeof window === 'undefined') return

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(schema)
  document.head.appendChild(script)
}

export function updateMetaTags(meta: {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}) {
  if (meta.title) {
    document.title = meta.title
    updateMetaTag('og:title', meta.title)
    updateMetaTag('twitter:title', meta.title)
  }

  if (meta.description) {
    updateMetaTag('description', meta.description)
    updateMetaTag('og:description', meta.description)
    updateMetaTag('twitter:description', meta.description)
  }

  if (meta.image) {
    updateMetaTag('og:image', meta.image)
    updateMetaTag('twitter:image', meta.image)
  }

  if (meta.url) {
    updateMetaTag('og:url', meta.url)
  }

  if (meta.type) {
    updateMetaTag('og:type', meta.type)
  }

  updateMetaTag('twitter:card', 'summary_large_image')
}

function updateMetaTag(property: string, content: string) {
  const isOg = property.startsWith('og:')
  const isTwitter = property.startsWith('twitter:')

  let selector: string
  if (isOg) {
    selector = `meta[property="${property}"]`
  } else if (isTwitter) {
    selector = `meta[name="${property}"]`
  } else {
    selector = `meta[name="${property}"]`
  }

  let element = document.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    if (isOg) {
      element.setAttribute('property', property)
    } else {
      element.setAttribute('name', property)
    }
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}
