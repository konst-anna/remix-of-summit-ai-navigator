import { motion } from 'framer-motion';
import { Stamp, Check, Sparkles, ArrowLeft, Award, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import socialHeroImg from '@/assets/social-hero-drummer.png';
import passportImage from '@/assets/ai-passport.png';

// Reuse Social palette
const palette = {
  yellow: '#f7e234',
  peach: '#f9a870',
  pink: '#f0679e',
  crimson: '#ef4056',
  gradientBg: 'linear-gradient(135deg, #f7e234 0%, #f9a870 35%, #f0679e 70%, #ef4056 100%)',
};

export default function AIPassport() {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="social" />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section — Social gradient + image */}
        <section
          className="relative overflow-hidden min-h-[260px] md:min-h-[320px]"
          style={{ background: palette.gradientBg }}
        >
          <div className="absolute inset-0 hidden md:block">
            <img
              src={socialHeroImg}
              alt=""
              className="absolute left-0 top-0 h-full w-3/5 object-cover object-center"
              style={{
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 30%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 30%, transparent 100%)',
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:ml-auto md:w-1/2 text-center md:text-left"
            >
              <Link to="/">
                <Button variant="ghost" className="mb-4 text-white/80 hover:text-white hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                <Stamp className="w-4 h-4" />
                Collect &amp; Win
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1] tracking-tighter">
                AI Passport
              </h1>

              <p className="text-base md:text-lg text-white/80 max-w-xl mb-6">
                Your ticket to hands-on AI exploration — collect stamps, crack missions, and compete for on-stage recognition and prizes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Your AI Passport has two ways to earn stamps. The more you collect, the higher you climb on the leaderboard — and the top collectors will be celebrated on stage with exclusive prizes!
              </p>
            </motion.div>

            {/* Two Passport Designs */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Brand Sessions Passport */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-card"
              >
                <div className="p-1.5" style={{ background: 'linear-gradient(135deg, #a2d06d 0%, #59c5c7 100%)' }}>
                  <div className="bg-card rounded-xl p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #a2d06d, #59c5c7)' }}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Brand Sessions</h3>
                        <p className="text-sm text-muted-foreground">Earn stamps by participating</p>
                      </div>
                    </div>

                    <div className="flex justify-center mb-6">
                      <motion.img
                        src={passportImage}
                        alt="Brand Sessions Passport"
                        className="w-32 lg:w-40 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      Dive into the brand sessions and put AI to work. Each session is an opportunity to earn a stamp — engage with the content, complete the activities, and watch your passport fill up.
                    </p>

                    <div className="space-y-2">
                      {[
                        'Attend and participate in brand sessions',
                        'Complete hands-on AI activities',
                        'Earn stamps for each session attended',
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#59c5c7' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secret Missions Passport */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-card"
              >
                <div className="p-1.5" style={{ background: palette.gradientBg }}>
                  <div className="bg-card rounded-xl p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ background: palette.gradientBg }}>
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Secret Missions</h3>
                        <p className="text-sm text-muted-foreground">Discover hidden challenges</p>
                      </div>
                    </div>

                    <div className="flex justify-center mb-6">
                      <motion.img
                        src={passportImage}
                        alt="Secret Missions Passport"
                        className="w-32 lg:w-40 rounded-lg shadow-lg"
                        style={{ filter: 'hue-rotate(280deg)' }}
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      Keep your eyes open for hidden challenges scattered throughout the summit. Crack the codes, complete surprise tasks, and unlock exclusive stamps that only the most curious attendees will find.
                    </p>

                    <div className="space-y-2">
                      {[
                        'Find and complete hidden challenges',
                        'Solve AI puzzles across the venue',
                        'Unlock exclusive secret stamps',
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 flex-shrink-0" style={{ color: palette.crimson }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Prizes CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 lg:p-12 text-center"
              style={{ background: palette.gradientBg }}
            >
              <Sparkles className="w-10 h-10 text-white mx-auto mb-4" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Collect Stamps, Win Prizes
              </h3>
              <p className="text-white/85 max-w-2xl mx-auto mb-6 text-base leading-relaxed">
                The attendees who collect the most stamps across both passports will be recognised on stage and awarded exclusive prizes. This is your chance to learn how to apply AI in a fun and useful way — be proactive, stay curious, and make every moment count!
              </p>
              <p className="text-white/75 max-w-xl mx-auto text-sm leading-relaxed">
                Share your best prompt ideas on the{' '}
                <Link to="/prompts" className="underline font-semibold text-white hover:text-white/90">
                  Prompts Wall
                </Link>
                , learn from fellow attendees, and discover how AI can transform your daily work — one stamp at a time.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer variant="social" />
    </div>
  );
}
