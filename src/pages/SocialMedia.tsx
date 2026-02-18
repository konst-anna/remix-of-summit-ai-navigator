import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash, ArrowLeft, Quote, Send, User, Camera, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Import example photos
import coffeeBreakPhoto from '@/assets/summit-coffee-break.jpg';
import panelDiscussionPhoto from '@/assets/summit-panel-discussion.jpg';
import posterSessionPhoto from '@/assets/summit-poster-session.jpg';

// --- Social palette (first row: yellow → peach → pink → crimson) ---
const social = {
  yellow: '#f7e234',
  peach: '#f9a870',
  pink: '#f0679e',
  crimson: '#ef4056',
  gradientBg: 'linear-gradient(135deg, #f7e234 0%, #f9a870 35%, #f0679e 70%, #ef4056 100%)',
};

interface Thought {
  id: string;
  content: string;
  author_name: string | null;
  created_at: string;
  image_url: string | null;
}

// Static inspiring quotes to mix with user thoughts
const staticQuotes = [
  "Cookies bring joy to millions of people every year - they are one of humanity's greatest treats.",
  "Innovation in baking is the key to a sweeter future for all.",
  "Together, we can spread happiness and build a world filled with delicious creations.",
  "The art of cookies continues to evolve, bringing delight to millions worldwide.",
  "Every cookie baked is a step toward global culinary excellence.",
  "Collaboration between bakers, pastry chefs, and communities makes cookie innovation possible.",
  "Cookies are a testament to what we can achieve when creativity and passion unite.",
  "Sharing one cookie helps bring joy to entire communities.",
];

// Example photo posts from the summit
const examplePhotoPosts = [
  {
    id: 'example-photo-1',
    type: 'photo' as const,
    image_url: coffeeBreakPhoto,
    content: 'Great conversations during the coffee break! Discussing cookie recipes with colleagues from around the world.',
    author: 'Dr. Maria Santos',
  },
  {
    id: 'example-photo-2',
    type: 'photo' as const,
    image_url: panelDiscussionPhoto,
    content: 'Incredible panel on global cookie distribution. So many innovative ideas shared today!',
    author: 'James Chen',
  },
  {
    id: 'example-photo-3',
    type: 'photo' as const,
    image_url: posterSessionPhoto,
    content: 'Fascinating research on flavor technology at the poster session. The future of cookies looks bright!',
    author: 'Prof. Sarah Williams',
  },
];

// Max file size: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;
// Max image dimension after resize
const MAX_IMAGE_DIMENSION = 1200;

async function resizeImage(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    img.onload = () => {
      let { width, height } = img;
      if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
        if (width > height) {
          height = (height / width) * MAX_IMAGE_DIMENSION;
          width = MAX_IMAGE_DIMENSION;
        } else {
          width = (width / height) * MAX_IMAGE_DIMENSION;
          height = MAX_IMAGE_DIMENSION;
        }
      }
      canvas.width = width;
      canvas.height = height;
      if (!ctx) { reject(new Error('Could not get canvas context')); return; }
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => { blob ? resolve(blob) : reject(new Error('Could not create blob')); },
        'image/jpeg',
        0.85
      );
    };
    img.onerror = () => reject(new Error('Could not load image'));
    img.src = URL.createObjectURL(file);
  });
}

