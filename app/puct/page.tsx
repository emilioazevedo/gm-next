import React from "react";

const PUCTPage: React.FC = () => {
  return (
    <section className="puct-page-section mt-32 mb-[40px]">
      <div className="container mx-auto px-4 w-8/12">
        <div className="flex items-center justify-between mb-6">
          <img
            src="/assets/puct-seal-logo.svg"
            alt="PUCT Seal Logo"
            className="w-[200px] h-[200px] object-contain"
          />
          <h1 className="text-3xl font-bold text-[#194f90] p-10 flex-1">
            What is PUCT? Comprehensive Regulatory Authority and Operations
          </h1>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Public Utility Commission of Texas (PUCT) stands as the cornerstone of utility regulation in Texas, wielding broad regulatory authority over electric, telecommunications, and water utilities. Established by the Texas Legislature in 1975, the PUCT has evolved into a sophisticated regulatory body that oversees one of the nation’s most complex utility markets. Through its oversight of competitive wholesale and retail markets, the PUCT ensures reliable utility services for over 29 million Texans while maintaining fair market practices and reasonable rates.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In the aftermath of Winter Storm Uri in 2021, the PUCT’s role expanded significantly through legislative action. The Texas Legislature granted the commission enhanced authority over grid reliability and market oversight, particularly concerning weather emergency preparedness and critical infrastructure designation. This legislative mandate strengthened the PUCT’s ability to implement stringent reliability standards, enforce compliance measures, and coordinate with ERCOT to prevent future grid emergencies.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The PUCT’s regulatory framework operates through a three-commissioner structure, with each commissioner appointed by the governor for staggered six-year terms. These commissioners make final decisions on utility rates, rule changes, and enforcement actions through open meetings and formal proceedings. The commission’s staff, organized into specialized divisions including Market Analysis, Compliance and Enforcement, and Infrastructure Reliability, provides technical expertise and conducts detailed analyses to support informed decision-making.
        </p>
        <img
          src="/assets/OpenMeeting_PUCT.png"
          alt="PUCT Open Meeting"
          className="w-full mb-6"
        />

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Historical Development and Legislative Authority
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Created by the Public Utility Regulatory Act of 1975</li>
          <li>Initially regulated telecommunications and electric utilities</li>
          <li>Expanded authority through Senate Bill 7 (1999) for electric deregulation</li>
          <li>Further empowered by 87th Legislature (2021) following Winter Storm Uri</li>
          <li>Currently operates under Texas Utilities Code Title 2</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Core Regulatory Functions
        </h2>
        <img
          src="/assets/puct-texas.jpg"
          alt="PUCT Texas"
          className="w-full mb-6"
        />
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Electric Market Oversight
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Market power abuse monitoring</li>
          <li>Price formation oversight</li>
          <li>Critical care customer registry</li>
          <li>Infrastructure planning and grid modernization initiatives</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Rate Setting Authority
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Cost of service analysis</li>
          <li>Rate case proceedings</li>
          <li>Fuel cost recovery oversight</li>
          <li>Infrastructure surcharge reviews</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Consumer Protection and Public Interest
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Formal complaint procedures</li>
          <li>Emergency customer protections</li>
          <li>Service quality standards</li>
          <li>Marketing guidelines for Retail Electric Providers (REPs)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Current Initiatives and Future Direction
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Weather emergency preparedness</li>
          <li>Critical infrastructure designation</li>
          <li>Renewable energy integration frameworks</li>
          <li>Cybersecurity standards and physical security protocols</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Contact and Resources
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <a href="https://www.puc.texas.gov" className="text-blue-500 hover:underline">
            https://www.puc.texas.gov
          </a>
          <br />
          Public Utility Commission of Texas<br />
          1701 N. Congress Avenue Austin, TX 78701<br />
          Phone: (512) 936-7000<br />
          Emergency Hotline: (888) 782-8477
        </p>
       
      </div>
      <div className="flex justify-center mb-0 mt-10">
      <p className="text-lg  text-gray-700 leading-relaxed">
          <a href="https://www.gridmonitor.com" className="text-blue-500 hover:underline">
            https://www.gridmonitor.com
          </a>
          </p>
          </div>
    </section>
  );
};

export default PUCTPage;
