"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import opinions from '../data/opinions';

export default function SchemaOrg() {
  const pathname = usePathname();
  const baseUrl = 'https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL';
  const currentUrl = `${baseUrl}${pathname}`;

  // Enhanced photographer schema with more specific type
  const photographerSchema = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    "@id": "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/#photographer",
    "name": "Twoje Studio Fotograficzne",
    "image": "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/images/home/portrait.png",
    "url": "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL",
    "telephone": "+48 134 456 789",
    "email": "kontakt@fotografiajulianowak.pl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Łódź",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.7592,
      "longitude": 19.4560
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/JuliaNowakFotografia",
      "https://www.instagram.com/julia.nowak.fotografia"
    ],
    "description": "Profesjonalna fotografia portretowa, ślubna i biznesowa. Tworzę zdjęcia pomagające budować zaufanie w markę osobistą, wizerunek firmy i ważne momenty życia.",
    // Add services offered
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sesje fotograficzne portretowe",
          "description": "Profesjonalne sesje portretowe w studio lub w plenerze"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "500-1000",
          "priceCurrency": "PLN"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fotografia ślubna",
          "description": "Kompleksowa fotografia ślubna, reportaże i sesje plenerowe"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "2000-5000",
          "priceCurrency": "PLN"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fotografia biznesowa",
          "description": "Profesjonalne zdjęcia biznesowe dla firm i osób prywatnych"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "800-2500",
          "priceCurrency": "PLN"
        }
      }
    ]
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "Julia Nowak Fotografia",
    "description": "Profesjonalna fotografia portretowa, ślubna i biznesowa",
    "publisher": {
      "@id": "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/#photographer"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "inLanguage": "pl-PL"
  };

  // Add schema for Photo Gallery - conditionally include based on current page
  const photoGallerySchema = pathname === '/portfolio' ? {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/portfolio#gallery",
    "name": "Portfolio Fotograficzne",
    "description": "Galeria zdjęć portretowych, modowych i ślubnych",
    "url": "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/portfolio",
    "isPartOf": {
      "@id": "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/#photographer"
    }
  } : null;

  // Add schema for Reviews - create a review for each testimonial
  const reviewSchemas = opinions.map((opinion, index) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/#review-${index + 1}`,
    "itemReviewed": {
      "@id": "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/#photographer"
    },
    "author": {
      "@type": "Person",
      "name": opinion.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": opinion.text,
    "datePublished": "2024-01-01" // Add actual publication date if available
  }));

  // Add WebPage schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${currentUrl}#webpage`,
    "url": currentUrl,
    "name": getPageTitle(pathname),
    "description": getPageDescription(pathname),
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    },
    "about": {
      "@id": "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/#photographer"
    },
    "inLanguage": "pl-PL"
  };

  // Combine all schemas into one array, filtering out null values
  const combinedSchema = [
    photographerSchema, 
    websiteSchema,
    webPageSchema,
    photoGallerySchema,
    ...reviewSchemas
  ].filter(Boolean);

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
    />
  );
}

// Helper functions to get page-specific data
function getPageTitle(pathname) {
  switch (pathname) {
    case '/':
      return 'Profesjonalne Usługi Fotograficzne | Portfolio Fotografa';
    case '/portfolio':
      return 'Portfolio Fotograficzne | Wybrane Realizacje';
    case '/kontakt':
      return 'Kontakt | Zapytaj o Sesję Fotograficzną';
    default:
      return 'Profesjonalne Usługi Fotograficzne';
  }
}

function getPageDescription(pathname) {
  switch (pathname) {
    case '/':
      return 'Profesjonalna fotografia portretowa, ślubna i biznesowa. Tworzę zdjęcia pomagające budować zaufanie w markę osobistą, wizerunek firmy i ważne momenty życia.';
    case '/portfolio':
      return 'Odkryj moje portfolio fotograficzne - sesje portretowe, zdjęcia modowe, fotografia ślubna i biznesowa. Każde zdjęcie opowiada wyjątkową historię.';
    case '/kontakt':
      return 'Skontaktuj się ze mną, aby omówić szczegóły Twojej sesji fotograficznej. Odpowiem na wszystkie pytania i dostosuję ofertę do Twoich potrzeb.';
    default:
      return 'Profesjonalna fotografia portretowa, ślubna i biznesowa.';
  }
}
}
