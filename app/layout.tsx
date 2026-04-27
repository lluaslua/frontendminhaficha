import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const PoppinsSans = Poppins({
  variable: "--font-Poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Minha Ficha",
  description: "Gerenciador de ficha e campanha rpg Dungeons And Dragons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${PoppinsSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
