import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./_components/Layout/navbar";
import { UserProvider } from "@/context/UserContext";
import LoginHeader from "@/app/_components/header";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Playlist Chatter | Share and Discuss Music Playlists",
  description: "Join the conversation about music playlists. Create, share, and discuss your favorite music collections with a community of music lovers.",
  keywords: ["playlist discussion", "music community", "playlist sharing", "music recommendations", "social music platform"],
  openGraph: {
    title: "Playlist Chatter | Share and Discuss Music Playlists",
    description: "Join the conversation about music playlists. Create, share, and discuss your favorite music collections with a community of music lovers.",
    type: "website",
    locale: "en_US",
    siteName: "Playlist Chatter",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Playlist Chatter - Share and Discuss Music Playlists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playlist Chatter | Share and Discuss Music Playlists",
    description: "Join the conversation about music playlists. Create, share, and discuss your favorite music collections with a community of music lovers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <UserProvider>
          <Navbar />
          {children}
        </UserProvider>
        <Analytics />
      </body>
    </html>
  );
}
