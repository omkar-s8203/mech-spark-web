import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Play, Calendar, Eye, Clock, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Video {
  id: string;
  title: string;
  description: string;
  video_id: string;
  thumbnail_url: string;
  duration: string;
}

const YouTubeVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from('youtube_videos')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setVideos(data);
    }
  };

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

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={video.thumbnail_url || `https://img.youtube.com/vi/${video.video_id}/maxresdefault.jpg`} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="lg" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-600 hover:bg-red-700 text-white rounded-full"
                        onClick={() => setSelectedVideo(video.video_id)}
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
                          src={`https://www.youtube.com/embed/${video.video_id}`}
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
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {video.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                  {video.description}
                </CardDescription>
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