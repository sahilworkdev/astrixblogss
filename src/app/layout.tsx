import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const nohemi = localFont({
  src: [
    {
      path: "./fonts/Nohemi-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Nohemi-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Nohemi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Nohemi-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Nohemi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Nohemi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Nohemi-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Nohemi-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Nohemi-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
});

export const metadata: Metadata = {
  title: "Astrix Blogs",
  description: "Astrix Blogs by Astrix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${nohemi.variable} min-h-screen`}>
        <Toaster />

        {children}
      </body>
    </html>
  );
}
