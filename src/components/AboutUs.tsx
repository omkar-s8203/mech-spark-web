import React from 'react';
import { Rocket, Lightbulb, Wrench, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Where Imagination Meets Innovation
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Decouvertes Future Tech Pvt. Ltd., we are not just building products—we're crafting the future. 
              Born from a bold vision in 2023 in Pune, India, our mission is to empower creators, engineers, and 
              dreamers with the tools, training, and technology to transform ideas into real-world impact.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              We stand at the crossroads of design, engineering, and education, enabling a new generation of 
              thinkers to shape what comes next.
            </p>
          </div>
        </div>

        {/* What Drives Us */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Rocket className="h-8 w-8 text-orange-500 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">What Drives Us</h3>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe innovation isn't reserved for the elite—it should be accessible, hands-on, and 
              transformative. Whether you're building your first prototype or training to master product design, 
              we're your launchpad.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <Lightbulb className="h-8 w-8 text-yellow-500 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">What We Offer</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Advanced 3D Printing Systems
                </h4>
                <p className="text-gray-600">
                  From desktop powerhouses like the DFT350 to custom-engineered solutions, our machines are 
                  built for speed, precision, and reliability.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Design & Product Development Services
                </h4>
                <p className="text-gray-600">
                  We convert concepts into manufacturable, validated products through CAD design, reverse 
                  engineering, and CAE simulations.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Future-Focused Training Programs
                </h4>
                <p className="text-gray-600">
                  Our industry-ready courses in CAD/CAM/CAE, Automotive Product Design, and Rapid Prototyping 
                  turn skills into careers—with real tools, real projects, and real outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <Wrench className="h-8 w-8 text-blue-500 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Who We Serve</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Startups & Innovators</h4>
              <p className="text-sm text-gray-600">looking to prototype and scale</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Engineering Students</h4>
              <p className="text-sm text-gray-600">hungry for hands-on learning</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
              <h4 className="font-semibold text-gray-900 mb-2">MSMEs & Manufacturers</h4>
              <p className="text-sm text-gray-600">needing design-to-product support</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Design Enthusiasts</h4>
              <p className="text-sm text-gray-600">wanting to break into the future of tech</p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Globe className="h-8 w-8 text-green-500 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              To spark a maker movement across India—where innovation is local, learning is lifelong, 
              and every idea has the power to fly.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Built With Passion. Backed By Purpose.</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            At Decouvertes, we don't just deliver services—we build partnerships, mentor talent, and drive progress. 
            Because the future isn't something we wait for—it's something we build together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;