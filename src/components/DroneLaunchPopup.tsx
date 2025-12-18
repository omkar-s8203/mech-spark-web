import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const DroneLaunchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger the popup after a short delay (2 seconds) for better UX
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[400px] w-[90%] rounded-xl p-0 overflow-hidden border-0 shadow-2xl bg-white">
        {/* Header Section with Gradient */}
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-6 text-white text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-3 backdrop-blur-sm shadow-lg animate-bounce">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white tracking-tight">
                Launching Soon
              </DialogTitle>
            </DialogHeader>
            <p className="text-orange-50 text-xs font-semibold uppercase tracking-widest mt-1">
              Future Tech Innovation
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 text-center">
          <p className="text-gray-700 text-lg leading-relaxed font-medium mb-6">
            "Proudly designed and manufactured in <span className="text-orange-600 font-bold">India</span>, our innovative drone is built for special-purpose applications."
          </p>

          <Button 
            onClick={() => setIsOpen(false)}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            Stay Tuned
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DroneLaunchPopup;