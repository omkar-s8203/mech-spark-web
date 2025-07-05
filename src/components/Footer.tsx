import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import TermsOfServiceModal from '@/components/TermsOfServiceModal';

/**
 * Footer Component
 * 
 * Main footer section containing:
 * - Newsletter/CTA section with WhatsApp integration
 * - Company information and contact details
 * - Navigation links (Corporate, Services, Legal)
 * - Webinar registration with QR code
 * - Copyright and legal links
 * - Modal for webinar registration form
 */

const Footer = () => {
  // Modal state for webinar registration form and legal modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  // Navigation link arrays for dynamic rendering
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

  // Modal control functions
  const openForm = () => setIsModalOpen(true);
  const closeForm = () => setIsModalOpen(false);
  
  // Legal modal control functions
  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);
  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  // Handle different types of link clicks
  const handleLegalLinkClick = (linkName: string) => {
    switch (linkName) {
      case 'Terms of Use':
        openTermsModal();
        break;
      case 'Privacy Policy':
        openPrivacyModal();
        break;
      case 'Contact':
        // Open WhatsApp with contact message
        window.open(
          "https://wa.me/919561103435?text=Hello%20Decouvertes%20Team%21%20%F0%9F%91%8B%0A%0AI%20need%20assistance%20and%20would%20like%20to%20get%20in%20touch%20with%20your%20support%20team.%20Could%20you%20please%20help%20me%20with%20my%20inquiry%3F%0A%0AThank%20you%21",
          '_blank'
        );
        break;
      case 'Help Center':
        // Open WhatsApp with help center message
        window.open(
          "https://wa.me/919561103435?text=Hello%20%F0%9F%91%8B%0A%0AI%20need%20help%20and%20support%20regarding%20Decouvertes%20services.%20Could%20you%20please%20assist%20me%20with%20the%20following%3A%0A%0A-%20%5BDescribe%20your%20issue%20here%5D%0A%0AThank%20you%20for%20your%20support%21%20%F0%9F%99%8F",
          '_blank'
        );
        break;
      default:
        // For other links, do nothing or handle as needed
        break;
    }
  };

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
              {/* WhatsApp CTA Button */}
              <a
  href="https://wa.me/919561103435?text=Hello%20%F0%9F%91%8B%2C%0A%0AI'm%20reaching%20out%20after%20exploring%20*Decouvertes%20(The%20Art%20of%20India)*%20%E2%80%94%20I'm%20impressed%20by%20your%20innovative%20work%20in%20product%20development%2C%20prototyping%2C%20web%20solutions%2C%20and%20training.%20%0A%0AI'd%20love%20to%20discuss%20how%20we%20can%20collaborate%20or%20learn%20more%20about%20your%20offerings.%20Please%20share%20further%20details%20at%20your%20convenience.%20Looking%20forward%20to%20hearing%20from%20your%20team!%20%F0%9F%99%8C%E2%9C%A8"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3"
  >
    Get Started Today
  </Button>
</a>

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
                  {/* Company Logo */}
                  <div className="mr-3">
                    <img
                      src="/logo.png"
                      alt="Decouvertes Logo"
                      className="w-12 h-12 object-contain rounded-lg"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">Decouvertes</h3>
                    <p className="text-sm text-gray-400">The Art Of India</p>
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
                      <button 
                        onClick={() => handleLegalLinkClick(link)}
                        className="text-gray-400 hover:text-orange-400 transition-colors text-left"
                      >
                        {link}
                      </button>
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

                {/* QR Code for Webinar Registration */}
                <div className="text-center md:text-right">
                  <div className="inline-block bg-white p-4 rounded-lg">
                    <img
                      src="/qr.png"
                      alt="Webinar QR Code"
                      className="w-32 h-32 object-cover rounded"
                    />
                  </div>
                </div>
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
                <button 
                  onClick={openPrivacyModal}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={openTermsModal}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Webinar Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl w-[90%] md:w-[600px] h-[80%] p-4 relative">
            {/* Close button */}
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            {/* Embedded webinar registration form */}
            <iframe
              src="https://decouvertes.trainercentralsite.in/course/free-workshop-kickstart-your-future-in-design-engineering#/home "
              width="100%"
              height="100%"
              allowFullScreen
              className="rounded-lg border-0"
              title="Webinar Registration Form"
            />
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={closePrivacyModal} 
      />

      {/* Terms of Service Modal */}
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={closeTermsModal} 
      />
    </>
  );
};

export default Footer;
