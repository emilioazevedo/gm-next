import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header"; // Import the Header component
import Image from "next/image"; // Import Image component
import { ReactNode } from "react";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "GridMonitor",
  description: "GridMonitor app",
};

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen overflow-y-auto">
        <div className="flex flex-col min-h-screen w-full">
          <Header /> {/* Header spans the full width */}
          <main className="flex-grow w-full">{children}</main> {/* Allow components to go full width */}
         
         <footer className="bg-slate-200 p-6 text-center">
          <div className="justify-center items-center w-full">
            <div className="container mx-auto px-6 w-11/12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6 text-center md:text-left">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="text-lg font-semibold text-gray-700 mb-0 pt-1 invisible">Logo</h3> {/* Invisible title for alignment */}
                  <Image
                    src="/assets/gridmonitor-logo.png"
                    alt="GridMonitor Logo"
                    width={200} // Increased width
                    height={70} // Increased height
                    className="object-contain"
                  />
                </div>

                {/* Get in touch Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Get in touch</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>PO Box 160882</li>
                    <li>Austin, TX 78716</li>
                    <li>Hours: 10:00 – 5:00 PM CST</li>
                    <li>Contact: 1-800-981-6638</li>
                  </ul>
                </div>

                {/* Resources Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Resources</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><a href="mailto:customercare@gridmonitor.com" className="hover:text-blue-700">customercare@gridmonitor.com</a></li>
                    <li><a href="#" className="hover:text-blue-700">GridMonitor Blog</a></li>
                    <li><a href="#" className="hover:text-blue-700">About ERCOT</a></li>
                    <li><a href="#" className="hover:text-blue-700">About PUCT</a></li>
                    <li><a href="#" className="hover:text-blue-700">About LEGE</a></li>
                  </ul>
                </div>

                {/* Follow Us Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Follow Us</h3>
                  <ul className="flex space-x-4 justify-center md:justify-start">
                    <li>
                      <a href="#" className="hover:opacity-80">
                        <Image
                          src="/assets/x-b.png"
                          alt="X Logo"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:opacity-80">
                        <Image
                          src="/assets/linkedin-b.png"
                          alt="LinkedIn Logo"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Centered Sign-Up Form */}
              <div className="flex justify-center items-center mb-6">
                <div className="bg-white/0 p-2 rounded-md shadow-sm w-full max-w-md mx-auto">
                  <h3 className="text-xs font-bold text-gray-700 mb-1">Stay Updated</h3>
                  <form className="flex flex-row items-center gap-1">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full bg-white px-2 py-1 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs hover:bg-blue-700 transition"
                    >
                      Subscribe
                    </button>
                  </form>
                  <a href="#" className="text-xs hover:text-blue-700 block mt-2">
                    Regulatory Information Management for ERCOT
                  </a>
                </div>
              </div>

              <p className="mt-6 text-xs text-gray-600">
                &copy; {new Date().getFullYear()} GridMonitor. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        </div>
      </body>
    </html>
  );
}