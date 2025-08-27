
import React from 'react';
import CourseCategories from './courses/CourseCategories';
import PopularCourses from './courses/PopularCourses';
import ThreeDPrinterSection from './courses/ThreeDPrinterSection';
import SkillsSection from './courses/SkillsSection';
import SocialMediaButtons from './courses/SocialMediaButtons';

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Engineering Courses & Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Decouvertes Future Tech Pvt Ltd, we provide services in product development, digital design, and 
            prototyping for students and professionals across industries.
          </p>
        </div>

        {/* Course Categories */}
        <CourseCategories />

        {/* 3D Printer Product Section */}
        <ThreeDPrinterSection />

        {/* Popular Courses Carousel */}
        <PopularCourses />

        {/* Skills Section */}
        <SkillsSection />
      </div>

      {/* Social Media Buttons at Bottom */}
      <SocialMediaButtons />
    </section>
  );
};

export default Courses;
