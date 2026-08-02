import type { Metadata } from "next";
import { business, siteUrl } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elite Aesthetics MedSpa | Vero Beach, FL",
    template: "%s | Elite Aesthetics MedSpa",
  },
  description: "Elite Aesthetics MedSpa in Vero Beach offers custom facials, microneedling, injectables, PRP, hormone therapy, weight loss, and IV hydration.",
  keywords: ["med spa Vero Beach", "facials Vero Beach FL", "microneedling Vero Beach", "injectables Vero Beach", "PRP Vero Beach", "IV hydration Vero Beach", "Elite Aesthetics MedSpa"],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: business.name,
    title: "Elite Aesthetics MedSpa | Vero Beach, FL",
    description: "Personalized esthetic, injectable, and wellness treatments in Vero Beach, Florida.",
    images: [{ url: "/spa-hero.png", width: 1588, height: 991, alt: "Elite Aesthetics MedSpa in Vero Beach, Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Aesthetics MedSpa | Vero Beach, FL",
    description: "Personalized esthetic, injectable, and wellness treatments in Vero Beach, Florida.",
    images: ["/spa-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    url: siteUrl,
    image: `${siteUrl}/spa-hero.png`,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.postalCode,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 27.65, longitude: -80.36 },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "15:00",
    }],
    areaServed: { "@type": "City", name: "Vero Beach" },
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
