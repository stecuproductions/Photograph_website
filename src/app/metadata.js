export const metadata = {
  title: {
    template: '%s | Profesjonalne Usługi Fotograficzne',
    default: 'Profesjonalne Usługi Fotograficzne | Portfolio Fotografa',
  },
  description: "Profesjonalna fotografia portretowa, ślubna i biznesowa. Tworzę zdjęcia pomagające budować zaufanie w markę osobistą, wizerunek firmy i ważne momenty życia.",
  keywords: ["fotografia", "portfolio fotograficzne", "zdjęcia ślubne", "sesje portretowe", "fotograf profesjonalny", "fotografia ślubna", "zdjęcia biznesowe", "sesje zdjęciowe"],
  authors: [{ name: "Julia Nowak" }],
  creator: "Julia Nowak",
  publisher: "Julia Nowak Fotografia",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/",
    title: "Profesjonalne Usługi Fotograficzne | Portfolio Fotografa",
    description: "Profesjonalna fotografia portretowa, ślubna i biznesowa. Odkryj moje portfolio zdjęć i nowoczesne podejście do fotografii.",
    siteName: "Julia Nowak Fotografia",
    images: [
      {
        url: "/images/home/portrait.png",
        width: 1200,
        height: 630,
        alt: "Sesja fotograficzna w naturalnym świetle",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profesjonalne Usługi Fotograficzne | Portfolio Fotografa",
    description: "Profesjonalna fotografia portretowa, ślubna i biznesowa. Odkryj moje portfolio zdjęć i nowoczesne podejście do fotografii.",
    images: ["/images/home/portrait.png"],
  },
  alternates: {
    canonical: "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with your actual verification code
    yandex: 'yandex-verification-code',      // Replace with your actual verification code
  },
};

export default metadata;
