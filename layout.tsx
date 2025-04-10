import './globals.css'; // Ensure this file includes Tailwind's directives

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-gray-800 text-white py-4">
        <h1 className="text-center text-lg">Grid Monitor</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-[#7e9dba] p-6 w-full">
        <div className="container mx-auto px-6">
          {/* Top row with 4 columns side by side */}
          <div className="flex flex-col md:flex-row justify-between mb-12 w-full">
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <img
                src="/assets/gridmonitor-logo.png"
                alt="GridMonitor Logo"
                width={200}
                height={70}
                className="object-contain"
              />
            </div>

            {/* Get in Touch Section */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Get in touch</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>PO Box 160882</li>
                <li>Austin, TX 78716</li>
                <li>Hours: 10:00 – 5:00 PM CST</li>
                <li>Contact: 1-800-981-6638</li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="mb-6 md:mb-0">
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
                  <a href="#" className="hover:text-blue-700">
                    GridMonitor Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-700">
                    About ERCOT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-700">
                    About PUCT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-700">
                    About LEGE
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80">
                  <img
                    src="/assets/x-b.png"
                    alt="X Logo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
                <a href="#" className="hover:opacity-80">
                  <img
                    src="/assets/linkedin-b.png"
                    alt="LinkedIn Logo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Stay Updated Form */}
          <div className="w-full flex justify-center mb-2">
            <div className="w-4/4 md:w-1/2 lg:w-2/5">
              <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
                Stay Updated
              </h3>
              <form className="flex flex-row items-center gap-2 bg-transparent">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow bg-white px-8 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-[#194f90] text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Regulatory Information */}
          <div className="text-center mb-6">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-blue-700"
            >
              Regulatory Information Management for ERCOT
            </a>
          </div>

          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} GridMonitor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

