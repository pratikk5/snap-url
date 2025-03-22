"use client";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:min-h-[50vh] p-6 md:p-12">
        {/* Left Side - Text Content */}
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market - Snap URL
          </p>
          <p className="max-w-lg">
            We are the most straightforward URL Shortener in the world. Most of the URL shorteners will track you or ask you to give your details for login. We understand your needs, so we created this URL shortener.
          </p>
          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="bg-purple-500 rounded-lg shadow-lg px-5 py-2 font-bold text-white transition-transform hover:scale-105">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/pratikk5/snap-url" target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-500 rounded-lg shadow-lg px-5 py-2 font-bold text-white transition-transform hover:scale-105">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center p-4">
          <Image 
            className="object-contain" 
            alt="Vector illustration" 
            src="/vector.jpg" 
            width={500} 
            height={500} 
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">Why Choose Snap URL?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-purple-300 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600">🔗 Instant Shortening</h3>
              <p className="mt-2">Shorten your URLs in seconds, no sign-up required.</p>
            </div>
            <div className="p-6 border border-purple-300 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600">🔒 Secure & Private</h3>
              <p className="mt-2">We don't track or store your personal data.</p>
            </div>
            <div className="p-6 border border-purple-300 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600">📊 Analytics</h3>
              <p className="mt-2">Track the number of clicks on your links (Coming soon!).</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold">1️⃣ Paste Your Link</h3>
              <p className="mt-2">Enter the long URL you want to shorten.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">2️⃣ Click 'Shorten'</h3>
              <p className="mt-2">Generate a shortened URL instantly.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">3️⃣ Share & Track</h3>
              <p className="mt-2">Copy and share your short link with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-purple-700 text-white">
        <h2 className="text-3xl font-bold">Ready to Shorten Your First Link?</h2>
        <p className="mt-4">Start using Snap URL now and simplify your URLs!</p>
        <div className="mt-6">
          <Link href="/shorten">
            <button className="bg-white text-purple-700 px-6 py-3 rounded-lg shadow-lg font-bold transition-transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
