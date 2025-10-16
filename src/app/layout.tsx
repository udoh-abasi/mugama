import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Header from "./header";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mugama Technologies",
  description:
    "A versatile Enterprise Transformation and Technologies Consulting firm",
  openGraph: {
    title: "Mugama Technologies",
    description:
      "A versatile Enterprise Transformation and Technologies Consulting firm",
    type: "website",
    url: "https://mugama.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mugama Technologies",
  url: "https://mugama.vercel.app",
  logo: "https://mugama.vercel.app/logo.webp",
  image: "https://mugama.vercel.app/logo.webp",
  // email: "",
  foundingDate: "2020-07-15",
  keywords: "Mugama Technologies",
  legalName: "Mugama Limited",
  description:
    "Mugama Technologies is a versatile Enterprise Transformation and Technologies Consulting firm",
  address: {
    "@type": "PostalAddress",
    // streetAddress: "Plot 1245, Adetokunbo Ademola Crescent, Wuse II",
    addressLocality: "Abuja",
    addressRegion: "FCT",
    // postalCode: "900288",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    // telephone: "+234-809-000-0000",
    contactType: "Customer Service",
    areaServed: "NG",
    availableLanguage: ["English"],
  },
  companyRegistration: {
    "@type": "Certification",
    name: "Certificate of Incorporation",
    certificationIdentification: "RC 1688059",
    issuedBy: "Corporate Affairs Commission (CAC)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster
          position="top-right"
          containerStyle={{
            // Make the toast appear farther down (somewhere in the middle)
            top: 200,
            left: 20,
            bottom: 20,
            right: 20,
          }}
          toastOptions={{
            // When the toast appears, it stays for 5 seconds before disappearing
            duration: 5000,
          }}
        />
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
