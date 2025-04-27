import Image from "next/image";
import { Metadata } from "next";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Contact Us | GridMonitor",
  description: "Contact GridMonitor for help with ERCOT, PUCT, and TXLEGE regulatory info. We're here to assist you!",
  openGraph: {
    title: "Contact Us | GridMonitor",
    description: "Get in touch with GridMonitor for questions about ERCOT, PUCT, and TXLEGE regulatory information.",
    siteName: "GridMonitor - ERCOT, PUCT, TXLEGE Info",
    images: [
      {
        url: "/logo-bolt.png",
        alt: "GridMonitor", // Added alt text for the image
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png", // Optional: Add an Apple touch icon if available
  },
};

export default function ContactPage() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-grainy">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-[#194f90] mb-6">Contact Us</h1>
          <form
            className="space-y-6"
            action="/api/contact" // Replace with your API endpoint
            method="POST"
          >
            <div>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              />
            </div>
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

        {/* Contact Information */}
        <div className="bg-white/80 rounded-xl shadow-lg p-8 border border-slate-100">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-center text-[#194f90]">Contact details</h1>
            <p className="mt-4 text-gray-600 text-lg">Have questions? We're here to help.</p>
            <div className="mt-6 bg-white/50 p-6 rounded-xl border border-black/20 shadow-sm">
              <div className="grid grid-cols-1 gap-6 text-left">
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
                <div>
                  <h3 className="font-semibold text-lg text-[#194f90] mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="mailto:customercare@gridmonitor.com" className="hover:text-blue-700">
                      customercare@gridmonitor.com
                    </a>
                  </p>
                </div>
                <div className="flex justify-center mb-8">
                            <Image 
                              src="/assets/logo-vortex.gif" 
                              alt="GridMonitor Logo" 
                              width={120} 
                              height={120}
                              className="mx-auto"
                            />
                          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
