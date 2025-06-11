import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Emotevation - Personalized Daily Motivation",
  description: "Get personalized motivational quotes or reality checks based on your name and date. Every combination creates a unique result to inspire your day.",
  keywords: "motivation, quotes, personalized quotes, daily motivation, inspirational quotes, reality checks",
  openGraph: {
    title: "Emotevation - Personalized Daily Motivation",
    description: "Get personalized motivational quotes or reality checks based on your name and date.",
    url: "https://tonegabes.github.io/emotevation/",
    siteName: "Emotevation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotevation - Personalized Daily Motivation",
    description: "Get personalized motivational quotes or reality checks based on your name and date.",
    creator: "@tonegabes",
  },
  authors: [{ name: "Tony Gabriel" }],
  creator: "Tony Gabriel",
  publisher: "Tony Gabriel",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        {process.env.NODE_ENV === 'production' && (
          // Use a non-blocking script instead of synchronous script
          <script src="/emotevation/gh-pages-router.js" async defer />
        )}
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
