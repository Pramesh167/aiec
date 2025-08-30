import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

// JSON config for footer
const footerData = {
  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "/contact" },
  ],
  branches: ["Chitwan, Nepal", "Pokhara, Nepal", "Sydney, Australia"],
  contact: {
    phones: ["+977-01-5908881", "+977-01-5908882"],
    whatsapp: "+977 9801048957",
    email: "info@aiecglobal.com",
  },
  headOffice:
    "ADBL Bank's Building, AL3, Putalisadak-30, Kathmandu, Nepal",
  description:
    "AIEC-GLOBAL offers updated information on overseas studies and comprehensive support for students' education and settlement abroad. We provide expert guidance to help students achieve their international education dreams.",
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    youtube: "#",
    tiktok: "#",
  },
  copyright: "Copyright © 2024 AIEC Global. All Rights Reserved.",
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1375BC] via-[#0f5a91] to-[#0a4271] text-white overflow-hidden">
      {/* World Map Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h60v60H20V20zm15 15h30v30H35V35z M5 40h10v20H5V40z M85 25h10v15H85V25z M60 5h20v10H60V5z M25 85h15v10H25V85z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info & Quick Links */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  AIEC Global
                </h2>
                <p className="text-blue-100 leading-relaxed text-sm">
                  {footerData.description}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-100">Quick Links</h3>
                <ul className="space-y-3">
                  {footerData.quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-blue-200 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-blue-100">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaPhone className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    {footerData.contact.phones.map((phone, idx) => (
                      <p key={idx} className="text-blue-200 text-sm">
                        <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="hover:text-white transition-colors duration-300">
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <a 
                    href={`https://wa.me/${footerData.contact.whatsapp.replace(/[^+\d]/g, '')}`}
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {footerData.contact.whatsapp}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-blue-200 text-sm">
                    {footerData.contact.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Head Office */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-blue-100">Head Office</h3>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                <p className="text-blue-200 text-sm leading-relaxed">
                  {footerData.headOffice}
                </p>
              </div>
            </div>

            {/* Branches */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-blue-100">Our Branches</h3>
              <ul className="space-y-3">
                {footerData.branches.map((branch, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-blue-200 text-sm">{branch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-blue-400/20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold mb-2 text-blue-100">Follow Us</h4>
                <p className="text-blue-200 text-sm">Stay connected for the latest updates</p>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebookF, href: footerData.socialLinks.facebook, color: "hover:text-blue-400" },
                  { icon: FaInstagram, href: footerData.socialLinks.instagram, color: "hover:text-pink-400" },
                  { icon: FaTwitter, href: footerData.socialLinks.twitter, color: "hover:text-sky-400" },
                  { icon: FaLinkedinIn, href: footerData.socialLinks.linkedin, color: "hover:text-blue-400" },
                  { icon: FaYoutube, href: footerData.socialLinks.youtube, color: "hover:text-red-400" },
                  { icon: FaTiktok, href: footerData.socialLinks.tiktok, color: "hover:text-white" },
                ].map(({ icon: Icon, href, color }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className={`p-3 bg-white/10 rounded-full ${color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg`}
                    aria-label={`Follow us on ${Object.keys(footerData.socialLinks)[idx]}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-400/20 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-blue-200 text-sm text-center md:text-left">
                {footerData.copyright}
              </p>
              <div className="flex space-x-6 text-xs text-blue-300">
                <a href="/sitemap" className="hover:text-white transition-colors duration-300">
                  Sitemap
                </a>
                <a href="/accessibility" className="hover:text-white transition-colors duration-300">
                  Accessibility
                </a>
                <a href="/cookies" className="hover:text-white transition-colors duration-300">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}