import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vivekkumar-portfolio.vercel.app/"),
  title: "Vivek Kumar - UI Engineer",
  description:
    "I'm a UI Engineer with two years of experience, dedicated to crafting user-centric web experiences. Explore my portfolio to see how I bring creativity and technical expertise to every project.",

  // added new keywords for seo
  keywords: [
    "Fullstack Developer",
    "MERN Developer",
    "Web Developer",
    "Frontend Developer",
    "UI Engineer",
    "Frontend Developer in India",
    "Software Engineer",
    "Developer Portfolio",
    "NextJs Portfolio",
    "Aceternity UI Portfolio",
    "Vivek kumar",
    "KUMARxVIVEK",
    "VivekXdev",
    "vivekkumarxdev",
  ],
  authors: [
    {
      name: "Vivek Kumar",
      url: "https://github.com/vivekKumarSinghH",
    },
  ],
  creator: "vivek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vivekkumar-portfolio.vercel.app/",
    title: "Vivek Kumar - UI Engineer",
    description:
      "I'm a UI Engineer with two years of experience, dedicated to crafting user-centric web experiences. Explore my portfolio to see how I bring creativity and technical expertise to every project.",
    images: [`https://vivekkumar-portfolio.vercel.app/og-image.png`],
    siteName: "Vivek Kumar - UI Engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Kumar - UI Engineer",
    description:
      "I'm a UI Engineer with two years of experience, dedicated to crafting user-centric web experiences. Explore my portfolio to see how I bring creativity and technical expertise to every project.",
    images: [`https://vivekkumar-portfolio.vercel.app/og-image.png`],
    creator: "@KUMARxVIVEK",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
