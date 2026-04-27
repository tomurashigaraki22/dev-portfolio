import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://tomiwara.dev"; // Replace with actual domain

export const metadata = {
  // Core
  title: {
    default: "Tomiwa Raphael — Fullstack Engineer & Blockchain Developer",
    template: "%s | Tomiwa Raphael",
  },
  description:
    "Fullstack Engineer and Blockchain Developer based in Lagos, Nigeria. 8+ years building production systems across web, mobile, and blockchain infrastructure. Open to freelance and collaboration.",

  // Canonical
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },

  // Keywords (still indexed by Bing, some crawlers)
  keywords: [
    "Tomiwa Raphael",
    "DevTomiwa",
    "Fullstack Engineer Nigeria",
    "Blockchain Developer Lagos",
    "React Developer Nigeria",
    "Next.js Developer",
    "Solana Developer",
    "Sui Blockchain Developer",
    "Node.js Engineer Nigeria",
    "React Native Developer",
    "Web3 Developer Africa",
    "Software Engineer Lagos Nigeria",
  ],

  // Author
  authors: [{ name: "Tomiwa Raphael", url: BASE_URL }],
  creator: "Tomiwa Raphael",
  publisher: "Tomiwa Raphael",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Tomiwa Raphael",
    title: "Tomiwa Raphael — Fullstack Engineer & Blockchain Developer",
    description:
      "Building production systems that scale. Web, mobile, and blockchain infrastructure from Lagos, Nigeria.",
    images: [
      {
        url: "/og-image.png", // Create a 1200x630 OG image
        width: 1200,
        height: 630,
        alt: "Tomiwa Raphael — Fullstack Engineer",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Tomiwa Raphael — Fullstack Engineer & Blockchain Developer",
    description:
      "Building production systems that scale. Web, mobile, and blockchain infrastructure from Lagos, Nigeria.",
    images: ["/og-image.png"],
    creator: "@devtomiwa", // Replace with actual handle
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Verification (add your own tokens)
  verification: {
    google: "your-google-site-verification-token",
    // yandex: "your-yandex-token",
    // bing: "your-bing-token",
  },

  // Category
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Tomiwa Raphael",
      alternateName: "DevTomiwa",
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/profile.png`,
        caption: "Tomiwa Raphael",
      },
      jobTitle: "Fullstack Engineer",
      description:
        "Fullstack Engineer and Blockchain Developer with 8+ years building production systems across web, mobile, and blockchain infrastructure.",
      email: "devtomiwa9@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      sameAs: [
        "https://github.com/tomurashigaraki22",
        `https://wa.me/2347044831729`,
      ],
      knowsAbout: [
        "Node.js",
        "React",
        "Next.js",
        "React Native",
        "Blockchain Development",
        "Solana",
        "Ethereum",
        "Sui Blockchain",
        "Web3",
        "Django",
        "TypeScript",
        "AWS",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Tomiwa Raphael — Portfolio",
      description: "Portfolio of Tomiwa Raphael, Fullstack Engineer and Blockchain Developer.",
      publisher: {
        "@id": `${BASE_URL}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Tomiwa Raphael — Fullstack Engineer & Blockchain Developer",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      description:
        "Portfolio showcasing projects in web development, mobile apps, and blockchain infrastructure.",
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Theme color */}
        <meta name="theme-color" content="#111111" />
        <meta name="color-scheme" content="dark" />
        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}