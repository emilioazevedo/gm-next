import React from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-grainy flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-auto p-8 sm:p-10 space-y-8 border border-gray-100">
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
          <h1 className="text-2xl font-bold text-center text-[#194f90]">
            Login to Grid Monitor
          </h1>
        </div>

        <form className="mt-8 space-y-6">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@company.com"
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link href="/forgot-password" className="text-blue-600 hover:text-blue-800">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#194f90] hover:bg-blue-800 text-white py-3 px-4 rounded-lg transition-all duration-300 font-medium text-lg"
            >
              LOGIN
            </button>
          </div>
        </form>

        <p className="text-center text-lg mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link href="/trial" className="text-blue-600 hover:text-blue-800">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
