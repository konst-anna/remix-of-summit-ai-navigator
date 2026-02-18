import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Brain, Trophy, User, ArrowLeft, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import promptsHeroImg from '@/assets/prompts-hero.png';

interface Prompt {
  id: string;
  prompt_text: string;
  author_name: string;
  brand_context: string | null;
  created_at: string;
}

// Prompts page palette — cyan → purple → magenta
const prompts = {
  cyan: '#5ce1e6',
  purple: '#9b59b6',
  magenta: '#e91e8c',
  gradientBg: 'linear-gradient(135deg, #5ce1e6 0%, #9b59b6 50%, #e91e8c 100%)',
};

const brands = ['Prevnar', 'Comirnaty', 'Abrysvo', 'PCV Paed', 'Tick Bourne'];

const brandColors: Record<string, { bg: string; text: string; border: string }> = {
  'Prevnar': { bg: 'bg-emerald-700', text: 'text-white', border: 'border-emerald-500' },
  'Comirnaty': { bg: 'bg-slate-500', text: 'text-white', border: 'border-slate-400' },
  'Abrysvo': { bg: 'bg-pink-600', text: 'text-white', border: 'border-pink-400' },
  'PCV Paed': { bg: 'bg-green-500', text: 'text-white', border: 'border-green-400' },
  'Tick Bourne': { bg: 'bg-orange-500', text: 'text-white', border: 'border-orange-400' },
};

