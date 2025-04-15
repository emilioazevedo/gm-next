import React from "react";

const PUCTPage: React.FC = () => {
  return (
    <section className="puct-page-section mt-32 mb-[80px]">
      <div className="container mx-auto px-4 w-8/12">
        <h1 className="text-3xl font-bold text-[#194f90] mb-6 text-center">
          Public Utility Commission of Texas (PUCT)
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Public Utility Commission of Texas (PUCT) is a regulatory agency that oversees the state's electric, telecommunication, and water utilities. Its mission is to protect customers, foster competition, and promote high-quality infrastructure.
        </p>
        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Key Responsibilities of PUCT
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Regulating electric utilities and ensuring reliable electricity service.</li>
          <li>Overseeing the competitive retail electric market in Texas.</li>
          <li>Monitoring and enforcing compliance with state laws and regulations.</li>
          <li>Providing customer assistance and resolving disputes.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Why is PUCT Important?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          PUCT plays a vital role in ensuring that Texans have access to reliable and affordable utility services. By regulating the electric market and utilities, PUCT helps maintain a balance between consumer protection and industry growth.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Stay informed about PUCT's activities and decisions by exploring our platform, where you can find the latest updates, filings, and reports.
        </p>
      </div>
    </section>
  );
};

export default PUCTPage;
