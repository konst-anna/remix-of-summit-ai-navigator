import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, MapPin, Syringe } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Schedule', href: '/schedule', isRoute: true },
  { label: 'Activities', href: '#activities' },
  { label: 'AI Passport', href: '#passport' },
  { label: 'Prompts Wall', href: '/prompts', isRoute: true },
  { label: 'Social', href: '/social', isRoute: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
              <Syringe className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground">Cookies Summit</h1>
              <p className="text-xs text-muted-foreground">2026 International</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Event Info Pills */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-xs">
              <MapPin className="w-3 h-3 text-primary" />
              <span className="text-secondary-foreground">Barcelona</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-xs">
              <Calendar className="w-3 h-3 text-primary" />
              <span className="text-secondary-foreground">Mar 25-27, 2026</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-foreground font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="flex gap-2 pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-xs">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-secondary-foreground">Barcelona</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-xs">
                  <Calendar className="w-3 h-3 text-primary" />
                  <span className="text-secondary-foreground">Mar 25-27</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
