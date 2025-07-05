/**
 * Course Data - DEPRECATED
 * 
 * This file has been refactored into separate, focused modules:
 * - Types: @/types/course.types
 * - Categories: @/data/course-categories.data
 * - Popular Courses: @/data/popular-courses.data
 * - Social Media: @/data/social-media.data
 * 
 * Import from the new locations instead of this file.
 */

// Re-export all data for backward compatibility
export type { CourseCategory, PopularCourse, SocialMediaLink } from '@/types/course.types';
export { courseCategories } from '@/data/course-categories.data';
export { popularCourses } from '@/data/popular-courses.data';
export { skills, socialMediaLinks } from '@/data/social-media.data';