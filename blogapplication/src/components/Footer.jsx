import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-500">
      <div className="px-4 pt-16 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Category Section */}
          <div>
            <p className="font-medium tracking-wide">Category</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">News</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">World</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Games</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">References</a>
              </li>
            </ul>
          </div>

          {/* Apples Section */}
          <div>
            <p className="font-medium tracking-wide">Apples</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Web</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">eCommerce</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Business</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Entertainment</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Portfolio</a>
              </li>
            </ul>
          </div>

          {/* Cherry Section */}
          <div>
            <p className="font-medium tracking-wide">Cherry</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Media</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Design</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Branding</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Marketing</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Advertisement</a>
              </li>
            </ul>
          </div>

          {/* Business Section */}
          <div>
            <p className="font-medium tracking-wide">Business</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Query</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Personal</a>
              </li>
              <li>
                <a href="/" className="transition-colors duration-300 hover:text-orange-500">Wiki</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-5 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blog Nest. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
