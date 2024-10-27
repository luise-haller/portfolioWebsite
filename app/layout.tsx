import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font';
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";

export const metadata: Metadata = {
  title: "Luise Haller | EE Student Personal Portfolio Website",
  description: "EE Student Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="antialiased">
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}