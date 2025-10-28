import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Description */}
         
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Team</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Events</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Blogs</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Projects</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@ClubNexus.com</li>
              <li>Phone: +213 555 123 456</li>
              <li>Address: Tiaret, Algeria</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Club Nexus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
