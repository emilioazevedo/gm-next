import React from "react";

const WhatIsERCOTPage: React.FC = () => {
  return (
    <section className="ercot-page-section mt-32 mb-[80px]">
      <div className="container mx-auto px-4 w-8/12">
        <h1 className="text-3xl font-bold text-[#194f90] mb-6 text-center">
          What is ERCOT? Managing Texas' Power Grid
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Electric Reliability Council of Texas (ERCOT) is responsible for managing the flow of electric power to more than 26 million Texas customers, representing about 90% of the state's electric load. ERCOT ensures that the power grid operates reliably and efficiently, balancing supply and demand in real-time.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          ERCOT oversees the Texas Interconnection, which is one of the three main power grids in the United States. Unlike other grids, the Texas Interconnection is largely independent, which allows Texas to manage its own electricity market and regulations.
        </p>
        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Key Responsibilities of ERCOT
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Managing the electricity market and ensuring fair competition among power generators.</li>
          <li>Maintaining grid reliability and ensuring a stable supply of electricity.</li>
          <li>Coordinating the planning and operation of the transmission network.</li>
          <li>Providing information and forecasts to market participants.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Why is ERCOT Important?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          ERCOT plays a critical role in ensuring that Texans have access to reliable and affordable electricity. By managing the grid and overseeing the market, ERCOT helps to prevent blackouts, promote innovation, and support the state's growing energy needs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          To learn more about ERCOT and how it impacts your daily life, explore our platform and discover the tools and resources we offer to stay informed about Texas' energy landscape.
        </p>
      </div>
    </section>
  );
};

export default WhatIsERCOTPage;
