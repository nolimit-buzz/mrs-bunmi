import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bunmi George - Life Coach & Personal Development',
  description: 'Discover your true potential and live your best life with Bunmi George, a professional life coach dedicated to helping you achieve your goals and dreams.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Mukta:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=Figtree:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Outfit',Helvetica] antialiased">
        {children}
      </body>
    </html>
  )
}