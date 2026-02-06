import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angga Kusuma | Senior Front-end & Mobile Developer",
  description: "Portfolio of Angga Kusuma, a seasoned developer creating innovative and dynamic web solutions.",
  metadataBase: new URL("https://angga-kusuma.netlify.app"),
  openGraph: {
    title: "Angga Kusuma | Senior Front-end & Mobile Developer",
    description: "Portfolio of Angga Kusuma, a seasoned developer creating innovative and dynamic web solutions.",
    url: "https://angga-kusuma.netlify.app",
    siteName: "Angga Kusuma Portfolio",
    images: [
      {
        url: "/pas-photo.jpg",
        width: 800,
        height: 600,
        alt: "Angga Kusuma",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angga Kusuma | Senior Front-end & Mobile Developer",
    description: "Portfolio of Angga Kusuma, a seasoned developer creating innovative and dynamic web solutions.",
    images: ["/pas-photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <WhatsAppButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
