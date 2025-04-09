import React from "react";

const LoginPage: React.FC = () => {
  return (
    <section className="login-page-section mt-[70px] mb-[250px]">
      <div className="container mx-auto px-4 w-4/12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-extrabold text-[#194f90] text-center mb-4">
          Login to Grid Monitor
        </h2>

        <form className="grid grid-cols-1 gap-6">
          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
              Email Address
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

          {/* Remember Me and Forgot Password */}
          <div className="form-group flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
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
              className="w-full text-2xl bg-[#194f90] text-white py-2 px-2 rounded-md hover:bg-[#5d8cb8] transition"
            >
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
