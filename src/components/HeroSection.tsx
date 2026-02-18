import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/barcelona-hero.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with White/Light Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Barcelona skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,100%,0.88)] via-[hsl(210,30%,97%,0.85)] to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-6"
          >
            The Pfizer Vaccines Ensemble
          </motion.p>

          {/* Title — large, clean, Apple-style */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-primary mb-6 leading-[1.05] tracking-tight">
            Synchronised
            <br />
            <span className="text-gradient-hero">in Growth</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Three days of collaboration, learning, and breakthrough insights — Barcelona, March 2026.
          </p>

          {/* Minimal info pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { icon: Calendar, text: 'March 25–27, 2026' },
              { icon: MapPin, text: 'Barcelona, Spain' },
              { icon: Users, text: '250 Attendees' },
            ].map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-primary/5 backdrop-blur-md rounded-full border border-primary/10 text-sm text-foreground/80"
              >
                <Icon className="w-4 h-4 text-accent" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-base rounded-full"
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
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
