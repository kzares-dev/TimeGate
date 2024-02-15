import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes: ["/", "/quiz/12345678/start", "/quiz/12345678" , "/quiz/12345678/check" ,"/api/webhooks(.*)", "/library"],
    ignoredRoutes: ["/", "/quiz/12345678/start", "/quiz/12345678" ,"/api/webhooks(.*)", "/library"],
  });
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};