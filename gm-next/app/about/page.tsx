import React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <section className="about-page-section mt-[150px] mb-[250px]">
      <div className="container mx-auto px-4 w-8/12">
        {/* Text Block and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Text Block */}
          <div>
            <h2 className="text-2xl font-bold text-[#194f90] mb-4">We Are Grid Monitor</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Born and raised in Austin, Texas, Grid Monitor is a solution that collects, organizes, and updates regulatory information from relevant sources on a continuous basis. 
              We are the cost-efficient market information aggregator of ERCOT, PUCT, and the Texas Legislature <br/>{" "}
              <Image
                src="/assets/tx-flag.png"
                alt="Texas Flag"
                width={30}
                height={30}
                className="inline-block ml-1"
              />
               Austin, Texas
            </p>
          </div>
          {/* Image */}
          <div>
            <Image
              src="/assets/logo-vortex.gif" // Replace with your actual image path
              alt="About Us"
              width={250}
              height={250}
              className="ml-30 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Additional Text Block */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our service continuously collects relevant information from <b>ERCOT</b>, the <b>Public Utility Commission of Texas</b>, and the <b>Texas Legislature</b>.
           connecting meetings, filings, news and reports, we have created a central repository of hard to find information.
          External Regulatory Information management is a problem that spans all Market Participants. We believe that creating an automated data platform designed to serve the common information needs of all Market Participants, that lowers costs and increases quality outcomes, is worth pursuing.
          </p>
        </div>

        {/* Start Your Free Trial Button */}
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-2 mb-4">
          <div className="button-wrap relative scale-75"> {/* Kept smaller button */}
          <a href="/trial">
            <button className="global-button">
              <span>Start your free trial today</span>
            </button>
            </a>
            <div className="button-shadow z-0"></div>
          </div>
          <a href="/demo" className="text-blue-600 text-sm hover:underline">
            Schedule a demo
          </a>
        </div>

        {/* Images with Legends */}
        <div className="mt-30 grid grid-cols-1 md:grid-cols-6 gap-8 text-center">
          <div>
            <Image
              src="/assets/platform.webp"
              alt="ERCOT"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-sm text-gray-600 mt-2">One Platform</p>
          </div>
          <div>
            <Image
              src="/assets/transcript-search.webp"
              alt="PUCT"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-sm text-gray-600 mt-2">Transcript Search</p>
          </div>
          <div>
            <Image
              src="/assets/meeting-notes.webp"
              alt="Texas Legislature"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-sm text-gray-600 mt-2">ERCOT Meeting Summaries</p>
          </div>
          <div>
            <Image
              src="/assets/search.webp"
              alt="TexasRE"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-sm text-gray-600 mt-2">Grid Monitor Search</p>
          </div>
          <div>
            <Image
              src="/assets/workinggroup.webp"
              alt="Conferences"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-sm text-gray-600 mt-2">ERCOT Working Groups</p>
          </div>
          <div>
            <Image
              src="/assets/ai-assistant1.png"
              alt="Conferences"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-sm text-gray-600 mt-2">AI Assistant</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
