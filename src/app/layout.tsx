import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "شركة العمران للمقاولات العامة | EL OMRAN General Contracting",
  description:
    "شريككم الاستراتيجي في المشروعات القومية والبنية التحتية والمقاولات العامة. نبني المستقبل بثقة هندسية ومعايير تنفيذ عالمية.",
  keywords:
    "مقاولات, بنية تحتية, خرسانات مسلحة, استصلاح زراعي, مقاولات عامة, مصر, EL OMRAN",
  openGraph: {
    title: "شركة العمران للمقاولات العامة",
    description: "شريككم الاستراتيجي في المشروعات القومية والبنية التحتية",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Tajawal:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-cairo antialiased">{children}</body>
    </html>
  );
}
