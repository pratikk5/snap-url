"use client";
import Link from "next/link";

const About = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-purple-100 px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">About Snap URL</h1>
      <p className="max-w-2xl text-gray-800 mb-6">
        Snap URL is a simple, fast, and secure URL shortener designed to make sharing links easier. Unlike other services, we prioritize **privacy**—no tracking, no unnecessary logins.
      </p>
      <p className="max-w-2xl text-gray-800 mb-6">
        Our goal is to provide a **straightforward** and **hassle-free** experience for users who need short links without sacrificing security.
      </p>
      <Link href="/">
        <button className="bg-purple-500 rounded-lg shadow-lg px-5 py-2 text-white font-bold transition-transform hover:scale-105">
          Go Back Home
        </button>
      </Link>
    </main>
  );
};

export default About;
