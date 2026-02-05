import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, MapPin, User, Briefcase, Building } from 'lucide-react';
import { Session, trackLabels } from '@/data/scheduleData';
import { Button } from '@/components/ui/button';

interface SessionModalProps {
  session: Session | null;
  onClose: () => void;
}

const trackColorMap: Record<string, string> = {
  'pcv-paed': 'bg-track-pcv-paed',
  'pcv-adult': 'bg-track-pcv-adult',
  'comirnaty': 'bg-track-comirnaty',
  'rsv-adult': 'bg-track-rsv-adult',
  'rsv-maternal': 'bg-track-rsv-maternal',
  'plenary': 'bg-track-plenary',
  'break': 'bg-track-break',
  'networking': 'bg-track-networking',
};

export default function SessionModal({ session, onClose }: SessionModalProps) {
  if (!session) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`${trackColorMap[session.track]} p-6 text-primary-foreground relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-primary-foreground/20 rounded-full text-xs font-medium uppercase tracking-wider">
                {trackLabels[session.track]}
              </span>
              {session.type.toLowerCase() !== session.track.toLowerCase() && 
               session.type.toLowerCase() !== trackLabels[session.track].toLowerCase() && (
                <span className="px-3 py-1 bg-primary-foreground/20 rounded-full text-xs font-medium capitalize">
                  {session.type}
                </span>
              )}
            </div>

            <h2 className="text-2xl font-bold mb-2">{session.title}</h2>

            <div className="flex flex-wrap gap-4 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{session.time} ({session.duration})</span>
              </div>
              {session.room && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{session.room}</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                About This Session
              </h3>
              <p className="text-foreground leading-relaxed">{session.description}</p>
            </div>

            {/* Speakers */}
            {session.speakers.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Speakers
                </h3>
                <div className="space-y-4">
                  {session.speakers.map((speaker, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-4 bg-secondary/50 rounded-xl"
                    >
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{speaker.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Briefcase className="w-3 h-3" />
                          <span>{speaker.role}</span>
                          <span className="text-border">•</span>
                          <Building className="w-3 h-3" />
                          <span>{speaker.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{speaker.bio}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
