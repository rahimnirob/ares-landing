import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ARES - Weekly SEO Intelligence",
  description: "Automated weekly SEO strategy assistant that delivers tailored keyword & trend intelligence",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    // optional: can add other sizes or manifest if you have them
    // other: ["/favicon-32x32.png", "/favicon-16x16.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}
