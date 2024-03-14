import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/Users')) {
    return NextResponse.redirect(new URL('/Users/8', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/Courses')) {
    return NextResponse.redirect(new URL('/CourseSearch', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/Profile')) {
    //TODO if(request.cookies.get())

    return NextResponse.redirect(new URL('/Register', request.url))
  }

  return NextResponse.redirect(new URL('/home', request.url))


}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/Users/', '/Courses/', '/Profile/:path*'],
}
/** @param matcher Paths that the middle ware will manage*/