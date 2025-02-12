import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DOUM - Skilled Experts Anytime Anywhere",
  description: "Connect with DOUM Digitally",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-start items-center gap-8 bg-[#e1eefd] overflow-x-hidden min-h-screen w-full max-w-[100vw]`}
>
        <Navbar/>
        <Hero/>
        {children}
        
      </body>
    </html>
  );
}
