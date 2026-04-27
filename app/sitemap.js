// app/sitemap.js
// Next.js App Router sitemap — auto-generates /sitemap.xml

const BASE_URL = "https://devtomiwa.watchup.site"; // Replace with actual domain

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}