import Image from "next/image";
import { Metadata } from "next";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Request Demo | GridMonitor",
  description: "GridMonitor for help with ERCOT, PUCT, and TXLEGE regulatory info. We're here to assist you!",
  openGraph: {
    title: "Request Demo | GridMonitor",
    description: "Get in touch with GridMonitor for questions about ERCOT, PUCT, and TXLEGE regulatory information.",
    siteName: "GridMonitor - ERCOT, PUCT, TXLEGE Info",
    images: [
      {
        url: "/logo-bolt.png",
        alt: "GridMonitor Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function DemoPage() {
  return (
    <section className="demo-page-section min-h-screen flex items-center bg-grainy">
      <div className="container mx-auto px-4 w-8/12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Demo Form */}
        <div className="lg:w-2/2">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#194f90] mb-6">Request a Demo</h2>
            <form className="space-y-6" action="/api/demo" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your needs"
                  rows={4}
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#194f90] hover:bg-blue-800 text-white py-3 px-4 rounded-lg transition-all duration-300 font-medium text-lg"
                >
                  Request Demo
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Context Section */}
        <div className="context-column bg-transparent p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#194f90] mb-4">
            We'd Love to show you all that Grid Monitor can do for you!
          </h2>
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
}
