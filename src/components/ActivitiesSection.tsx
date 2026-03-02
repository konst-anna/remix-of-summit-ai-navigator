import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, Award, Gamepad2, Brain, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import PromptCompetitionModal from './PromptCompetitionModal';

const activities = [
  {
    icon: Brain,
    title: 'Best Prompt Competition',
    description: 'Showcase your AI skills in our gamified prompt engineering challenge. Compete for the title of Marketing Champion in Prompting!',
    reward: 'On-stage recognition & AI Passport stamps',
    clickable: true,
  },
  {
    icon: Target,
    title: 'AI Knowledge Quest',
    description: 'Navigate through AI-powered quizzes and interactive learning modules. Collect stamps for your AI Passport!',
    reward: 'Digital badges & AI Passport stamps',
    clickable: false,
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
  const [promptModalOpen, setPromptModalOpen] = useState(false);

  const handleActivityClick = (activity: typeof activities[0]) => {
    if (activity.title === 'Best Prompt Competition') {
      setPromptModalOpen(true);
    }
  };

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #88ecd4, #59c5c7)' }}>
            <Gamepad2 className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Gamified Learning</span>
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
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
        >
          {activities.map((activity) => (
            <motion.div key={activity.title} variants={item}>
              <Card 
                className={`h-full p-6 bg-card hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-primary/20 ${
                  activity.clickable ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleActivityClick(activity)}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #a2d06d, #59c5c7)' }}>
                  <activity.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {activity.title}
                  {activity.clickable && (
                    <span className="ml-2 text-xs font-normal px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: '#59c5c7' }}>
                      Click to view
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground mb-5">{activity.description}</p>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: 'rgba(136, 236, 212, 0.15)' }}>
                  <Award className="w-4 h-4" style={{ color: '#59c5c7' }} />
                  <span className="text-sm font-medium" style={{ color: '#59c5c7' }}>{activity.reward}</span>
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
          className="relative overflow-hidden rounded-2xl p-8 lg:p-12" style={{ background: 'linear-gradient(135deg, #a2d06d 0%, #59c5c7 50%, #0095ff 100%)' }}>
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
                {[
                  { label: 'On-stage Badges', bg: '#a2d06d', hoverBg: '#8bc34a' },
                  { label: 'Collectible Pins', bg: '#88ecd4', hoverBg: '#59c5c7' },
                  { label: 'Dinner Upgrades', bg: '#59c5c7', hoverBg: '#0095ff' },
                  { label: 'Digital Stamps', bg: '#0095ff', hoverBg: '#006fd6' },
                ].map((reward) => (
                  <motion.span
                    key={reward.label}
                    whileHover={{ scale: 1.1, backgroundColor: reward.hoverBg }}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-white cursor-pointer shadow-lg transition-shadow hover:shadow-xl"
                    style={{ backgroundColor: reward.bg }}
                  >
                    {reward.label}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #a2d06d, #88ecd4)' }}
              >
                <Trophy className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #88ecd4, #59c5c7)' }}
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #59c5c7, #0095ff)' }}
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <PromptCompetitionModal open={promptModalOpen} onOpenChange={setPromptModalOpen} />
    </section>
  );
}
