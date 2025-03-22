"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-purple-700 text-white text-center py-4 mt-8">
      <p className="text-sm">
        Copyright &copy; {year} | Created with ❤️ by Pratik - Snap URL
      </p>
    </footer>
  );
};

export default Footer;
