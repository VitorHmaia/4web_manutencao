import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maintenance",
  description: "Design for General Maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <ThemeProvider attribute="class" defaultTheme="system">{children}</ThemeProvider>
        </body>
    </html>
  );
}