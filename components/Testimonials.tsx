import React from "react";

const Testimonials = () => {
  return (
    <section className="relative z-0 bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-[#194f90] to-gray-700 mb-4">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-600 hover:bg-gradient-to-br hover:from-white hover:to-blue-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                MP
              </div>
              <p className="font-semibold text-gray-800 text-sm">Market Participant</p>
            </div>
            <p className="text-base text-gray-600 italic">
              “I have to read 100k words a day. Grid Monitor’s curation keeps the fluff and noise off my screen”
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-600 hover:bg-gradient-to-br hover:from-white hover:to-blue-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                C
              </div>
              <p className="font-semibold text-gray-800 text-sm">Consultant</p>
            </div>
            <p className="text-base text-gray-600 italic">
              “I was able to do 20 minutes worth of agenda research in 20 seconds with Grid Monitor’s integrated Smart Agenda.”
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-600 hover:bg-gradient-to-br hover:from-white hover:to-blue-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                L
              </div>
              <p className="font-semibold text-gray-800 text-sm">Lawyer</p>
            </div>
            <p className="text-base text-gray-600 italic">
              “The main banefit I initially found was the convenience of having all three relevent venues in one product. It saves so much time”
            </p>
          </div>
          {/* Testimonial 4 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-600 hover:bg-gradient-to-br hover:from-white hover:to-blue-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                MP
              </div>
              <p className="font-semibold text-gray-800 text-sm">Market Participant</p>
            </div>
            <p className="text-base text-gray-600 italic">
              “Having the ERCOT Working Groups not only captured. but key docs and transcripts on one page – this is a huge time-saver.”
            </p>
          </div>
          {/* Testimonial 5 */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-600 hover:bg-gradient-to-br hover:from-white hover:to-blue-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                L
              </div>
              <p className="font-semibold text-gray-800 text-sm">Lobbyist</p>
            </div>
            <p className="text-base text-gray-600 italic">
              “As a one-person shop. I am overwhelmed by the need to be in more than one place simultaneously. Grid Monitor helps me keep up when I miss things”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;