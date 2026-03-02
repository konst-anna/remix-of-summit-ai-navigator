import { motion } from 'framer-motion';
import { Stamp, Star, Zap, Award, Brain, Check, Lightbulb, Target, Eye, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import passportImage from '@/assets/ai-passport.png';

const brandStamps = [
  { icon: Brain, title: 'AI Strategist', gradient: 'from-[hsl(213,55%,24%)] to-[hsl(210,70%,50%)]' },
  { icon: Lightbulb, title: 'Insight Hunter', gradient: 'from-[hsl(80,50%,50%)] to-[hsl(130,55%,55%)]' },
  { icon: Star, title: 'Brand Champion', gradient: 'from-[hsl(190,60%,45%)] to-[hsl(180,50%,55%)]' },
];

const missionStamps = [
  { icon: Eye, title: 'Code Breaker', gradient: 'from-[hsl(280,50%,50%)] to-[hsl(320,60%,55%)]' },
  { icon: Target, title: 'Mission Complete', gradient: 'from-[hsl(30,80%,55%)] to-[hsl(15,70%,50%)]' },
  { icon: Zap, title: 'Secret Agent', gradient: 'from-[hsl(210,70%,50%)] to-[hsl(250,60%,55%)]' },
];

export default function AIPassportSection() {
  return (
    <section id="passport" className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Your AI Passport
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your ticket to hands-on AI exploration! Collect stamps by diving into brand sessions and cracking secret missions — the more you explore, the closer you get to winning prizes and on-stage recognition.
          </p>
        </motion.div>

        {/* Open Passport */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl rounded-full" />

          {/* Passport Book */}
          <div className="relative z-10 flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl border border-border">
            {/* Left Page - Cover */}
            <div className="md:w-2/5 bg-card p-6 flex flex-col items-center justify-center relative">
              {/* Spine effect */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-r from-border to-transparent" />
              <motion.img
                src={passportImage}
                alt="AI Passport"
                className="w-40 lg:w-48 rounded-lg shadow-lg mb-4"
                whileHover={{ scale: 1.05 }}
              />
              <div className="space-y-2 text-center">
                {[
                  'Earn stamps in Brand Sessions',
                  'Unlock stamps via Secret Missions',
                  'Top collectors win prizes on stage',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="w-3 h-3 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Page - Stamps */}
            <div className="md:w-3/5 bg-card p-6 lg:p-8 relative">
              {/* Brand Session Stamps */}
              <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2 relative z-10">
                <Stamp className="w-5 h-5 text-primary" />
                Brand Session Stamps
              </h3>
              <div className="grid grid-cols-3 gap-3 relative z-10 mb-6">
                {brandStamps.map((stamp) => (
                  <motion.div
                    key={stamp.title}
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-square rounded-xl border-2 border-dashed border-muted-foreground/20 p-3 flex flex-col items-center justify-center text-center transition-all group-hover:border-accent group-hover:bg-accent/5">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${stamp.gradient} flex items-center justify-center mb-2 shadow-md`}>
                        <stamp.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xs font-semibold text-foreground leading-tight">{stamp.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Secret Mission Stamps */}
              <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2 relative z-10">
                <Eye className="w-5 h-5 text-primary" />
                Secret Mission Stamps
              </h3>
              <div className="grid grid-cols-3 gap-3 relative z-10">
                {missionStamps.map((stamp) => (
                  <motion.div
                    key={stamp.title}
                    whileHover={{ scale: 1.08, rotate: -3 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-square rounded-xl border-2 border-dashed border-muted-foreground/20 p-3 flex flex-col items-center justify-center text-center transition-all group-hover:border-primary group-hover:bg-primary/5">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${stamp.gradient} flex items-center justify-center mb-2 shadow-md`}>
                        <stamp.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xs font-semibold text-foreground leading-tight">{stamp.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Be proactive, stay curious, and make every session count! Share your best prompt ideas on the{' '}
              <Link to="/prompts" className="text-primary font-semibold hover:underline">Prompts Wall</Link>,
              learn from fellow attendees, and discover how AI can transform your daily work — one stamp at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
