
import React, { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Lazy load components for better performance
const Services = lazy(() => import('@/components/Services'));
const Courses = lazy(() => import('@/components/Courses'));
const AboutUs = lazy(() => import('@/components/AboutUs'));
const YouTubeVideos = lazy(() => import('@/components/YouTubeVideos'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <Suspense fallback={<LoadingFallback />}>
        <AboutUs />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Courses />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <YouTubeVideos />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
