/**
 * Popular Courses Data
 * 
 * Contains individual course offerings displayed in the course carousel.
 * Each course has detailed information including curriculum, pricing, and terms.
 */

import { PopularCourse } from '@/types/course.types';

/**
 * Standard terms and conditions for all courses
 * Centralized to maintain consistency across all offerings
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
 * Standard additional charges applied to all courses
 * Ensures consistent pricing structure across offerings
 */
const standardCharges = {
  registrationFee: "₹500 (One-time, non-refundable)",
  courseMaterials: "₹1,000 - ₹2,000 (Offline courses)",
  certification: "Included in course fee",
  softwareLicense: "Shared/student version provided"
};

/**
 * Popular courses array - displayed in carousel format
 * Each course represents a specific training program with detailed breakdown
 */
export const popularCourses: PopularCourse[] = [
  {
    // Foundation level automotive design course
    title: "Automotive Design Foundation",
    description: "Master the fundamentals of automotive design with industry-standard tools and methodologies.",
    duration: "30 Days (60 hrs)",
    level: "Beginner",
    students: "2,400+",
    image: "/lovable-uploads/e42da9ef-054a-4ccc-ae00-1c764b001b34.png",
    price: "₹21,240",
    detailedInfo: {
      overview: "This comprehensive foundation course introduces you to the exciting world of automotive design. You'll learn the fundamental principles, tools, and methodologies used in modern automotive design processes.",
      features: [
        "Introduction to automotive design principles and history",
        "Basic 3D modeling techniques for automotive components",
        "Understanding of materials and manufacturing processes",
        "Hands-on projects with real vehicle design challenges",
        "Industry-standard software training (SolidWorks basics)",
        "Design sketching and visualization techniques"
      ],
      benefits: [
        "Strong foundation for advanced automotive design courses",
        "Portfolio development with beginner-friendly projects",
        "Understanding of automotive industry standards",
        "Certificate of completion from recognized institution"
      ],
      curriculum: [
        "Week 1-2: Automotive Design History and Principles",
        "Week 3-4: Introduction to CAD Software",
        "Week 5-6: Basic 3D Modeling Techniques",
        "Week 7-8: Materials and Manufacturing Basics",
        "Week 9-10: Design Project - Simple Component",
        "Week 11-12: Portfolio Development and Presentation"
      ],
      investment: "₹21,240 (Base Fee: ₹18,000 + GST: ₹3,240) - Online Mode",
      additionalCharges: standardCharges,
      termsAndConditions: standardTerms
    }
  },
  {
    // Advanced automotive design course
    title: "Automotive Design Mastery",
    description: "Advanced automotive design techniques for professional-level projects and industry applications.",
    duration: "60 Days (120 hrs)",
    level: "Advanced",
    students: "1,800+",
    image: "/lovable-uploads/863fc5c4-e705-4d27-994f-0836033f1473.png",
    price: "₹37,760",
    detailedInfo: {
      overview: "Take your automotive design skills to the professional level with advanced techniques, complex projects, and industry-relevant methodologies used by leading automotive companies worldwide.",
      features: [
        "Advanced surfacing and complex geometry modeling",
        "Aerodynamics and performance optimization techniques",
        "Advanced material selection and testing procedures",
        "Professional project management methodologies",
        "Industry collaboration and real-world project experience",
        "Advanced simulation and testing protocols"
      ],
      benefits: [
        "Professional-level portfolio with complex projects",
        "Industry networking opportunities",
        "Job placement assistance in automotive companies",
        "Advanced certification recognized by major OEMs"
      ],
      curriculum: [
        "Week 1-2: Advanced CAD Techniques and Surface Modeling",
        "Week 3-4: Aerodynamics and Performance Design",
        "Week 5-6: Advanced Materials and Testing",
        "Week 7-8: Vehicle Systems Integration",
        "Week 9-12: Major Design Project - Complete Vehicle Component",
        "Week 13-14: Professional Presentation and Documentation",
        "Week 15-16: Industry Collaboration Project"
      ],
      investment: "₹37,760 (Base Fee: ₹32,000 + GST: ₹5,760) - Hybrid Mode",
      additionalCharges: standardCharges,
      termsAndConditions: standardTerms
    }
  },
  {
    // SolidWorks professional training
    title: "SolidWorks Professional",
    description: "Complete SolidWorks training from basics to advanced modeling, simulation, and design validation.",
    duration: "45 Days (90 hrs)",
    level: "Intermediate",
    students: "3,200+",
    image: "/lovable-uploads/8b6ca308-d4a2-44a4-9127-672c98e09620.png",
    price: "₹29,500",
    detailedInfo: {
      overview: "Master SolidWorks from fundamentals to advanced features. This comprehensive course covers all aspects of SolidWorks including part modeling, assembly design, drawing creation, and simulation.",
      features: [
        "Complete SolidWorks interface and workflow mastery",
        "Advanced part modeling and assembly techniques",
        "Technical drawing and documentation creation",
        "Simulation and analysis tools (FEA basics)",
        "Sheet metal and weldment design",
        "Surface modeling and advanced features"
      ],
      benefits: [
        "SolidWorks Professional Certification preparation",
        "Industry-ready skills for mechanical design roles",
        "Comprehensive project portfolio",
        "Access to SolidWorks community and resources"
      ],
      curriculum: [
        "Week 1: SolidWorks Basics and Interface",
        "Week 2: Part Modeling Fundamentals",
        "Week 3: Advanced Part Features",
        "Week 4: Assembly Design and Constraints",
        "Week 5: Technical Drawings and Documentation",
        "Week 6: Sheet Metal and Weldments",
        "Week 7: Surface Modeling",
        "Week 8: Simulation and Analysis Basics",
        "Week 9: Advanced Projects",
        "Week 10: Certification Preparation"
      ],
      investment: "₹29,500 (Base Fee: ₹25,000 + GST: ₹4,500) - Hybrid Mode",
      additionalCharges: standardCharges,
      termsAndConditions: standardTerms
    }
  },
  {
    // CATIA professional training
    title: "CATIA V5/V6 Mastery",
    description: "Comprehensive CATIA training for aerospace and automotive industries with real-world projects.",
    duration: "45 Days (90 hrs)",
    level: "Advanced",
    students: "1,500+",
    image: "/lovable-uploads/81aed992-67ef-4f33-a0ba-a79be45d6687.png",
    price: "₹29,500",
    detailedInfo: {
      overview: "Master CATIA V5 and V6 for aerospace and automotive applications. This advanced course covers all major workbenches and prepares you for professional roles in leading aerospace and automotive companies.",
      features: [
        "Complete CATIA V5/V6 workbench mastery",
        "Advanced surface modeling and Class-A surfacing",
        "Complex assembly design and management",
        "Aerospace and automotive specific workflows",
        "Advanced simulation and analysis capabilities",
        "Integration with PLM systems and workflows"
      ],
      benefits: [
        "CATIA certification from Dassault Systèmes",
        "Aerospace and automotive industry readiness",
        "Professional project portfolio with complex designs",
        "Direct placement opportunities with industry partners"
      ],
      curriculum: [
        "Week 1-2: CATIA Fundamentals and Part Design",
        "Week 3-4: Advanced Part Features and Parametric Design",
        "Week 5-6: Assembly Design and Large Assembly Management",
        "Week 7-8: Generative Surface Design",
        "Week 9-10: Class-A Surfacing for Automotive",
        "Week 11-12: Advanced Simulation and Analysis",
        "Week 13: Industry-Specific Projects",
        "Week 14: Certification Preparation and Portfolio Review"
      ],
      investment: "₹29,500 (Base Fee: ₹25,000 + GST: ₹4,500) - Hybrid Mode",
      additionalCharges: standardCharges,
      termsAndConditions: standardTerms
    }
  },
  {
    // 3D Printing workshop
    title: "3D Printing & Prototyping",
    description: "Learn rapid prototyping techniques, 3D modeling for printing, and advanced manufacturing methods.",
    duration: "5 Days (15 hrs)",
    level: "Beginner",
    students: "2,100+",
    image: "/lovable-uploads/04355239-8765-46db-aaa9-02bb2e6fd1c6.png",
    price: "₹7,080",
    detailedInfo: {
      overview: "Dive into the world of 3D printing and rapid prototyping. Learn to design for additive manufacturing, understand different 3D printing technologies, and master the complete prototyping workflow.",
      features: [
        "Complete 3D printing technology overview",
        "Design for additive manufacturing (DfAM) principles",
        "Hands-on experience with multiple 3D printers",
        "Post-processing and finishing techniques",
        "Material selection and optimization",
        "Rapid prototyping workflow and best practices"
      ],
      benefits: [
        "Practical experience with professional 3D printers",
        "Understanding of rapid prototyping for product development",
        "Portfolio of 3D printed prototypes",
        "Knowledge of emerging additive manufacturing technologies"
      ],
      curriculum: [
        "Day 1: 3D Printing Technologies and Applications Overview",
        "Day 2: Design for Additive Manufacturing Principles",
        "Day 3: Hands-on 3D Modeling and Printer Operation",
        "Day 4: Materials, Settings Optimization & Post-Processing",
        "Day 5: Advanced Techniques and Project Completion"
      ],
      investment: "₹7,080 (Base Fee: ₹6,000 + GST: ₹1,080) - Offline Mode",
      additionalCharges: standardCharges,
      termsAndConditions: standardTerms
    }
  },
  {
    // Product Design course
    title: "Product Design & Prototyping",
    description: "Master CNC programming, toolpath optimization, and advanced machining techniques for precision manufacturing.",
    duration: "40 Days (80 hrs)",
    level: "Intermediate",
    students: "1,900+",
    image: "/lovable-uploads/81aed992-67ef-4f33-a0ba-a79be45d6687.png",
    price: "₹33,040",
    detailedInfo: {
      overview: "Master product design and prototyping from concept to manufacturing. Learn advanced techniques for precision manufacturing and product development lifecycle.",
      features: [
        "Complete product design lifecycle management",
        "Advanced prototyping techniques and methodologies",
        "Material selection and testing procedures",
        "Manufacturing process optimization",
        "Quality control and precision measurement",
        "Advanced manufacturing techniques and troubleshooting"
      ],
      benefits: [
        "Industry-recognized product design certification",
        "Hands-on experience with professional equipment",
        "Job placement assistance in manufacturing companies",
        "Understanding of modern product development processes"
      ],
      curriculum: [
        "Week 1-2: Product Design Fundamentals and Concept Development",
        "Week 3-4: Prototyping Methods and Material Selection",
        "Week 5-6: Advanced Manufacturing Techniques",
        "Week 7-8: Quality Control and Testing Validation",
        "Week 9-10: Final Project and Industry Certification"
      ],
      investment: "₹33,040 (Base Fee: ₹28,000 + GST: ₹5,040) - Hybrid Mode",
      additionalCharges: standardCharges,
      termsAndConditions: standardTerms
    }
  }
];