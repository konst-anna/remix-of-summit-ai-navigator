import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/barcelona-hero.jpg';
import ensembleLogo from '@/assets/ensemble-logo.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Teal/Cyan Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Barcelona skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(200,60%,15%,0.88)] via-[hsl(185,70%,30%,0.75)] to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={ensembleLogo}
              alt="The Pfizer Vaccines Ensemble - Synchronised in our growth ambitions"
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join global leaders, innovators, and healthcare professionals for three days of 
            collaboration, learning, and breakthrough insights in the heart of Barcelona.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20"
            >
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">March 25-27, 2026</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20"
            >
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">Barcelona, Spain</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20"
            >
              <Users className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground font-medium">250 Attendees</span>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              asChild
            >
              <Link to="/schedule">View Full Schedule</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-primary-foreground/60"
          >
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}