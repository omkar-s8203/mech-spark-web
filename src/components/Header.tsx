import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <img src="/lovable-uploads/a9876d48-9b70-4e24-bf90-5350a2500522.png" alt="Website Logo" className="w-10 h-10" />
              <div className="text-center">
                <h1 className="text-xl font-bold text-gray-900">Decouvertes</h1>
                <p className="text-xs text-blue-600 font-magnolia">The Art Of India</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/#home" className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/#services" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="/#courses" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Courses
              </a>
              <a href="/#about" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a
                href="https://forms.office.com/r/0e7umuTtmz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://decouvertes.trainercentralsite.in/#/login" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hover:bg-orange-50 hover:border-orange-500">
                Login
              </Button>
            </a>
            <a href="https://decouvertes.trainercentralsite.in/#/signup" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                Sign Up
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/#home" className="text-gray-900 hover:text-orange-500 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="/#services" className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="/#courses" className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium">
                Courses
              </a>
              <a href="/#about" className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a
                href="https://forms.office.com/r/0e7umuTtmz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 block px-3 py-2 text-base font-medium"
              >
                Contact
              </a>
              
              <div className="flex flex-col space-y-2 px-3 py-4">
                <a href="https://decouvertes.trainercentralsite.in/#/login" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full hover:bg-orange-50 hover:border-orange-500">
                    Login
                  </Button>
                </a>
                <a href="https://decouvertes.trainercentralsite.in/#/signup" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                    Sign Up
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
