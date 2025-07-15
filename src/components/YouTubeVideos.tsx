import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Play, Calendar, Eye, Clock, ExternalLink } from 'lucide-react';

// Real video data from Decouvertes YouTube channel
const channelVideos = [
  {
    id: 'u-QqkjXlWTc',
    title: 'Workshop - Your Future in Design & Engineering Session 1!',
    description: 'Join us for an insightful workshop session about your future in design and engineering. Learn about career opportunities, skill development, and industry insights.',
    thumbnail: 'https://img.youtube.com/vi/u-QqkjXlWTc/maxresdefault.jpg',
    duration: '16:20',
    views: '21',
    publishedAt: '2024-01-15',
    category: 'Workshop'
  },
  {
    id: '3Ol_YTMPmn4',
    title: 'Wake Up the Power - Official Music Video | Motivational Song for Students & Professional',
    description: 'An inspiring motivational music video designed to energize students and professionals. Wake up your inner power and achieve your goals.',
    thumbnail: 'https://img.youtube.com/vi/3Ol_YTMPmn4/maxresdefault.jpg',
    duration: '3:05',
    views: '32',
    publishedAt: '2024-01-15',
    category: 'Motivation'
  },
  {
    id: 'haZm0pwzOR4',
    title: 'Decouvertes Anthem | Official Company Theme',
    description: 'The official anthem and company theme of Decouvertes Future Tech. Experience our vision, mission, and values through this inspiring theme.',
    thumbnail: 'https://img.youtube.com/vi/haZm0pwzOR4/maxresdefault.jpg',
    duration: '1:51',
    views: '35',
    publishedAt: '2024-01-15',
    category: 'Company'
  },
  {
    id: 'sVzQRjkA54s',
    title: 'Decouvertes Future Tech Intro',
    description: 'Introduction to Decouvertes Future Tech - your partner in product development, 3D printing, and engineering solutions.',
    thumbnail: 'https://img.youtube.com/vi/sVzQRjkA54s/maxresdefault.jpg',
    duration: '1:39',
    views: '30',
    publishedAt: '2024-01-15',
    category: 'Company'
  }
];

const categories = ['All', 'Workshop', 'Motivation', 'Company'];

const YouTubeVideos = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredVideos = selectedCategory === 'All' 
    ? channelVideos 
    : channelVideos.filter(video => video.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Workshop': 'bg-blue-100 text-blue-800',
      'Motivation': 'bg-green-100 text-green-800',
      'Company': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Educational Videos & Tutorials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive library of engineering tutorials, product development insights, 
            and technical training videos to enhance your skills.
          </p>
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.open('https://youtube.com/@The_Art_of_India', '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit Our YouTube Channel
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`
                ${selectedCategory === category 
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white" 
                  : "hover:bg-gray-100"
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button 
                          size="lg" 
                          className="bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => setSelectedVideo(video.id)}
                        >
                          <motion.div
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 360]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Play className="h-6 w-6" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                          {video.title}
                        </DialogTitle>
                      </DialogHeader>
                      <motion.div 
                        className="aspect-video"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        />
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                {/* Duration Badge */}
                <Badge className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white">
                  <Clock className="h-3 w-3 mr-1" />
                  {video.duration}
                </Badge>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(video.category)}>
                    {video.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {video.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                  {video.description}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {video.views} views
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(video.publishedAt)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Tutorials</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Subscribe to our YouTube channel for the latest engineering tutorials, 
            product development insights, and technical training content.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100"
            onClick={() => window.open('https://youtube.com/@The_Art_of_India?sub_confirmation=1', '_blank')}
          >
            <Play className="h-5 w-5 mr-2" />
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;