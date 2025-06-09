"use client";

import React, { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Smart Agenda",
      videoSrc: "/assets/smart-page.mp4",
      description: "Save time and stay productive. Whether you're researching past meetings or watching meetings live, Grid Monitor’s Smart Agenda brings the agenda to life with video clips, news, filings, and more, in one easy-to-use view for each meeting across ERCOT, PUCT, and the Texas Legislature.",
      icon: "/assets/meetings.png", // Added icon path
    },
    {
      title: "Curated News",
      videoSrc: "/assets/news.mp4",
      description: "Stay up to date with Grid Monitor’s news feed, handcrafted by our team providing you knowledge and insight across the ERCOT market",
      icon: "/assets/news.png", // Added icon path
    },
    {
      title: "Filings Browser",
      videoSrc: "/assets/filings-zoom.mp4",
      description: "Access the filings from ERCOT and PUCT in one location. Define a date range to load your results between the available tabs, then filter through them in an instant.",
      icon: "/assets/filling-browser.png", // Added icon path
    },
    {
      title: "Following",
      videoSrc: "/assets/following.mp4",
      description: "Build out your own following module with projects, bills, and revisions requests that are important to your unique interests. Our systems will notify you with new filing activity in the controls you follow.",
      icon: "/assets/following.png", // Added icon path
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full flex flex-col items-center bg-slate-400 pt-10 pb-10 justify-center">
       <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 60% 15%, rgba(218, 232, 254, 0.9), rgba(168, 232, 254, 0) 25%),
            radial-gradient(circle at 60% 85%, rgba(218, 232, 254, 0.9), rgba(168, 232, 254, 0) 25%),
            radial-gradient(circle at 70% 40%, rgba(223, 244, 254, 0.8), rgba(215, 248, 254, 0) 35%),
            radial-gradient(circle at 30% 30%, rgba(254, 249, 245, 0.5), rgba(254, 245, 245, 0) 35%)
          `,
        }}
      ></div>
      {/* Header and Description */}
      <div className="text-center mb-10 max-w-4xl z-30">
        <h2 className="text-3xl font-extrabold text-[#194f90]">
          Grid Monitor for ERCOT
        </h2>
        <p className="text-sm p-4 text-gray-600">
          We collect, organize, and continuously track your ERCOT Regulatory projects of interest with filings, agendas, curated news, and original reporting across all three relevant regulatory venues — ERCOT, PUCT, and the TX State Legislature — in one, easy-to-use platform.
        </p>
      </div>

      <div className="container mx-auto px-6 w-11/12 md:w-11/12 relative flex flex-col items-center">
        {/* Slide Content */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-white w-full md:w-[90%] lg:w-[90%] rounded-xl overflow-hidden shadow-lg">
            {/* Video */}
            <video
              src={slides[currentSlide].videoSrc}
              className="border-black/20 border-b-2 w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              muted
              autoPlay
              loop
              playsInline
            />
            {/* Description */}
            <div className="p-4 text-left">
              <div className="flex items-center mb-2">
                {slides[currentSlide].icon && (
                  <Image
                    src={slides[currentSlide].icon}
                    alt={`${slides[currentSlide].title} Icon`}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                )}
                <h3 className="text-lg font-semibold text-[#194f90]">{slides[currentSlide].title}</h3>
              </div>
              <p className="text-base text-gray-900 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex items-center justify-center mt-6 space-x-6">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="bg-white text-gray-500 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="bg-white text-gray-500 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>



     
      </div>
    </section>
  );
};

export default Carousel;
// No further changes needed. The code is valid for Vercel deployment.
