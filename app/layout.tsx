import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'HyperAI Clone – Built with Next.js 14 & Tailwind CSS',
  description: 'A responsive, pixel-perfect clone of the HyperAI landing page built using Next.js 14, Tailwind CSS, TypeScript, and Framer Motion. Ideal for UI/UX practice and web performance optimization.',
  keywords: [
    'HyperAI Clone',
    'Next.js 14',
    'Tailwind CSS',
    'Framer Motion',
    'React Animation',
    'Next.js SEO',
    'Responsive Web Design',
    'Landing Page Clone',
    'Open Source Project',
    'Imran Dev'
  ],
  authors: [{ name: 'Imran', url: 'https://github.com/yourusername' }],
  creator: 'Imran',
  publisher: 'Imran',
  metadataBase: new URL('https://hyperai-clone-nextjs.vercel.app'),
  openGraph: {
    title: 'HyperAI Clone – Built with Next.js 14',
    description: 'A pixel-perfect, animated clone of HyperAI built using Next.js 14, Tailwind CSS, and Framer Motion.',
    url: 'https://hyperai-clone-nextjs.vercel.app',
    siteName: 'HyperAI Clone',
    images: [
      {
        url: '/og-image.jpg', // 📷 Make sure this image exists in /public
        width: 1200,
        height: 630,
        alt: 'HyperAI Clone Preview Image'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HyperAI Clone – Built with Next.js 14',
    description: 'Responsive, animated HyperAI website clone with Tailwind CSS & Framer Motion.',
    creator: '@yourTwitterHandle',
    images: ['/og-image.jpg']
  }
}

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
