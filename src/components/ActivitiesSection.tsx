import { motion } from 'framer-motion';
import { Trophy, Sparkles, Award, Gamepad2, Brain, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const activities = [
  {
    icon: Brain,
    title: 'Best Prompt Competition',
    description: 'Showcase your AI skills in our gamified prompt engineering challenge. Compete for the title of Marketing Champion in Prompting!',
    reward: 'On-stage recognition & exclusive pins',
  },
  {
    icon: Trophy,
    title: 'Copilot Challenge',
    description: 'Master the 2026 Vaccines Summit Copilot Agent. Complete tasks and earn the "Best User of Copilot" badge.',
    reward: 'Dinner table upgrades & special pins',
  },
  {
    icon: Target,
    title: 'AI Knowledge Quest',
    description: 'Navigate through AI-powered quizzes and interactive learning modules. Collect stamps for your AI Passport!',
    reward: 'Digital badges & AI Passport stamps',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Gamepad2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Gamified Learning</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Fun Activities & Competitions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engage, learn, and compete! Our interactive activities combine education with entertainment
            to create memorable experiences.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {activities.map((activity) => (
            <motion.div key={activity.title} variants={item}>
              <Card className="h-full p-6 bg-card hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-primary/20">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <activity.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{activity.title}</h3>
                <p className="text-muted-foreground mb-5">{activity.description}</p>
                <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">{activity.reward}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Rewards Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl gradient-hero p-8 lg:p-12"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                Rewards & Recognition
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-xl">
                Participants earn exclusive rewards including on-stage badges, collectible pins,
                dinner table upgrades, and digital achievements for their AI Passport.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['On-stage Badges', 'Collectible Pins', 'Dinner Upgrades', 'Digital Stamps'].map((reward) => (
                  <span
                    key={reward}
                    className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm text-primary-foreground border border-primary-foreground/20"
                  >
                    {reward}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-xl"
              >
                <Trophy className="w-10 h-10 text-yellow-900" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center shadow-xl"
              >
                <Award className="w-10 h-10 text-gray-700" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-xl"
              >
                <Sparkles className="w-10 h-10 text-amber-100" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
