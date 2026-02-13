import { motion } from 'framer-motion';
import { MessageCircle, Hash, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function SocialMediaSection() {
  return (
    <section id="social" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Hash className="w-4 h-4" />
            Join the Conversation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
#CookiesSummit2026
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your experience and connect with fellow attendees on social media
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI Concierge</h3>
                    <p className="text-muted-foreground text-sm">
                      Send your pictures or thoughts directly to our AI Concierge
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  #CookiesSummit2026
                </p>
                <p className="text-muted-foreground mb-6">
                  See what others are sharing and join the conversation
                </p>
                <Link to="/social">
                  <Button className="group">
                    View Social Feed
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
