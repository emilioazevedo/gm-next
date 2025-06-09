"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [meetingTypes, setMeetingTypes] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  const videos = [
    {
      id: 'video1',
      title: '',
      url: '/assets/3400-meetings.mp4', // Correct path for public assets in Next.js
      description: 'Watch recordings of key hearings, meetings, and sessions from all relevant regulatory bodies.'
    },
    {
      id: 'video2', 
      title: '',
      url: '/assets/streaming-lege1.mp4',
      description: 'Meetings, hearings and conferences'
    },
    {
      id: 'video3',
      title: '', 
      url: '/assets/following2.mp4',
      description: 'Projects, bills, and revisions requests'
    },
    {
      id: 'video4',
      title: '',
      url: '/assets/streaming1.mp4', 
      description: 'ERCOT and PUCT in one location'
    },
    {
      id: 'video5',
      title: '',
      url: '/assets/GM-AI.mp4',
      description: 'Ask our AI assistant questions about ERCOT, PUCT, and Texas Legislature to get quick answers.'
    }
  ];

  const tabs = [
    '3400+ Meetings',
    'Streaming', 
    'Following',
    'Filings Browser',
    'GridMonitor AI'
  ];

  // Tab click handler
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Auto-play effect for tab videos
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, [activeTab]);

  // Play each video in full, then move to the next, looping back after the last
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handler for when the video ends
    const handleEnded = () => {
      setActiveTab((prev) => (prev + 1) % videos.length);
    };

    video.addEventListener("ended", handleEnded);

    // Always play from the start when activeTab changes
    video.currentTime = 0;
    video.play().catch((error) => {
      console.log("Video autoplay prevented:", error);
    });

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, videos.length]);

  // Fetch meeting types from the markdown file
  useEffect(() => {
    const fetchMeetingTypes = async () => {
      const res = await fetch("/mettings-types/meeting_types.md");
      const text = await res.text();
      const types = text.split("\n").filter((line) => line.trim() !== "");
      setMeetingTypes(types);
    };

    fetchMeetingTypes();
  }, []);

  return (
    <section className="relative bg-slate-400 overflow-hidden z-20">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 60% 85%, rgba(218, 232, 254, 1), rgba(168, 232, 254, 0) 45%),
            radial-gradient(circle at 70% 40%, rgba(223, 244, 254, 1), rgba(215, 248, 254, 0) 45%),
            radial-gradient(circle at 30% 30%, rgba(254, 255, 255, 0.8), rgba(254, 245, 245, 0) 35%)
          `,
        }}
      ></div>

      <div className="container mx-auto px-6 mt-20 mb-20 w-11/12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-full mx-auto">
          {/* Left Column - Verbiage and Button */}
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-blue-700 bg-white/50 shadow-sm rounded-full">
              <Image
                src="/assets/tx-flag.png"
                alt="Texas Flag"
                width={20}
                height={20}
                className="mr-2"
              />
              Comprehensive Energy Legislation Tracking
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 -z-40">
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-black via-sky-900 to-black"
              >
                Keep Track of Texas Energy 
              </span>{" "}
              <span className="text-sky-700">Legislation</span> &{" "}
              <span className="text-sky-700">Regulation</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8">
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
          <div className="h-128 flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-0 relative">
            <div className="mx-auto p-4" style={{ backgroundColor: 'transparent', width: '700px', height: '550px' }}>
              {/* Tab Navigation */}
              <div className="flex bg-white bg-opacity-30 rounded-full p-2 mb-4 shadow-lg">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`flex-1 px-3 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-white text-gray-800 shadow-md'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-white hover:bg-opacity-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="bg-white bg-opacity-40 rounded-3xl p-4 shadow-xl" style={{ height: 'calc(100% - 100px)' }}>
                <h2 className="text-sm  text-gray-800 pb-2">
                  {videos[activeTab].title}
                </h2>
                
                {/* Video Player */}
                <div className="mb-3 mt-0">
                  <video
                    ref={videoRef}
                    key={videos[activeTab].id}
                    className="w-full rounded-lg"
                    style={{ height: '340px' }}
                    muted
                    playsInline
                  >
                    <source src={videos[activeTab].url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Video Description */}
                <div className="text-gray-700 text-sm">
                  <p className="truncate">{videos[activeTab].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meeting Types Ticker */}
      <div className="scroll-container bg-white/20 bg-blur py-4 mt-10 -z-50">
        <div className="animate-scroll">
          {meetingTypes.map((type, index) => (
            <span key={`first-${index}`} className="text-[#194f90] font-semibold shadow-sm text-sm mx-6">
              {type}
            </span>
          ))}
          {meetingTypes.map((type, index) => (
            <span key={`second-${index}`} className="text-[#194f90] font-semibold shadow-sm text-sm mx-6">
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;