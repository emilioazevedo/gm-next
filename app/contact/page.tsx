"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-grainy py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-[#194f90] mb-8">Contact Us</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form - Apply trial page styling */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Style form inputs like trial page */}
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Your message"
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Style button like trial page */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#194f90] hover:bg-blue-800 text-white py-3 px-4 rounded-lg transition-all duration-300 font-medium text-lg"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Information - Keep existing content */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl mx-auto p-8 sm:p-10 space-y-8 border border-gray-100">
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <Image 
                    src="/assets/logo-vortex.gif" 
                    alt="GridMonitor Logo" 
                    width={120} 
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <h1 className="text-3xl font-bold text-center text-[#194f90]">
                  Contact Us
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                  Have questions? We're here to help.
                </p>
                
                {/* Contact Information */}
                <div className="mt-6 bg-white/50 p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="grid grid-cols-1 gap-6 text-left">
                    {/* Address and Phone in one row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-lg text-[#194f90] mb-1">Address</h3>
                        <p className="text-gray-600 text-sm">PO Box 160882</p>
                        <p className="text-gray-600 text-sm">Austin, TX 78716</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg text-[#194f90] mb-1">Phone & Hours</h3>
                        <p className="text-gray-600 text-sm">1-800-981-6638</p>
                        <p className="text-gray-600 text-sm">10:00 – 5:00 PM CST</p>
                      </div>
                    </div>
                    
                    {/* Email in second row */}
                    <div>
                      <h3 className="font-semibold text-lg text-[#194f90] mb-1">Email</h3>
                      <p className="text-gray-600 text-sm">
                        <a href="mailto:customercare@gridmonitor.com" className="hover:text-blue-700">
                          customercare@gridmonitor.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
