import { font } from "@/assets/font/font";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Moein Task Test",
  description: "Developed by Moein Mohsenzadeh Ganji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-roboto`}>{children}</body>
    </html>
  );
}
