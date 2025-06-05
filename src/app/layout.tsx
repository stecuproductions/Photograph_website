import "./globals.css";
import dynamic from 'next/dynamic';
import metadata from './metadata';
// Import components dynamically to avoid server-side rendering issues
const SchemaOrg = dynamic(() => import('../components/SchemaOrg'), { ssr: true });
const Accessibility = dynamic(() => import('../components/Accessibility'), { ssr: true });

// Export metadata for the root layout
export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* ViewPort meta tag for better mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {/* Skip to content link for keyboard users */}
        <a href="#main-content" className="skip-to-content">
          Przejdź do treści głównej
        </a>
        
        <main id="main-content">
          {children}
        </main>
        
        {/* Accessibility component */}
        <div id="accessibility-widget" suppressHydrationWarning>
          {typeof window !== 'undefined' && (
            <Accessibility />
          )}
        </div>
        
        {/* Schema.org structured data - client component loaded dynamically */}
        <div id="schema-org-wrapper" suppressHydrationWarning>
          {typeof window !== 'undefined' && (
            <SchemaOrg />
          )}
        </div>
      </body>
    </html>
  );
}
