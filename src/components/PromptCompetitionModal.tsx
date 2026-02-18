import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trophy, Medal, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PromptCompetitionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const topPrompts = [
  {
    rank: 1,
    author: 'John Smith',
    prompt: 'Create an AI-powered tool that predicts pneumococcal disease outbreaks by region to optimize Prevnar distribution and guide proactive vaccination campaigns.',
    brand: 'Prevnar',
    icon: Trophy,
    color: 'from-yellow-400 to-yellow-600',
    textColor: 'text-yellow-900',
  },
  {
    rank: 2,
    author: 'Jane Great',
    prompt: 'Design an AI patient education platform for Comirnaty that personalizes booster recommendations based on individual risk factors and local epidemiology data.',
    brand: 'Comirnaty',
    icon: Medal,
    color: 'from-gray-300 to-gray-500',
    textColor: 'text-gray-800',
  },
  {
    rank: 3,
    author: 'Michael Chen',
    prompt: 'Build an AI dashboard that correlates RSV hospitalization rates with Abrysvo vaccination coverage to demonstrate real-world effectiveness to payers.',
    brand: 'Abrysvo',
    icon: Award,
    color: 'from-amber-500 to-amber-700',
    textColor: 'text-amber-900',
  },
];

export default function PromptCompetitionModal({ open, onOpenChange }: PromptCompetitionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            Top 3 Prompts of the Day
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {topPrompts.map((item) => (
            <div
              key={item.rank}
              className="relative p-4 rounded-xl border-2 border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon className={`w-6 h-6 ${item.textColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-foreground">{item.author}</span>
                    <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                      {item.brand}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{item.prompt}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            Day 2 Challenge is LIVE!
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Submit your best AI prompt for Day 2 and compete for the title of "Marketing Champion in Prompting"!
            Use any of our vaccine brands: Prevnar, Comirnaty, Abrysvo, PCV Paed, or Tick Bourne.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1">
              <Link to="/prompts" onClick={() => onOpenChange(false)}>
                Submit Your Prompt
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <Link to="/prompts" onClick={() => onOpenChange(false)}>
                View Prompts Wall
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
