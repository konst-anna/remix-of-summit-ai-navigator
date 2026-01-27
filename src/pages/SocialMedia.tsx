import { motion } from 'framer-motion';
import { Hash, Instagram, MessageCircle, ArrowLeft, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const quotes = [
  "Vaccines save millions of lives every year - they are one of humanity's greatest achievements.",
  "Innovation in immunization is the key to a healthier future for all.",
  "Together, we can protect communities and build a world free from preventable diseases.",
  "The science of vaccines continues to evolve, bringing hope to millions worldwide.",
  "Every vaccination is a step toward global health security.",
  "Collaboration between scientists, healthcare workers, and communities makes immunization possible.",
  "Vaccines are a testament to what we can achieve when science and compassion unite.",
  "Protecting one person through vaccination helps protect entire communities.",
];

const instagramPosts = [
  { id: 1, gradient: "from-primary to-primary-light", image: "🔬", likes: 342, caption: "Science in action #VaccinesSummit2026" },
  { id: 2, gradient: "from-pink-500 to-purple-600", image: "🌍", likes: 521, caption: "Global health matters" },
  { id: 3, gradient: "from-primary-light to-accent", image: "💉", likes: 189, caption: "Innovation at its finest" },
  { id: 4, gradient: "from-track-comirnaty to-primary", image: "🤝", likes: 456, caption: "Collaboration is key" },
  { id: 5, gradient: "from-primary to-track-break", image: "🏆", likes: 278, caption: "Celebrating achievements" },
  { id: 6, gradient: "from-accent to-primary-light", image: "💡", likes: 634, caption: "Discovery never stops" },
  { id: 7, gradient: "from-track-pcv to-primary", image: "🧬", likes: 412, caption: "The future of health" },
  { id: 8, gradient: "from-pink-400 to-pink-600", image: "❤️", likes: 893, caption: "Protecting communities" },
];

// Create mixed feed items
type FeedItem = { type: 'quote'; content: string; index: number } | { type: 'instagram'; post: typeof instagramPosts[0]; index: number };

const createMixedFeed = (): FeedItem[] => {
  const feed: FeedItem[] = [];
  const maxLength = Math.max(quotes.length, instagramPosts.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (i < instagramPosts.length) {
      feed.push({ type: 'instagram', post: instagramPosts[i], index: i });
    }
    if (i < quotes.length) {
      feed.push({ type: 'quote', content: quotes[i], index: i });
    }
  }
  return feed;
};

const mixedFeed = createMixedFeed();

export default function SocialMedia() {
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
                Social Feed
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                #VaccinesSummit2026
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Follow the hashtag and share your pictures on Instagram, or send your photos and thoughts to our AI Concierge
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://instagram.com/explore/tags/vaccinessummit2026" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                    <Instagram className="w-5 h-5 mr-2" />
                    Follow on Instagram
                  </Button>
                </a>
                <Button variant="outline">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message AI Concierge
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mixed Feed Wall */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
              {mixedFeed.map((item, index) => (
                <motion.div
                  key={`${item.type}-${item.index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid mb-4"
                >
                  {item.type === 'instagram' ? (
                    <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
                      <div className={`aspect-square bg-gradient-to-br ${item.post.gradient} flex items-center justify-center`}>
                        <span className="text-6xl md:text-7xl">{item.post.image}</span>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Instagram className="w-4 h-4 text-pink-500" />
                          <span className="text-sm text-muted-foreground">{item.post.likes} likes</span>
                        </div>
                        <p className="text-sm text-foreground">{item.post.caption}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                      <Quote className="w-8 h-8 text-primary/30 mb-3" />
                      <p className="text-foreground italic leading-relaxed">"{item.content}"</p>
                    </div>
                  )}
                </motion.div>
              ))}
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
                Share Your Experience
              </h2>
              <p className="text-muted-foreground mb-8">
                Don't forget to use #VaccinesSummit2026 when posting about the event!
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
