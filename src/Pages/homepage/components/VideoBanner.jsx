import React from "react";
import { ArrowRight } from "lucide-react";

export default function VideoBanner() {
  return (
    <div className="relative w-full h-[80vh] sm:h-[70vh] overflow-hidden">
      {/* Video */}
      <video
        src="/assets/video/bannervid.mp4" // updated video path
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        playsInline
      />

      {/* Optional: dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Overlay Content */}
      <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12 text-white max-w-lg">
        <h1 className="text-2xl sm:text-4xl font-bold leading-snug mb-4 drop-shadow-lg">
          AIEC offers you with Top University Across the globe
        </h1>
        <button className="flex items-center gap-2 bg-[#FF6600] hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105 active:scale-95">
          Apply Now
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
