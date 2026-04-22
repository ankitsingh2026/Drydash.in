import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/common/navbar";
import localFont from "next/font/local";
import Footer from '@/components/common/footer'
import "./globals.css";
import { cn } from "@/lib/utils";
import BottomBlur from "@/components/common/bottomBlur";
import { ReactLenis } from "@/lib/lenis"
import { Toaster } from 'sonner';

const helveticaNeue = localFont({
  src: "../../public/Assests/Fonts/HelveticaNeueMedium.otf",
  variable: "--font-sans",
});

const didot = localFont({
  src: "../../public/Assests/Fonts/Didot Medium.ttf",
  variable: "--font-didot",
})


export const metadata: Metadata = {
  title: "Drydash",
  description: "DryDash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={cn("antialiased", helveticaNeue.variable, didot.variable, "font-sans")}
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <ReactLenis root options={{ autoResize: true }}>
          <Navbar />
          {children}
          <BottomBlur />
          <Footer />
          <Toaster />
        </ReactLenis>
      </body>
    </html>
  );
}
