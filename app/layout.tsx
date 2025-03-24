import './globals.css'
import './prism.css'

import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '~/components/layout'
import { url } from '~/lib'
import { seo } from '~/lib/seo'

export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    template: '%s | Cali Castle',
    default: seo.title,
  },
  description: seo.description,
  keywords: 'Yinan,Yinan Zhao,赵一楠,开发者,创新',
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: seo.title,
      template: '%s | Yinan Zhao',
    },
    description: seo.description,
    siteName: 'Yinan Zhao',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://yinanzhao.com',
  },
  alternates: {
    canonical: url('/'),
    types: {
      'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }],
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`m-0 h-full p-0 antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          name="viewport"
        />
      </head>
      <body className="flex h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
