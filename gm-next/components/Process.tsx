import React from 'react';
import Image from 'next/image';

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: "/assets/subscribe.png",
      title: "Subscribe",
      description: "Choose a plan that fits your needs and create your account.",
    },
    {
      id: 2,
      icon: "/assets/access.png",
      title: "Access",
      description: "Gain immediate access to our comprehensive database of regulatory information.",
    },
    {
      id: 3,
      icon: "/assets/get-info.png",
      title: "Stay Informed",
      description: "Receive customized alerts and reports on the topics that matter to you.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 w-full">
      <div className="container mx-auto px-6 w-11/12 mt-0 text-center">
        <div className="mb-12">
         <div className="mb-12 flex items-center justify-center space-x-2">
                   <span className="inline-block px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                     <Image
                       src="/assets/logo-bolt.png"
                       alt="Bolt Logo"
                       width={22}
                       height={22}
                       className="inline-block m-px p-1"
                     />
                     Simple Process
                   </span>
                 </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-[#194f90] to-gray-700 mt-4">
            How GridMonitor Works
          </h2>
          <p className="text-xl text-gray-600 mt-2">
            Our streamlined platform makes it easy to access the information you need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow-md p-6 text-center relative"
            >
              {/* Smaller number in the top-left corner */}
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#194f90] text-white text-sm font-bold rounded-full flex items-center justify-center shadow-md">
                {step.id}
              </div>
              <div className="flex justify-center mb-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#194f90] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
