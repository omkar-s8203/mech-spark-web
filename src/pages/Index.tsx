
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Courses />
      <Testimonials />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
};

export default Index;
