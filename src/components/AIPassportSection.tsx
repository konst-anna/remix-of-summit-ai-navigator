import { motion } from 'framer-motion';
import { Stamp, Star, Zap, Award, Shield, Rocket, Brain, Check } from 'lucide-react';
import passportImage from '@/assets/ai-passport.png';

const stamps = [
{ icon: Brain, title: 'Marketing Champion', description: 'Master of AI prompts' },
{ icon: Zap, title: 'Copilot Expert', description: 'Best Copilot user' },
{ icon: Star, title: 'Innovation Star', description: 'Creative problem solver' },
{ icon: Shield, title: 'Data Guardian', description: 'Analytics excellence' },
{ icon: Rocket, title: 'Speed Runner', description: 'Quick learner badge' },
{ icon: Award, title: 'Summit Leader', description: 'Top contributor' }];


export default function AIPassportSection() {
  return (
    <section id="passport" className="py-20 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Stamp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Digital Achievement System</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Your AI Passport
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Every participant receives a digital AI Passport - a personalized record of your 
              summit journey. Collect stamps, earn badges, and showcase your achievements!
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
              'Digital passport like a real travel document',
              'Collect stamps for each AI activity completed',
              'Earn special badges and recognition',
              'Share achievements on social media',
              'Unlock exclusive rewards and upgrades'].
              map((feature, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3">

                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Passport Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full" />
            
            {/* Passport Image */}
            <div className="relative z-10 flex items-center justify-center">
              <motion.img
                src={passportImage}
                alt="AI Passport"
                className="w-64 lg:w-80 rounded-xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stamps Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20">

          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Collect These Achievement Stamps
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stamps.map((stamp, index) =>
            <motion.div
              key={stamp.title}
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="relative group">

                <div className="aspect-square rounded-2xl bg-card border-2 border-dashed border-primary/30 p-4 flex flex-col items-center justify-center text-center transition-all group-hover:border-primary group-hover:bg-primary/5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <stamp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">{stamp.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{stamp.description}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}