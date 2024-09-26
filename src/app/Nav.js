"use client";

import React, { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setScrolled(currentScrollPos > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-purple-600 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="ml-3 text-xl text-black-600">Portfolio</span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 text-black-600 hover:text-gray-600">
            Home
          </a>
          <a href="#about" className="mr-5 text-black-600 hover:text-gray-600">
            About
          </a>
          <a href="#service" className="mr-5 text-black-600 hover:text-gray-600">
            Expertise
          </a>
          <a href="#contact" className="mr-5 text-black-600 hover:text-gray-600">
            Contact
          </a>
        </nav>
        <a
          href="https://github.com/danielabramiani"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
