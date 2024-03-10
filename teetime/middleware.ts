import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/Users')) {
    return NextResponse.redirect(new URL('/Users/8', request.url))
  } else {
    return NextResponse.redirect(new URL('/home', request.url))
  }

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/Users/', '/Courses/:path*'],
}
/** @param matcher Paths that the middle ware will manage*/