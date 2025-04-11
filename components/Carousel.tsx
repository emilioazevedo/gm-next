"use client";

import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Curated News",
      videoSrc: "/assets/news.mp4",
      description: "Stay up to date with Grid Monitor’s news feed, handcrafted by our team providing you knowledge and insight across the ERCOT market",
    },
    {
      title: "Smart Agenda",
      videoSrc: "/assets/smart-page.mp4",
      description: "Save time and stay productive. Whether you're researching past meetings or watching meetings live, Grid Monitor’s Smart Agenda brings the agenda to life with video clips, news, filings, and more, in one easy-to-use view for each meeting across ERCOT, PUCT, and the Texas Legislature.",
    },
    {
      title: "Filings Browser",
      videoSrc: "/assets/filings-zoom.mp4",
      description: "Access the filings from ERCOT and PUCT in one location. Define a date range to load your results between the available tabs, then filter through them in an instant.",
    },
    {
      title: "Following",
      videoSrc: "/assets/following.mp4",
      description: "Build out your own following module with projects, bills, and revisions requests that are important to your unique interests. Our systems will notify you with new filing activity in the controls you follow.",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative w-full py-12 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #f3f4f6, #e5e7eb)", // Gradient background
        minHeight: "1000px", // Minimum height of 800px
      }}
    >
      {/* Header and Description */}
      <div className="text-center mb-8 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-[#194f90] mb-4">
          Grid Monitor for ERCOT
        </h2>
        <p className="text-lg text-gray-600">
          We collect, organize, and continuously track your ERCOT Regulatory projects of interest with filings, agendas, curated news, and original reporting across all three relevant regulatory venues — ERCOT, PUCT, and the TX State Legislature — in one, easy-to-use platform.
        </p>
      </div>

      <div className="container mx-auto px-6 w-10/12 relative flex items-center justify-center">
        {/* Previous Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-[-4rem] top-1/2 transform -translate-y-1/2 z-10 bg-[#194f90] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center"
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

        {/* Slide Content */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* Description */}
          <div className="mt-4 md:mt-0 md:mr-6 text-center md:text-left md:w-1/3">
            <h3 className="text-lg font-semibold text-[#194f90] mb-2">{slides[currentSlide].title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Video */}
          <video
            src={slides[currentSlide].videoSrc}
            className="w-full md:w-2/3 rounded-lg shadow-lg"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-[-4rem] top-1/2 transform -translate-y-1/2 z-10 bg-[#194f90] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center"
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
    </section>
  );
};

export default Carousel;
