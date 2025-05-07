import React from 'react';

const Signup = () => {
  return (
    <section className="bg-white py-1 pt-10 pb-20 w-full relative"> {/* Reduced vertical padding */}
      {/* Gradient Background */}
   

      <div className="container mx-auto px-4 w-10/12 text-center relative z-10"> {/* Reduced width */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-[#194f90] to-gray-700 mt-4">
          Ready to stay ahead of Texas energy legislation?
        </h2>
        <p className="text-base text-gray-600 mb-10">
          Join hundreds of energy professionals who rely on GridMonitor to navigate the complex regulatory landscape.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-4">
          <div className=""> {/* Kept smaller button */}
          <a href="/trial">
            <button className="global-button">
              <span>Start your free trial today</span>
            </button>
            </a>
            <div className="button-shadow z-0"></div>
          </div>
        
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-lg text-gray-600">
          <div className="flex items-center gap-1">
            <span className="text-green-500">✔</span> No credit card required
          </div>
          <div className="flex items-center gap-1">
            <span className="text-green-500">✔</span> 30-day free trial
          </div>
          <div className="flex items-center gap-1">
            <span className="text-green-500">✔</span> Cancel anytime
          </div>
          
        </div>

       
      </div>
    </section>
  );
};

export default Signup;