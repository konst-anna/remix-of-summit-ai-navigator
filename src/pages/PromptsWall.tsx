import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Brain, Trophy, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Prompt {
  id: string;
  prompt_text: string;
  author_name: string;
  brand_context: string | null;
  created_at: string;
}

const brands = ['Oreo', 'Cadbury', 'Ritz', 'Trident', 'BelVita', 'Chips Ahoy!', 'Philadelphia', 'Toblerone'];

const staticPrompts: Prompt[] = [
  { id: 's1', prompt_text: 'Create a viral TikTok campaign for Oreo that leverages AR filters to let users design their dream cookie flavor', author_name: 'Sarah Johnson', brand_context: 'Oreo', created_at: '2026-01-29T10:00:00Z' },
  { id: 's2', prompt_text: 'Design an AI sommelier for Cadbury chocolates that pairs flavors with movies, music, and moods', author_name: 'Marcus Lee', brand_context: 'Cadbury', created_at: '2026-01-29T09:55:00Z' },
  { id: 's3', prompt_text: 'Build a Ritz cracker recipe chatbot that creates gourmet appetizers from 5 ingredients or less', author_name: 'Emma Wilson', brand_context: 'Ritz', created_at: '2026-01-29T09:50:00Z' },
  { id: 's4', prompt_text: 'Develop a Trident gum freshness tracker that uses AI to remind users of optimal chewing moments throughout their day', author_name: 'David Park', brand_context: 'Trident', created_at: '2026-01-29T09:45:00Z' },
  { id: 's5', prompt_text: 'Create a BelVita morning routine optimizer that suggests breakfast pairings based on calendar meetings and energy needs', author_name: 'Lisa Chen', brand_context: 'BelVita', created_at: '2026-01-29T09:40:00Z' },
  { id: 's6', prompt_text: 'Design an Oreo dunking physics simulator that calculates perfect milk-to-cookie ratios for maximum enjoyment', author_name: 'Tom Richards', brand_context: 'Oreo', created_at: '2026-01-29T09:35:00Z' },
  { id: 's7', prompt_text: 'Build a Cadbury gift recommendation engine that analyzes social media to find the perfect chocolate for any relationship', author_name: 'Anna Martinez', brand_context: 'Cadbury', created_at: '2026-01-29T09:30:00Z' },
  { id: 's8', prompt_text: 'Create an AI party planner for Chips Ahoy! that designs cookie-themed celebrations based on guest preferences', author_name: 'James Wright', brand_context: 'Chips Ahoy!', created_at: '2026-01-29T09:25:00Z' },
  { id: 's9', prompt_text: 'Develop a Philadelphia cream cheese recipe transformer that converts any dish into a creamy masterpiece', author_name: 'Sophie Brown', brand_context: 'Philadelphia', created_at: '2026-01-29T09:20:00Z' },
  { id: 's10', prompt_text: 'Design a Toblerone travel companion app that unlocks exclusive chocolate experiences at airports worldwide', author_name: 'Michael Foster', brand_context: 'Toblerone', created_at: '2026-01-29T09:15:00Z' },
  { id: 's11', prompt_text: 'Build an Oreo flavor prediction AI that forecasts trending tastes 6 months ahead using social listening', author_name: 'Rachel Kim', brand_context: 'Oreo', created_at: '2026-01-29T09:10:00Z' },
  { id: 's12', prompt_text: 'Create a Trident fresh breath confidence coach that provides real-time social situation advice', author_name: 'Chris Anderson', brand_context: 'Trident', created_at: '2026-01-29T09:05:00Z' },
  { id: 's13', prompt_text: 'Design a BelVita productivity tracker that correlates breakfast choices with daily achievement metrics', author_name: 'Nicole Taylor', brand_context: 'BelVita', created_at: '2026-01-29T09:00:00Z' },
  { id: 's14', prompt_text: 'Build a Ritz entertaining assistant that creates themed party menus and shopping lists from a single prompt', author_name: 'Kevin Zhang', brand_context: 'Ritz', created_at: '2026-01-29T08:55:00Z' },
  { id: 's15', prompt_text: 'Develop a Cadbury nostalgia engine that recreates childhood chocolate memories through personalized storytelling', author_name: 'Amanda White', brand_context: 'Cadbury', created_at: '2026-01-29T08:50:00Z' },
  { id: 's16', prompt_text: 'Create an AI cookie artist for Chips Ahoy! that generates custom cookie designs from user sketches', author_name: 'Ryan Murphy', brand_context: 'Chips Ahoy!', created_at: '2026-01-29T08:45:00Z' },
  { id: 's17', prompt_text: 'Design a Philadelphia brunch optimizer that suggests the perfect cream cheese spread for any bagel combination', author_name: 'Jennifer Lewis', brand_context: 'Philadelphia', created_at: '2026-01-29T08:40:00Z' },
  { id: 's18', prompt_text: 'Build a Toblerone gifting concierge that schedules surprise chocolate deliveries based on relationship milestones', author_name: 'Daniel Harris', brand_context: 'Toblerone', created_at: '2026-01-29T08:35:00Z' },
  { id: 's19', prompt_text: 'Create an Oreo cultural fusion lab that invents new flavors by combining global dessert traditions', author_name: 'Michelle Garcia', brand_context: 'Oreo', created_at: '2026-01-29T08:30:00Z' },
  { id: 's20', prompt_text: 'Develop a Trident focus mode assistant that uses chewing patterns to optimize concentration during work sessions', author_name: 'Steven Clark', brand_context: 'Trident', created_at: '2026-01-29T08:25:00Z' },
];

