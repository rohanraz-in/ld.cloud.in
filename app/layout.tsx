import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Hind_Siliguri, Noto_Serif_Bengali } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const hind = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['400', '500', '600'],
  variable: '--font-hind',
})

const notoSerif = Noto_Serif_Bengali({
  subsets: ['bengali', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-noto-serif',
})

export const metadata: Metadata = {
  title: {
    default: 'কলমকথা — মনের কথা, কলমের ভাষায়',
    template: '%s | কলমকথা',
  },
  description:
    'কলমকথা একটি বাংলা ব্লগ — জীবন, ভ্রমণ, বই, শহর আর ছোট ছোট অনুভূতির গল্প।',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f4ec' },
    { media: '(prefers-color-scheme: dark)', color: '#211c18' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn" className={`${hind.variable} ${notoSerif.variable}`}>
      <body className="antialiased min-h-dvh flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
