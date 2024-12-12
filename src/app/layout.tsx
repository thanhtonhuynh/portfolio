import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TailwindScreenSizeIndicator } from "@/components/TailwindScreenSizeIndicator";
import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth font-geist-sans antialiased`}
      >
        <ThemeProvider>
          <div className="relative mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col border-border/40 bg-background dark:border-border min-[1536px]:border-x">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <TailwindScreenSizeIndicator />
      </body>
    </html>
  );
}
