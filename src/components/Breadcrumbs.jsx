"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Skip rendering breadcrumbs on homepage
  if (pathname === '/') return null;
  
  // Convert pathname to breadcrumb segments
  const segments = pathname
    .split('/')
    .filter(segment => segment)
    .map(segment => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: `/${segment}`,
    }));
  
  // Add home as the first segment
  const breadcrumbs = [
    { label: 'Strona główna', href: '/' },
    ...segments,
  ];
  
  // Generate structured data for breadcrumbs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': breadcrumb.label,
      'item': `https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL${breadcrumb.href}`,
    })),
  };

  return (
    <div className="mb-4 py-2">
      <nav aria-label="breadcrumbs" className="flex items-center text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.href}>
            {index > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="font-semibold" aria-current="page">
                {breadcrumb.label}
              </span>
            ) : (
              <Link 
                href={breadcrumb.href}
                className="text-primary hover:underline"
              >
                {breadcrumb.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
      
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
}
