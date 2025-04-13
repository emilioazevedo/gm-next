import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <section className="contact-page-section min-h-screen flex items-center bg-grainy">
      <div className="container mx-auto px-4 w-8/12 grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Contact Form */}
        <div className="form-column bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#194f90] mb-6">Contact Us</h2>
          <form className="contact-form grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-sky-100/50 text-lg px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full  bg-sky-100/50 text-lg px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Company"
                placeholder="Company"
                className="w-full  bg-sky-100/50 text-lg px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full  bg-sky-100/50 text-lg px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-group col-span-2">
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full  bg-sky-100/50 text-lg px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="form-group col-span-2">
              <button
                type="submit"
                className="w-full text-2xl bg-[#194f90] text-white py-2 px-2 rounded-md hover:bg-[#5d8cb8] transition"
              >
                Send Now
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="info-column text-xl bg-[#194f90] text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <i className=" mr-4"></i>
              <span>Available from 10:00 – 5:00 PM CST</span>
            </li>
            <li className="flex items-center">
              <i className=" mr-4"></i>
              <a href="mailto:customercare@gridmonitor.com" className="hover:underline">
              customercare@gridmonitor.com
              </a>
            </li>
            <li className="flex items-center">
              <i className="mr-4"></i>
              <span>1-800-981-6638</span>
            </li>
            <li className="font-semibold pt-8 flex items-center">
              <i className="mr-4"></i>
              <span>Mail Address</span>
            </li>
         
          <li className="flex items-center">
              <i className="mr-4"></i>
              <span>PO Box 160882</span>
            </li>
            <li className="flex items-center">
              <i className="mr-4"></i>
              <span> Austin, TX  78716</span>
            </li>
          </ul>
          <div className="mt-10 flex justify-center">
            <Image
              src="/assets/gm-icon.png"
              alt="GridMonitor Icon"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <ul className="flex space-x-4 mt-4">
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                <i className="text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                <i className="text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                <i className="text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                <i className="text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                <i className="text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
