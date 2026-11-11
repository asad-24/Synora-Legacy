import { NextResponse, type NextRequest } from "next/server";
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (/^\/en(?:\/|$)/.test(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url, 308);
  }
  if (/^\/(es|fr)(?:\/|$)/.test(pathname)) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}
export const config = {
  matcher: ["/((?!api(?:/|$)|_next(?:/|$)|images(?:/|$)|.*\\..*).*)"],
};
