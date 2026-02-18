import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import summitLogo from '@/assets/summit-logo.png';
import summitLogoRed from '@/assets/summit-logo-red.png';

const navItems = [
  { label: 'Schedule', href: '/schedule', isRoute: true },
  { label: 'Activities', href: '#activities', anchor: 'activities' },
  { label: 'AI Passport', href: '#passport', anchor: 'passport' },
  { label: 'Prompts Wall', href: '/prompts', isRoute: true },
  { label: 'Social', href: '/social', isRoute: true },
];

export default function Header({ variant = 'default' }: { variant?: 'default' | 'social' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleAnchorClick = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.getElementById(anchor);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${anchor}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={variant === 'social' ? summitLogoRed : summitLogo} alt="Pfizer Vaccines Ensemble" className={variant === 'social' ? "h-20 lg:h-24 w-auto -ml-4" : "h-12 lg:h-14 w-auto"} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isSocial = item.label === 'Social';
              const linkClass = isSocial
                ? "text-sm font-bold bg-gradient-to-r from-[#f7e234] via-[#f0679e] to-[#ef4056] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                : "text-sm font-bold text-muted-foreground hover:text-primary transition-colors";
              
              return item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => item.anchor && handleAnchorClick(e, item.anchor)}
                  className={`${linkClass} cursor-pointer`}
                >
                  {item.label}
                </a>
              );
            })}
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
                    className="text-foreground font-medium py-2 cursor-pointer"
                    onClick={(e) => item.anchor && handleAnchorClick(e, item.anchor)}
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