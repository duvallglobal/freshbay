import './globals.css' // Import global styles at the very top
import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "FreshBay Cleaning Co. | Professional Cleaning Services in Towson, Maryland",
  description:
    "FreshBay Cleaning Co. provides top-quality cleaning services for residential and commercial properties in Towson, Maryland. From move-in/move-out cleaning to recurring services, we keep your space spotless.",
  generator: "v0.dev",
  viewport: {
    width: "device-width",
    initialScale: 1
  },
  robots: "index, follow",
  keywords: "cleaning services, Towson, Maryland, residential cleaning, commercial cleaning, move-in cleaning, move-out cleaning, professional cleaning",
  openGraph: {
    title: "FreshBay Cleaning Co. | Professional Cleaning Services",
    description: "Top-quality cleaning services for residential and commercial properties in Towson, Maryland",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreshBay Cleaning Co.",
    description: "Professional Cleaning Services in Towson, Maryland",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}