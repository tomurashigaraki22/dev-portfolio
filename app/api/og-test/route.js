import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';

  const ogImages = [
    {
      name: 'Main OG Image',
      url: `${baseUrl}/opengraph-image`,
      description: 'Default Open Graph image for the homepage',
    },
    {
      name: 'Twitter Image',
      url: `${baseUrl}/twitter-image`,
      description: 'Twitter card image',
    },
    {
      name: '404 OG Image',
      url: `${baseUrl}/not-found/opengraph-image`,
      description: 'Open Graph image for 404 pages',
    },
    {
      name: 'WatchUp V2 Project',
      url: `${baseUrl}/projects/watchup-v2/opengraph-image`,
      description: 'Dynamic OG image for WatchUp V2 project',
    },
    {
      name: 'Verso Project',
      url: `${baseUrl}/projects/verso/opengraph-image`,
      description: 'Dynamic OG image for Verso project',
    },
  ];

  return NextResponse.json({
    message: 'OG Image Generation System',
    baseUrl,
    images: ogImages,
    usage: {
      'Test Images': 'Visit the URLs above to see generated images',
      'Social Sharing': 'Share any page URL on social media to see OG images in action',
      'Dynamic Projects': 'Visit /projects/[slug] pages for project-specific OG images',
    },
  });
}