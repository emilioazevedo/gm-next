import React from "react";

const WhatIsERCOTPage: React.FC = () => {
  return (
    <section className="ercot-page-section mt-32 mb-[40px]">
      <div className="container mx-auto px-4 w-8/12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[#194f90] pr-20">
            What is ERCOT? Managing Texas's Power Grid
          </h1>
          <img
            src="/assets/ercot-sq-bg.png"
            alt="ERCOT Background"
            className="w-[400px] h-[220px] object-cover"
          />
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Electric Reliability Council of Texas (ERCOT) serves as the independent system operator managing the flow of electric power to over 26 million Texas customers, covering 90% of the state’s electric load. Operating under the oversight of the Public Utility Commission of Texas (PUCT), ERCOT coordinates more than 46,500 miles of transmission lines and 710+ generation units.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The PUCT regulates ERCOT’s operations, establishes market rules, approves transmission projects, and ensures consumer protection. While ERCOT handles day-to-day grid operations and market facilitation, the PUCT sets the regulatory framework, reviews ERCOT’s performance, and enforces compliance with state laws. This dual structure maintains checks and balances in Texas’s unique standalone electric grid system.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          ERCOT manages the wholesale electricity market, schedules power delivery, and ensures grid reliability, while the PUCT oversees competitive retail markets, approves rate changes, and investigates market violations. Together, they maintain Texas’s energy independence while working to provide reliable and affordable electricity to consumers.
        </p>

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          ERCOT Board Meetings and Public Engagement
        </h2>
        <img
          src="/assets/Special_Report_grid_32.jpg"
          alt="ERCOT: Texas Power Grid Management and Operations"
          className="w-full mb-6"
        />
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          ERCOT conducts regular board meetings that are open to the public. These meetings address:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Grid performance reports</li>
          <li>Market operations updates</li>
          <li>Infrastructure planning</li>
          <li>Emergency preparedness</li>
          <li>Budget approvals</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Meeting Schedule and Participation
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Board meetings typically occur monthly, with additional special meetings as needed. The public can:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Attend meetings in person</li>
          <li>Watch live webcasts</li>
          <li>Access meeting materials online</li>
          <li>Submit public comments</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Grid Management Technologies
        </h2>
        <img
          src="/assets/technology_grid_144.jpg"
          alt="Grid Management Technologies"
          className="w-full mb-6"
        />
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          ERCOT employs sophisticated technologies to maintain grid reliability and optimize power distribution:
        </p>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Real-time Monitoring and Control Systems
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Energy Management System (EMS) for 24/7 grid status monitoring</li>
          <li>Supervisory Control and Data Acquisition (SCADA) systems</li>
          <li>Advanced metering infrastructure (AMI) for consumption tracking</li>
          <li>Synchrophasor measurement units for grid stability assessment</li>
          <li>Outage management systems for rapid response</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Weather Integration and Forecasting
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>High-resolution weather modeling systems</li>
          <li>Renewable energy production forecasting</li>
          <li>Load forecasting algorithms incorporating weather data</li>
          <li>Extreme weather event prediction and response systems</li>
          <li>Strategic reserve management based on weather patterns</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Demand Response Technologies
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Automated Load Management (ALM) systems</li>
          <li>Smart meter integration for real-time consumption data</li>
          <li>Emergency Response Service (ERS) platforms</li>
          <li>Price signal automation for peak demand management</li>
          <li>Load resource participation systems</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Renewable Energy Integration
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Wind and solar generation forecasting tools</li>
          <li>Battery storage management systems</li>
          <li>Grid frequency regulation technology</li>
          <li>Distributed energy resource (DER) management platforms</li>
          <li>Virtual power plant coordination systems</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Cybersecurity Infrastructure
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Advanced firewalls and intrusion detection</li>
          <li>Real-time threat monitoring</li>
          <li>Secure data communication protocols</li>
          <li>Redundant control systems</li>
          <li>Regular penetration testing and security audits</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Contact Information
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <a href="https://www.ERCOT.com" className="text-blue-500 hover:underline">
            https://www.ERCOT.com
          </a>
          <br />
          ERCOT Main Office: 7620 Metro Center Drive Austin, Texas 78744
          <br />
          Phone: (512) 248-3000
        </p>
      </div>
      <div className="flex justify-center mb-0 mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          <a href="https://www.gridmonitor.com" className="text-blue-500 hover:underline">
            https://www.gridmonitor.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default WhatIsERCOTPage;
