import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web Development Services | Professional Web Solutions',
  description: 'Premier web development services for modern businesses. Custom websites, web applications, and digital solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
