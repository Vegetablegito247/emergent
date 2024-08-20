import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const StoreProvider = dynamic(() => import("@/store/StoreProvider"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emergent Creatives",
  description: "Emergent Creatives is a digital agency that helps small and medium-sized businesses, as well as nonprofits, enhance their online presence through effective digital solutions. We offer a comprehensive range of digital solutions designed to boost visibility and reach a wider audience.",
  icons: {
    icon: './logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
