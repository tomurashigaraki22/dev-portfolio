// app/robots.js
// Next.js App Router robots — auto-generates /robots.txt

const BASE_URL = "https://devtomiwa.watchup.site"; // Replace with actual domain

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}