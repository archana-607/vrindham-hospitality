// components/VideoBackground.jsx

import React from 'react';

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      // Updated classes to make the video cover its parent
      className="absolute inset-0 w-full h-full object-cover z-0"
      preload="auto"
      poster="/images/video-poster.jpg" // Path to an image that displays before the video loads
    >
      <source src="/videos/Intro.mp4" type="video/mp4" />
      <source src="/videos/Intro1.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;