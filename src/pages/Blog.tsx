import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of CAD Software in Engineering',
      excerpt:
        'Explore how modern CAD software is revolutionizing engineering design and manufacturing processes.',
      author: 'Dr. Sarah Johnson',
      date: '2024-06-15',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      featured: true,
    },
    {
      id: 2,
      title: '3D Printing Applications in Automotive Industry',
      excerpt:
        'Discover how 3D printing is transforming prototype development and manufacturing in automotive sector.',
      author: 'Mark Thompson',
      date: '2024-06-10',
      readTime: '7 min read',
      category: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'SolidWorks vs CATIA: Which is Right for You?',
      excerpt: 'A comprehensive comparison of two leading CAD platforms to help you choose the right tool.',
      author: 'Emily Chen',
      date: '2024-06-05',
      readTime: '6 min read',
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Career Paths in Mechanical Engineering Design',
      excerpt: 'Explore various career opportunities and growth paths in mechanical engineering design field.',
      author: 'Robert Davis',
      date: '2024-05-28',
      readTime: '8 min read',
      category: 'Careers',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Industry 4.0 and Smart Manufacturing',
      excerpt: 'Understanding how digital transformation is reshaping manufacturing processes and engineering workflows.',
      author: 'Lisa Park',
      date: '2024-05-20',
      readTime: '9 min read',
      category: 'Industry',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Best Practices for CAD Model Organization',
      excerpt: 'Learn professional techniques for organizing and managing complex CAD assemblies and projects.',
      author: 'David Wilson',
      date: '2024-05-15',
      readTime: '4 min read',
      category: 'Best Practices',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Featured Article
          </motion.h2>

          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-96 lg:h-auto overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500">
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <Badge variant="outline" className="w-fit mb-4">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-3xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                        <span className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <Button className="w-fit bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 group-hover:scale-105 transition-transform duration-200">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Latest Articles
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, i) => (
                <motion.div
                  key={post.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group hover:scale-105">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge variant="outline" className="absolute top-4 left-4 bg-white/90">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:scale-105 transition-transform duration-200"
                        >
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
