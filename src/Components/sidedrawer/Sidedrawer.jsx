import React, { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle
} from "lucide-react";

export default function SideDrawer({ isOpen, toggleDrawer }) {
  const [activeDropdowns, setActiveDropdowns] = useState({});
  const [activeItem, setActiveItem] = useState(null);

  const toggleDropdown = (itemName) => {
    setActiveDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const dropdownData = {
    "Study Abroad Steps": [
      "Why Study Abroad?",
      "Where and What to Study?",
      "How Do I Apply?",
      "After Receiving an Offer",
      "Prepare to Depart",
      "Arrive and Thrive"
    ],
    "Student Destinations": [
      "USA",
      "UK", 
      "Australia",
      "Canada",
      "New Zealand",
      "Ireland"
    ],
    "Find a Course": [
      "Course Advice",
      "Fastlane Courses",
      "Scholarships",
      "University Ranking - THE"
    ],
    "Test Preparation": [
      "IELTS",
      "PTE",
      "TOEFL",
      "SAT",
      "DUOLINGO"
    ],
    "Student Essentials": [
      "Money Transfer",
      "Guardianship",
      "Student Banking"
    ]
  };

  const socialIcons = {
    "Facebook": <Facebook size={20} />,
    "Instagram": <Instagram size={20} />,
    "Twitter": <Twitter size={20} />,
    "LinkedIn": <Linkedin size={20} />,
    "YouTube": <Youtube size={20} />,
    "TikTok": <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black text-xs font-bold">T</div>,
    "WhatsApp": <MessageCircle size={20} />
  };

  const MenuItem = ({ item, hasDropdown = false }) => {
    const isActive = activeItem === item;
    const isDropdownOpen = activeDropdowns[item];

    return (
      <li className="relative">
        <div
          className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 transform
            ${isActive 
              ? 'bg-gradient-to-r from-[#71BE3E] to-[#5da332] text-white shadow-lg scale-105' 
              : 'hover:bg-gradient-to-r hover:from-[#2a8fd4] hover:to-[#1375BC] hover:shadow-md hover:scale-102'
            }
            hover:translate-x-2 active:scale-98`}
          onClick={() => {
            handleItemClick(item);
            if (hasDropdown) toggleDropdown(item);
          }}
        >
          <span className="font-medium text-base">{item}</span>
          {hasDropdown && (
            <div className="transition-transform duration-300">
              {isDropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          )}
        </div>

        {hasDropdown && (
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <ul className="ml-4 mt-2 space-y-1 border-l-2 border-[#71BE3E] pl-4">
              {item === "Socials" 
                ? Object.entries(socialIcons).map(([social, icon]) => (
                    <li key={social}>
                      <div className="flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#2a8fd4] hover:translate-x-1 hover:shadow-sm active:scale-95">
                        {icon}
                        <span className="text-sm">{social}</span>
                      </div>
                    </li>
                  ))
                : dropdownData[item]?.map((subItem) => (
                    <li key={subItem}>
                      <div className="px-3 py-2 text-sm rounded-md cursor-pointer transition-all duration-300 hover:bg-[#2a8fd4] hover:text-white hover:translate-x-1 hover:shadow-sm active:scale-95">
                        {subItem}
                      </div>
                    </li>
                  ))
              }
            </ul>
          </div>
        )}
      </li>
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#1375BC] via-[#1068a8] to-[#0d5a94] text-white shadow-2xl transform transition-all duration-500 ease-in-out z-40
      ${isOpen ? "translate-x-0 w-72" : "-translate-x-60 w-72"}`}
    >
      {/* Drawer Content */}
      <nav className="flex flex-col h-full overflow-y-auto">
        {/* Logo / Header */}
        <div className="px-8 py-8 border-b border-white/20 bg-gradient-to-r from-[#1375BC] to-[#0f6bb8]">
          <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold tracking-wider">AIEC</span>
          </div>
        </div>

        {/* Menu Items */}
        <ul className="flex-1 px-4 py-6 space-y-3">
          <MenuItem item="AIEC Learning Center" />
          <MenuItem item="Study Abroad Steps" hasDropdown={true} />
          <MenuItem item="Student Destinations" hasDropdown={true} />
          <MenuItem item="Find a Course" hasDropdown={true} />
          <MenuItem item="Test Preparation" hasDropdown={true} />
          <MenuItem item="Student Essentials" hasDropdown={true} />
          <MenuItem item="Socials" hasDropdown={true} />
          <MenuItem item="Gallery" />
        </ul>

        {/* Signup Button */}
        <div className="px-6 pb-6">
          <button className="w-full bg-gradient-to-r from-[#71BE3E] to-[#5da332] hover:from-[#5da332] hover:to-[#4a8c2a] text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95">
            <span className="text-lg">Sign Up</span>
          </button>
        </div>
      </nav>

      {/* Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-[#1375BC] rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-125 active:scale-110 hover:bg-gradient-to-r hover:from-white hover:to-gray-50"
      >
        <div className="transition-transform duration-300">
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </div>
      </button>
    </div>
  );
}