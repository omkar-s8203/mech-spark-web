/**
 * Social Media Data Configuration
 * 
 * Contains social media links and configuration for the application.
 * Centralized management of all external social links.
 */

import React from 'react';
import { Youtube, Linkedin, MessageCircle } from 'lucide-react';
import { SocialMediaLink } from '@/types/course.types';

/**
 * Skills array - represents key technical competencies
 * Displayed in the skills section of the courses page
 */
export const skills = [
  "SolidWorks Professional",
  "CATIA V5/V6",
  "AutoCAD 3D",
  "Fusion 360",
  "ANSYS Analysis",
  "CNC Programming",
  "3D Printing",
  "Product Design"
];

/**
 * Social media links configuration
 * Each link includes styling and accessibility information
 */
export const socialMediaLinks: SocialMediaLink[] = [
  {
    // YouTube channel link
    icon: React.createElement(Youtube, { className: "h-5 w-5" }),
    label: "YouTube",
    href: "https://www.youtube.com/@The_Art_of_India",
    bgColor: "bg-red-600 hover:bg-red-700"
  },
  {
    // LinkedIn company page
    icon: React.createElement(Linkedin, { className: "h-5 w-5" }),
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/decouvertes-future-tech-private-limited/?viewAsMember=true",
    bgColor: "bg-blue-600 hover:bg-blue-700"
  },
  {
    // WhatsApp contact link
    icon: React.createElement(MessageCircle, { className: "h-5 w-5" }),
    label: "WhatsApp",
    href: "https://wa.me/919561103435",
    bgColor: "bg-green-600 hover:bg-green-700"
  }
];