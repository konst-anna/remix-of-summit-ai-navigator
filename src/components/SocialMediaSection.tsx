import { motion } from 'framer-motion';
import { Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialMediaSection() {
  return (
    <section id="social" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <Link
            to="/social"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            style={{ background: 'linear-gradient(135deg, #f7e234 0%, #f9a870 35%, #f0679e 70%, #ef4056 100%)' }}
          >
            <Hash className="w-5 h-5" />
            #VaccinesSummit2026
          </Link>
          <p className="text-sm text-muted-foreground max-w-md">
            Share your experience and thoughts from the event
          </p>
        </motion.div>
      </div>
    </section>
  );
}
