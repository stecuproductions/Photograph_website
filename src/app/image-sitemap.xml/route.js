import images from '../../data/images';

export async function GET() {
  const baseUrl = 'https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL';
  
  // Create XML content
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/portfolio</loc>
    ${images.map(img => `
    <image:image>
      <image:loc>${img.url.startsWith('http') ? img.url : `${baseUrl}${img.url}`}</image:loc>
      <image:title>${img.alt}</image:title>
      <image:caption>${img.alt}</image:caption>
      <image:geo_location>Łódź, Polska</image:geo_location>
    </image:image>`).join('')}
  </url>
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${baseUrl}/images/home/portrait.png</image:loc>
      <image:title>Fotografia portretowa</image:title>
      <image:caption>Profesjonalne sesje portretowe</image:caption>
      <image:geo_location>Polska</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/images/home/weeding1.png</image:loc>
      <image:title>Fotografia ślubna</image:title>
      <image:caption>Reportaże ślubne i sesje plenerowe</image:caption>
      <image:geo_location>Polska</image:geo_location>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/images/home/weeding2.png</image:loc>
      <image:title>Fotografia ślubna plenerowa</image:title>
      <image:caption>Sesje ślubne w plenerze</image:caption>
      <image:geo_location>Polska</image:geo_location>
    </image:image>
  </url>
</urlset>`;
  
  // Return XML response
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
