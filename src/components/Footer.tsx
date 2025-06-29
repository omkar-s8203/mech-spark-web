import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const corporateLinks = [
    "About Us",
    "Services",
    "Careers",
    "News"
  ];

  const serviceLinks = [
    "Product Developments",
    "Training Services",
    "Design Consultancy",
    "Web Development"
  ];

  const legalLinks = [
    "Terms of Use",
    "Privacy Policy",
    "Contact",
    "Help Center"
  ];

  const openForm = () => setIsModalOpen(true);
  const closeForm = () => setIsModalOpen(false);

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              We work, You Grow!
            </h3>
            <h2 className="text-4xl font-bold text-white mb-8">
              We Help Build On Past & Prepare For Your Future.
            </h2>
            <div className="max-w-md mx-auto">
              <Button
                size="lg"
                className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-lg mr-3">
                    <span className="text-white font-bold text-xl">D</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Decouvertes</h3>
                    <p className="text-sm text-gray-400">Accelerating the Technologies</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A leading company focused on accelerating the technology and growing exponentially.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-400">📍 Phase 3, Hinjawadi Rajiv Gandhi</p>
                  <p className="text-gray-400">Infotech Park, Hinjawadi, Pimpri-</p>
                  <p className="text-gray-400">Chinchwad, Maharashtra 411057</p>
                  <p className="text-gray-400">📞 +91 9561103435</p>
                  <p className="text-gray-400">✉️ shivamsony@decouvertes.in</p>
                </div>
              </div>

              {/* Corporate Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Corporate</h4>
                <ul className="space-y-3">
                  {corporateLinks.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                <ul className="space-y-3">
                  {serviceLinks.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
                <ul className="space-y-3">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Free Webinar Section */}
            <div className="mt-16 pt-8 border-t border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">FOR FREE WEBINAR</h4>
                  <p className="text-gray-400 mb-4">
                    CLICK ON <span className="text-orange-400 font-semibold">REGISTER NOW</span> OR SCAN QR
                  </p>
                  <Button
                    onClick={openForm}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
                  >
                    Register Now
                  </Button>
                </div>

                <div className="text-center md:text-right">
                  <div className="inline-block bg-white p-4 rounded-lg">
                    <img
                      // src="/assets/images/qr.png"
                       src="/qr.png"
                      alt="Webinar QR Code"
                      className="w-32 h-32 object-cover rounded"
                    />
                  </div>
                </div>

                {/* <div className="text-center md:text-right">
                  <div className="inline-block bg-white p-4 rounded-lg">
                    <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-sm">QR Code</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                ©2002 - 2023 Decouvertes - All rights reserved
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for Google Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl w-[90%] md:w-[600px] h-[80%] p-4 relative">
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfCsCqX8pQRcX3VktXY7-jZSU9IvQmyAnvvyEOPA4VzLf1Igg/viewform?usp=dialog"
              width="100%"
              height="100%"
              allowFullScreen
              className="rounded-lg border-0"
              title="Webinar Registration Form"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
