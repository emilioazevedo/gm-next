import React from 'react';
import Image from 'next/image';

const ProudMember = () => {
  return (
    <section className="bg-white py-12 w-full">
      <div className="container mx-auto px-6 w-11/12 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 md:mb-8">
          Proud Member Of
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <Image
            src="/assets/cleantx-logo.png"
            alt="CleanTX Logo"
            width={200}
            height={40}
            className="object-contain"
          />
          <Image
            src="/assets/gcpa.webp"
            alt="GCPA Logo"
            width={200}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ProudMember;