export default function PromptsWall() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [promptText, setPromptText] = useState('');
  const [brandContext, setBrandContext] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const fetchPrompts = async () => {
    const { data, error } = await supabase
      .from('summit_prompts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching prompts:', error);
      return;
    }

    setPrompts(data || []);
  };

  useEffect(() => {
    fetchPrompts();

    const channel = supabase
      .channel('prompts-realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'summit_prompts' },
        (payload) => {
          setPrompts((prev) => [payload.new as Prompt, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!promptText.trim()) {
      toast({ title: 'Please enter a prompt', variant: 'destructive' });
      return;
    }
    
    if (!authorName.trim()) {
      toast({ title: 'Please enter your name', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from('summit_prompts').insert({
      prompt_text: promptText.trim(),
      author_name: authorName.trim(),
      brand_context: brandContext || null,
      day_number: 2,
    });

    if (error) {
      console.error('Error submitting prompt:', error);
      toast({ title: 'Failed to submit prompt', variant: 'destructive' });
    } else {
      toast({ title: 'Prompt submitted successfully! 🎉' });
      setPromptText('');
      setBrandContext('');
    }

    setIsSubmitting(false);
  };

  const allPrompts = [...prompts, ...staticPrompts];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-4">
              <Brain className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Best Prompt Competition</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Prompts Wall
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Showcase your AI creativity! Submit your best prompts and see how other marketers 
              are leveraging AI for our iconic brands.
            </p>
          </div>
        </section>

        {/* Submit Form */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Submit Your Prompt for Day 2
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Your Name *
                    </label>
                    <Input
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="John Smith"
                      maxLength={50}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Brand (optional)
                    </label>
                    <select
                      value={brandContext}
                      onChange={(e) => setBrandContext(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a brand...</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Your Prompt *
                  </label>
                  <Textarea
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder="Create an AI-powered marketing campaign that..."
                    rows={4}
                    maxLength={500}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {promptText.length}/500 characters
                  </p>
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Submitting...' : 'Submit Prompt'}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </section>

        {/* Prompts Wall */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Community Prompts
              </h2>
              <p className="text-muted-foreground">
                {allPrompts.length} prompts submitted • Compete for "Marketing Champion in Prompting"!
              </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              <AnimatePresence mode="popLayout">
                {allPrompts.map((prompt, index) => (
                  <motion.div
                    key={prompt.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index < 6 ? index * 0.05 : 0 }}
                    className="break-inside-avoid mb-4"
                  >
                    <Card className="p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-semibold text-foreground">{prompt.author_name}</span>
                            {prompt.brand_context && (
                              <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                                {prompt.brand_context}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            "{prompt.prompt_text}"
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Competition Info */}
        <section className="py-12 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <Trophy className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary-foreground mb-4">
              Win the "Marketing Champion in Prompting" Title!
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
              The top 3 prompts each day will be recognized on stage. Winners receive 
              exclusive pins, dinner table upgrades, and digital badges for their AI Passport!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['On-stage Recognition', 'Exclusive Pins', 'Dinner Upgrades', 'AI Passport Stamps'].map((reward) => (
                <span
                  key={reward}
                  className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm text-primary-foreground border border-primary-foreground/20"
                >
                  {reward}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
