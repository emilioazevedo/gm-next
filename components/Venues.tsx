import React from "react";
import Image from "next/image";

const Venues = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 w-12/12 text-center">
        <div className="container mx-auto px-0 w-full flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-28">
          {/* Repeat this block for each item */}
          <div className="flex flex-col items-center">
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
              <Image src="/assets/ercot.png" alt="ERCOT Icon" width={50} height={70} />
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2 font-semibold">ERCOT</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
              <Image src="/assets/puct.png" alt="PUCT Icon" width={70} height={80} />
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2 font-semibold">PUCT</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
              <Image src="/assets/texas-legislature.png" alt="Texas Legislature Icon" width={50} height={70} />
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2 font-semibold">Texas Legislature</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
              <Image src="/assets/texasRE.png" alt="TexasRE Icon" width={80} height={90} />
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2 font-semibold">TexasRE</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
              <Image src="/assets/hearings.png" alt="Hearings Icon" width={70} height={80} />
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2 font-semibold">Hearings</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
              <Image src="/assets/conferences.png" alt="Conferences Icon" width={80} height={80} />
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2 font-semibold">Conferences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venues;
