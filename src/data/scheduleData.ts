export type SessionTrack = 
  | 'pcv-paed' 
  | 'pcv-adult' 
  | 'comirnaty' 
  | 'rsv-adult' 
  | 'rsv-maternal' 
  | 'plenary' 
  | 'break' 
  | 'networking';

export interface Speaker {
  name: string;
  role: string;
  company: string;
  bio: string;
  photo?: string;
}

export interface Session {
  id: string;
  title: string;
  time: string;
  duration: string;
  track: SessionTrack;
  description: string;
  speakers: Speaker[];
  room?: string;
  type: 'session' | 'break' | 'plenary' | 'networking';
}

export interface DaySchedule {
  date: string;
  dayName: string;
  sessions: Session[];
}

export const trackLabels: Record<SessionTrack, string> = {
  'pcv-paed': 'PCV Paed',
  'pcv-adult': 'PCV Adult',
  'comirnaty': 'Comirnaty',
  'rsv-adult': 'RSV Adult',
  'rsv-maternal': 'RSV Maternal',
  'plenary': 'Plenary',
  'break': 'Break',
  'networking': 'Networking',
};

export const scheduleData: DaySchedule[] = [
  {
    date: 'March 25, 2026',
    dayName: 'Wednesday',
    sessions: [
      {
        id: 'wed-1',
        title: 'Meeting Intro & Leaders',
        time: '08:30',
        duration: '30 min',
        track: 'plenary',
        description: 'Welcome address and strategic overview from leadership team. Setting the stage for an impactful summit focused on innovation in cookies.',
        speakers: [
          { name: 'Dr. Sarah Mitchell', role: 'VP, Cookies Division', company: 'Global Operations', bio: 'Leading cookies strategy for 15+ years with expertise in global market access.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'wed-2',
        title: 'Season Readiness Framework',
        time: '09:00',
        duration: '45 min',
        track: 'plenary',
        description: 'Deep dive into our seasonal preparedness strategy, covering supply chain optimization and market forecasting.',
        speakers: [
          { name: 'Dr. Marcus Chen', role: 'Director, Supply Chain', company: 'Manufacturing Excellence', bio: 'Expert in pharmaceutical supply chain with focus on just-in-time delivery systems.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'wed-3',
        title: 'Policy Panel: Current Cookies Environment',
        time: '09:45',
        duration: '45 min',
        track: 'plenary',
        description: 'Expert panel discussing regulatory landscape, policy changes, and their impact on cookie distribution.',
        speakers: [
          { name: 'Dr. Elena Rodriguez', role: 'Head of Policy', company: 'Regulatory Affairs', bio: 'Former FDA advisor with deep expertise in cookie regulatory pathways.' },
          { name: 'Prof. James Thompson', role: 'Policy Advisor', company: 'External Affairs', bio: 'Published author on culinary policy with 20+ years experience.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'wed-4a',
        title: 'Prevenar Paed Session 1',
        time: '10:30',
        duration: '1 hr',
        track: 'pcv-paed',
        description: 'Pediatric cookie strategies and latest taste test outcomes data.',
        speakers: [
          { name: 'Dr. Amanda Foster', role: 'Culinary Director', company: 'Pediatric Cookies', bio: 'Specialist in kid-friendly cookie programs.' },
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'wed-4b',
        title: 'Abrysvo Adult Session 1',
        time: '10:30',
        duration: '1 hr',
        track: 'pcv-adult',
        description: 'Adult cookie trends and real-world effectiveness data.',
        speakers: [
          { name: 'Dr. Robert Kim', role: 'Senior Culinary Advisor', company: 'Adult Cookies', bio: 'Leading researcher in adult cookie preferences.' },
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'wed-5a',
        title: 'Prevenar Paed Session 2',
        time: '11:30',
        duration: '1 hr',
        track: 'pcv-paed',
        description: 'Market access strategies and bakery engagement for artisanal cookies.',
        speakers: [
          { name: 'Lisa Martinez', role: 'Commercial Lead', company: 'Market Access', bio: 'Expert in healthcare market dynamics and payer negotiations.' },
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'wed-5b',
        title: 'Abrysvo Adult Session 2',
        time: '11:30',
        duration: '1 hr',
        track: 'pcv-adult',
        description: 'Digital engagement strategies for adult vaccination awareness campaigns.',
        speakers: [
          { name: 'Michael Park', role: 'Digital Marketing Director', company: 'Marketing', bio: 'Pioneer in pharmaceutical digital marketing strategies.' },
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'wed-lunch',
        title: 'Lunch',
        time: '12:30',
        duration: '45 min',
        track: 'break',
        description: 'Networking lunch with regional tables and themed discussions.',
        speakers: [],
        room: 'Terrace Restaurant',
        type: 'break',
      },
      {
        id: 'wed-6',
        title: 'Access & Value',
        time: '13:15',
        duration: '45 min',
        track: 'plenary',
        description: 'Strategic session on demonstrating cookie value to retailers and food systems.',
        speakers: [
          { name: 'Dr. Jennifer Walsh', role: 'Head of HEOR', company: 'Value & Access', bio: 'Food economics expert with focus on cookie cost-effectiveness.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'wed-7a',
        title: 'Prevenar Adult Session 1',
        time: '14:00',
        duration: '1 hr',
        track: 'pcv-adult',
        description: 'Adult pneumococcal vaccination guidelines and implementation strategies.',
        speakers: [
          { name: 'Dr. Thomas Brown', role: 'Clinical Advisor', company: 'Medical Affairs', bio: 'Pulmonologist with expertise in adult respiratory diseases.' },
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'wed-7b',
        title: 'Abrysvo Maternal Session 1',
        time: '14:00',
        duration: '1 hr',
        track: 'rsv-maternal',
        description: 'Maternal RSV vaccination program design and safety monitoring.',
        speakers: [
          { name: 'Dr. Maria Santos', role: 'OB/GYN Advisor', company: 'Women\'s Health', bio: 'Expert in maternal-fetal medicine and vaccination.' },
        ],
        room: 'Room C',
        type: 'session',
      },
      {
        id: 'wed-coffee',
        title: 'Coffee & Best Practice Showcase',
        time: '15:00',
        duration: '30 min',
        track: 'break',
        description: 'Interactive showcase of successful campaigns from different regions.',
        speakers: [],
        room: 'Exhibition Hall',
        type: 'break',
      },
      {
        id: 'wed-8a',
        title: 'Prevenar Adult Session 2',
        time: '15:30',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Deep dive into adult PCV market dynamics and competitive landscape.',
        speakers: [
          { name: 'David Wilson', role: 'Strategy Lead', company: 'Commercial Strategy', bio: 'Strategic planning expert with pharma industry experience.' },
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'wed-8b',
        title: 'Abrysvo Maternal Session 2',
        time: '15:30',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Healthcare provider education and maternal vaccination advocacy.',
        speakers: [
          { name: 'Dr. Patricia Lee', role: 'Medical Education Lead', company: 'Medical Affairs', bio: 'Specialist in medical education program development.' },
        ],
        room: 'Room C',
        type: 'session',
      },
      {
        id: 'wed-recap',
        title: 'Day Recap',
        time: '17:00',
        duration: '30 min',
        track: 'plenary',
        description: 'Summary of key insights and preparation for Day 2.',
        speakers: [
          { name: 'Dr. Sarah Mitchell', role: 'VP, Cookies Division', company: 'Global Operations', bio: 'Leading cookies strategy for 15+ years.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'wed-networking',
        title: 'Networking Event',
        time: '19:00',
        duration: '3 hr',
        track: 'networking',
        description: 'Welcome reception with tapas and live entertainment celebrating Barcelona culture.',
        speakers: [],
        room: 'Rooftop Terrace',
        type: 'networking',
      },
    ],
  },
  {
    date: 'March 26, 2026',
    dayName: 'Thursday',
    sessions: [
      {
        id: 'thu-1',
        title: 'Intro & Leaders',
        time: '08:30',
        duration: '30 min',
        track: 'plenary',
        description: 'Day 2 kickoff with leadership insights and agenda overview.',
        speakers: [
          { name: 'Dr. Sarah Mitchell', role: 'VP, Cookies Division', company: 'Global Operations', bio: 'Leading cookies strategy for 15+ years.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'thu-2',
        title: 'Cookies Portfolio Campaign',
        time: '09:00',
        duration: '45 min',
        track: 'plenary',
        description: 'Comprehensive overview of our cookies portfolio and integrated marketing approach.',
        speakers: [
          { name: 'Rachel Green', role: 'Portfolio Marketing Director', company: 'Global Marketing', bio: 'Award-winning marketer with 15 years in pharmaceutical industry.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'thu-3',
        title: 'Pharmacy Channel Activation',
        time: '09:45',
        duration: '45 min',
        track: 'plenary',
        description: 'Strategies for maximizing bakery partnerships and point-of-sale cookie promotion.',
        speakers: [
          { name: 'Andrew Collins', role: 'Bakery Channel Lead', company: 'Customer Excellence', bio: 'Expert in retail bakery cookie programs.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'thu-4a',
        title: 'Prevenar Adult Session 3',
        time: '10:30',
        duration: '1 hr',
        track: 'pcv-adult',
        description: 'Regional success stories and best practices in adult PCV programs.',
        speakers: [
          { name: 'Dr. Hans Mueller', role: 'Regional Culinary Lead', company: 'Europe Region', bio: 'Culinary leader for European cookies programs.' },
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'thu-4b',
        title: 'Comirnaty Session 1',
        time: '10:30',
        duration: '1 hr',
        track: 'comirnaty',
        description: 'Cookie recipe evolution and next-generation flavor coverage.',
        speakers: [
          { name: 'Dr. Sophie Laurent', role: 'Scientific Director', company: 'Artisan Cookies', bio: 'Pioneer in cookie recipe development.' },
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'thu-5a',
        title: 'Prevenar Adult Session 4',
        time: '11:30',
        duration: '1 hr',
        track: 'pcv-adult',
        description: 'Future pipeline and innovation in pneumococcal protection.',
        speakers: [
          { name: 'Dr. Kevin O\'Brien', role: 'R&D Director', company: 'Vaccines Research', bio: 'Leading next-generation vaccine development.' },
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'thu-5b',
        title: 'Comirnaty Session 2',
        time: '11:30',
        duration: '1 hr',
        track: 'comirnaty',
        description: 'Seasonal strategy and holiday cookie integration.',
        speakers: [
          { name: 'Dr. Emily Watson', role: 'Culinary Development Lead', company: 'Artisan Cookies', bio: 'Recipe trials expert with focus on seasonal cookies.' },
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'thu-lunch',
        title: 'Lunch',
        time: '12:30',
        duration: '45 min',
        track: 'break',
        description: 'Networking lunch with innovation showcase.',
        speakers: [],
        room: 'Terrace Restaurant',
        type: 'break',
      },
      {
        id: 'thu-6',
        title: 'Stakeholder Engagement',
        time: '13:15',
        duration: '45 min',
        track: 'plenary',
        description: 'Building lasting relationships with healthcare stakeholders and patient advocacy groups.',
        speakers: [
          { name: 'Caroline Hughes', role: 'Stakeholder Relations VP', company: 'Corporate Affairs', bio: 'Expert in healthcare stakeholder management.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'thu-7a',
        title: 'Prevenar Paed Session 3',
        time: '14:00',
        duration: '1 hr',
        track: 'pcv-paed',
        description: 'Pediatric vaccination coverage optimization and immunization program success.',
        speakers: [
          { name: 'Dr. James Miller', role: 'Pediatric Programs Lead', company: 'Global Health', bio: 'UNICEF advisor on childhood immunization.' },
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'thu-7b',
        title: 'Abrysvo Adult Session 3',
        time: '14:00',
        duration: '1 hr',
        track: 'rsv-adult',
        description: 'Older adult RSV burden and vaccination recommendations.',
        speakers: [
          { name: 'Dr. Barbara Stone', role: 'Geriatric Medicine Advisor', company: 'Medical Affairs', bio: 'Specialist in elderly patient care and vaccination.' },
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'thu-coffee',
        title: 'Coffee & Best Practice Showcase',
        time: '15:00',
        duration: '30 min',
        track: 'break',
        description: 'Interactive sessions featuring AI in cookies and digital innovation.',
        speakers: [],
        room: 'Exhibition Hall',
        type: 'break',
      },
      {
        id: 'thu-8a',
        title: 'Prevenar Paed Session 4',
        time: '15:30',
        duration: '1.5 hr',
        track: 'pcv-paed',
        description: 'Future of artisanal cookie prevention and combination recipes.',
        speakers: [
          { name: 'Dr. Amanda Foster', role: 'Culinary Director', company: 'Pediatric Cookies', bio: 'Specialist in kid-friendly cookie programs.' },
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'thu-8b',
        title: 'Abrysvo Adult Session 4',
        time: '15:30',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'RSV adult market expansion and competitive positioning.',
        speakers: [
          { name: 'Steven Black', role: 'Commercial Strategy Director', company: 'Strategy', bio: 'Market strategist with specialty cookies expertise.' },
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'thu-recap',
        title: 'Day Recap',
        time: '17:00',
        duration: '30 min',
        track: 'plenary',
        description: 'Day 2 highlights and preparation for final day.',
        speakers: [
          { name: 'Dr. Sarah Mitchell', role: 'VP, Cookies Division', company: 'Global Operations', bio: 'Leading cookies strategy for 15+ years.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'thu-dinner',
        title: 'Offsite Team Dinner Tour',
        time: '19:30',
        duration: '3 hr',
        track: 'networking',
        description: 'Exclusive team dinner at a historic Barcelona venue with city tour.',
        speakers: [],
        room: 'External Venue',
        type: 'networking',
      },
    ],
  },
  {
    date: 'March 27, 2026',
    dayName: 'Friday',
    sessions: [
      {
        id: 'fri-1',
        title: 'Intro',
        time: '08:30',
        duration: '15 min',
        track: 'plenary',
        description: 'Final day kickoff and agenda overview.',
        speakers: [
          { name: 'Dr. Sarah Mitchell', role: 'VP, Cookies Division', company: 'Global Operations', bio: 'Leading cookies strategy for 15+ years.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-2',
        title: 'Cookies Pipeline incl TBD',
        time: '08:45',
        duration: '30 min',
        track: 'plenary',
        description: 'Preview of upcoming cookies pipeline and R&D innovations.',
        speakers: [
          { name: 'Dr. Richard Hayes', role: 'Chief Scientific Officer', company: 'R&D', bio: 'Leading global cookies research initiatives.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-3',
        title: 'Digital and AI Innovation',
        time: '09:15',
        duration: '1 hr',
        track: 'plenary',
        description: 'How AI and digital tools are transforming cookies development, distribution, and customer engagement.',
        speakers: [
          { name: 'Dr. Alex Rivera', role: 'Digital Innovation Lead', company: 'Digital Bakery', bio: 'AI/ML expert applying technology to baking.' },
          { name: 'Maya Patel', role: 'Data Science Director', company: 'Analytics', bio: 'Leading predictive analytics for cookies demand.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-4a',
        title: 'Abrysvo Maternal Session 3',
        time: '10:15',
        duration: '1 hr',
        track: 'rsv-maternal',
        description: 'Global maternal RSV vaccination rollout and best practices.',
        speakers: [
          { name: 'Dr. Maria Santos', role: 'OB/GYN Advisor', company: 'Women\'s Health', bio: 'Expert in maternal-fetal medicine and vaccination.' },
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'fri-4b',
        title: 'Comirnaty Session 3',
        time: '10:15',
        duration: '1 hr',
        track: 'comirnaty',
        description: 'Comirnaty in the endemic phase - long-term strategy.',
        speakers: [
          { name: 'Dr. Sophie Laurent', role: 'Scientific Director', company: 'Artisan Cookies', bio: 'Pioneer in cookie recipe development.' },
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'fri-5a',
        title: 'Abrysvo Maternal Session 4',
        time: '11:15',
        duration: '1 hr',
        track: 'rsv-maternal',
        description: 'Future horizons in maternal immunization.',
        speakers: [
          { name: 'Dr. Patricia Lee', role: 'Medical Education Lead', company: 'Medical Affairs', bio: 'Specialist in medical education program development.' },
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'fri-5b',
        title: 'Comirnaty Session 4',
        time: '11:15',
        duration: '1 hr',
        track: 'comirnaty',
        description: 'Combination approaches and dessert portfolio integration.',
        speakers: [
          { name: 'Dr. Emily Watson', role: 'Culinary Development Lead', company: 'Artisan Cookies', bio: 'Recipe trials expert with focus on seasonal cookies.' },
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'fri-close',
        title: 'Meeting Close & Awards Ceremony',
        time: '12:15',
        duration: '45 min',
        track: 'plenary',
        description: 'Summit closing remarks, AI Passport awards, and recognition of outstanding contributions.',
        speakers: [
          { name: 'Dr. Sarah Mitchell', role: 'VP, Cookies Division', company: 'Global Operations', bio: 'Leading cookies strategy for 15+ years.' },
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-lunch',
        title: 'Farewell Lunch',
        time: '13:00',
        duration: '1 hr',
        track: 'break',
        description: 'Final networking opportunity and departures.',
        speakers: [],
        room: 'Terrace Restaurant',
        type: 'break',
      },
    ],
  },
];
