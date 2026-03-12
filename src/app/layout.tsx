import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const sfUiDisplay = localFont({
  src: [
    { path: "./fonts/sf-ui-display-medium.woff2", weight: "500" },
    { path: "./fonts/sf-ui-display-semibold.woff2", weight: "600" },
    { path: "./fonts/sf-ui-display-bold.woff2", weight: "700" },
  ],
  variable: "--font-sf-ui-display",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Краснодар компрессор сервис",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${poppins.variable} ${sfUiDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
