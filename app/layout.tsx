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
  title: "Dr. Tuo Wu - Research Fellow at NTU",
  description: "Academic homepage of Dr. Tuo Wu, Research Fellow at Nanyang Technological University, specializing in wireless communications and signal processing.",
  keywords: "Tuo Wu, NTU, wireless communications, signal processing, optimization algorithm, machine learning, RIS, NOMA, FAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <a href="/" className="flex items-center space-x-2 font-bold text-lg">
                <span>Dr. Tuo Wu</span>
              </a>
              <nav className="ml-auto flex gap-4">
                <a href="#about" className="text-sm font-medium">About</a>
                <a href="#news" className="text-sm font-medium relative">
                  News
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full"></span>
                </a>
                <a href="#education" className="text-sm font-medium">Education</a>
                <a href="#research" className="text-sm font-medium">Research</a>
                <a href="#projects" className="text-sm font-medium">Projects</a>
                <a href="#publications" className="text-sm font-medium">Publications</a>
                <a href="#awards" className="text-sm font-medium">Awards</a>
                <a href="#activities" className="text-sm font-medium">Activities</a>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Dr. Tuo Wu. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
