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
      </body>
    </html>
  );
}
