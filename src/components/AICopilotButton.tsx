import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AICopilotButtonProps {
  variant?: 'default' | 'social';
}

export default function AICopilotButton({ variant = 'default' }: AICopilotButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isSocial = variant === 'social';
  const gradientClass = isSocial ? '' : 'gradient-hero';
  const gradientStyle = isSocial ?
  { background: 'linear-gradient(135deg, #f7e234 0%, #f9a870 35%, #f0679e 70%, #ef4056 100%)' } :
  undefined;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`ai-copilot-button group ${isSocial ? '' : ''}`}
        style={gradientStyle}
        aria-label="Open AI Copilot">

        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}>

          {isOpen ?
          <X className="w-7 h-7 text-primary-foreground" /> :

          <Bot className="w-7 h-7 text-primary-foreground" />
          }
        </motion.div>
        
        {/* Pulse Ring */}
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`absolute inset-0 rounded-full ${gradientClass}`}
          style={gradientStyle} />

      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-end sm:items-center justify-center sm:justify-end p-4 sm:p-6"
          onClick={() => setIsOpen(false)}>

            <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">

              {/* Header */}
              <div className={`${gradientClass} p-6 text-primary-foreground`} style={gradientStyle}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <Bot className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Summit AI Concierge</h3>
                    <p className="text-sm opacity-80">
                  </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Sparkles className="w-4 h-4" />
                  <span>Powered by Copilot</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6">Get instant help navigating the summit! Our AI-Concierge can help you:

              </p>

                <ul className="space-y-3 mb-6">
                  {['Find sessions based on your interests',
                'Get speaker information',
                'Navigate the venue',
                'Connect with other attendees',
                'Track your AI Passport progress'].
                map((item, index) =>
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-sm text-foreground">

                      <ArrowRight className={`w-4 h-4 flex-shrink-0 ${isSocial ? 'text-[#ef4056]' : 'text-primary'}`} />
                      <span>{item}</span>
                    </motion.li>
                )}
                </ul>

                <div className="space-y-3">
                  <Button
                  className={`w-full text-primary-foreground ${gradientClass}`}
                  style={gradientStyle}
                  size="lg">

                    <Bot className="w-5 h-5 mr-2" />
                    Start chatting
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}