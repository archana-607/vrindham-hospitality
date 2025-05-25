// components/VideoBackground.jsx

import React from 'react';

const VideoBackground = () => {
  return (
    // No outer flex div needed here, as the grid column will center it.
    // Ensure the video itself is responsive within its parent (the column).
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-auto h-auto object-cover rounded-lg shadow-xl max-h-[80vh]" // Ensure it fits the column and doesn't get too tall
      preload="auto"
      poster="/images/video-poster.jpg"
    >
      <source src="/videos/Intro.mp4" type="video/mp4" />
      <source src="/videos/Intro1.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;