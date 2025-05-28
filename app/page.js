// app/page.js

import Image from "next/image";
import VideoBackground from '../components/VideoBackground';
import { Inter } from 'next/font/google';

// Corrected: Font definition is at the module scope (top level of the file)
// Also, renamed the variable to 'interFont' to avoid conflict with the imported 'Inter' type.
const interFont = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter', // Changed variable name to reflect 'Inter' font
});

export default function Home() {
  return (
    // Applied the new font variable to the root div
    <div className={`min-h-screen bg-white text-gray-800 ${interFont.variable} font-sans`}>

      <header className="relative min-w-[80vh] h-full md:min-h-screen flex items-center justify-center">
  {/* Video Background (Covers the entire header) */}
  <VideoBackground />

  {/* Overlay Content: Logo and Navigation (positioned on top of the video) */}
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-2 md:p-4 bg-black bg-opacity-30">
    {/* Restaurant Logo */}
     {/* Navigation Links */}
    <nav className={`flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-xl md:text-2xl font-semibold
                     py-4 px-8 w-full md:w-auto bg-black bg-opacity-50 text-white rounded-md ${interFont.className}`}>
      {/* Individual links */}
      <a href="#about-us" className="hover:text-orange-600 transition-colors duration-200">About Us</a>
      <a href="#reservations" className="hover:text-orange-600 transition-colors duration-200">Reservations</a>
      <a href="#contact-us" className="hover:text-orange-600 transition-colors duration-200">Contact Us</a>
      <a href="#menu" className="hover:text-orange-600 transition-colors duration-200">Menu</a>
    </nav>
  </div>
</header>

      {/* --- Scrollable Sections --- */}
       {/* About Us Section */}
      <section id="about-us" className="min-h-screen p-8 md:p-12 flex items-center justify-center bg-gray-50 border-t border-b border-gray-200">
  <div className="max-w-4xl text-center">
    <h2 className={`text-5xl font-bold mb-6 text-orange-600 ${interFont.className}`}>About Us</h2>
    <p className="text-2xl leading-relaxed text-gray-700">
      <span className="font-bold">Welcome to Vrindham</span>
    </p>
     <p className="text-2xl leading-relaxed text-gray-700">
      <span className="font-bold">Authentic South Indian Dosas Crafted with Soul.</span>
    </p>
    {/* Chef's Image */}
    <div className="my-8"> {/* Added margin for spacing */}
      <Image
        src="/images/Bhav.png" // **IMPORTANT: Replace with the actual path to your chef's image**
        alt="Chef Bhav Shukla"
        width={200} // Adjust size as needed
        height={150} // Adjust size as needed
        className="rounded-full shadow-lg mx-auto" // mx-auto for centering
      />
    </div>
    <p className="text-xl leading-relaxed text-gray-700">
      Founded in 2024 by acclaimed chef Bhav Shukla, the visionary behind Bangalore Café and Chambal, Vrindham is where tradition meets taste. With over 12 years of culinary expertise, Chef Bhav brings the spotlight to South India’s most iconic dish — the dosa.
      <br></br>
      From timeless classics to modern twists, every dosa at Vrindham is made with handpicked ingredients and a deep respect for tradition. Step in and savour the soul of South India — one crisp bite at a time.
    </p>
  </div>
</section>

 {/* --- MENU Section --- */}
      <section id="menu" className="min-h-screen p-8 md:p-12 flex items-center justify-center">
  <div className="max-w-4xl text-center">
    <h2 className={`text-5xl font-bold mb-6 text-orange-600 ${interFont.className}`}>Our Menu</h2>
    <p className="text-xl leading-relaxed text-gray-700 mb-8">
      Explore our extensive menu featuring traditional South Indian breakfast, lunch, and dinner options,
      along with our chef's specialities.
    </p>
    <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center items-center">
      {/* First Menu Image */}
      <div className="w-full md:w-1/2 max-w-sm mx-auto border-4 border-gray-300 rounded-lg shadow-xl overflow-hidden">
        <Image
          src="/images/Menu_page-0001.jpg" // CHANGE THIS TO YOUR FIRST MENU IMAGE PATH
          alt="Vrindham Restaurant Menu - Page 1"
          width={800} // Adjust based on your image aspect ratio and desired display size
          height={1200} // Adjust based on your image aspect ratio
          layout="responsive"
          objectFit="contain"
        />
      </div>

      {/* Second Menu Image */}
      <div className="w-full md:w-1/2 max-w-sm mx-auto border-4 border-gray-300 rounded-lg shadow-xl overflow-hidden">
        <Image
          src="/images/Menu_page-0002.jpg" // CHANGE THIS TO YOUR SECOND MENU IMAGE PATH
          alt="Vrindham Restaurant Menu - Page 2"
          width={800} // Adjust based on your image aspect ratio and desired display size
          height={1200} // Adjust based on your image aspect ratio
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  </div>
</section>

     
      {/* Reservations Section */}
      <section id="reservations" className="min-h-screen p-8 md:p-12 flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <h2 className={`text-5xl font-bold mb-6 text-orange-600 ${interFont.className}`}>Reservations</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            Planning a visit? Book your table in advance to ensure a seamless dining experience at Vrindham.
            We accommodate both intimate gatherings and larger celebrations.
          </p>
          <div className="mt-8">
           <a
              href="https://zomato.com/agra/vrindham-dosa-corner-civil-lines/book" // <--- REPLACE THIS WITH YOUR ACTUAL ZOMATO URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 inline-block"
            >
              Book a Table Online
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
  <section id="contact-us" className="min-h-screen p-8 md:p-12 flex items-center justify-center bg-gray-50 border-t border-b border-gray-200">
  {/* Main content wrapper, adjusting max-width for balance */}
  <div className="max-w-5xl w-full text-center">
    <h2 className={`text-5xl font-bold mb-10 text-orange-600 ${interFont.className}`}>Contact Us</h2>
    {/* Flex container for contact details and map - using gap for space */}
    <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 md:gap-12 w-full">

      {/* Left Column: Contact Details */}
      <div className="w-full md:w-1/2 text-left p-4 bg-white rounded-lg shadow-md">
      <h3 className={`text-2xl font-bold text-gray-700 mb-2 mt-6 ${interFont.className}`}>Vrindham Dosa Corner</h3>
        <p className="text-lg text-gray-600 mb-2">
                   G-32/5, Opposite LIC Building<br/> Sanjay Place<br />
          Agra, Uttar Pradesh, 282002<br />
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Email Address: <a href="mailto:vrindham-hospitality@gmail.com" className="text-orange-600 hover:underline">vrindham-hospitality@gmail.com</a>
        </p>

        <h3 className={`text-2xl font-bold text-gray-700 mb-2 mt-6 ${interFont.className}`}>Hours of Operation</h3>
        <ul className="text-lg text-gray-700 space-y-1">
          <li>Monday - Sunday [ 12:00 PM - 11:00 PM]</li>
        </ul>
      </div>

      {/* Right Column: Embed Google Map */}
      <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9 h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
        <iframe
          // ** IMPORTANT: Replace the entire 'src' value below with the actual URL from Google Maps Embed code **
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.5677954257003!2d78.002722774516!3d27.201317747630192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477826241ab21%3A0xa15c55d78d79b854!2sVRINDHAM%20DOSA%20CORNER%20-%20AUTHENTIC%20SOUTH%20INDIAN%20RESTAURANT!5e0!3m2!1sen!2sin!4v1748077276532!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vrindham Restaurant Location on Google Maps"
        ></iframe>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}