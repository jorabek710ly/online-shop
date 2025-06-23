import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 px-4 py-12 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-[15px] text-gray-700">
        <div>
          <h2 className="text-[26px] font-bold mb-8 tracking-wide">Funiro.</h2>
          <p className="text-[#9F9F9F] font-normal leading-6">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>

        <div>
          <h3 className="text-[#9F9F9F] mb-5 text-[14px] font-semibold uppercase tracking-wide">Links</h3>
          <ul className="flex flex-col gap-6">
            <li><a href="#" className="hover:text-black transition-all duration-200">Home</a></li>
            <li><a href="#" className="hover:text-black transition-all duration-200">Shop</a></li>
            <li><a href="#" className="hover:text-black transition-all duration-200">About</a></li>
            <li><a href="#" className="hover:text-black transition-all duration-200">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#9F9F9F] mb-5 text-[14px] font-semibold uppercase tracking-wide">Help</h3>
          <ul className="flex flex-col gap-6">
            <li><a href="#" className="hover:text-black transition-all duration-200">Payment Options</a></li>
            <li><a href="#" className="hover:text-black transition-all duration-200">Returns</a></li>
            <li><a href="#" className="hover:text-black transition-all duration-200">Privacy Policies</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#9F9F9F] mb-5 text-[14px] font-semibold uppercase tracking-wide">Newsletter</h3>
          <div className="flex items-center border-b border-black py-1">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-2 py-2 placeholder:text-sm outline-none"
            />
            <button className="ml-2 text-xs font-bold text-black hover:underline">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="border-t text-center text-xs text-gray-500 py-4 mt-10">
        © 2025 Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default React.memo(Footer);
