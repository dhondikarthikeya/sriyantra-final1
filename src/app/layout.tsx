import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Sora } from "next/font/google";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CookiePopup from "../components/ui/CookiePopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sriyantratech.com"),

  title: {
    default: "Sri Yantra Tech",
    template: "%s | Sri Yantra Tech",
  },

  description:
    "Strategic marketing and technology solutions company.",

  keywords: [
    "Sri Yantra Tech",
    "Marketing Solutions",
    "Technology Solutions",
    "Strategic Marketing",
    "Business Growth",
    "Digital Transformation",
    "Business Consulting",
  ],

  verification: {
    google: "googlef6f95b226a957f81",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },

  openGraph: {
    title: "Sri Yantra Tech",
    description:
      "Strategic marketing and technology solutions company.",
    url: "https://www.sriyantratech.com",
    siteName: "Sri Yantra Tech",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Sri Yantra Tech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sri Yantra Tech",
    description:
      "Strategic marketing and technology solutions company.",

    images: ["/logo1.png"],
  },

  alternates: {
    canonical: "https://www.sriyantratech.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Sri Yantra Tech",

  url: "https://www.sriyantratech.com",

  logo: "https://www.sriyantratech.com/logo1.png",

  description:
    "Strategic marketing and technology solutions company.",

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7729959988",
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
    >
      <body className={inter.className}>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XCY6LB1QYF"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-XCY6LB1QYF');
          `}
        </Script>

        <Header />

        <main>{children}</main>

        <Footer />

        <CookiePopup />
      </body>
    </html>
  );
}