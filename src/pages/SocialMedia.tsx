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

const socialImages = [
  {
    id: 1,
    gradient: "from-primary to-primary-light",
    icon: "🔬",
    caption: "Science in action"
  },
  {
    id: 2,
    gradient: "from-track-pcv to-primary",
    icon: "🌍",
    caption: "Global health"
  },
  {
    id: 3,
    gradient: "from-primary-light to-accent",
    icon: "💉",
    caption: "Innovation"
  },
  {
    id: 4,
    gradient: "from-track-comirnaty to-primary",
    icon: "🤝",
    caption: "Collaboration"
  },
  {
    id: 5,
    gradient: "from-primary to-track-break",
    icon: "🏆",
    caption: "Achievement"
  },
  {
    id: 6,
    gradient: "from-accent to-primary-light",
    icon: "💡",
    caption: "Discovery"
  },
];

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

        {/* Image Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
            >
              Moments from the Summit
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {socialImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`aspect-square rounded-xl bg-gradient-to-br ${image.gradient} flex flex-col items-center justify-center p-4 shadow-lg hover:scale-105 transition-transform cursor-pointer`}
                >
                  <span className="text-4xl md:text-6xl mb-2">{image.icon}</span>
                  <span className="text-white font-medium text-sm md:text-base">{image.caption}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quotes Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
            >
              Inspiring Words
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 shadow-sm border border-border"
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <p className="text-foreground italic">"{quote}"</p>
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
