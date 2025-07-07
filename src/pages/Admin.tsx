import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  duration: string;
  level: string;
  price: number;
  is_popular: boolean;
}

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  video_id: string;
  thumbnail_url: string;
  duration: string;
}

const Admin = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [editingVideo, setEditingVideo] = useState<YouTubeVideo | null>(null);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [showVideoForm, setShowVideoForm] = useState(false);
  const { toast } = useToast();

  // Course form state
  const [courseForm, setCourseForm] = useState({
    title: '',
    description: '',
    image_url: '',
    category: '',
    duration: '',
    level: '',
    price: 0,
    is_popular: false
  });

  // Video form state
  const [videoForm, setVideoForm] = useState({
    title: '',
    description: '',
    video_id: '',
    thumbnail_url: '',
    duration: ''
  });

  useEffect(() => {
    fetchCourses();
    fetchVideos();
  }, []);

  const fetchCourses = async () => {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: "Error", description: "Failed to fetch courses", variant: "destructive" });
    } else {
      setCourses(data || []);
    }
  };

  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from('youtube_videos')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: "Error", description: "Failed to fetch videos", variant: "destructive" });
    } else {
      setVideos(data || []);
    }
  };

  const resetCourseForm = () => {
    setCourseForm({
      title: '',
      description: '',
      image_url: '',
      category: '',
      duration: '',
      level: '',
      price: 0,
      is_popular: false
    });
    setEditingCourse(null);
    setShowCourseForm(false);
  };

  const resetVideoForm = () => {
    setVideoForm({
      title: '',
      description: '',
      video_id: '',
      thumbnail_url: '',
      duration: ''
    });
    setEditingVideo(null);
    setShowVideoForm(false);
  };

  const handleSaveCourse = async () => {
    if (editingCourse) {
      const { error } = await supabase
        .from('courses')
        .update(courseForm)
        .eq('id', editingCourse.id);
      
      if (error) {
        toast({ title: "Error", description: "Failed to update course", variant: "destructive" });
      } else {
        toast({ title: "Success", description: "Course updated successfully" });
        fetchCourses();
        resetCourseForm();
      }
    } else {
      const { error } = await supabase
        .from('courses')
        .insert([courseForm]);
      
      if (error) {
        toast({ title: "Error", description: "Failed to create course", variant: "destructive" });
      } else {
        toast({ title: "Success", description: "Course created successfully" });
        fetchCourses();
        resetCourseForm();
      }
    }
  };

  const handleSaveVideo = async () => {
    if (editingVideo) {
      const { error } = await supabase
        .from('youtube_videos')
        .update(videoForm)
        .eq('id', editingVideo.id);
      
      if (error) {
        toast({ title: "Error", description: "Failed to update video", variant: "destructive" });
      } else {
        toast({ title: "Success", description: "Video updated successfully" });
        fetchVideos();
        resetVideoForm();
      }
    } else {
      const { error } = await supabase
        .from('youtube_videos')
        .insert([videoForm]);
      
      if (error) {
        toast({ title: "Error", description: "Failed to create video", variant: "destructive" });
      } else {
        toast({ title: "Success", description: "Video created successfully" });
        fetchVideos();
        resetVideoForm();
      }
    }
  };

  const handleDeleteCourse = async (id: string) => {
    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', id);
    
    if (error) {
      toast({ title: "Error", description: "Failed to delete course", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Course deleted successfully" });
      fetchCourses();
    }
  };

  const handleDeleteVideo = async (id: string) => {
    const { error } = await supabase
      .from('youtube_videos')
      .delete()
      .eq('id', id);
    
    if (error) {
      toast({ title: "Error", description: "Failed to delete video", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Video deleted successfully" });
      fetchVideos();
    }
  };

  const handleEditCourse = (course: Course) => {
    setCourseForm(course);
    setEditingCourse(course);
    setShowCourseForm(true);
  };

  const handleEditVideo = (video: YouTubeVideo) => {
    setVideoForm(video);
    setEditingVideo(video);
    setShowVideoForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-600 mt-2">Manage your courses and YouTube videos</p>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="videos">YouTube Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Courses Management</h2>
                <Button onClick={() => setShowCourseForm(true)} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Course
                </Button>
              </div>

              {showCourseForm && (
                <Card>
                  <CardHeader>
                    <CardTitle>{editingCourse ? 'Edit Course' : 'Add New Course'}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={courseForm.title}
                          onChange={(e) => setCourseForm({...courseForm, title: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select value={courseForm.category} onValueChange={(value) => setCourseForm({...courseForm, category: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cad">CAD Design</SelectItem>
                            <SelectItem value="programming">Programming</SelectItem>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="duration">Duration</Label>
                        <Input
                          id="duration"
                          value={courseForm.duration}
                          onChange={(e) => setCourseForm({...courseForm, duration: e.target.value})}
                          placeholder="e.g., 8 weeks"
                        />
                      </div>
                      <div>
                        <Label htmlFor="level">Level</Label>
                        <Select value={courseForm.level} onValueChange={(value) => setCourseForm({...courseForm, level: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          type="number"
                          value={courseForm.price}
                          onChange={(e) => setCourseForm({...courseForm, price: parseFloat(e.target.value) || 0})}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="popular"
                          checked={courseForm.is_popular}
                          onCheckedChange={(checked) => setCourseForm({...courseForm, is_popular: checked})}
                        />
                        <Label htmlFor="popular">Popular Course</Label>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={courseForm.description || ''}
                        onChange={(e) => setCourseForm({...courseForm, description: e.target.value})}
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="image_url">Image URL</Label>
                      <Input
                        id="image_url"
                        value={courseForm.image_url || ''}
                        onChange={(e) => setCourseForm({...courseForm, image_url: e.target.value})}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={handleSaveCourse} className="flex items-center gap-2">
                        <Save className="h-4 w-4" />
                        {editingCourse ? 'Update' : 'Save'}
                      </Button>
                      <Button variant="outline" onClick={resetCourseForm} className="flex items-center gap-2">
                        <X className="h-4 w-4" />
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{course.title}</h3>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleEditCourse(course)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDeleteCourse(course.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{course.category}</Badge>
                        <Badge variant="outline">{course.level}</Badge>
                        {course.is_popular && <Badge variant="default">Popular</Badge>}
                      </div>
                      <div className="text-sm text-gray-500">
                        <p>Duration: {course.duration}</p>
                        <p>Price: ${course.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">YouTube Videos Management</h2>
                <Button onClick={() => setShowVideoForm(true)} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Video
                </Button>
              </div>

              {showVideoForm && (
                <Card>
                  <CardHeader>
                    <CardTitle>{editingVideo ? 'Edit Video' : 'Add New Video'}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="video-title">Title</Label>
                        <Input
                          id="video-title"
                          value={videoForm.title}
                          onChange={(e) => setVideoForm({...videoForm, title: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="video-id">YouTube Video ID</Label>
                        <Input
                          id="video-id"
                          value={videoForm.video_id}
                          onChange={(e) => setVideoForm({...videoForm, video_id: e.target.value})}
                          placeholder="e.g., dQw4w9WgXcQ"
                        />
                      </div>
                      <div>
                        <Label htmlFor="video-duration">Duration</Label>
                        <Input
                          id="video-duration"
                          value={videoForm.duration}
                          onChange={(e) => setVideoForm({...videoForm, duration: e.target.value})}
                          placeholder="e.g., 10:30"
                        />
                      </div>
                      <div>
                        <Label htmlFor="thumbnail">Thumbnail URL</Label>
                        <Input
                          id="thumbnail"
                          value={videoForm.thumbnail_url || ''}
                          onChange={(e) => setVideoForm({...videoForm, thumbnail_url: e.target.value})}
                          placeholder="https://example.com/thumbnail.jpg"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="video-description">Description</Label>
                      <Textarea
                        id="video-description"
                        value={videoForm.description || ''}
                        onChange={(e) => setVideoForm({...videoForm, description: e.target.value})}
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={handleSaveVideo} className="flex items-center gap-2">
                        <Save className="h-4 w-4" />
                        {editingVideo ? 'Update' : 'Save'}
                      </Button>
                      <Button variant="outline" onClick={resetVideoForm} className="flex items-center gap-2">
                        <X className="h-4 w-4" />
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card key={video.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{video.title}</h3>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleEditVideo(video)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleDeleteVideo(video.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                      <div className="text-sm text-gray-500">
                        <p>Video ID: {video.video_id}</p>
                        <p>Duration: {video.duration}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;