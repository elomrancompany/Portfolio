import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "شركة العمران للمقاولات العامة | شريككم الاستراتيجي",
  description: "شركة العمران للمقاولات العامة - نبني اليوم لمستقبل مستدام. متخصصون في أعمال البنية التحتية، محطات رفع المياه والكهرباء، الخرسانات المسلحة، والاستصلاح الزراعي.",
  keywords: [
    "العمران للمقاولات",
    "شركة العمران للمقاولات العامة",
    "مقاولات عامة مصر",
    "بنية تحتية مصر",
    "محطات مياه وكهرباء",
    "استصلاح زراعي مصر",
    "مستقبل مصر",
    "السعود جروب",
    "شركة كونكورد للمقاولات"
  ],
  authors: [{ name: "فريق العمران" }],
  metadataBase: new URL("https://www.elomraneg.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "شركة العمران للمقاولات العامة | شريككم الاستراتيجي",
    description: "نبني اليوم لمستقبل مستدام. أعمال بنية تحتية ومقاولات عامة بمواصفات قياسية وجودة هندسية موثوقة.",
    url: "https://www.elomraneg.com",
    siteName: "العمران للمقاولات",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/projects/concrete-night.jpg",
        width: 1200,
        height: 630,
        alt: "شركة العمران للمقاولات العامة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة العمران للمقاولات العامة",
    description: "نبني اليوم لمستقبل مستدام. أعمال بنية تحتية ومقاولات عامة بمواصفات قياسية.",
    images: ["/images/projects/concrete-night.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1B2A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GovernmentContractor",
    "name": "شركة العمران للمقاولات العامة",
    "alternateName": "EL OMRAN General Contracting",
    "description": "نبني اليوم لمستقبل مستدام. شريككم الاستراتيجي في المشروعات الكبرى.",
    "url": "https://www.elomraneg.com",
    "logo": "https://www.elomraneg.com/logo.png",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "القاهرة",
      "addressCountry": "EG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+201153895074",
      "contactType": "sales",
      "email": "elomrancompanyegy@gmail.com",
      "areaServed": "EG",
      "availableLanguage": ["Arabic", "English"]
    },
    "sameAs": [
      "https://web.facebook.com/profile.php?id=61589768965958",
      "https://www.instagram.com/elomranegy/"
    ]
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
