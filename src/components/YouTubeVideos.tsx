import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Play, Calendar, Eye, Clock, ExternalLink } from 'lucide-react';

// Sample video data - replace with actual YouTube API data
const sampleVideos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'SolidWorks Tutorial: Advanced Assembly Design',
    description: 'Learn advanced assembly techniques in SolidWorks including mates, configurations, and design tables.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '15:24',
    views: '12.5K',
    publishedAt: '2024-01-15',
    category: 'CAD Tutorial'
  },
  {
    id: 'ScMzIvxBSi4',
    title: '3D Printing Best Practices for Engineers',
    description: 'Essential tips and techniques for professional 3D printing in engineering applications.',
    thumbnail: 'https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg',
    duration: '22:17',
    views: '8.9K',
    publishedAt: '2024-01-10',
    category: '3D Printing'
  },
  {
    id: 'K8K6g_ALOHs',
    title: 'CATIA V5 Surface Modeling Masterclass',
    description: 'Complete guide to surface modeling in CATIA V5 for automotive and aerospace applications.',
    thumbnail: 'https://img.youtube.com/vi/K8K6g_ALOHs/maxresdefault.jpg',
    duration: '31:45',
    views: '15.2K',
    publishedAt: '2024-01-05',
    category: 'CAD Tutorial'
  },
  {
    id: 'fJ9rUzIMcZQ',
    title: 'Product Development Process: Concept to Market',
    description: 'Step-by-step walkthrough of the complete product development lifecycle.',
    thumbnail: 'https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg',
    duration: '18:32',
    views: '6.7K',
    publishedAt: '2023-12-28',
    category: 'Product Development'
  },
  {
    id: 'L_jWHffIx5E',
    title: 'FEA Analysis in SolidWorks Simulation',
    description: 'Learn finite element analysis fundamentals using SolidWorks Simulation software.',
    thumbnail: 'https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg',
    duration: '26:58',
    views: '11.3K',
    publishedAt: '2023-12-20',
    category: 'CAE Analysis'
  },
  {
    id: 'ZZ5LpwO-An4',
    title: 'Rapid Prototyping with DFT350 3D Printer',
    description: 'Hands-on demonstration of our DFT350 3D printer for rapid prototyping applications.',
    thumbnail: 'https://img.youtube.com/vi/ZZ5LpwO-An4/maxresdefault.jpg',
    duration: '12:41',
    views: '9.8K',
    publishedAt: '2023-12-15',
    category: '3D Printing'
  }
];

const categories = ['All', 'CAD Tutorial', '3D Printing', 'Product Development', 'CAE Analysis'];

const YouTubeVideos = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredVideos = selectedCategory === 'All' 
    ? sampleVideos 
    : sampleVideos.filter(video => video.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'CAD Tutorial': 'bg-blue-100 text-blue-800',
      '3D Printing': 'bg-green-100 text-green-800',
      'Product Development': 'bg-purple-100 text-purple-800',
      'CAE Analysis': 'bg-orange-100 text-orange-800'
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
            onClick={() => window.open('https://youtube.com/@decouvertesfuturetech', '_blank')}
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
                      <Button 
                        size="lg" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-600 hover:bg-red-700 text-white rounded-full"
                        onClick={() => setSelectedVideo(video.id)}
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{video.title}</DialogTitle>
                      </DialogHeader>
                      <div className="aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      </div>
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
            onClick={() => window.open('https://youtube.com/@decouvertesfuturetech?sub_confirmation=1', '_blank')}
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