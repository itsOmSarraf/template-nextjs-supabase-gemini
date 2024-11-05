import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

// App configuration - customize these values
const APP_CONFIG = {
  NAME: "Your App Name",
  DEFAULT_TITLE: "Your App Title",
  TITLE_TEMPLATE: "%s | Your App Name",
  DESCRIPTION: "Your app description goes here",
  URL: "https://yourapp.domain.com",
  TWITTER_HANDLE: "@yourhandle",
  THEME_COLOR: "#000000", // Your primary theme color
  CREATOR: "Your Name",
  PUBLISHER: "Your Company",
  CATEGORY: "Your App Category"
};

export const metadata: Metadata = {
  applicationName: APP_CONFIG.NAME,
  title: {
    default: APP_CONFIG.DEFAULT_TITLE,
    template: APP_CONFIG.TITLE_TEMPLATE,
  },
  description: APP_CONFIG.DESCRIPTION,
  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon.ico', sizes: '48x48' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_CONFIG.DEFAULT_TITLE,
  },

  formatDetection: {
    telephone: false,
  },

  openGraph: {
    type: "website",
    siteName: APP_CONFIG.NAME,
    title: {
      default: APP_CONFIG.DEFAULT_TITLE,
      template: APP_CONFIG.TITLE_TEMPLATE,
    },
    description: APP_CONFIG.DESCRIPTION,
    url: APP_CONFIG.URL,
  },

  twitter: {
    card: 'summary_large_image',
    title: {
      default: APP_CONFIG.DEFAULT_TITLE,
      template: APP_CONFIG.TITLE_TEMPLATE,
    },
    description: APP_CONFIG.DESCRIPTION,
    creator: APP_CONFIG.TWITTER_HANDLE,
  },

  keywords: [
    // Add your keywords here
    'keyword1',
    'keyword2',
    'keyword3',
  ],
  authors: [
    { name: APP_CONFIG.CREATOR }
  ],
  creator: APP_CONFIG.CREATOR,
  publisher: APP_CONFIG.PUBLISHER,
  category: APP_CONFIG.CATEGORY,
};

export const viewport: Viewport = {
  themeColor: APP_CONFIG.THEME_COLOR,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary ${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}