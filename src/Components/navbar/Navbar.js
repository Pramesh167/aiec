import React, { useEffect, useState, useRef } from "react";

export default function Navbar({ toggleDrawer }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const indicatorRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update indicator position when active link changes
  useEffect(() => {
    if (navRef.current && indicatorRef.current) {
      const activeElement = navRef.current.querySelector(`[data-target="${activeLink}"]`);
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        indicatorRef.current.style.left = `${offsetLeft}px`;
        indicatorRef.current.style.width = `${offsetWidth}px`;
      }
    }
  }, [activeLink]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-[#FBFDFF]`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-[#1375BC] tracking-wide">
          AIEC LOGO
        </h1>

        {/* Desktop Links + Button */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Nav Links */}
          <nav ref={navRef} className="flex space-x-8 text-gray-700 font-medium relative">
            {/* Indicator element */}
            <div 
              ref={indicatorRef}
              className="absolute bottom-0 h-0.5 bg-[#1375BC] transition-all duration-300"
              style={{ left: 0, width: 0 }}
            />
            
            <a
              href="/"
              className={`relative pb-1 transition-colors duration-300 ${
                activeLink === "home" ? "text-[#1375BC]" : "text-gray-700 hover:text-[#1375BC]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("home");
              }}
              data-target="home"
            >
              Home
            </a>
            <a
              href="/book-class"
              className={`relative pb-1 transition-colors duration-300 ${
                activeLink === "book-class" ? "text-[#1375BC]" : "text-gray-700 hover:text-[#1375BC]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("book-class");
              }}
              data-target="book-class"
            >
              Book Class
            </a>
            <a
              href="/news"
              className={`relative pb-1 transition-colors duration-300 ${
                activeLink === "news" ? "text-[#1375BC]" : "text-gray-700 hover:text-[#1375BC]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("news");
              }}
              data-target="news"
            >
              News & Articles
            </a>
            <a
              href="/event"
              className={`relative pb-1 transition-colors duration-300 ${
                activeLink === "event" ? "text-[#1375BC]" : "text-gray-700 hover:text-[#1375BC]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("event");
              }}
              data-target="event"
            >
              Event
            </a>
            <a
              href="/about"
              className={`relative pb-1 transition-colors duration-300 ${
                activeLink === "about" ? "text-[#1375BC]" : "text-gray-700 hover:text-[#1375BC]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("about");
              }}
              data-target="about"
            >
              About Us
            </a>
            <a
              href="/blogs"
              className={`relative pb-1 transition-colors duration-300 ${
                activeLink === "blogs" ? "text-[#1375BC]" : "text-gray-700 hover:text-[#1375BC]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("blogs");
              }}
              data-target="blogs"
            >
              Blogs
            </a>
          </nav>

          {/* Contact Button */}
          <button className="bg-[#FF6600] hover:bg-orange-700 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition text-base">
            Contact AIEC-Global
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="text-gray-700 hover:text-[#1375BC] focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}