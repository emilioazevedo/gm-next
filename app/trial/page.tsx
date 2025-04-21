"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TrialPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    regCode: "",
    option: "",
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-grainy flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 lg:py-20">
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
            Grid Monitor is free to try.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            No credit card required.
          </p>
          <p className="mt-2 text-gray-500 text-lg">
            Already a member? <Link href="/login" className="text-blue-600 hover:text-blue-800">Log in here.</Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Last Name"
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
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
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm Password"
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="123-456-7890"
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <select
              id="option"
              name="option"
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              value={formData.option}
              onChange={handleChange}
            >
              <option value="" disabled>Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          
          <div>
            <input
              id="regCode"
              name="regCode"
              type="text"
              placeholder="Registration Code (Optional)"
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.regCode}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex items-start">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
              I agree to the{" "}
              <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </Link>
            </label>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full bg-[#194f90] hover:bg-blue-800 text-white py-3 px-4 rounded-lg transition-all duration-300 font-medium text-lg"
            >
              START FREE TRIAL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}