import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define access rules
const publicRoutes = ['/', '/signin', '/signup', '/forgot-password'];
const protectedRoutes = ['/home', '/home/*']; 

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Normalize path (remove trailing slash)
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  const isPublic = publicRoutes.includes(path);

  const isProtected = protectedRoutes.some((route) =>
    route.endsWith('/*') ? path.startsWith(route.replace('/*', '')) : path === route
  );

  // Skip static or API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static')
  ) {
    return NextResponse.next();
  }

  // Get session
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Not logged in
  if (!token) {
    if (isPublic) {
      return NextResponse.next();
    } else {
      const signInUrl = new URL('/signin', req.url);
      signInUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  //  Logged in
  if (token) {
    if (isProtected) {
      return NextResponse.next();
    } else if (isPublic) {
      return NextResponse.redirect(new URL('/home', req.url));
    }
  }

  // fallback
  return NextResponse.redirect(new URL('/signin', req.url));
}

export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico|.*\\..*).*)'],
};
