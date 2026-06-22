import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  type?: string
  image?: string
  schema?: Record<string, any>
  noindex?: boolean
}

export function SEO({
  title = 'Waltik Labs | Modern Digital Products & Solutions',
  description = 'Waltik Labs is a digital product agency specialising in web platforms, mobile apps, and AI-powered systems. We build scalable and beautiful software.',
  canonicalUrl = 'https://waltiklabs.com',
  type = 'website',
  image = 'https://waltiklabs.com/og-image.jpg',
  schema,
  noindex = false,
}: SEOProps) {
  // Use a base domain for canonical URLs if only path is provided, but we can assume canonicalUrl is passed fully
  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="Waltik Labs" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
