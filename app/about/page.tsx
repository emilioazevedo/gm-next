import React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <section className="about-page-section pt-20 pb-28 bg-grainy">
      <div className="container mx-auto px-4 w-full md:w-10/12 lg:w-8/12">
        {/* White background container with 80% opacity */}
        <div className="bg-white/80 rounded-xl shadow-sm p-8 md:p-12">
          {/* Text Block and Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            {/* Text Block */}
            <div>
              <h2 className="text-2xl font-bold text-[#194f90] mb-4">We Are Grid Monitor</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Born and raised in Austin, Texas, Grid Monitor is a solution that collects, organizes, and updates regulatory information from relevant sources on a continuous basis.
                We are the cost-efficient market information aggregator of ERCOT, PUCT, and the Texas Legislature <br />{" "}
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
            <div className="flex justify-center">
              <Image
                src="/assets/logo-vortex.gif" // Replace with your actual image path
                alt="About Us"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Additional Text Block */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our service continuously collects relevant information from <b>ERCOT</b>, the <b>Public Utility Commission of Texas</b>, and the <b>Texas Legislature</b>.
              Connecting meetings, filings, news and reports, we have created a central repository of hard to find information.
              External Regulatory Information management is a problem that spans all Market Participants. We believe that creating an automated data platform designed to serve the common information needs of all Market Participants, that lowers costs and increases quality outcomes, is worth pursuing.
            </p>
          </div>

          {/* Start Your Free Trial Button */}
          <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-2 mb-20">
            <div className="button-wrap relative">
              <a href="/trial">
                <button className="global-button">
                  <span>Start your free trial today</span>
                </button>
              </a>
              <div className="button-shadow z-0"></div>
            </div>
          </div>

          {/* Images with Legends */}
          <div className="pt-10 pb-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/platform.webp"
                  alt="ERCOT"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">One Platform</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/transcript-search.webp"
                  alt="PUCT"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">Transcript Search</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/meeting-notes.webp"
                  alt="Texas Legislature"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">ERCOT Meeting Summaries</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/search.webp"
                  alt="TexasRE"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">Grid Monitor Search</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/workinggroup.webp"
                  alt="Conferences"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">ERCOT Working Groups</p>
              </div>
              <div className="flex flex-col items-center">
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
        </div>
      </div>
    </section>
  );
};

export default AboutPage;