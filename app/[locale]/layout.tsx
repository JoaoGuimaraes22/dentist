import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const BASE_URL = "https://sorrisoplus.pt";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isPt = locale === "pt";

  return {
    title: isPt
      ? "SorrisoPlus — Clínica Dentária em Carcavelos"
      : "SorrisoPlus — Dental Clinic in Carcavelos",
    description: isPt
      ? "Clínica dentária multidisciplinar em Carcavelos. Implantologia, ortodontia (Invisalign), branqueamento, odontopediatria. Primeira consulta de avaliação disponível."
      : "Multidisciplinary dental clinic in Carcavelos, Portugal. Implantology, orthodontics (Invisalign), whitening, pediatric dentistry. Book your first evaluation.",
    keywords: isPt
      ? [
          "dentista carcavelos",
          "clínica dentária cascais",
          "implantes dentários cascais",
          "ortodontia cascais",
          "invisalign cascais",
          "branqueamento dentário cascais",
          "dentista urgência cascais",
        ]
      : [
          "dentist carcavelos",
          "dental clinic cascais",
          "dental implants cascais",
          "orthodontics cascais",
          "invisalign cascais",
        ],
    openGraph: {
      title: isPt
        ? "SorrisoPlus — Clínica Dentária em Carcavelos"
        : "SorrisoPlus — Dental Clinic in Carcavelos",
      description: isPt
        ? "Cuidados dentários de excelência em Carcavelos e Linha de Cascais."
        : "Excellence dental care in Carcavelos and Linha de Cascais.",
      url: `${BASE_URL}/${locale}`,
      siteName: "SorrisoPlus",
      locale: isPt ? "pt_PT" : "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isPt
        ? "SorrisoPlus — Clínica Dentária em Carcavelos"
        : "SorrisoPlus — Dental Clinic in Carcavelos",
      description: isPt
        ? "Cuidados dentários de excelência em Carcavelos."
        : "Excellence dental care in Carcavelos.",
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        "pt-PT": `${BASE_URL}/pt`,
        "en-GB": `${BASE_URL}/en`,
      },
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "SorrisoPlus — Clínica Dentária",
  description:
    "Clínica dentária multidisciplinar em Carcavelos, oferecendo implantologia, ortodontia, branqueamento e odontopediatria.",
  url: BASE_URL,
  telephone: "+351214567890",
  email: "info@sorrisoplus.pt",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. de Portugal 45",
    addressLocality: "Carcavelos",
    postalCode: "2775-602",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.6883,
    longitude: -9.335,
  },
  areaServed: [
    "Carcavelos",
    "Parede",
    "Cascais",
    "Estoril",
    "São Domingos de Rana",
    "Oeiras",
  ],
  medicalSpecialty: [
    "Dentistry",
    "Orthodontics",
    "OralSurgery",
    "Periodontics",
    "PediatricDentistry",
    "Endodontics",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted:
    "Cash, Credit Card, ADSE, Multicare, AdvanceCare, Médis, Allianz, SAMS",
  hasMap: "https://maps.google.com/?q=38.6883,-9.3350",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "247",
    bestRating: "5",
  },
};

export default async function LocaleLayout({ children }: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
