import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const EqualizerBar = ({ height, color }: { height: number; color: string }) => (
  <div
    className="rounded-sm"
    style={{
      width: '8px',
      height: `${height}px`,
      backgroundColor: color,
      marginRight: '3px',
      display: 'inline-block',
    }}
  />
);

const EqualizerRow = ({ color = 'hsl(75 50% 50% / 0.5)' }: { color?: string }) => {
  // Generate a repeating pattern of equalizer bars with varying heights
  const barPattern = [
    12, 20, 8, 28, 16, 24, 10, 32, 14, 22, 18, 26, 8, 30, 12, 20,
    16, 28, 10, 24, 14, 32, 18, 22, 8, 26, 12, 30, 20, 16, 24, 10,
    28, 14, 22, 18, 32, 8, 26, 12, 20, 30, 16, 24, 10, 28, 14, 22,
    18, 32, 8, 26, 12, 30, 20, 16, 24, 10, 28, 14, 22, 18, 32, 26,
    12, 20, 8, 28, 16, 24, 10, 32, 14, 22, 18, 26, 8, 30, 12, 20,
    16, 28, 10, 24, 14, 32, 18, 22, 8, 26, 12, 30, 20, 16, 24, 10,
    28, 14, 22, 18, 32, 8, 26, 12, 20, 30, 16, 24, 10, 28, 14, 22,
    18, 32, 8, 26, 12, 30, 20, 16, 24, 10, 28, 14, 22, 18, 32, 26,
  ];

  return (
    <div className="flex items-end justify-center overflow-hidden w-full">
      {barPattern.map((h, i) => (
        <EqualizerBar key={i} height={h} color={color} />
      ))}
    </div>
  );
};

export default function Footer({ variant = 'default' }: { variant?: 'default' | 'social' | 'prompts' }) {
  const isStyled = variant === 'social' || variant === 'prompts';
  const bgStyle = variant === 'social'
    ? { background: 'linear-gradient(to bottom, white 0%, transparent 100%), linear-gradient(to right, #f7e234 0%, #f9a870 35%, #f0679e 70%, #ef4056 100%)', backgroundSize: '100% 100%, 100% 100%' }
    : variant === 'prompts'
    ? { background: 'linear-gradient(to bottom, white 0%, transparent 100%), linear-gradient(135deg, #5ce1e6 0%, #9b59b6 50%, #e91e8c 100%)', backgroundSize: '100% 100%, 100% 100%' }
    : { background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(170 60% 85%) 40%, hsl(160 50% 65%) 70%, hsl(75 50% 55%) 100%)' };

  return (
    <footer className="relative py-16 overflow-hidden" style={bgStyle}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12 md:pl-24 lg:pl-40">
          {/* Event Details */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Event Details</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-foreground/80" />
                <span>March 25-27, 2026</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-foreground/80" />
                <span>Barcelona, Spain</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#schedule" className="hover:text-foreground transition-colors">Schedule</a></li>
              
              <li><a href="#passport" className="hover:text-foreground transition-colors">AI Passport</a></li>
              
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>
                <a href="https://web.yammer.com/vaccines-community" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <ExternalLink className="w-4 h-4 text-foreground/80" />
                  <span>Viva Engage Vaccines Community</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">
            © 2026 Pfizer Vaccines. All rights reserved.
          </p>
          <p className="text-xs text-foreground/40">
            Confidential - For Internal Use Only
          </p>
        </div>
      </div>

      {/* Equalizer bars at the bottom – default only */}
      {!isStyled && (
        <div className="absolute bottom-0 left-0 right-0">
          <EqualizerRow color="hsl(75 50% 50% / 0.5)" />
        </div>
      )}
    </footer>
  );
}
