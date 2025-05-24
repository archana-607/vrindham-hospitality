// components/Header.js

import Link from 'next/link'; // For client-side navigation

export default function Header() {
  return (
    <header className="bg-black p-4 shadow-md"> {/* Tailwind classes for background, padding, shadow */}
      <nav className="container mx-auto flex justify-between items-center">
        {/* Restaurant Name/Logo */}
        <Link href="/" className="text-yellow-300 text-3xl font-bold hover:text-orange-100 transition-colors duration-200">
            Vrindham
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6"> {/* Tailwind for horizontal links with spacing */}
          <li>
  <a
    href="https://www.zomato.com/agra/vrindham-dosa-corner-civil-lines/menu" // <-- IMPORTANT: Replace this with your actual Zomato URL
    target="_blank" // Opens the link in a new tab
    rel="noopener noreferrer" // Important for security when opening new tabs
    className="text-yellow-300 text-lg hover:text-orange-200 transition-colors duration-200"
  >
      Menu
  </a>
</li>
          <li>
            <Link href="/about" className="text-yellow-300 text-lg hover:text-orange-200 transition-colors duration-200">
                About Us
            </Link>
          </li>
          <li>
  <a
    href="https://www.zomato.com/agra/vrindham-dosa-corner-civil-lines/book" // <-- IMPORTANT: Replace this with your actual Zomato Reservations URL
    target="_blank" // Opens the link in a new tab
    rel="noopener noreferrer" // Important for security when opening new tabs
    className="text-yellow-300 text-lg hover:text-orange-200 transition-colors duration-200"
  >
      Reservations
  </a>
</li>
          <li>
            <Link href="/contact" className="text-yellow-300 text-lg hover:text-orange-200 transition-colors duration-200">
                Contact
            </Link>
          </li>
          {/* Optional: Add Online Ordering link if you plan to integrate */}
          {/* <li>
            <a href="[Your Online Ordering Link]" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 transition-colors duration-200">
                Order Online
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}