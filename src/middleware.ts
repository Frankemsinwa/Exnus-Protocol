
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAuthenticated = request.cookies.has('admin-auth')

  // Redirect to dashboard if authenticated user tries to access login page
  if (isAuthenticated && pathname.startsWith('/admin/login')) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  // Redirect to login if unauthenticated user tries to access any other admin page
  if (!isAuthenticated && pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Match all admin routes except for static assets
  matcher: ['/admin/:path*'],
}
