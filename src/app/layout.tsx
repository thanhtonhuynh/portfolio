import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TailwindScreenSizeIndicator } from "@/components/TailwindScreenSizeIndicator";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ton Huynh",
  description: "Personal website of Ton Huynh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-geist-sans antialiased`}>
        <ThemeProvider>
          {/* <div className="relative mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col border-border/40 bg-background dark:border-border min-[1536px]:border-x"> */}
          <Header />
          <div className="relative mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col bg-background">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster closeButton duration={10000} />
        <TailwindScreenSizeIndicator />
        <SpeedInsights />
      </body>
    </html>
  );
}
