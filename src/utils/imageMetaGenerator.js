/**
 * Generates OpenGraph and Twitter image metadata for image-rich pages
 * @param {Array} images - Array of image objects
 * @param {string} pageTitle - Title of the page
 * @param {string} pageUrl - Full URL of the page
 * @returns {Object} - Object containing OpenGraph and Twitter metadata
 */
export function generateImageMeta(images, pageTitle, pageUrl) {
  // Get featured images (up to 4 for OpenGraph)
  const featuredImages = images.slice(0, 4).map(img => ({
    url: img.url,
    width: 1200,
    height: img.orientation === 'portrait' ? 1600 : 630,
    alt: img.alt || `${pageTitle} - ${img.category} photography`,
  }));
  
  // For Twitter, use the first image
  const twitterImage = featuredImages[0]?.url || "/images/home/portrait.png";
  
  return {
    openGraph: {
      images: featuredImages,
    },
    twitter: {
      card: "summary_large_image",
      images: [twitterImage],
    },
    alternates: {
      canonical: pageUrl,
    }
  };
}
