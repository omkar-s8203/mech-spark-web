
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, User, ArrowRight, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of CAD Software in Engineering",
      excerpt: "Explore how modern CAD software is revolutionizing engineering design and manufacturing processes.",
      author: "Dr. Sarah Johnson",
      date: "2024-06-15",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "3D Printing Applications in Automotive Industry",
      excerpt: "Discover how 3D printing is transforming prototype development and manufacturing in automotive sector.",
      author: "Mark Thompson",
      date: "2024-06-10",
      readTime: "7 min read",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "SolidWorks vs CATIA: Which is Right for You?",
      excerpt: "A comprehensive comparison of two leading CAD platforms to help you choose the right tool.",
      author: "Emily Chen",
      date: "2024-06-05",
      readTime: "6 min read",
      category: "Software",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Career Paths in Mechanical Engineering Design",
      excerpt: "Explore various career opportunities and growth paths in mechanical engineering design field.",
      author: "Robert Davis",
      date: "2024-05-28",
      readTime: "8 min read",
      category: "Careers",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Industry 4.0 and Smart Manufacturing",
      excerpt: "Understanding how digital transformation is reshaping manufacturing processes and engineering workflows.",
      author: "Lisa Park",
      date: "2024-05-20",
      readTime: "9 min read",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Best Practices for CAD Model Organization",
      excerpt: "Learn professional techniques for organizing and managing complex CAD assemblies and projects.",
      author: "David Wilson",
      date: "2024-05-15",
      readTime: "4 min read",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Technology", "Manufacturing", "Software", "Careers", "Industry", "Best Practices"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Engineering Insights & News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in">
            Stay updated with the latest trends, technologies, and best practices in mechanical engineering and design.
          </p>
          
          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-scale-in">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
              <Mail className="h-5 w-5" />
              Subscribe to Our Newsletter
            </h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={`hover:scale-105 transition-transform duration-200 ${
                  index === 0 
                    ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600" 
                    : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Featured Article
          </h2>
          
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-scale-in">
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
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 group hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-200">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
            Never Miss an Update
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            Get the latest engineering insights, course updates, and industry news delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4 animate-scale-in">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button className="bg-white text-orange-600 hover:bg-gray-100 hover:scale-105 transition-transform duration-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
