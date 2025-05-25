// components/MarqueeHeader.jsx
import React from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });

const MarqueeHeader = () => {
  const staticText = "WELCOME TO VRINDHAM"; // No need to repeat text for static display

  return (
    // The outer div remains largely the same for fixed positioning and styling
    <div className="fixed top-0 left-0 w-full bg-black text-yellow-400 text-lg md:text-xl font-bold h-10 md:h-12 flex items-center justify-center overflow-hidden z-50">
      {/*
        Removed:
        - whitespace-nowrap (text can now wrap if too long, though we expect it to fit)
        - animate-marquee (the animation class)
        Added:
        - justify-center (to horizontally center the text within the flex container)
      */}
      <div className={`${orbitron.className}`}>
        {staticText}
      </div>
    </div>
  );
};

export default MarqueeHeader;