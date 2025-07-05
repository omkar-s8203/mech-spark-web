/**
 * Course Categories Data
 * 
 * Contains the main service categories displayed as cards.
 * Each category represents a major service offering with detailed information.
 */

import React from 'react';
import { Book, Settings, Code } from 'lucide-react';
import { CourseCategory } from '@/types/course.types';

/**
 * Standard terms and conditions applied to all courses
 * Extracted to avoid repetition and ensure consistency
 */
const standardTerms = [
  "Payment to be made in full before course commencement",
  "Installment options available for selected courses (with minimal processing fee)",
  "GST @ 18% applicable on all training services",
  "All prices subject to change as per government regulations",
  "Proper Tax Invoice (with GSTIN) will be issued",
  "Payment Methods: UPI, Bank Transfer, Card, Cash (offline)"
];

/**
 * Standard additional charges structure
 * Applied consistently across all course categories
 */
const standardCharges = {
  registrationFee: "₹500 (One-time, non-refundable)",
  courseMaterials: "₹1,000 - ₹2,000 (Offline courses)",
  certification: "Included in course fee",
  softwareLicense: "Shared/student version provided"
};

/**
 * Main course categories configuration
 * These appear as the primary service cards on the courses page
 */
export const courseCategories: CourseCategory[] = [
  {
    // CAD/CAM/CAE Training Category
    icon: React.createElement(Book, { className: "h-12 w-12" }),
    title: "TRAINING",
    subtitle: "CAD, CAM, & CAE Software Training",
    description: "Hands-on training for tools like SolidWorks and CATIA. Programs for all expertise levels with real-world projects.",
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
    bgImage: "/lovable-uploads/81aed992-67ef-4f33-a0ba-a79be45d6687.png",
    detailedInfo: {
      overview: "Our comprehensive CAD, CAM, & CAE software training programs are designed to equip students and professionals with industry-standard skills in mechanical design and engineering.",
      features: [
        "Hands-on training with SolidWorks, CATIA, AutoCAD, and Fusion 360",
        "Real-world project-based learning approach",
        "Industry-certified instructors with 10+ years experience",
        "Flexible scheduling with weekend and evening batches",
        "Job placement assistance and career guidance",
        "Access to latest software versions and tools"
      ],
      benefits: [
        "Industry-ready certification upon completion",
        "Portfolio development with actual projects",
        "Networking opportunities with industry professionals",
        "Continuous support even after course completion"
      ],
      duration: "45 Days (90 hrs) - Hybrid Mode",
      investment: "₹29,500 (Base Fee: ₹25,000 + GST: ₹4,500)",
      additionalCharges: standardCharges,
      termsAndConditions: standardTerms
    }
  },
  {
    // Product Development Category
    icon: React.createElement(Settings, { className: "h-12 w-12" }),
    title: "PRODUCT",
    subtitle: "Product Design and Development",
    description: "Support from concept to prototype with customized solutions. Guidance on materials and manufacturing processes.",
    color: "bg-gray-800",
    textColor: "text-gray-700",
    bgImage: "/lovable-uploads/04355239-8765-46db-aaa9-02bb2e6fd1c6.png",
    detailedInfo: {
      overview: "Our Solutions are assured for industries - Best A Grade Commercial Services. We provide comprehensive New Product Development (R&D) services for businesses looking to innovate and create cutting-edge solutions.",
      features: [
        "New Product Development (R&D) - Complete innovation lifecycle management",
        "Advanced research and development methodologies",
        "Market analysis and feasibility studies",
        "Prototype development and testing validation",
        "Web site development with modern UI/UX design",
        "Digital product strategy and implementation"
      ],
      benefits: [
        "New Product Development (R&D) expertise for breakthrough innovations",
        "Reduced time-to-market with efficient R&D processes",
        "Modern web development solutions with responsive design",
        "Comprehensive digital transformation support"
      ],
      duration: "2-8 months based on project complexity",
      investment: "Custom pricing based on project scope and requirements",
      additionalCharges: standardCharges,
      termsAndConditions: standardTerms
    }
  },
  {
    // 3D Printing Category
    icon: React.createElement(Code, { className: "h-12 w-12" }),
    title: "3D PRINT",
    subtitle: "Rapid Prototyping Services",
    description: "3D printing services with high-quality output. Prototype testing and support for design optimization.",
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
    bgImage: "/rapid_prototyping.png",
    detailedInfo: {
      overview: "State-of-the-art 3D printing and rapid prototyping services using professional-grade equipment to bring your designs to life with precision and quality.",
      features: [
        "High-precision 3D printing with multiple material options",
        "PLA, ABS, PETG, and specialty filament printing",
        "Layer resolution from 0.1mm to 0.3mm",
        "Large build volume up to 250x250x250mm",
        "Post-processing services including sanding and painting",
        "Design optimization for 3D printing"
      ],
      benefits: [
        "Fast turnaround time for prototypes",
        "Cost-effective solution for small batch production", 
        "High-quality surface finish and dimensional accuracy",
        "Support for complex geometries and overhangs"
      ],
      duration: "5 Days (15 hrs) - Offline Mode",
      investment: "₹7,080 (Base Fee: ₹6,000 + GST: ₹1,080)",
      additionalCharges: standardCharges,
      termsAndConditions: standardTerms
    }
  }
];