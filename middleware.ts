import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const stripped = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(new URL(stripped, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/en", "/en/:path*"],
};
