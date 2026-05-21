import type { Metadata, Viewport } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather'
})

export const metadata: Metadata = {
  title: 'PFAS: The Forever Chemicals',
  description: 'An educational resource exploring PFAS contamination, its chemical properties, environmental pathways, and global solutions. Learn about the forever chemicals affecting our water, soil, and health.',
  keywords: ['PFAS', 'forever chemicals', 'chemical waste', 'environmental contamination', 'water pollution', 'soil contamination'],
  authors: [{ name: 'Environmental Chemistry Education' }],
  openGraph: {
    title: 'PFAS: The Forever Chemicals',
    description: 'Understanding chemical waste migration and its impact on our environment',
    type: 'website',
  }
}

export const viewport: Viewport = {
  themeColor: '#1a5f5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
