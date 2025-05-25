// app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
// import Header from '../components/Header'; // <-- REMOVE OR COMMENT OUT THIS LINE
 import MarqueeHeader from '../components/MarqueeHeader'; // <-- IMPORT THE NEW MARQUEE HEADER

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Vrindham - Authentic Cuisine",
  description: "Experience the finest South Indian Food in AGRA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-10 md:pt-12`}> {/* pt-10 matches h-10, md:pt-12 matches md:h-12 */}
        <MarqueeHeader /> {/* <-- RENDER THE NEW MARQUEE HEADER HERE */}
        {children} 
      </body>
    </html>
  );
}