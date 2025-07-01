
import { Book, Users, Settings, Code, Youtube, Linkedin, MessageCircle, CheckCircle, Star, Clock, Award } from 'lucide-react';
import React from 'react';

export interface CourseCategory {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  textColor: string;
  bgImage: string;
  detailedInfo: {
    overview: string;
    features: string[];
    benefits: string[];
    duration: string;
    investment: string;
  };
}

export interface PopularCourse {
  title: string;
  description: string;
  duration: string;
  level: string;
  students: string;
  image: string;
  price: string;
  detailedInfo: {
    overview: string;
    features: string[];
    benefits: string[];
    curriculum: string[];
  };
}

export interface SocialMediaLink {
  icon: React.ReactElement;
  label: string;
  href: string;
  bgColor: string;
}

export const courseCategories: CourseCategory[] = [
  {
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
      duration: "3-6 months depending on specialization",
      investment: "Starting from ₹15,000 - ₹45,000"
    }
  },
  {
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
      investment: "Custom pricing based on project scope and requirements"
    }
  },
  {
    icon: React.createElement(Code, { className: "h-12 w-12" }),
    title: "3D PRINT",
    subtitle: "Rapid Prototyping Services",
    description: "3D printing services with high-quality output. Prototype testing and support for design optimization.",
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
    bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      duration: "1-5 days depending on complexity and quantity",
      investment: "Starting from ₹50 per hour of print time"
    }
  }
];

export const popularCourses: PopularCourse[] = [
  {
    title: "Automotive Design Foundation",
    description: "Master the fundamentals of automotive design with industry-standard tools and methodologies.",
    duration: "12 Weeks",
    level: "Beginner",
    students: "2,400+",
    image: "/lovable-uploads/e42da9ef-054a-4ccc-ae00-1c764b001b34.png",
    price: "$299",
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
      ]
    }
  },
  {
    title: "Automotive Design Mastery",
    description: "Advanced automotive design techniques for professional-level projects and industry applications.",
    duration: "16 Weeks",
    level: "Advanced",
    students: "1,800+",
    image: "/lovable-uploads/863fc5c4-e705-4d27-994f-0836033f1473.png",
    price: "$499",
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
      ]
    }
  },
  {
    title: "SolidWorks Professional",
    description: "Complete SolidWorks training from basics to advanced modeling, simulation, and design validation.",
    duration: "10 Weeks",
    level: "Intermediate",
    students: "3,200+",
    image: "/lovable-uploads/8b6ca308-d4a2-44a4-9127-672c98e09620.png",
    price: "$399",
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
      ]
    }
  },
  {
    title: "CATIA V5/V6 Mastery",
    description: "Comprehensive CATIA training for aerospace and automotive industries with real-world projects.",
    duration: "14 Weeks",
    level: "Advanced",
    students: "1,500+",
    image: "/lovable-uploads/81aed992-67ef-4f33-a0ba-a79be45d6687.png",
    price: "$599",
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
      ]
    }
  },
  {
    title: "3D Printing & Prototyping",
    description: "Learn rapid prototyping techniques, 3D modeling for printing, and advanced manufacturing methods.",
    duration: "8 Weeks",
    level: "Beginner",
    students: "2,100+",
    image: "/lovable-uploads/04355239-8765-46db-aaa9-02bb2e6fd1c6.png",
    price: "$249",
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
        "Week 1: 3D Printing Technologies and Applications",
        "Week 2: Design for Additive Manufacturing",
        "Week 3: 3D Modeling for Printing",
        "Week 4: Printer Operation and Maintenance",
        "Week 5: Materials and Print Settings Optimization",
        "Week 6: Post-Processing and Finishing",
        "Week 7: Advanced Techniques and Multi-Material Printing",
        "Week 8: Final Project and Portfolio Development"
      ]
    }
  },
  {
    title: "CNC Programming Excellence",
    description: "Master CNC programming, toolpath optimization, and advanced machining techniques for precision manufacturing.",
    duration: "12 Weeks",
    level: "Intermediate",
    students: "1,900+",
    image: "/lovable-uploads/81aed992-67ef-4f33-a0ba-a79be45d6687.png",
    price: "$449",
    detailedInfo: {
      overview: "Master CNC programming from fundamentals to advanced techniques. Learn G-code programming, CAM software operation, and precision machining strategies used in modern manufacturing.",
      features: [
        "Complete G-code programming mastery",
        "Advanced CAM software training (Mastercam/Fusion 360)",
        "Toolpath optimization and machining strategies",
        "CNC machine setup and operation",
        "Quality control and precision measurement",
        "Advanced machining techniques and troubleshooting"
      ],
      benefits: [
        "Industry-recognized CNC programming certification",
        "Hands-on experience with professional CNC machines",
        "Job placement assistance in manufacturing companies",
        "Understanding of modern manufacturing processes"
      ],
      curriculum: [
        "Week 1-2: CNC Fundamentals and G-code Basics",
        "Week 3-4: CAM Software Operation and Setup",
        "Week 5-6: Milling Operations and Toolpath Strategies",
        "Week 7-8: Turning Operations and Lathe Programming",
        "Week 9-10: Advanced Machining and Multi-Axis Programming",
        "Week 11: Quality Control and Precision Measurement",
        "Week 12: Final Project and Industry Certification"
      ]
    }
  }
];

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

export const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: React.createElement(Youtube, { className: "h-5 w-5" }),
    label: "YouTube",
    href: "https://www.youtube.com/@The_Art_of_India",
    bgColor: "bg-red-600 hover:bg-red-700"
  },
  {
    icon: React.createElement(Linkedin, { className: "h-5 w-5" }),
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/decouvertes-future-tech/",
    bgColor: "bg-blue-600 hover:bg-blue-700"
  },
  {
    icon: React.createElement(MessageCircle, { className: "h-5 w-5" }),
    label: "WhatsApp",
    href: "https://wa.me/919561103435",
    bgColor: "bg-green-600 hover:bg-green-700"
  }
];
