import { motion } from 'framer-motion';
import { MessageCircle, Hash, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function SocialMediaSection() {
  return (
    <section id="social" className="py-20" style={{ background: 'linear-gradient(135deg, #f7e234 0%, #f9a870 35%, #f0679e 70%, #ef4056 100%)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Hash className="w-4 h-4" />
            Join the Conversation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
#VaccinesSummit2026
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Share your experience and connect with fellow attendees on social media
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">

          































        </motion.div>
      </div>
    </section>);

}