export default function SocialMedia() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [newThought, setNewThought] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Fetch initial thoughts
  useEffect(() => {
    const fetchThoughts = async () => {
      const { data, error } = await supabase
        .from('summit_thoughts')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) { console.error('Error fetching thoughts:', error); return; }
      setThoughts(data || []);
    };
    fetchThoughts();
  }, []);

  // Subscribe to realtime updates
  useEffect(() => {
    const channel = supabase
      .channel('summit_thoughts_realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'summit_thoughts' },
        (payload) => { setThoughts((prev) => [payload.new as Thought, ...prev]); }
      )
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast({ title: "Invalid file type", description: "Please select an image file.", variant: "destructive" });
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      toast({ title: "File too large", description: "Please select an image under 5MB.", variant: "destructive" });
      return;
    }
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const clearImage = () => {
    setSelectedImage(null);
    if (imagePreview) { URL.revokeObjectURL(imagePreview); setImagePreview(null); }
    if (fileInputRef.current) { fileInputRef.current.value = ''; }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedContent = newThought.trim();
    const trimmedAuthor = authorName.trim();
    if (!trimmedContent && !selectedImage) {
      toast({ title: "Nothing to share", description: "Please write something or add a photo.", variant: "destructive" });
      return;
    }
    if (trimmedContent.length > 500) {
      toast({ title: "Too long", description: "Please keep your thought under 500 characters.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      let imageUrl: string | null = null;
      if (selectedImage) {
        const resizedBlob = await resizeImage(selectedImage);
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.jpg`;
        const { error: uploadError } = await supabase.storage.from('summit-photos').upload(fileName, resizedBlob, { contentType: 'image/jpeg' });
        if (uploadError) { console.error('Upload error:', uploadError); throw new Error('Failed to upload image'); }
        const { data: publicUrlData } = supabase.storage.from('summit-photos').getPublicUrl(fileName);
        imageUrl = publicUrlData.publicUrl;
      }
      const { error } = await supabase.from('summit_thoughts').insert({ content: trimmedContent || null, author_name: trimmedAuthor || null, image_url: imageUrl });
      if (error) { console.error('Error submitting thought:', error); throw new Error('Failed to submit'); }
      toast({ title: "Shared!", description: "Your post has been added to the wall." });
      setNewThought(''); setAuthorName(''); clearImage(); setShowForm(false);
    } catch (error) {
      console.error('Submission error:', error);
      toast({ title: "Error", description: "Failed to submit your post. Please try again.", variant: "destructive" });
    }
    setIsSubmitting(false);
  };

  // Create mixed feed of static quotes, user thoughts, and example photos
  const createMixedFeed = () => {
    const feed: { type: 'static' | 'user' | 'photo'; content: string | null; author?: string | null; id: string; image_url?: string | null; }[] = [];
    staticQuotes.forEach((quote, index) => { feed.push({ type: 'static', content: quote, id: `static-${index}` }); });
    examplePhotoPosts.forEach((post) => { feed.push({ type: 'photo', content: post.content, author: post.author, id: post.id, image_url: post.image_url }); });
    thoughts.forEach((thought) => { feed.push({ type: thought.image_url ? 'photo' : 'user', content: thought.content, author: thought.author_name, id: thought.id, image_url: thought.image_url }); });
    return feed.sort(() => Math.random() - 0.5);
  };

  const mixedFeed = createMixedFeed();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section – Social gradient */}
        <section
          className="py-8 md:py-12 relative overflow-hidden"
          style={{ background: social.gradientBg }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Link to="/">
                <Button variant="ghost" className="mb-4 text-white/80 hover:text-white hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                <Hash className="w-4 h-4" />
                Live Feed
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                #CookiesSummit2026
              </h1>
              
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6">
                Share your thoughts and photos from the summit
              </p>

              <Button 
                onClick={() => setShowForm(!showForm)}
                className="bg-white hover:bg-white/90 text-[#ef4056] font-bold shadow-lg"
                size="lg"
              >
                <Camera className="w-5 h-5 mr-2" />
                Share a Moment
              </Button>
            </motion.div>

            {/* Submission Form */}
            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-lg mx-auto mt-8"
                >
                  <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div className="space-y-4">
                      {/* Image Upload */}
                      <div>
                        <label className="block text-sm font-medium text-[#ef4056] mb-2">
                          Add a Photo (optional)
                        </label>
                        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
                        
                        {imagePreview ? (
                          <div className="relative rounded-lg overflow-hidden border border-[#f9a870]/30">
                            <AspectRatio ratio={4/3}>
                              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                            </AspectRatio>
                            <button type="button" onClick={clearImage} className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-colors">
                              <X className="w-4 h-4 text-foreground" />
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full border-2 border-dashed border-[#f9a870]/40 rounded-lg p-8 text-center hover:border-[#ef4056]/60 hover:bg-[#ef4056]/5 transition-colors"
                          >
                            <ImageIcon className="w-10 h-10 mx-auto text-[#f9a870] mb-2" />
                            <span className="text-sm text-[#ef4056]">Click to upload a photo</span>
                          </button>
                        )}
                      </div>

                      <div>
                        <label htmlFor="thought" className="block text-sm font-medium text-[#ef4056] mb-2">
                          Your Thought {!selectedImage && <span className="text-[#f9a870]">(required)</span>}
                        </label>
                        <Textarea
                          id="thought"
                          placeholder="Share your thoughts about the summit..."
                          value={newThought}
                          onChange={(e) => setNewThought(e.target.value)}
                          className="min-h-[100px] border-[#f9a870]/30 focus-visible:ring-[#ef4056]"
                          maxLength={500}
                        />
                        <p className="text-xs text-[#ef4056] mt-1">{newThought.length}/500 characters</p>
                      </div>
                      <div>
                        <label htmlFor="author" className="block text-sm font-medium text-[#ef4056] mb-2">
                          Your Name (optional)
                        </label>
                        <Input
                          id="author"
                          placeholder="Anonymous"
                          value={authorName}
                          onChange={(e) => setAuthorName(e.target.value)}
                          maxLength={100}
                          className="border-[#f9a870]/30 focus-visible:ring-[#ef4056]"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[#ef4056] to-[#f9a870] hover:opacity-90 text-white font-bold"
                        disabled={isSubmitting || (!newThought.trim() && !selectedImage)}
                      >
                        {isSubmitting ? 'Sharing...' : 'Share'}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Mixed Feed Wall */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
              {mixedFeed.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="break-inside-avoid mb-4"
                >
                  {item.type === 'photo' || item.image_url ? (
                    <div className="rounded-xl overflow-hidden shadow-sm border border-[#f9a870]/20 hover:shadow-md hover:shadow-[#ef4056]/10 transition-shadow bg-card">
                      <div className="relative">
                        <img src={item.image_url || ''} alt="Summit moment" className="w-full h-auto object-cover" loading="lazy" />
                      </div>
                      {item.content && (
                        <div className="p-4">
                          <p className="text-foreground leading-relaxed">{item.content}</p>
                          {item.author && (
                            <div className="mt-3 flex items-center gap-2 text-sm text-[#ef4056]">
                              <User className="w-4 h-4" />
                              <span>{item.author}</span>
                            </div>
                          )}
                        </div>
                      )}
                      {!item.content && item.author && (
                        <div className="p-4 flex items-center gap-2 text-sm text-[#ef4056]">
                          <User className="w-4 h-4" />
                          <span>{item.author}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={`rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow ${
                      item.type === 'user' 
                        ? 'bg-gradient-to-br from-[#ef4056]/5 to-[#f9a870]/5 border-[#ef4056]/20' 
                        : 'bg-card border-[#f9a870]/15'
                    }`}>
                      <Quote className={`w-8 h-8 mb-3 ${
                        item.type === 'user' ? 'text-[#ef4056]/50' : 'text-[#f9a870]/40'
                      }`} />
                      <p className="text-foreground italic leading-relaxed">"{item.content}"</p>
                      {item.type === 'user' && (
                        <div className="mt-4 flex items-center gap-2 text-sm text-[#ef4056]">
                          <User className="w-4 h-4" />
                          <span>{item.author || 'Anonymous'}</span>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="social" />
    </div>
  );
}
