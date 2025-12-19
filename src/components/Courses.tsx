
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
        

        {/* Course Categories */}
        

        {/* 3D Printer Product Section */}
        <ThreeDPrinterSection />

        {/* Popular Courses Carousel */}
        

        {/* Skills Section */}
        <SkillsSection />
      </div>

      {/* Social Media Buttons at Bottom */}
      <SocialMediaButtons />
    </section>
  );
};

export default Courses;
