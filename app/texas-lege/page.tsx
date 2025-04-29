import React from "react";

const TexasLegePage: React.FC = () => {
  return (
    <section className="texas-lege-page-section mt-32 mb-[80px]">
      <div className="container mx-auto px-4 w-8/12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[#194f90] pr-10 flex-1">
            Texas Legislature: 
            <span className="text-3xl p-1 font-semibold text-gray-500">
               A Comprehensive Overview
            The Cornerstone of State Government
            </span>
          </h1>
        
          <img
            src="/assets/texas-legislature.jpg"
            alt="Texas Legislature"
            className="w-[220px] h-[108px] object-cover ml-4"
          />
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Texas Legislature, a cornerstone of state governance established by the Texas Constitution of 1876, serves as the primary lawmaking body for America’s second-largest state. Operating from the historic State Capitol in Austin, built in 1888, it maintains a bicameral structure consisting of two distinct chambers: the 150-member House of Representatives and the 31-member Senate. Together, these chambers represent over 29 million Texans across 254 counties, making it one of the largest state legislatures in the United States.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The House of Representatives features 150 members elected from districts of approximately equal population, with each member representing about 194,000 constituents. Representatives serve two-year terms, face re-election every even-numbered year, and must be at least 21 years old, Texas residents for two years, and district residents for one year before election. The House is led by the Speaker, elected by House members, who manages chamber operations and assigns committee leadership.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Senate’s 31 members represent larger districts of roughly 940,000 constituents each. Senators serve four-year terms staggered so half the chamber faces election every two years. Senatorial candidates must be at least 26 years old, Texas residents for five years, and district residents for one year before election. The Lieutenant Governor, elected statewide, serves as President of the Senate, wielding significant power in committee assignments and legislative priorities.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This bicameral structure creates a system of checks and balances within the legislative process, requiring both chambers to agree on legislation before it can become law. The Legislature’s composition reflects Texas’s diverse population, with representatives from urban, suburban, and rural districts bringing varied perspectives to state governance. Operating under a part-time model, known as a “citizen legislature,” members maintain careers outside their legislative duties, bringing real-world experience to their lawmaking responsibilities.
        </p>
        <img
          src="/assets/texas_lege-capitol.jpg"
          alt="Texas Legislature Building"
          className="w-full mb-6"
        />

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Legislative Sessions
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Legislature meets in regular session every odd-numbered year, beginning on the second Tuesday in January and lasting 140 days. The Governor can call special sessions lasting up to 30 days to address specific issues. During these sessions, lawmakers debate and pass bills, set the state’s biennial budget, and address critical state matters.
        </p>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Constitutional Powers
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Law creation and modification</li>
          <li>State budget appropriation</li>
          <li>Agency oversight</li>
          <li>Constitutional amendment proposals</li>
          <li>Electoral district redistricting</li>
          <li>Emergency legislation during crises</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Legislative Process
        </h2>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Bill Development
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Bills originate from various sources: legislators, constituents, advocacy groups, and state agencies. Each bill undergoes multiple stages:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Filing and introduction</li>
          <li>Committee referral and hearings</li>
          <li>Floor debates and amendments</li>
          <li>Chamber voting</li>
          <li>Conference committee (if needed)</li>
          <li>Governor’s action (sign, veto, or allow to become law)</li>
        </ul>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Committee System
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Standing committees specialize in specific policy areas:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>State Affairs</li>
          <li>Finance</li>
          <li>Education</li>
          <li>Energy Resources</li>
          <li>Transportation</li>
          <li>Natural Resources</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Public Participation
        </h2>
        <h3 className="text-xl font-semibold text-[#194f90] mb-4">
          Citizen Engagement
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Legislature maintains various channels for public involvement:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Committee testimony</li>
          <li>Constituent services</li>
          <li>Public hearings</li>
          <li>Online bill tracking</li>
          <li>Legislative archives</li>
          <li>Direct communication with representatives</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#194f90] mb-4">
          Contact Information
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Texas State Capitol<br />
          1100 Congress Avenue<br />
          Austin, Texas 78701<br />
          <a href="https://capitol.texas.gov/" className="text-blue-500 hover:underline">
            https://capitol.texas.gov/
          </a>
          <br />
          House Information: (512) 463-4630<br />
          Senate Information: (512) 463-0100
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

export default TexasLegePage;
