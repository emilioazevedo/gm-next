import React from "react";

const LoginPage: React.FC = () => {
  return (
    <section className="login-page-section pt-40 pb-40 bg-grainy">
      <div className="container mx-auto px-4 w-3/12 bg-white p-8 rounded-lg shadow-lg">
        <img
          src="/assets/logo-vortex.gif"
          alt="Logo"
          className="mx-auto mb-6 w-24 h-24"
        />
        <h2 className="text-2xl font-extrabold text-[#194f90] text-center mb-4">
          Login to Grid Monitor
        </h2>

        <form className="grid grid-cols-1 gap-6">
          {/* Email Address */}
          <div className="form-group">
            
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-sky-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg" />

          {/* Password */}           
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-sky-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg" />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="form-group flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="form-group">
            <button
              type="submit"
              className="w-full text-2xl bg-[#194f90] text-white py-2 px-2 rounded-md hover:bg-[#5d8cb8] transition flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M12 12c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z"
                  strokeLinecap="round" strokeLinejoin="round"
                />
                <path
                  d="M20 4a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
              LOGIN
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/trial" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
