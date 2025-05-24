// app/contact/page.js

import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Vrindham</title>
        <meta name="description" content="Get in touch with Your Restaurant Name for inquiries, reservations, or feedback." />
      </Head>

      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">Get In Touch</h1>

        <section className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Visit Us</h2>
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

          <div>
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Find Us on the Map</h2>
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
          </div>
        </section>

        {/* Simple Contact Form (Frontend only, for now. Requires backend or service for sending emails) */}
        <section className="bg-gray-100 rounded-lg shadow-inner p-8 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your message to us..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white text-xl font-semibold px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4 text-center">
            (Note: This form requires backend integration to send emails. For now, it's just a visual.)
          </p>
        </section>
      </main>
    </>
  );
}