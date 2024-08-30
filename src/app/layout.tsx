import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./nullstyle.scss"
import "./globals.scss";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import cn from 'classnames';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watch Flex",
  description: "Watch movies for free oline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body className={cn(inter.className, 'body')}>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
