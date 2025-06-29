
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Newsletter = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Mechanical Engineering: AI Integration",
      excerpt: "Exploring how artificial intelligence is revolutionizing mechanical design and manufacturing processes in 2024.",
      date: "December 15, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop&crop=center",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Advanced CAD Techniques for Modern Product Design",
      excerpt: "Master the latest CAD software features and techniques that are transforming how engineers approach product development.",
      date: "December 10, 2024",
      category: "Design",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop&crop=center",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "3D Printing Materials: A Comprehensive Guide",
      excerpt: "From PLA to metal powders, discover the right materials for your 3D printing projects and their applications.",
      date: "December 5, 2024",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=200&fit=crop&crop=center",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Sustainable Engineering: Green Technologies",
      excerpt: "How mechanical engineers are leading the charge in developing environmentally friendly solutions.",
      date: "November 28, 2024",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=200&fit=crop&crop=center",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Industry 4.0: Smart Manufacturing Revolution",
      excerpt: "Understanding how IoT, automation, and data analytics are reshaping modern manufacturing facilities.",
      date: "November 20, 2024",
      category: "Industry 4.0",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop&crop=center",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Robotics in Manufacturing: Case Studies",
      excerpt: "Real-world examples of how robotics implementation has transformed production lines and quality control.",
      date: "November 15, 2024",
      category: "Robotics",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=200&fit=crop&crop=center",
      readTime: "12 min read"
    }
  ];

  const newsletters = [
    {
      id: 1,
      title: "Engineering Weekly - December 2024",
      description: "Latest trends in mechanical engineering, new software releases, and industry insights.",
      date: "December 20, 2024",
      subscribers: "2,500+"
    },
    {
      id: 2,
      title: "Tech Innovation Digest - November 2024",
      description: "Monthly roundup of breakthrough technologies and their applications in engineering.",
      date: "November 30, 2024",
      subscribers: "1,800+"
    },
    {
      id: 3,
      title: "Manufacturing Excellence - October 2024",
      description: "Best practices, case studies, and success stories from the manufacturing industry.",
      date: "October 31, 2024",
      subscribers: "2,200+"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Engineering <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Insights</span> & News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Stay updated with the latest trends, technologies, and innovations in mechanical engineering and manufacturing.
          </p>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Get weekly updates on engineering innovations, industry news, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
            />
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 px-8 py-3 transform hover:scale-105 transition-all duration-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Newsletters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fade-in">Latest Newsletters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsletters.map((newsletter, index) => (
              <Card key={newsletter.id} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">{newsletter.subscribers} subscribers</Badge>
                  </div>
                  <CardTitle className="text-xl">{newsletter.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{newsletter.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{newsletter.description}</p>
                  <Button variant="outline" className="w-full hover:bg-orange-50 hover:border-orange-300 transition-all duration-200">
                    Read Newsletter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fade-in">Engineering Blog</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-orange-600 transition-colors duration-200">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full hover:bg-orange-50 hover:border-orange-300 transition-all duration-200">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in">Featured Engineering Resources</h2>
          <p className="text-white/90 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Access our exclusive collection of engineering guides, templates, and industry reports.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop&crop=center" alt="CAD Guide" className="w-16 h-16 rounded-lg mx-auto mb-4 hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">CAD Design Guide</h3>
              <p className="text-white/80 text-sm">Complete guide to modern CAD techniques</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop&crop=center" alt="Industry Report" className="w-16 h-16 rounded-lg mx-auto mb-4 hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">Industry Report 2024</h3>
              <p className="text-white/80 text-sm">Annual mechanical engineering trends</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=100&h=100&fit=crop&crop=center" alt="3D Printing" className="w-16 h-16 rounded-lg mx-auto mb-4 hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">3D Print Templates</h3>
              <p className="text-white/80 text-sm">Ready-to-use 3D printing designs</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
