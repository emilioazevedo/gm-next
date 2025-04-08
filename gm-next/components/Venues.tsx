import React from 'react';
import Image from 'next/image';

const Venues = () => {
  return (
    <div className="container mx-auto px-6 w-11/12 flex flex-wrap justify-center gap-12 mb-16 mt-16">
      <div className="flex flex-col items-center">
        <Image src="/assets/ercot.png" alt="ERCOT Icon" width={50} height={50} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">ERCOT</p>
        <p className="text-xs text-gray-500">Comprehensive tracking</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/puct.png" alt="PUCT Icon" width={60} height={60} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">PUCT</p>
        <p className="text-xs text-gray-500">Comprehensive tracking</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/texas-legislature.png" alt="Texas Legislature Icon" width={50} height={50} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">Texas Legislature</p>
        <p className="text-xs text-gray-500">Comprehensive tracking</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/texasre.png" alt="TexasRE Icon" width={60} height={60} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">TexasRE</p>
        <p className="text-xs text-gray-500">Comprehensive tracking</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/hearings.png" alt="Hearings Icon" width={60} height={60} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">Hearings</p>
        <p className="text-xs text-gray-500">Comprehensive tracking</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/conferences.png" alt="Conferences Icon" width={60} height={60} />
        <p className="text-sm text-gray-600 mt-2 font-semibold">Conferences</p>
        <p className="text-xs text-gray-500">Comprehensive tracking</p>
      </div>
    </div>
  );
};

export default Venues;
