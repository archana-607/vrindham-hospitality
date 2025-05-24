// app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'; // <-- Add this line

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vrindham - Authentic Cuisine", // <-- Update this title
  description: "Experience the finest South Indian Food in AGRA.", // <-- Update this description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* <-- Add this line */}
        {children}
      </body>
    </html>
  );
}