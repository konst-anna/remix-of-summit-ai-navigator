import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scheduleData, Session, trackLabels, DaySchedule } from '@/data/scheduleData';
import SessionModal from './SessionModal';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const trackColorMap: Record<string, string> = {
  'pcv-paed': 'bg-track-pcv-paed',
  'pcv-adult': 'bg-track-pcv-adult',
  'comirnaty': 'bg-track-comirnaty',
  'rsv-adult': 'bg-track-rsv-adult',
  'rsv-maternal': 'bg-track-rsv-maternal',
  'plenary': 'bg-track-plenary',
  'break': 'bg-track-break',
  'networking': 'bg-track-networking',
  'tick-bourne': 'bg-track-tick-bourne'
};

const trackBorderMap: Record<string, string> = {
  'pcv-paed': 'border-l-track-pcv-paed',
  'pcv-adult': 'border-l-track-pcv-adult',
  'comirnaty': 'border-l-track-comirnaty',
  'rsv-adult': 'border-l-track-rsv-adult',
  'rsv-maternal': 'border-l-track-rsv-maternal',
  'plenary': 'border-l-track-plenary',
  'break': 'border-l-track-break',
  'networking': 'border-l-track-networking',
  'tick-bourne': 'border-l-track-tick-bourne'
};

function getInitials(name: string): string {
  return name.
  split(' ').
  map((part) => part[0]).
  join('').
  toUpperCase().
  slice(0, 2);
}

function SessionCard({ session, onClick }: {session: Session;onClick: () => void;}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative p-4 bg-card rounded-xl border-l-4 shadow-card cursor-pointer
        transition-shadow hover:shadow-card-hover
        ${trackBorderMap[session.track]}
      `}>

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-primary-foreground ${trackColorMap[session.track]}`}>
              {trackLabels[session.track]}
            </span>
          </div>
          <h4 className="font-semibold text-foreground mb-1 line-clamp-2">{session.title}</h4>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{session.time}</span>
            <span className="text-border">•</span>
            <span>{session.duration}</span>
          </div>
          {session.speakers.length > 0 &&
          <div className="mt-3 flex items-center gap-2">
              <div className="flex -space-x-2">
                {session.speakers.slice(0, 3).map((speaker, idx) =>
              <Avatar key={idx} className="w-7 h-7 border-2 border-card">
                    {speaker.photo ?
                <AvatarImage src={speaker.photo} alt={speaker.name} /> :
                null}
                    <AvatarFallback className="text-[10px] bg-primary/10 text-primary font-medium">
                      {getInitials(speaker.name)}
                    </AvatarFallback>
                  </Avatar>
              )}
                {session.speakers.length > 3 &&
              <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center border-2 border-card">
                    <span className="text-[10px] text-muted-foreground font-medium">
                      +{session.speakers.length - 3}
                    </span>
                  </div>
              }
              </div>
              <span className="text-xs text-muted-foreground line-clamp-1">
                {session.speakers.map((s) => s.name.split(' ').pop()).join(', ')}
              </span>
            </div>
          }
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      </div>
    </motion.div>);

}

function DayTab({ day, isActive, onClick }: {day: DaySchedule;isActive: boolean;onClick: () => void;}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 py-4 text-left transition-all rounded-t-xl
        ${isActive ?
      'bg-card text-foreground shadow-lg' :
      'bg-secondary/50 text-muted-foreground hover:bg-secondary'}
      `
      }>

      <div className="font-bold">{day.dayName}</div>
      <div className="text-sm opacity-80">{day.date}</div>
      {isActive &&
      <motion.div
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-1 gradient-hero rounded-t" />

      }
    </button>);

}

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const currentDay = scheduleData[activeDay];

  // Group sessions by time slot for grid layout
  const timeSlots = currentDay.sessions.reduce((acc, session) => {
    if (!acc[session.time]) {
      acc[session.time] = [];
    }
    acc[session.time].push(session);
    return acc;
  }, {} as Record<string, Session[]>);

  return (
    <section id="schedule" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14">

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Schedule
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Three days of insightful sessions, workshops, and networking.<br />
            Click on any session to learn more.
          </p>
        </motion.div>

        {/* Track Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8">

          {Object.entries(trackLabels).map(([key, label]) =>
          <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${trackColorMap[key]}`} />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          )}
        </motion.div>

        {/* Day Tabs */}
        <div className="flex gap-1 mb-0">
          {scheduleData.map((day, index) =>
          <DayTab
            key={day.date}
            day={day}
            isActive={activeDay === index}
            onClick={() => setActiveDay(index)} />

          )}
        </div>

        {/* Schedule Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-card rounded-b-2xl rounded-tr-2xl shadow-lg p-6">

            <div className="space-y-6">
              {Object.entries(timeSlots).map(([time, sessions]) =>
              <div key={time} className="relative">
                  {/* Time Marker */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">{time}</span>
                    </div>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Sessions Grid */}
                  <div className={`grid gap-4 ${sessions.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-2xl'}`}>
                    {sessions.map((session) =>
                  <SessionCard
                    key={session.id}
                    session={session}
                    onClick={() => setSelectedSession(session)} />

                  )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* View Full Schedule CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8">

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/schedule">View Full Schedule</Link>
          </Button>
        </motion.div>
      </div>

      {/* Session Modal */}
      <SessionModal
        session={selectedSession}
        onClose={() => setSelectedSession(null)} />

    </section>);

}