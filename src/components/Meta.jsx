import React from 'react';
import Head from 'next/head';

export default function Meta({ 
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  children
}) {
  const siteUrl = 'https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const defaultImage = `${siteUrl}/images/home/portrait.png`;
  const imageUrl = ogImage || defaultImage;
  
  return (
    <Head>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* OpenGraph metadata */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Julia Nowak Fotografia" />
      <meta property="og:locale" content="pl_PL" />
      
      {/* Twitter metadata */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Canonical link */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Additional head elements */}
      {children}
    </Head>
  );
}
