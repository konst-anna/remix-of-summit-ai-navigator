import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="gradient-dark text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <span className="font-bold text-lg">VS</span>
              </div>
              <div>
                <h3 className="font-bold">Cookies Summit</h3>
                <p className="text-xs opacity-70">2026 International</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Shaping the future of cookies through innovation, collaboration, and global leadership.
            </p>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="font-semibold mb-4">Event Details</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 25-27, 2026</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Barcelona, Spain</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#schedule" className="hover:opacity-100 transition-opacity">Schedule</a></li>
              <li><a href="#activities" className="hover:opacity-100 transition-opacity">Activities</a></li>
              <li><a href="#passport" className="hover:opacity-100 transition-opacity">AI Passport</a></li>
              <li><a href="#vr" className="hover:opacity-100 transition-opacity">VR Experience</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="https://web.yammer.com/vaccines-community" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                  <span>Viva Engage Vaccines Community</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © 2026 International Cookies Summit. All rights reserved.
          </p>
          <p className="text-xs opacity-40">
            Confidential - For Internal Use Only
          </p>
        </div>
      </div>
    </footer>
  );
}
