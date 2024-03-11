import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en-US", "pt-BR"],
  defaultLocale: "en-US",
});

export const config = {
  matcher: ["/", "/(pt-BR|en-US)/:path*"],
};
