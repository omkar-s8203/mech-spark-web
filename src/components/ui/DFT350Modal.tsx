import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from './button'; // assuming this is your styled Button

const DFT350Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Learn More
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Dialog.Panel className="max-w-4xl w-full bg-white rounded-xl shadow-2xl p-8 overflow-y-auto max-h-[90vh]">
          <div className="flex justify-between items-start">
            <Dialog.Title className="text-2xl font-bold">DFT350 Professional 3D Printer</Dialog.Title>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-600 text-2xl">&times;</button>
          </div>

          <p className="text-gray-600 mt-2 mb-6">
            Decouvertes DFT350 is a professional-grade 3D printer with exceptional accuracy, durability, and flexibility.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Quad Gantry Leveling System</li>
                <li>Enclosed Print Area for ABS/Nylon</li>
                <li>Flexible Dual-PEI Spring Steel Plate</li>
                <li>All-Metal Hotend (Up to 320°C)</li>
                <li>Fluidd Wi-Fi Control Interface</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Specs & Benefits</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Build Volume: 350 x 350 x 300mm</li>
                <li>Connectivity: Wi-Fi</li>
                <li>Material Support: PLA, ABS, PETG, TPU</li>
                <li>Speed: Up to 300mm/s</li>
                <li>Thermal Safety + Cable Management</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 flex-1">
              Get Started
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default DFT350Modal;
