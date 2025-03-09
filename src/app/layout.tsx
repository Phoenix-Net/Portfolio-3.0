import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhoenixNet-Labs",
  description: "A compilation of projects, accomplishments, and experiences.",
  icons: {
    icon: '/images/pnet-logo.png',
    apple: '/images/pnet-logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-200">
            <ThemeSwitcher />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 