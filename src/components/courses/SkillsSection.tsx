import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { skills } from './CourseData';

const SkillsSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center animate-scale-in">
      <h3 className="text-2xl font-bold text-white mb-4">Master Industry-Standard Tools</h3>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Our comprehensive training programs cover all essential software and technologies used in modern mechanical engineering.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="text-white border-white/30 hover:bg-white/10 px-4 py-2 text-sm hover:scale-110 transition-transform duration-200"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill}
          </Badge>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="https://decouvertes.trainercentralsite.in/#/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3 hover:scale-105 transition-transform duration-200 animate-float"
          >
            Enroll Now
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SkillsSection;
