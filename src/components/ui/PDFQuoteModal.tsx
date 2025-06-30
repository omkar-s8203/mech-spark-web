import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from './button';
import { CheckCircle, Star } from 'lucide-react';

const PDFQuoteModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 group-hover:scale-105 transition-transform duration-200"
      >
        Get Quote
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
        <Dialog.Panel className="max-w-4xl w-full bg-white rounded-xl shadow-2xl p-8">
          <div className="flex justify-between items-start">
            <Dialog.Title className="text-2xl font-bold text-gray-900">📄 Rapid Prototyping Services - DFT250</Dialog.Title>
            <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-400 hover:text-red-500">&times;</button>
          </div>

          <p className="text-gray-600 mt-2 mb-6">
            State-of-the-art 3D printing services using high-performance DFT250 printers, designed for industrial-grade rapid prototyping.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 flex items-center">
                <CheckCircle className="text-green-500 mr-2" /> Key Features
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Enclosed build chamber for ABS/Nylon</li>
                <li>320°C all-metal hotend</li>
                <li>Quad Gantry Auto Bed Leveling</li>
                <li>Dual-PEI spring steel build plate</li>
                <li>Wi-Fi printing via Fluidd</li>
                <li>50:8 direct drive extruder</li>
                <li>Thermal safety controls</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 flex items-center">
                <Star className="text-yellow-500 mr-2" /> Benefits
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Handles PLA, ABS, TPU, Nylon, CF</li>
                <li>Exceptional dimensional accuracy</li>
                <li>Supports complex geometries</li>
                <li>Remote monitoring & management</li>
                <li>Fast production with quality finish</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg mt-6 text-sm">
            <div>
              <strong>Build Volume:</strong> 350 x 350 x 300mm
            </div>
            <div>
              <strong>Max Temp:</strong> 320°C (Hotend), 110°C (Bed)
            </div>
            <div>
              <strong>Speed:</strong> Up to 300 mm/s
            </div>
            <div>
              <strong>Connectivity:</strong> Wi-Fi with Fluidd UI
            </div>
            <div>
              <strong>Cost Estimate:</strong> ₹2,50,000 (1 unit)
            </div>
            <div>
              <strong>Training:</strong> Included (3D CAD + Machine)
            </div>
          </div>

          <div className="flex justify-between gap-4 mt-6">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600">Get Started</Button>
            <Button variant="outline" className="flex-1" onClick={() => window.location.href = '#'}>Contact Us</Button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default PDFQuoteModal;
