import { auth } from "@/auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;

  // Detailed debugging of auth object
  console.log("req.auth:", JSON.stringify(req.auth, null, 2));
  console.log("Path:", nextUrl.pathname);

  // Check if user is logged in based on accessToken
  const isLoggedIn = !!req.auth?.user?.accessToken;
  console.log("isLoggedIn:", isLoggedIn);

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // Redirect root to /login
  if (nextUrl.pathname === "/") {
    console.log("Redirecting root to /login");
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  // Skip API auth routes
  if (isApiAuthRoute) {
    console.log("Allowing API auth route");
    return NextResponse.next();
  }

  // Handle auth routes (/login, /register)
  if (isAuthRoute) {
    if (isLoggedIn) {
      console.log("User is logged in, redirecting to DEFAULT_LOGIN_REDIRECT:", DEFAULT_LOGIN_REDIRECT);
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    console.log("Allowing auth route for unauthenticated user");
    return NextResponse.next();
  }

  // Protect /upload and /receive routes
  if (["/upload", "/receive"].includes(nextUrl.pathname)) {
    if (!isLoggedIn) {
      console.log("Unauthenticated user on /upload or /receive, redirecting to /login");
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    console.log("Authenticated user on /upload or /receive, proceeding");
    return NextResponse.next();
  }

  // Redirect unauthenticated users to /login for other routes (except /login)
  if (!isLoggedIn && !nextUrl.pathname.startsWith("/login")) {
    console.log("Unauthenticated user on protected route, redirecting to /login");
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  console.log("Proceeding with request");
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};