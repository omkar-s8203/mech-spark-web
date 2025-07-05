/**
 * Course Type Definitions
 * 
 * This file contains all TypeScript interfaces and types related to courses.
 * Centralizes type definitions for better maintainability and type safety.
 */

import React from 'react';

/**
 * Additional charges structure for courses
 * Contains all extra fees beyond the base course price
 */
export interface AdditionalCharges {
  registrationFee: string;      // One-time registration cost
  courseMaterials: string;      // Materials cost (offline courses)
  certification: string;        // Certification fee information
  softwareLicense: string;      // Software licensing details
}

/**
 * Course category interface - represents main service categories
 * Used for the main service cards on the courses page
 */
export interface CourseCategory {
  icon: React.ReactElement;     // Lucide icon component
  title: string;               // Category title (e.g., "TRAINING")
  subtitle: string;            // Descriptive subtitle
  description: string;         // Brief category description
  color: string;              // Tailwind background color class
  textColor: string;          // Tailwind text color class
  bgImage: string;            // Background image path
  detailedInfo: {
    overview: string;          // Detailed category overview
    features: string[];        // List of key features
    benefits: string[];        // List of benefits
    duration: string;          // Duration information
    investment: string;        // Pricing information
    additionalCharges?: AdditionalCharges;
    termsAndConditions?: string[];
  };
}

/**
 * Popular course interface - represents individual course offerings
 * Used for the course carousel and detailed course information
 */
export interface PopularCourse {
  title: string;               // Course title
  description: string;         // Brief course description
  duration: string;           // Course duration
  level: string;              // Difficulty level (Beginner/Intermediate/Advanced)
  students: string;           // Number of enrolled students
  image: string;              // Course image path
  price: string;              // Course price with currency
  detailedInfo: {
    overview: string;          // Detailed course overview
    features: string[];        // Course features and inclusions
    benefits: string[];        // Benefits of taking the course
    curriculum: string[];      // Course curriculum breakdown
    investment?: string;       // Detailed pricing breakdown
    additionalCharges?: AdditionalCharges;
    termsAndConditions?: string[];
  };
}

/**
 * Social media link interface
 * Used for social media buttons and links
 */
export interface SocialMediaLink {
  icon: React.ReactElement;    // Social media icon
  label: string;              // Accessible label
  href: string;               // Link URL
  bgColor: string;            // Background color for the button
}