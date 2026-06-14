import type { Metadata } from "next";
import { Merriweather, Roboto_Mono } from "next/font/google";
import "./globals.css";

const merriWeather = Merriweather({
  variable: "--font-merriweather",
  subsets:["latin"],
})

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Chirag M Nayak - SWE",
  description: "The Portfolio page of Chirag M Nayak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriWeather.variable} ${robotoMono.variable} ${merriWeather.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
