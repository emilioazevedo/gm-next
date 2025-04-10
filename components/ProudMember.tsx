import React from 'react';
import Image from 'next/image';

const ProudMember = () => {
  return (
    <section className="bg-gray-50 py-12 w-full">
      <div className="container mx-auto px-6 w-11/12 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">
          Proud Member Of
        </h2>
        <div className="flex justify-center items-center gap-12">
          <Image
            src="/assets/cleantx-logo.png"
            alt="CleanTX Logo"
            width={350}
            height={50}
            className="object-contain"
          />
          <Image
            src="/assets/gcpa.webp"
            alt="GCPA Logo"
            width={350}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ProudMember;
