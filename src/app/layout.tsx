import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WhoPlayedDrums | The Definitive Drummer Database',
  description: 'Discover the drummers behind your favorite music. Explore styles, influences, gear, and legendary performances.',
  keywords: ['drummers', 'drums', 'percussion', 'music', 'rock drummers', 'jazz drummers'],
  authors: [{ name: 'WhoPlayedDrums' }],
  openGraph: {
    title: 'WhoPlayedDrums',
    description: 'The Definitive Drummer Database',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-950 text-ink-100 antialiased">
        {children}
      </body>
    </html>
  )
}
