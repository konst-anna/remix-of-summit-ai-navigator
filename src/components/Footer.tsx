import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16" style={{ background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(170 60% 85%) 40%, hsl(160 50% 65%) 70%, hsl(75 50% 55%) 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
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
              <li><a href="#activities" className="hover:text-foreground transition-colors">Activities</a></li>
              <li><a href="#passport" className="hover:text-foreground transition-colors">AI Passport</a></li>
              <li><a href="#vr" className="hover:text-foreground transition-colors">VR Experience</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>
                <a href="https://web.yammer.com/cookies-community" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <ExternalLink className="w-4 h-4 text-foreground/80" />
                  <span>Viva Engage Cookies Community</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">
            © 2026 Pfizer Vaccines Ensemble Summit. All rights reserved.
          </p>
          <p className="text-xs text-foreground/40">
            Confidential - For Internal Use Only
          </p>
        </div>
      </div>
    </footer>
  );
}
