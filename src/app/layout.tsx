import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Grain } from "@/components/grain";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "AIBIGO Institute: IGALP Industry-Guided Applied Learning";
const description =
  "AIBIGO Institute builds IGALP, an industry-guided applied learning program connecting institutions, industry and students. Also home to BOLO, a voice-first task delegation workspace.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aibigo.in"),
  title,
  description,
  keywords: [
    "IGALP",
    "BOLO",
    "AIBIGO",
    "AIBIGO Institute",
    "industry-guided applied learning",
    "voice task delegation app",
    "AI education platform",
  ],
  authors: [{ name: "AIBIGO Institute" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://aibigo.in",
  },
  openGraph: {
    type: "website",
    url: "https://aibigo.in",
    siteName: "AIBIGO Institute",
    title,
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <StructuredData />
        <Grain />
        {children}
      </body>
    </html>
  );
}
