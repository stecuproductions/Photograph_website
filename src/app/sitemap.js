export default function sitemap() {
  const baseUrl = 'https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL';
  const currentDate = new Date().toISOString();
  
  // Define all website pages
  const routes = [
    '',
    '/portfolio',
    '/kontakt',
    '/warsztaty'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
  
  return routes;
}
