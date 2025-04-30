"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Restart the video
        videoRef.current.play(); // Explicitly play the video
      }
    }, 30000); // Restart every 30 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="relative bg-slate-400 overflow-hidden z-20">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 60% 85%, rgba(218, 232, 254, 0.9), rgba(168, 232, 254, 0) 25%),
            radial-gradient(circle at 70% 40%, rgba(223, 244, 254, 0.8), rgba(215, 248, 254, 0) 35%),
            radial-gradient(circle at 30% 30%, rgba(254, 249, 245, 0.5), rgba(254, 245, 245, 0) 35%)
          `,
        }}
      ></div>

      <div className="container mx-auto px-6 mt-20 mb-20 w-11/12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-full mx-auto">
          {/* Left Column - Verbiage and Button */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              <Image
                src="/assets/tx-flag.png"
                alt="Texas Flag"
                width={20}
                height={20}
                className="mr-2"
              />
              Comprehensive Energy Legislation Tracking
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Keep Track of Texas Energy <span className="text-[#194f90]">Legislation</span> & <span className="text-[#194f90]">Regulation</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Stay ahead with our comprehensive tracking of ERCOT, PUCT, Texas Legislature, TexasRE, and industry conferences.
            </p>
            <div className="button-wrap mb-10 relative flex items-center">
              <a href="/trial">
                <button className="global-button">
                  <span>Start your free trial today</span>
                </button>
              </a>
              <div className="button-shadow z-0"></div>
            </div>
          </div>

          {/* Right Column - Video and Features Section */}
          <div className="h-128 flex items-start justify-between space-x-8 relative"> {/* Adjusted justify-between and reduced space-x */}
            {/* Video */}
            <video
              ref={videoRef} // Attach the ref to the video element
              className="rounded-lg shadow-lg w-3/5 relative z-10"
              autoPlay
              muted
              playsInline
              src="/assets/sb6AI.mp4"
            ></video>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 w-1/3 absolute top-1/4 right-12 transform -translate-y-1/4 z-0"> {/* Adjusted right alignment */}
              {/* Meetings */}
              <div className="relative bg-blue-200/55 backdrop-blur-xl border border-slate-300/50 p-4 rounded-lg shadow-lg">
                <Image
                  src="/assets/meetings.png"
                  alt="Meetings Icon"
                  width={12}
                  height={12}
                  className="absolute top-2 right-2"
                />
                <div>
                  <p className="text-lg font-bold text-[#194f90]">3400+</p>
                  <p className="text-sm text-gray-600">meetings archived</p>
                </div>
              </div>

              {/* Streaming */}
              <div className="relative bg-blue-200/55 backdrop-blur-md border border-slate-300/50 p-4 rounded-lg shadow-lg">
                <Image
                  src="/assets/video.png"
                  alt="Streaming Icon"
                  width={12}
                  height={12}
                  className="absolute top-2 right-2"
                />
                <div>
                  <p className="text-lg font-bold text-[#194f90]">Streaming</p>
                  <p className="text-sm text-gray-600">meetings, hearings and conferences</p>
                </div>
              </div>

              {/* Following */}
              <div className="relative bg-blue-200/35 backdrop-blur-xl border border-slate-300/50 p-4 rounded-lg shadow-lg">
                <Image
                  src="/assets/fallowing.png"
                  alt="Following Icon"
                  width={12}
                  height={12}
                  className="absolute top-2 right-2"
                />
                <div>
                  <p className="text-lg font-bold text-[#194f90]">Following</p>
                  <p className="text-sm text-gray-600">projects, bills, and revisions requests</p>
                </div>
              </div>

              {/* Filings Browser */}
              <div className="relative bg-blue-200/35 backdrop-blur-xl border border-slate-300/50 p-4 rounded-lg shadow-lg">
                <Image
                  src="/assets/filling-browser.png"
                  alt="Filings Browser Icon"
                  width={12}
                  height={12}
                  className="absolute top-2 right-2"
                />
                <div>
                  <p className="text-lg font-bold text-[#194f90]">Filings Browser</p>
                  <p className="text-sm text-gray-600">ERCOT and PUCT in one location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;