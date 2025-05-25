// app/page.js

import Image from "next/image";
import VideoBackground from '../components/VideoBackground';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });

export default function Home() {
  return (
    // The main container for the entire scrollable page
    <div className={`min-h-screen bg-white text-gray-800 ${orbitron.className}`}>

      {/* --- Section 1: Top Header & Intro (Grid Layout) --- */}
      {/* This will be your "first row" with 2 columns on medium screens and up */}
      <header className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-2 md:p-4 items-start min-h-[80vh] md:min-h-screen">

        {/* Left Column: Logo and Navigation Links */}
        <div className="flex flex-col items-center text-center">
          {/* Restaurant Logo */}
          <div className="mb-8">
            <Image
              src="/images/Logo.PNG" // Adjust path to your logo image
              alt="Vrindham Restaurant Logo"
              width={400} // Adjust size as needed
              height={600} // Adjust size as needed
              className="rounded-full shadow-lg"
            />
          </div>

          {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-xl md:text-2xl font-semibold
                          border-t border-b border-gray-400 py-4 px-8 w-full">  {/* <-- Borders and padding added here */}
            {/* Individual links - Removed border classes from these */}
            <a href="#about-us" className="hover:text-orange-600 transition-colors duration-200">About Us</a>
            <a href="#reservations" className="hover:text-orange-600 transition-colors duration-200">Reservations</a>
            <a href="#contact-us" className="hover:text-orange-600 transition-colors duration-200">Contact Us</a>
            <a href="#menu" className="hover:text-orange-600 transition-colors duration-200">Menu</a>
          </nav>
        </div>

        {/* Right Column: Intro Video */}
        <div className="flex justify-center items-center">
          <VideoBackground />
        </div>
      </header>

      {/* --- Scrollable Sections --- */}

      {/* About Us Section */}
      <section id="about-us" className="min-h-screen p-8 md:p-12 flex items-center justify-center bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-orange-600">About Us</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            Welcome to Vrindham, where the rich traditions of South Indian cuisine come alive. Our chefs
            meticulously prepare each dish using authentic spices and fresh, locally sourced ingredients to
            bring you an unparalleled dining experience. From crispy dosas to aromatic curries, every bite
            tells a story of heritage and passion. Join us for a culinary journey that delights the senses.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Established in 2023, Vrindham aims to be a beacon of South Indian hospitality and flavors in the city.
          </p>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="min-h-screen p-8 md:p-12 flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-orange-600">Reservations</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            Planning a visit? Book your table in advance to ensure a seamless dining experience at Vrindham.
            We accommodate both intimate gatherings and larger celebrations.
          </p>
          <div className="mt-8">
           <a
              href="https://zomato.com/agra/vrindham-dosa-corner-civil-lines/book" // <--- REPLACE THIS WITH YOUR ACTUAL ZOMATO URL
              target="_blank"                 // <--- Opens in a new tab
              rel="noopener noreferrer"       // <--- Recommended for security when using target="_blank"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 inline-block" // <-- Added inline-block
            >
              Book a Table Online
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="min-h-screen p-8 md:p-12 flex items-center justify-center bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-orange-600">Contact Us</h2>
         
          <div className="mt-8 text-lg">
            <p className="text-lg text-gray-600 mb-2">
              Vrindham<br />
              G-32/5, Opposite LIC Building<br/> Sanjay Place<br />
              Agra, Uttar Pradesh, 282002<br />
            </p>
             <p className="text-lg text-gray-600 mb-4">
              Email Address: <a href="mailto:vrindham-hospitality@gmail.com" className="text-orange-600 hover:underline">vrindham-hospitality@gmail.com</a>
            </p>

            <h3 className="text-2xl font-bold text-gray-700 mb-2 mt-6">Hours of Operation</h3>
            <ul className="text-lg text-gray-700 space-y-1">
              <li>Monday - Sunday [ 12:00 PM - 11:00 PM]</li>
            </ul>
          </div>
          
          {/* You could add a contact form here */}
        </div>
            {/* Embed Google Map */}
            <div className="aspect-w-16 aspect-h-9 w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.5677954257003!2d78.002722774516!3d27.201317747630192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477826241ab21%3A0xa15c55d78d79b854!2sVRINDHAM%20DOSA%20CORNER%20-%20AUTHENTIC%20SOUTH%20INDIAN%20RESTAURANT!5e0!3m2!1sen!2sin!4v1748077276532!5m2!1sen!2sin" // REPLACE THIS WITH YOUR RESTAURANT'S GOOGLE MAPS EMBED CODE
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location on Google Maps"
              ></iframe>
            </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="min-h-screen p-8 md:p-12 flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-orange-600">Our Menu</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            Explore our extensive menu featuring traditional South Indian breakfast, lunch, and dinner options,
            along with our chef's specialities.
          </p>
          <div className="mt-8">
           <a
              href="/Vrindham-Menu.pdf" // <--- REPLACE THIS WITH THE ACTUAL PATH TO YOUR FILE IN /public
              download                          // <--- This attribute tells the browser to download the file
              target="_blank"                   // <--- Opens the download in a new tab (good practice)
              rel="noopener noreferrer"         // <--- Recommended for security with target="_blank"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 inline-block" // <-- Added inline-block
            >
              Download Full Menu (PDF)
            </a>
            {/* Or embed a menu viewer, or display categories */}
          </div>
        </div>
      </section>

    </div> // End of main container
  );
}