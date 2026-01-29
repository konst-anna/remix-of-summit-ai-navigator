import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash, ArrowLeft, Quote, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Thought {
  id: string;
  content: string;
  author_name: string | null;
  created_at: string;
}

// Static inspiring quotes to mix with user thoughts
const staticQuotes = [
  "Vaccines save millions of lives every year - they are one of humanity's greatest achievements.",
  "Innovation in immunization is the key to a healthier future for all.",
  "Together, we can protect communities and build a world free from preventable diseases.",
  "The science of vaccines continues to evolve, bringing hope to millions worldwide.",
  "Every vaccination is a step toward global health security.",
  "Collaboration between scientists, healthcare workers, and communities makes immunization possible.",
  "Vaccines are a testament to what we can achieve when science and compassion unite.",
  "Protecting one person through vaccination helps protect entire communities.",
];

export default function SocialMedia() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [newThought, setNewThought] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  // Fetch initial thoughts
  useEffect(() => {
    const fetchThoughts = async () => {
      const { data, error } = await supabase
        .from('summit_thoughts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching thoughts:', error);
        return;
      }

      setThoughts(data || []);
    };

    fetchThoughts();
  }, []);

  // Subscribe to realtime updates
  useEffect(() => {
    const channel = supabase
      .channel('summit_thoughts_realtime')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'summit_thoughts',
        },
        (payload) => {
          const newThought = payload.new as Thought;
          setThoughts((prev) => [newThought, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedContent = newThought.trim();
    const trimmedAuthor = authorName.trim();

    if (!trimmedContent) {
      toast({
        title: "Empty thought",
        description: "Please write something to share.",
        variant: "destructive",
      });
      return;
    }

    if (trimmedContent.length > 500) {
      toast({
        title: "Too long",
        description: "Please keep your thought under 500 characters.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from('summit_thoughts').insert({
      content: trimmedContent,
      author_name: trimmedAuthor || null,
    });

    if (error) {
      console.error('Error submitting thought:', error);
      toast({
        title: "Error",
        description: "Failed to submit your thought. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Shared!",
        description: "Your thought has been added to the wall.",
      });
      setNewThought('');
      setAuthorName('');
      setShowForm(false);
    }

    setIsSubmitting(false);
  };

  // Create mixed feed of static quotes and user thoughts
  const createMixedFeed = () => {
    const feed: { type: 'static' | 'user'; content: string; author?: string | null; id: string }[] = [];
    
    // Add static quotes
    staticQuotes.forEach((quote, index) => {
      feed.push({ type: 'static', content: quote, id: `static-${index}` });
    });

    // Add user thoughts
    thoughts.forEach((thought) => {
      feed.push({
        type: 'user',
        content: thought.content,
        author: thought.author_name,
        id: thought.id,
      });
    });

    // Shuffle the feed for variety
    return feed.sort(() => Math.random() - 0.5);
  };

  const mixedFeed = createMixedFeed();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Link to="/">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Hash className="w-4 h-4" />
                Live Feed
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                #VaccinesSummit2026
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Share your thoughts and join the conversation about global immunization
              </p>

              <Button 
                onClick={() => setShowForm(!showForm)}
                className="bg-primary hover:bg-primary/90"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Share Your Thoughts
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
                  <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-lg border border-border">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="thought" className="block text-sm font-medium text-foreground mb-2">
                          Your Thought
                        </label>
                        <Textarea
                          id="thought"
                          placeholder="Share your thoughts about vaccines, global health, or the summit..."
                          value={newThought}
                          onChange={(e) => setNewThought(e.target.value)}
                          className="min-h-[100px]"
                          maxLength={500}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          {newThought.length}/500 characters
                        </p>
                      </div>
                      <div>
                        <label htmlFor="author" className="block text-sm font-medium text-foreground mb-2">
                          Your Name (optional)
                        </label>
                        <Input
                          id="author"
                          placeholder="Anonymous"
                          value={authorName}
                          onChange={(e) => setAuthorName(e.target.value)}
                          maxLength={100}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting || !newThought.trim()}
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
              <AnimatePresence>
                {mixedFeed.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="break-inside-avoid mb-4"
                  >
                    <div className={`rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow ${
                      item.type === 'user' 
                        ? 'bg-primary/5 border-primary/20' 
                        : 'bg-card'
                    }`}>
                      <Quote className={`w-8 h-8 mb-3 ${
                        item.type === 'user' ? 'text-primary/50' : 'text-primary/30'
                      }`} />
                      <p className="text-foreground italic leading-relaxed">"{item.content}"</p>
                      {item.type === 'user' && (
                        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>{item.author || 'Anonymous'}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Join the Conversation
              </h2>
              <p className="text-muted-foreground mb-8">
                Your voice matters! Share your thoughts and be part of the global conversation on vaccines.
              </p>
              <div className="inline-block bg-primary/10 rounded-full px-8 py-4">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  #VaccinesSummit2026
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
