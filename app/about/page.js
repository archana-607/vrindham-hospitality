// app/about/page.js

import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Vrindham</title>
        <meta name="description" content="Learn about the story, philosophy, and passion behind Your Restaurant Name." />
      </Head>

      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">Our Story & Philosophy</h1>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12 flex flex-col md:flex-row items-center">
          <img src="/images/restaurant-interior.jpg" alt="Restaurant Interior" className="w-full md:w-1/2 rounded-lg mr-0 md:mr-8 mb-6 md:mb-0 object-cover h-64" />
          <div>
            <h2 className="text-3xl font-bold text-gray-700 mb-4">The Heart of Our Kitchen</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              [Your Restaurant Name] was founded by [Founder's Name] with a vision to bring the authentic flavors of [Cuisine Type] to [Your City/Area]. Our journey began in [Year] with a simple idea: to create a dining experience that feels like coming home.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in using the freshest, locally sourced ingredients whenever possible, combined with traditional cooking techniques and a touch of modern innovation. Every dish is crafted with passion and precision, ensuring a memorable culinary adventure for our guests.
            </p>
          </div>
        </section>

<section className="bg-gray-50 rounded-lg shadow-inner p-8">
  <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Meet Our Chef</h2>
  <div className="flex flex-col items-center text-center">
    <img
      src="/images/Bhav.png" // <-- Replace with your chef's image filename
      alt="Chef Bhav Shukla" // <-- Replace with your chef's name
      className="w-48 h-48 rounded-full object-cover object-top mb-4 shadow-md"
    />
    <h3 className="text-2xl font-semibold text-gray-800">Bhav Shukla</h3>
    <p className="text-orange-600 text-sm mb-2">Head Chef & Culinary Director</p>
    <p className="text-gray-600 text-center leading-relaxed">
      With over 20 years of experience and a passion for authentic flavors, Chef Bhav Shukla brings a wealth of knowledge and creativity to our kitchen, specializing in multinational cusisine from the heart of Bengaluru.
    </p>
    {/* You can add more details about the chef here if you like */}
  </div>
</section>
      </main>
    </>
  );
}