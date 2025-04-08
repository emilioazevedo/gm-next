import React from "react";

const TrialPage: React.FC = () => {
  return (
    <section className="trial-page-section mt-[70px] mb-[250px]">
      <div className="container mx-auto px-4 w-7/12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-extrabold text-[#194f90] text-center mb-4">
          Grid Monitor is free to try.
        </h2>
        <p className="text-sm text-gray-600 text-center mb-8">
          No credit card required. Already a member?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in here.
          </a>
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName" className="block text-base font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label htmlFor="lastName" className="block text-base font-medium text-gray-700 mb-1 ">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Company Email Address */}
          <div className="form-group col-span-2">
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
              Company Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password" className="block text-base font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="block text-base font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Phone Number */}
          <div className="form-group col-span-2">
            <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* How did you hear about us? */}
          <div className="form-group col-span-2">
            <label htmlFor="referral" className="block text-base font-medium text-gray-700 mb-1">
              How did you hear about us?
            </label>
            <select
              id="referral"
              name="referral"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select an option</option>
              <option value="Referral">Referral</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Social Media">Social Media</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Registration Code */}
          <div className="form-group col-span-2">
            <label htmlFor="registrationCode" className="block text-base font-medium text-gray-700 mb-1">
              Registration Code (if you have one)
            </label>
            <input
              type="text"
              id="registrationCode"
              name="registrationCode"
              placeholder="Registration Code"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="form-group col-span-2 flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 text-sm"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I agree to the{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-group col-span-2">
            <button
              type="submit"
              className="w-full text-2xl bg-[#194f90] text-white py-2 px-2 rounded-md hover:bg-[#5d8cb8] transition"
              >
              START FREE TRIAL
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TrialPage;
