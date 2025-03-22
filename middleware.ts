import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Add caching headers for static assets
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|gif|png|ico|svg|css|js)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  // Add caching for pages
  if (request.nextUrl.pathname.match(/^\/(?!api).*$/)) {
    response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
  }

  return response
}