const getBrandStyle = (brand: string | null) => {
  if (!brand || !brandColors[brand]) {
    return { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border' };
  }
  return brandColors[brand];
};

const staticPrompts: Prompt[] = [
  { id: 's1', prompt_text: 'Create an AI-powered tool that predicts pneumococcal disease outbreaks by region to optimize Prevnar distribution and inventory planning', author_name: 'Sarah Johnson', brand_context: 'Prevnar', created_at: '2026-01-29T10:00:00Z' },
  { id: 's2', prompt_text: 'Design a patient education chatbot for Comirnaty that explains booster schedules, side effects, and answers FAQs in 20+ languages', author_name: 'Marcus Lee', brand_context: 'Comirnaty', created_at: '2026-01-29T09:55:00Z' },
  { id: 's3', prompt_text: 'Build an AI dashboard that tracks RSV hospitalization rates and correlates them with Abrysvo vaccination coverage to demonstrate real-world effectiveness', author_name: 'Emma Wilson', brand_context: 'Abrysvo', created_at: '2026-01-29T09:50:00Z' },
  { id: 's4', prompt_text: 'Develop an AI tool that generates personalized immunization catch-up schedules for pediatric patients based on their vaccination history', author_name: 'David Park', brand_context: 'PCV Paed', created_at: '2026-01-29T09:45:00Z' },
  { id: 's5', prompt_text: 'Create an AI system that analyzes tick population data and climate patterns to predict Tick Bourne disease risk zones and guide vaccination campaigns', author_name: 'Lisa Chen', brand_context: 'Tick Bourne', created_at: '2026-01-29T09:40:00Z' },
  { id: 's6', prompt_text: 'Design an AI-powered HCP engagement tool for Prevnar that tailors scientific messaging based on physician specialty and patient demographics', author_name: 'Tom Richards', brand_context: 'Prevnar', created_at: '2026-01-29T09:35:00Z' },
  { id: 's7', prompt_text: 'Build an AI sentiment analyzer that monitors social media conversations about COVID vaccines to help shape Comirnaty communication strategies', author_name: 'Anna Martinez', brand_context: 'Comirnaty', created_at: '2026-01-29T09:30:00Z' },
  { id: 's8', prompt_text: 'Create an AI model that identifies high-risk pregnant women for RSV maternal vaccination and generates personalized outreach for Abrysvo', author_name: 'James Wright', brand_context: 'Abrysvo', created_at: '2026-01-29T09:25:00Z' },
  { id: 's9', prompt_text: 'Develop an interactive AI simulation for healthcare providers showing PCV serotype coverage differences to support formulary discussions', author_name: 'Sophie Brown', brand_context: 'PCV Paed', created_at: '2026-01-29T09:20:00Z' },
  { id: 's10', prompt_text: 'Design an AI-driven market access tool for Tick Bourne vaccines that generates payer value dossiers customized by country and healthcare system', author_name: 'Michael Foster', brand_context: 'Tick Bourne', created_at: '2026-01-29T09:15:00Z' },
  { id: 's11', prompt_text: 'Build an AI copilot that helps field teams prepare for HCP meetings with real-time Prevnar clinical data summaries and objection handling', author_name: 'Rachel Kim', brand_context: 'Prevnar', created_at: '2026-01-29T09:10:00Z' },
  { id: 's12', prompt_text: 'Create an AI platform that analyzes electronic health records to identify adults eligible for Comirnaty boosters and automates reminder outreach', author_name: 'Chris Anderson', brand_context: 'Comirnaty', created_at: '2026-01-29T09:05:00Z' },
  { id: 's13', prompt_text: 'Develop an AI tool that maps RSV seasonality patterns globally to optimize Abrysvo launch timing in new markets', author_name: 'Nicole Taylor', brand_context: 'Abrysvo', created_at: '2026-01-29T09:00:00Z' },
  { id: 's14', prompt_text: 'Build an AI-powered training simulator for pediatricians that role-plays vaccine-hesitant parent conversations about PCV vaccination', author_name: 'Kevin Zhang', brand_context: 'PCV Paed', created_at: '2026-01-29T08:55:00Z' },
  { id: 's15', prompt_text: 'Design an AI system that generates real-time competitive intelligence reports for the pneumococcal vaccine landscape', author_name: 'Amanda White', brand_context: 'Prevnar', created_at: '2026-01-29T08:50:00Z' },
  { id: 's16', prompt_text: 'Create an AI model that predicts Tick Bourne disease endemic expansion due to climate change to support long-term franchise strategy', author_name: 'Ryan Murphy', brand_context: 'Tick Bourne', created_at: '2026-01-29T08:45:00Z' },
  { id: 's17', prompt_text: 'Build an AI-driven supply chain optimizer for Abrysvo that balances cold-chain logistics with demand forecasting across 50+ markets', author_name: 'Jennifer Lewis', brand_context: 'Abrysvo', created_at: '2026-01-29T08:40:00Z' },
  { id: 's18', prompt_text: 'Design an AI presentation generator that creates custom Comirnaty data slides for different stakeholder audiences (payers, HCPs, policy makers)', author_name: 'Daniel Harris', brand_context: 'Comirnaty', created_at: '2026-01-29T08:35:00Z' },
  { id: 's19', prompt_text: 'Create an AI analytics tool that measures the impact of vaccination programs on reducing antibiotic resistance linked to pneumococcal infections', author_name: 'Michelle Garcia', brand_context: 'Prevnar', created_at: '2026-01-29T08:30:00Z' },
  { id: 's20', prompt_text: 'Develop an AI-powered digital twin of national immunization programs to simulate the impact of adding PCV to childhood schedules', author_name: 'Steven Clark', brand_context: 'PCV Paed', created_at: '2026-01-29T08:25:00Z' },
];

export default function PromptsWall() {
  const [promptsList, setPromptsList] = useState<Prompt[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [promptText, setPromptText] = useState('');
  const [brandContext, setBrandContext] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
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

    setPromptsList(data || []);
  };

  useEffect(() => {
    fetchPrompts();

    const channel = supabase
      .channel('prompts-realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'summit_prompts' },
        (payload) => {
          setPromptsList((prev) => [payload.new as Prompt, ...prev]);
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
      setShowForm(false);
    }

    setIsSubmitting(false);
  };

  const allPrompts = [...promptsList, ...staticPrompts];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section — same layout as Social page */}
        <section
          className="relative overflow-hidden min-h-[260px] md:min-h-[320px]"
          style={{ background: prompts.gradientBg }}
        >
          {/* Background hero image – left side, blended */}
          <div className="absolute inset-0 hidden md:block">
            <img
              src={promptsHeroImg}
              alt=""
              className="absolute left-0 top-0 h-full w-3/5 object-cover object-center"
              style={{
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 30%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 30%, transparent 100%)',
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:ml-auto md:w-1/2 text-center md:text-left"
            >
              <Link to="/">
                <Button variant="ghost" className="mb-4 text-white/80 hover:text-white hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                <Brain className="w-4 h-4" />
                Best Prompt Competition
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Prompts Wall
              </h1>
              <p className="text-base md:text-lg text-white/80 max-w-xl mb-6">
                Showcase your AI creativity! Submit your best prompts and see how other marketers
                are leveraging AI for our vaccine brands.
              </p>
              <Button
                onClick={() => setShowForm(true)}
                className="bg-white hover:bg-white/90 font-bold shadow-lg"
                style={{ color: prompts.purple }}
                size="lg"
              >
                <Pencil className="w-5 h-5 mr-2" />
                Share a Prompt
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Submit Prompt Modal */}
        <Dialog open={showForm} onOpenChange={setShowForm}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl">
                <Sparkles className="w-5 h-5" style={{ color: prompts.purple }} />
                Submit Your Prompt
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Your Name *</label>
                  <Input
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="John Smith"
                    maxLength={50}
                    className="focus-visible:ring-[#9b59b6]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Brand (optional)</label>
                  <select
                    value={brandContext}
                    onChange={(e) => setBrandContext(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b59b6] focus-visible:ring-offset-2"
                  >
                    <option value="">Select a brand...</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Your Prompt *</label>
                <Textarea
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="Create an AI-powered marketing campaign that..."
                  rows={4}
                  maxLength={500}
                  className="focus-visible:ring-[#9b59b6]"
                />
                <p className="text-xs text-muted-foreground mt-1">{promptText.length}/500 characters</p>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white"
                style={{ background: prompts.gradientBg }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Prompt'}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Prompts Wall */}
        <section className="py-12">
          <div className="container mx-auto px-4">
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
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: prompts.gradientBg }}
                        >
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-semibold text-foreground">{prompt.author_name}</span>
                            {prompt.brand_context && (
                              <span className={`text-xs px-2 py-0.5 rounded-full border ${getBrandStyle(prompt.brand_context).bg} ${getBrandStyle(prompt.brand_context).text} ${getBrandStyle(prompt.brand_context).border}`}>
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
        <section className="py-12" style={{ background: prompts.gradientBg }}>
          <div className="container mx-auto px-4 text-center">
            <Trophy className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Win the "Marketing Champion in Prompting" Title!
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              The top 3 prompts each day will be recognized on stage. Winners receive 
              exclusive pins, dinner table upgrades, and digital badges for their AI Passport!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['On-stage Recognition', 'Exclusive Pins', 'Dinner Upgrades', 'AI Passport Stamps'].map((reward) => (
                <span
                  key={reward}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
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
