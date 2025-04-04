import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ProgressBar from "@/components/shared/ProgressBar";
import ProgressBarWithSuspense from "@/components/shared/ProgressBar";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Coffo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased font-dm`}
      >
        <ProgressBarWithSuspense/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
