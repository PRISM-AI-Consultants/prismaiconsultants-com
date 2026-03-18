import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const FAKE_COURSE_PATHS = new Set([
  "/courses/modern-ballet",
  "/courses/tennis",
  "/courses/pottery-workshop",
  "/courses/trumpet-basics",
  "/courses/baking-for-beginners",
  "/courses/arts-&-crafts",
  "/courses/arts-%26-crafts",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Return 410 Gone for fake course URLs (spam/SEO attack pages)
  if (pathname.startsWith("/courses/") || FAKE_COURSE_PATHS.has(pathname)) {
    return new NextResponse(null, {
      status: 410,
      statusText: "Gone",
      headers: {
        "X-Robots-Tag": "noindex",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/courses/:path*",
};
