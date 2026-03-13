import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Geist } from 'next/font/google';
import './globals.css';
import { AppProviders } from './providers';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cricket Analyst Pro — Decision-grade Cricket Intelligence',
  description:
    'Professional cricket analytics platform for coaches and analysts. Match context, player form analysis, and AI-powered scenario simulation in one workspace.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
