import React from 'react';
import Image from 'next/image';

const TestimonialBackground = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1000 400"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Background color */}
      <rect width="1000" height="400" fill="#f1f5f8" />
      
      {/* Subtle wave patterns */}
      <path d="M0,150 C100,100 200,200 300,150 C400,100 500,200 600,150 C700,100 800,200 900,150 C1000,100 1100,200 1200,150 L1200,400 L0,400 Z" 
            fill="#c6d0d6" opacity="0.1" />
      
      {/* Second wave pattern with different opacity */}
      <path d="M0,200 C100,250 200,150 300,200 C400,250 500,150 600,200 C700,250 800,150 900,200 C1000,250 1100,150 1200,200 L1200,400 L0,400 Z" 
            fill="#c6d0d6" opacity="0.2" />
      
      {/* Quote mark accents */}
      <g fill="#adb5bd" opacity="0.12">
        <path d="M120,100 L140,100 L140,80 C140,70 130,60 120,60 L120,70 C125,70 130,75 130,80 L120,80 Z" />
        <path d="M150,100 L170,100 L170,80 C170,70 160,60 150,60 L150,70 C155,70 160,75 160,80 L150,80 Z" />
        
        <path d="M820,90 L840,90 L840,70 C840,60 830,50 820,50 L820,60 C825,60 830,65 830,70 L820,70 Z" />
        <path d="M850,90 L870,90 L870,70 C870,60 860,50 850,50 L850,60 C855,60 860,65 860,70 L850,70 Z" />
      </g>
      
      {/* Subtle curved line decoration */}
      <path d="M50,120 Q200,10 350,120 Q500,60 650,120 Q800,180 950,120" 
            fill="none" stroke="#bcdcf0" strokeWidth="1" opacity="0.1" />
    </svg>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Market Participant',
      role: '',
      text: '"I have to read 100k words a day. Grid Monitor\'s curation keeps the fluff and noise off my screen"',
      initials: 'MP',
    },
    {
      name: 'Consultant',
      role: '',
      text: '"I was able to do 20 minutes worth of agenda research in 20 seconds with Grid Monitor\'s integrated Smart Agenda."',
      initials: 'C',
    },
    {
      name: 'Lawyer',
      role: '',
      text: 'The main benefit I initially found was the convenience of having all three relevant venues in one product. It saves so much time',
      initials: 'L',
    },
    {
      name: 'Market Participant',
      role: '',
      text: '"Having the ERCOT Working Groups not only captured, but key docs and transcripts on one page – this is a huge time-saver."',
      initials: 'MP',
    },
    {
      name: 'Lobbyist',
      role: '',
      text: '"As a one-person shop, I am overwhelmed by the need to be in more than one place simultaneously. Grid Monitor helps me keep up when I miss things"',
      initials: 'L',
    },
  ];

  return (
    <section className="relative py-16 w-full">
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full">
        <TestimonialBackground />
      </div>
      
      {/* Content - with relative positioning to appear above the background */}
      <div className="relative z-10 container mx-auto px-6 w-11/12 text-center">
        <div className="mb-12 flex items-center justify-center space-x-2">
          <span className="inline-block px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            <Image
              src="/assets/logo-bolt.png"
              alt="Bolt Logo"
              width={22}
              height={22}
              className="inline-block m-px p-1"
            />
            Trusted By Experts
          </span>
        </div>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-[#194f90] to-gray-700 mt-4">What Our Customers Say</h2>
        <p className="text-xl text-gray-600 mb-8 mt-2">
          Industry professionals rely on GridMonitor for critical regulatory information.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-sm flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-gray-700 font-bold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm text-left font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-left text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;