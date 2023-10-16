// git push --set-upstream fiqtor.xyz master

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { METADATA } from '@/common/constant/metadata'
import ThemeProviderContext from '@/context/ThemeProviderContext'
import { Analytics } from '@vercel/analytics/react'
import Layout from '@/common/layouts/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  metadataBase: new URL('https://fiqtor.xyz'),
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: 'website',
  },
  icons: {
    icon: METADATA.icons.icon,
    shortcut: METADATA.icons.shortcut,
    apple: METADATA.icons.apple,
    other: {
      rel: METADATA.icons.other.rel,
      url: METADATA.icons.other.url,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderContext>
          {children}
        </ThemeProviderContext>
        <Analytics />
      </body>
    </html>
  )
}
