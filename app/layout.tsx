import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Global styles

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nexus Operations | One contractor. Exclusively yours.",
  description:
    "Managed property services for homeowners and property managers. We handle the full lifecycle: intake, contractor assignment, estimates, and project tracking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
