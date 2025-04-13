import React from "react";
import Image from "next/image";

const DemoPage: React.FC = () => {
  return (
    <section
      className="demo-page-section min-h-screen flex items-center bg-grainy"
     
    >
      <div className="container mx-auto px-4 w-8/12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Demo Form */}
        <div className="form-column bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#194f90] mb-6">Take the first step, we will take care for the rest.</h2>
          <form className="demo-form grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full text-sm px-4 py-2 border bg-sky-100/40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full text-sm px-4 py-2 border bg-sky-100/40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full text-sm px-4 py-2 border bg-sky-100/40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full text-sm px-4 py-2 border bg-sky-100/40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-group col-span-2">
              <textarea
                name="comments"
                placeholder="Comments"
                rows={5}
                className="w-full text-sm px-4 py-2 border bg-sky-100/40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="form-group col-span-2">
              <button
                type="submit"
                className="w-full text-xl bg-[#194f90] text-white py-2 px-2 rounded-md hover:bg-[#5d8cb8] transition"
              >
                Request Demo
              </button>
            </div>
          </form>
        </div>

        {/* Context Section */}
        <div className="context-column bg-transparent p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#194f90] mb-4">We'd Love to show you all that Grid Monitor can do for you!</h2>
          <p className="text-base text-gray-600 mb-4">
            Discover how GridMonitor can streamline your workflow and provide you with the tools you need to stay ahead of energy legislation and regulatory changes.
          </p>
          <ul className="text-base text-gray-600 space-y-4">
  <li className="flex items-start gap-3">
    <span className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-md shadow-inner shadow-white">
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span>Get a personalized walkthrough of our platform.</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-md shadow-inner shadow-white">
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span>Learn how to track ERCOT, PUCT, and Texas Legislature updates efficiently.</span>
  </li>
  <li className="flex items-start gap-3">
    <span className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-md shadow-inner shadow-white">
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span>See how our tools can save you time and effort.</span>
  </li>
</ul>



          <p className="text-base text-gray-600 mt-4">
            Our team is here to answer your questions and help you get the most out of GridMonitor.
          </p>
          {/* Added Image Below the Description */}
          <div className="mt-16 flex justify-center">
            <Image
              src="/assets/demo.png"
              alt="Demo Illustration"
              width={150}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPage;
