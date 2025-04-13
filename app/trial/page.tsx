import React from "react";

const TrialPage: React.FC = () => {
  return (
    <section className="trial-page-section pt-40 pb-40 bg-grainy">
      <div className="container mx-auto px-4 w-6/12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-extrabold text-[#194f90] text-center mb-4">
          Grid Monitor is free to try.
        </h2>
        <p className="text-sm text-gray-600 text-center mb-8">
          No credit card required. Already a member?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in here.
          </a>
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-0"> {/* Changed from gap-4 to gap-2 */}
          {/* First Name */}
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full px-4 py-3  border border-gray-300 rounded-md bg-sky-100/40 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          {/* Last Name */}
          <div className="form-group pl-2">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-sky-100/40 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          {/* Company Email Address */}
          <div className="form-group col-span-2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@company.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-sky-100/40 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-sky-100/40 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group pl-2">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-sky-100/40 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          {/* Phone Number */}
          <div className="form-group col-span-2">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-sky-100/40 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          {/* How did you hear about us? */}
          <div className="form-group col-span-2">
            <select
              id="referral"
              name="referral"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-sky-100/40 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
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
            <input
              type="text"
              id="registrationCode"
              name="registrationCode"
              placeholder="Registration Code"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-sky-100/40 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
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