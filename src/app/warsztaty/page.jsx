import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionHeader from "../../UI/SectionHeader";
import Breadcrumbs from "../../components/Breadcrumbs";
import Paragraph from "../../UI/Paragraph";
import Button from "../../UI/Button";

export const metadata = {
  title: "Warsztaty Fotograficzne | Zdobądź Nowe Umiejętności",
  description: "Weź udział w profesjonalnych warsztatach fotograficznych. Nauczysz się technik portretowych, fotografii produktowej oraz edycji zdjęć w Lightroom i Photoshop.",
  keywords: ["warsztaty fotograficzne", "nauka fotografii", "kurs fotografii", "techniki fotograficzne", "edycja zdjęć", "warsztaty portretowe"],
  openGraph: {
    title: "Warsztaty Fotograficzne | Zdobądź Nowe Umiejętności",
    description: "Weź udział w profesjonalnych warsztatach fotograficznych. Nauczysz się technik portretowych, fotografii produktowej oraz edycji zdjęć.",
    url: "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/warsztaty",
    images: [
      {
        url: "/images/home/portrait.png",
        width: 1200,
        height: 630,
        alt: "Warsztaty fotograficzne w profesjonalnym studio",
      }
    ],
  },
  twitter: {
    title: "Warsztaty Fotograficzne | Zdobądź Nowe Umiejętności",
    description: "Weź udział w profesjonalnych warsztatach fotograficznych. Nauczysz się technik portretowych, fotografii produktowej oraz edycji zdjęć.",
    images: ["/images/home/portrait.png"],
  },
  alternates: {
    canonical: "https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/warsztaty",
  },
};

const workshops = [
  {
    id: 'ws1',
    title: 'Podstawy fotografii portretowej',
    date: '2025-07-15T10:00:00+02:00',
    endDate: '2025-07-15T16:00:00+02:00',
    description: 'Warsztat wprowadzający do fotografii portretowej. Poznasz podstawowe techniki oświetlenia, pozowania i komunikacji z modelem.',
    price: 499,
    image: '/images/home/portrait.png',
    availability: 'InStock',
    location: {
      name: 'Centrum Fotograficzne',
      address: 'Łódź, Polska'
    }
  },
  {
    id: 'ws2',
    title: 'Zaawansowana edycja w Lightroom',
    date: '2025-08-20T11:00:00+02:00',
    endDate: '2025-08-20T17:00:00+02:00',
    description: 'Dowiedz się, jak profesjonalnie edytować zdjęcia w Adobe Lightroom. Warsztat dla osób z podstawową znajomością programu.',
    price: 599,
    image: '/images/home/weeding1.png',
    availability: 'InStock',
    location: {
      name: 'Centrum Fotograficzne',
      address: 'Łódź, Polska'
    }
  },
  {
    id: 'ws3',
    title: 'Fotografia ślubna w praktyce',
    date: '2025-09-10T09:00:00+02:00',
    endDate: '2025-09-10T18:00:00+02:00',
    description: 'Całodniowy warsztat praktyczny poświęcony fotografii ślubnej. Nauczysz się pracować w różnych warunkach i poznasz kulisy pracy fotografa ślubnego.',
    price: 899,
    image: '/images/home/weeding2.png',
    availability: 'LimitedAvailability',
    location: {
      name: 'Pałac Weselny',
      address: 'Łódź, Polska'
    }
  }
];

export default function Workshops() {
  return (
    <div className="bg-[url('/images/bg.png')] bg-repeat lg:px-8">
      <div className="w-100% mx-auto text-secondary py-8 lg:py-8 bg-transparent px-2 lg:max-w-[1200px] lg:px-0 min-h-screen flex flex-col gap-8 md:gap-16">
        <Navbar/>
        <Breadcrumbs />
        <SectionHeader className="text-center">Warsztaty Fotograficzne</SectionHeader>
        
        <div className="mb-8">
          <Paragraph>
            Zapraszam na profesjonalne warsztaty fotograficzne, które pomogą Ci rozwinąć umiejętności
            i podnieść poziom Twoich zdjęć. Każdy warsztat to połączenie wiedzy teoretycznej i praktycznych
            ćwiczeń pod okiem doświadczonego fotografa.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={workshop.image} 
                  alt={workshop.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                <p className="text-gray-700 mb-4">{workshop.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {new Date(workshop.date).toLocaleDateString('pl-PL', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                    <p className="text-sm text-gray-500">{workshop.location.name}</p>
                  </div>
                  <p className="font-bold">{workshop.price} zł</p>
                </div>
                <Button className="w-full">Zapisz się</Button>
                
                {/* Hidden JSON-LD for this specific event */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Event',
                      'name': workshop.title,
                      'description': workshop.description,
                      'startDate': workshop.date,
                      'endDate': workshop.endDate,
                      'location': {
                        '@type': 'Place',
                        'name': workshop.location.name,
                        'address': {
                          '@type': 'PostalAddress',
                          'streetAddress': workshop.location.address.split(',')[0],
                          'addressLocality': workshop.location.address.split(',')[1]?.trim(),
                          'addressCountry': 'PL'
                        }
                      },
                      'offers': {
                        '@type': 'Offer',
                        'price': workshop.price,
                        'priceCurrency': 'PLN',
                        'availability': `https://schema.org/${workshop.availability}`,
                        'url': `https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL/warsztaty#${workshop.id}`
                      },
                      'performer': {
                        '@type': 'Person',
                        'name': 'Julia Nowak'
                      },
                      'organizer': {
                        '@type': 'Organization',
                        'name': 'Julia Nowak Fotografia',
                        'url': 'https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL'
                      },
                      'image': [
                        `https://vercel.com/stecu03-gmailcoms-projects/photograph-website-6q3w/8uwG1gyuPwNpHjD5c2pWUs23NVzL${workshop.image}`
                      ]
                    })
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Dodatkowe informacje</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Wszystkie warsztaty prowadzone są w małych grupach (max 8 osób)</li>
            <li>W cenę wliczony jest sprzęt fotograficzny, materiały oraz przerwy kawowe</li>
            <li>Każdy uczestnik otrzymuje certyfikat ukończenia oraz dostęp do zamkniętej grupy wsparcia</li>
            <li>Możliwość zakupu warsztatów w pakiecie z 15% rabatem</li>
          </ul>
        </div>
        
        <Footer/>
      </div>
    </div>
  );
}
