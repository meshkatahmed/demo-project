import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBar from "@/navigation/navbar";
import HeadBar from "@/head/headbar";
import '@/styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Control - Flexible PrestaShop Theme",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-40">
          <div><HeadBar/></div>
          <div><NavigationBar/></div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
