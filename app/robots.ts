import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://testing-five-zeta-93.vercel.app/sitemap.xml",
    host: "https://testing-five-zeta-93.vercel.app",
  };
}
