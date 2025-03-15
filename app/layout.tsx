import './globals.css' // Import global styles at the very top
import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "FreshBay Cleaning Co. | Professional Cleaning Services in Towson, Maryland",
  description:
    "FreshBay Cleaning Co. provides top-quality cleaning services for residential and commercial properties in Towson, Maryland. From move-in/move-out cleaning to recurring services, we keep your space spotless.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}