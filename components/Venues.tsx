import React from 'react';
import Image from 'next/image';

const Venues = () => {
  return (
    <section className="py-16 w-full bg-white">
    <div className="container mx-auto px-6 w-11/12 text-center">
    <div className="container mx-auto px-0 w-full flex flex-wrap justify-center gap-36 mb-16 pt-16">
      <div className="flex flex-col items-center">
        <Image src="/assets/ercot.png" alt="ERCOT Icon" width={70} height={70} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">ERCOT</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/puct.png" alt="PUCT Icon" width={90} height={80} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">PUCT</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/texas-legislature.png" alt="Texas Legislature Icon" width={70} height={70} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">Texas Legislature</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/texasRE.png" alt="TexasRE Icon" width={100} height={90} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">TexasRE</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/hearings.png" alt="Hearings Icon" width={90} height={80} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">Hearings</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/conferences.png" alt="Conferences Icon" width={100} height={80} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">Conferences</p>
      </div>
    </div>
    </div>
    </section>  );
};

export default Venues;
