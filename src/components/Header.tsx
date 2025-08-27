import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">


          {/* Logo and Title */}
          {/* <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/logo.png"
              alt="Website Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-gray-900">Decouvertes</h1>
              <p className="text-xs text-blue-600 font-magnolia">The Art Of India</p>
            </div>
          </div> */}

          <div className="flex items-center gap-5 animate-fade-in">
   {/* Logo */}
   <div className="flex items-center justify-center group">
     <img
       src="/lovable-uploads/logo.png"
       alt="Website Logo"
       className="w-12 h-12 object-contain group-hover:animate-bounce-in transition-all duration-300 hover:scale-110"
     />
   </div>

   {/* Text Block */}
   <div className="flex flex-col justify-center leading-tight">
     <h1 className="text-2xl font-bold text-foreground hover:animate-text-shimmer bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer bg-[length:200%_100%]">Decouvertes</h1>
     <p className="text-sm text-blue-600 font-magnolia animate-pulse">The Art Of India</p>
   </div>
 </div>



 



          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/#home" className="text-foreground hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                Home
              </a>
              <a href="/#services" className="text-muted-foreground hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                Services
              </a>
              <a href="/#courses" className="text-muted-foreground hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                Courses
              </a>
              <a href="/#about" className="text-muted-foreground hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                About
              </a>
              <a
                href="https://forms.office.com/r/0e7umuTtmz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4 animate-slide-in-right">
            <a href="https://decouvertes.trainercentralsite.in/#/login" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hover:bg-orange-50 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:animate-wiggle">
                Login
              </Button>
            </a>
            <a href="https://decouvertes.trainercentralsite.in/#/signup" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 hover:animate-bounce-in">
                Sign Up
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-muted inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in-left">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <a href="/#home" className="text-foreground hover:text-orange-500 block px-3 py-2 text-base font-medium transition-all duration-300 hover:translate-x-2">
                Home
              </a>
              <a href="/#services" className="text-muted-foreground hover:text-orange-500 block px-3 py-2 text-base font-medium transition-all duration-300 hover:translate-x-2">
                Services
              </a>
              <a href="/#courses" className="text-muted-foreground hover:text-orange-500 block px-3 py-2 text-base font-medium transition-all duration-300 hover:translate-x-2">
                Courses
              </a>
              <a href="/#about" className="text-muted-foreground hover:text-orange-500 block px-3 py-2 text-base font-medium transition-all duration-300 hover:translate-x-2">
                About
              </a>
              <a
                href="https://forms.office.com/r/0e7umuTtmz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-orange-500 block px-3 py-2 text-base font-medium transition-all duration-300 hover:translate-x-2"
              >
                Contact
              </a>

              <div className="flex flex-col space-y-2 px-3 py-4">
                <a href="https://decouvertes.trainercentralsite.in/#/login" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full hover:bg-orange-50 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                    Login
                  </Button>
                </a>
                <a href="https://decouvertes.trainercentralsite.in/#/signup" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105">
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
