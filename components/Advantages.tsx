import React from 'react';
import Image from 'next/image';
import SvgBackground from './SvgBackground';

const Advantages = () => {
  const features = [
    {
      icon: "/assets/ercot-monitoring.png",
      title: "ERCOT Monitoring",
      description: "Real-time tracking of ERCOT meetings, decisions, and market notices that impact your business."
    },
    {
      icon: "/assets/video-library.png",
      title: "Video Library",
      description: "Access recordings of key hearings, meetings, and sessions from all relevant regulatory bodies."
    },
    {
      icon: "/assets/document-analysis.png",
      title: "Document Analysis",
      description: "Stay informed with detailed analysis of legislative documents, rule changes, and regulatory filings."
    },
    {
      icon: "/assets/legislative-calendar.png",
      title: "Legislative Calendar",
      description: "Never miss an important date with our comprehensive calendar of hearings and sessions."
    },
    {
      icon: "/assets/conference-coverage.png",
      title: "Conference Coverage",
      description: "Get insights from energy industry conferences and events without having to attend in person."
    },
    {
      icon: "/assets/ai-assistant.png",
      title: "AI Assistant",
      description: "Ask our AI assistant questions about ERCOT, PUCT, and Texas Legislature to get quick answers."
    }
  ];

  return (
    <SvgBackground>
      <section className="py-16 w-full">
        <div className="container mx-auto px-6 w-11/12 text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-[#194f90] to-gray-300 mb-4">
            Comprehensive Monitoring Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            GridMonitor provides all the tools you need to stay ahead of energy legislation and regulatory changes in Texas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-2xl p-6 text-left hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-violet-700 via-[#2780ed] to-blue-300 rounded-full p-3">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#194f90] ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SvgBackground>
  );
};

export default Advantages;
