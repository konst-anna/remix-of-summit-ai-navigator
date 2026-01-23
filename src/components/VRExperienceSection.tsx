import { motion } from 'framer-motion';
import { Glasses, Sparkles, Globe, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import vrImage from '@/assets/vr-experience.jpg';

export default function VRExperienceSection() {
  return (
    <section id="vr" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl rounded-full" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={vrImage}
                alt="VR Experience - Attendee using virtual reality headset"
                className="w-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              
              {/* Play Button */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <button className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/40 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </button>
              </motion.div>
              
              {/* Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                  <Glasses className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground">VR Experience Zone</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl gradient-hero flex items-center justify-center shadow-xl"
            >
              <Globe className="w-12 h-12 text-primary-foreground" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Immersive Technology</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              VR Experience Stand
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Step into the future of healthcare with our cutting-edge VR Experience Stand. 
              Explore the AI digital world, visualize vaccine mechanisms in 3D, and interact 
              with immersive educational content.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Glasses className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Immersive Visualization</h4>
                  <p className="text-sm text-muted-foreground">Experience vaccine science in stunning 3D environments</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">AI Digital World</h4>
                  <p className="text-sm text-muted-foreground">Explore AI applications in healthcare through interactive scenarios</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-track-comirnaty/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-track-comirnaty" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Gamified Learning</h4>
                  <p className="text-sm text-muted-foreground">Complete VR challenges to earn AI Passport stamps</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="gradient-hero text-primary-foreground">
              Book Your VR Slot
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
