import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Ensure this matches the actual file path
import Header from "@/components/Header"; // Import the Header component
import Link from "next/link"; // Import Link component
import { ReactNode } from "react";
import { Metadata } from "next";

// Define metadata for the layout
export const metadata: Metadata = {
  title: "GridMonitor",
  description: "GridMonitor provides regulatory information for ERCOT, PUCT, and the Texas Legislature.",
  metadataBase: new URL("https://www.gridmonitor.com"), // Set the base URL for resolving relative URLs
  openGraph: {
    title: "GridMonitor",
    description: "Stay updated with ERCOT, PUCT, and Texas Legislature regulatory information.",
    siteName: "GridMonitor",
    images: [
      {
        url: "/assets/gridmonitor-logo.png",
        alt: "GridMonitor",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Removed client-side hooks (useState, useEffect) for SSR compatibility

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen overflow-y-auto">
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-lg transition-all duration-300">
            <Header /> {/* Ensure the Header is included at the top */}
          </header>
          <main className="flex-grow w-full overflow-visible z-0 pt-16">{children}</main> {/* Ensure no overflow issues */}
          {/* Footer */}
          <footer className="bg-[#a9bdcf] p-6 w-full">
            <div className="container mx-auto px-6">
              {/* Top row with 4 columns side by side */}
              <div className="flex flex-col md:flex-row justify-between mb-8 w-full">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                  <img
                    src="/assets/gridmonitor-logo.png"
                    alt="GridMonitor Logo"
                    width={300}
                    height={105}
                    className="object-contain"
                  />
                  <div className="mt-20 bg-white/20 backdrop-blur-md w-12/12 justify-left p-4 mb-0 md:mb-0 mx-auto border border-transparent rounded-lg" style={{ borderImage: "linear-gradient(130deg, white, grey) 1" }}>
                    <h3 className="text-base font-semibold text-white mb-2 text-left">
                      Stay Updated
                    </h3>
                    <form className="flex flex-row items-start bg-transparent">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="flex-grow bg-white pl-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="submit"
                        className="bg-[#194f90] text-white px-4 py-2 rounded-lg text-base hover:bg-blue-700 transition"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>

                {/* Get in Touch Section */}
                <div className="mb-2 md:mb-0">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Get in touch</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>PO Box 160882</li>
                    <li>Austin, TX 78716</li>
                    <li>Hours: 10:00 – 5:00 PM CST</li>
                    <li>Contact: 1-800-981-6638</li>
                  </ul>
                </div>

                {/* Resources Section */}
                <div className="mb-2 md:mb-0">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Resources</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      <a
                        href="mailto:customercare@gridmonitor.com"
                        className="hover:text-blue-700"
                      >
                        customercare@gridmonitor.com
                      </a>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-blue-700">
                        GridMonitor Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/what-is-ercot-managing-texas-power-grid" className="hover:text-blue-700">
                        About ERCOT
                      </Link>
                    </li>
                    <li>
                      <Link href="/puct" className="hover:text-blue-700">
                        About PUCT
                      </Link>
                    </li>
                    <li>
                      <Link href="/texas-lege" className="hover:text-blue-700">
                        About LEGE
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Follow Us Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="https://twitter.com/gridmonitor" className="hover:opacity-80">
                      <img
                        src="/assets/x-b.png"
                        alt="X Logo"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </Link>
                    <Link href="https://linkedin.com/company/gridmonitor" className="hover:opacity-80">
                      <img
                        src="/assets/linkedin-b.png"
                        alt="LinkedIn Logo"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Regulatory Information */}
              <div className="text-center mt-0 mb-6">
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-blue-700"
                >
                  Regulatory Information Management for ERCOT
                </Link>
              </div>
              <div className="border-t border-gray-300 pt-4 w-full">
                <p className="text-sm text-gray-900 text-center">
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