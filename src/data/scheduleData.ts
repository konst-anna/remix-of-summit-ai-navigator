export type SessionTrack = 
  | 'pcv-paed' 
  | 'pcv-adult' 
  | 'comirnaty' 
  | 'rsv-adult' 
  | 'rsv-maternal' 
  | 'plenary' 
  | 'break' 
  | 'networking'
  | 'tick-bourne';

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
  'tick-bourne': 'Tick Bourne',
};

// Speaker photos using randomuser.me portraits for realistic avatars
const speakerPhotos: Record<string, string> = {
  'Dr. Sarah Mitchell': 'https://randomuser.me/api/portraits/women/44.jpg',
  'Dr. Marcus Chen': 'https://randomuser.me/api/portraits/men/32.jpg',
  'Dr. Elena Rodriguez': 'https://randomuser.me/api/portraits/women/68.jpg',
  'Prof. James Thompson': 'https://randomuser.me/api/portraits/men/52.jpg',
  'Dr. Amanda Foster': 'https://randomuser.me/api/portraits/women/26.jpg',
  'Dr. Robert Kim': 'https://randomuser.me/api/portraits/men/46.jpg',
  'Lisa Martinez': 'https://randomuser.me/api/portraits/women/33.jpg',
  'Michael Park': 'https://randomuser.me/api/portraits/men/22.jpg',
  'Dr. Jennifer Walsh': 'https://randomuser.me/api/portraits/women/55.jpg',
  'Dr. Thomas Brown': 'https://randomuser.me/api/portraits/men/61.jpg',
  'Dr. Maria Santos': 'https://randomuser.me/api/portraits/women/71.jpg',
  'David Wilson': 'https://randomuser.me/api/portraits/men/75.jpg',
  'Dr. Patricia Lee': 'https://randomuser.me/api/portraits/women/82.jpg',
  'Rachel Green': 'https://randomuser.me/api/portraits/women/17.jpg',
  'Andrew Collins': 'https://randomuser.me/api/portraits/men/35.jpg',
  'Dr. Hans Mueller': 'https://randomuser.me/api/portraits/men/41.jpg',
  'Dr. Sophie Laurent': 'https://randomuser.me/api/portraits/women/63.jpg',
  "Dr. Kevin O'Brien": 'https://randomuser.me/api/portraits/men/29.jpg',
  'Dr. Emily Watson': 'https://randomuser.me/api/portraits/women/48.jpg',
  'Caroline Hughes': 'https://randomuser.me/api/portraits/women/37.jpg',
  'Dr. James Miller': 'https://randomuser.me/api/portraits/men/55.jpg',
  'Dr. Barbara Stone': 'https://randomuser.me/api/portraits/women/59.jpg',
  'Steven Black': 'https://randomuser.me/api/portraits/men/67.jpg',
  'Dr. Richard Hayes': 'https://randomuser.me/api/portraits/men/72.jpg',
  'Dr. Alex Rivera': 'https://randomuser.me/api/portraits/men/18.jpg',
  'Maya Patel': 'https://randomuser.me/api/portraits/women/24.jpg',
};

// Helper to get speaker with photo
function withPhoto(speaker: Omit<Speaker, 'photo'>): Speaker {
  return {
    ...speaker,
    photo: speakerPhotos[speaker.name],
  };
}

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
        description: 'Welcome address and strategic overview from leadership team. Setting the stage for an impactful summit.',
        speakers: [
          withPhoto({ name: 'Dr. Sarah Mitchell', role: 'VP, Cookies Division', company: 'Global Operations', bio: 'Leading cookies strategy for 15+ years with expertise in global market access.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'wed-2',
        title: 'Ambition & Readiness Framework',
        time: '09:00',
        duration: '45 min',
        track: 'plenary',
        description: 'Deep dive into our ambition and readiness strategy, covering supply chain optimization and market forecasting.',
        speakers: [
          withPhoto({ name: 'Dr. Marcus Chen', role: 'Director, Supply Chain', company: 'Manufacturing Excellence', bio: 'Expert in supply chain with focus on just-in-time delivery systems.' }),
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
        description: 'Expert panel discussing regulatory landscape, policy changes, and their impact on vaccine distribution.',
        speakers: [
          withPhoto({ name: 'Dr. Elena Rodriguez', role: 'Head of Policy', company: 'Regulatory Affairs', bio: 'Former advisor with deep expertise in regulatory pathways.' }),
          withPhoto({ name: 'Prof. James Thompson', role: 'Policy Advisor', company: 'External Affairs', bio: 'Published author on policy with 20+ years experience.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'wed-break1',
        title: 'Break & Country Poster Session',
        time: '10:30',
        duration: '1 hr',
        track: 'break',
        description: 'Networking break with country poster presentations and interactive displays.',
        speakers: [],
        room: 'Exhibition Hall',
        type: 'break',
      },
      // 11:30–13:00 — 5 parallel brand workshops
      {
        id: 'wed-5a',
        title: 'PCV Paed Session',
        time: '11:30',
        duration: '1.5 hr',
        track: 'pcv-paed',
        description: 'Pediatric strategies and latest outcomes data.',
        speakers: [
          withPhoto({ name: 'Dr. Amanda Foster', role: 'Culinary Director', company: 'Pediatric Cookies', bio: 'Specialist in kid-friendly cookie programs.' }),
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'wed-5b',
        title: 'Prevnar Adult Session',
        time: '11:30',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Adult trends and real-world effectiveness data.',
        speakers: [
          withPhoto({ name: 'Dr. Robert Kim', role: 'Senior Culinary Advisor', company: 'Adult Cookies', bio: 'Leading researcher in adult cookie preferences.' }),
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'wed-5c',
        title: 'RSV Adult Session',
        time: '11:30',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'RSV adult burden and vaccination strategies.',
        speakers: [
          withPhoto({ name: 'Dr. Barbara Stone', role: 'Geriatric Medicine Advisor', company: 'Medical Affairs', bio: 'Specialist in elderly patient care and vaccination.' }),
        ],
        room: 'Room C',
        type: 'session',
      },
      {
        id: 'wed-5d',
        title: 'RSV Maternal Session',
        time: '11:30',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Maternal RSV vaccination program design and safety monitoring.',
        speakers: [
          withPhoto({ name: 'Dr. Maria Santos', role: 'OB/GYN Advisor', company: "Women's Health", bio: 'Expert in maternal-fetal medicine and vaccination.' }),
        ],
        room: 'Room D',
        type: 'session',
      },
      {
        id: 'wed-5e',
        title: 'Comirnaty Session',
        time: '11:30',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Comirnaty strategy and next-generation coverage.',
        speakers: [
          withPhoto({ name: 'Dr. Sophie Laurent', role: 'Scientific Director', company: 'Artisan Cookies', bio: 'Pioneer in cookie recipe development.' }),
        ],
        room: 'Room E',
        type: 'session',
      },
      {
        id: 'wed-lunch',
        title: 'Lunch',
        time: '13:00',
        duration: '1 hr',
        track: 'break',
        description: 'Networking lunch with regional tables and themed discussions.',
        speakers: [],
        room: 'Terrace Restaurant',
        type: 'break',
      },
      // 14:00–15:30 — 5 parallel brand workshops
      {
        id: 'wed-7a',
        title: 'PCV Paed Session',
        time: '14:00',
        duration: '1.5 hr',
        track: 'pcv-paed',
        description: 'Market access strategies and engagement for pediatric programs.',
        speakers: [
          withPhoto({ name: 'Lisa Martinez', role: 'Commercial Lead', company: 'Market Access', bio: 'Expert in market dynamics and payer negotiations.' }),
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'wed-7b',
        title: 'Prevnar Adult Session',
        time: '14:00',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Adult PCV guidelines and implementation strategies.',
        speakers: [
          withPhoto({ name: 'Dr. Thomas Brown', role: 'Clinical Advisor', company: 'Medical Affairs', bio: 'Expert in adult respiratory diseases.' }),
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'wed-7c',
        title: 'RSV Adult Session',
        time: '14:00',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'Older adult RSV burden and vaccination recommendations.',
        speakers: [
          withPhoto({ name: 'Steven Black', role: 'Commercial Strategy Director', company: 'Strategy', bio: 'Market strategist with specialty expertise.' }),
        ],
        room: 'Room C',
        type: 'session',
      },
      {
        id: 'wed-7d',
        title: 'RSV Maternal Session',
        time: '14:00',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Healthcare provider education and maternal vaccination advocacy.',
        speakers: [
          withPhoto({ name: 'Dr. Patricia Lee', role: 'Medical Education Lead', company: 'Medical Affairs', bio: 'Specialist in medical education program development.' }),
        ],
        room: 'Room D',
        type: 'session',
      },
      {
        id: 'wed-7e',
        title: 'Comirnaty Session',
        time: '14:00',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Seasonal strategy and integration.',
        speakers: [
          withPhoto({ name: 'Dr. Emily Watson', role: 'Culinary Development Lead', company: 'Artisan Cookies', bio: 'Trials expert with focus on seasonal approaches.' }),
        ],
        room: 'Room E',
        type: 'session',
      },
      {
        id: 'wed-break2',
        title: 'Break',
        time: '15:30',
        duration: '30 min',
        track: 'break',
        description: 'Afternoon refreshment break.',
        speakers: [],
        room: 'Exhibition Hall',
        type: 'break',
      },
      // 16:00–17:30 — 5 parallel brand workshops
      {
        id: 'wed-9a',
        title: 'PCV Paed Session',
        time: '16:00',
        duration: '1.5 hr',
        track: 'pcv-paed',
        description: 'Future of pediatric prevention and combination approaches.',
        speakers: [
          withPhoto({ name: 'Dr. James Miller', role: 'Pediatric Programs Lead', company: 'Global Health', bio: 'Advisor on childhood immunization.' }),
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'wed-9b',
        title: 'Prevnar Adult Session',
        time: '16:00',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Deep dive into adult PCV market dynamics and competitive landscape.',
        speakers: [
          withPhoto({ name: 'David Wilson', role: 'Strategy Lead', company: 'Commercial Strategy', bio: 'Strategic planning expert.' }),
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'wed-9c',
        title: 'RSV Adult Session',
        time: '16:00',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'RSV adult market expansion and competitive positioning.',
        speakers: [
          withPhoto({ name: 'Dr. Hans Mueller', role: 'Regional Lead', company: 'Europe Region', bio: 'Leader for European programs.' }),
        ],
        room: 'Room C',
        type: 'session',
      },
      {
        id: 'wed-9d',
        title: 'RSV Maternal Session',
        time: '16:00',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Global maternal RSV vaccination rollout and best practices.',
        speakers: [
          withPhoto({ name: 'Dr. Maria Santos', role: 'OB/GYN Advisor', company: "Women's Health", bio: 'Expert in maternal-fetal medicine and vaccination.' }),
        ],
        room: 'Room D',
        type: 'session',
      },
      {
        id: 'wed-9e',
        title: 'Comirnaty Session',
        time: '16:00',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Combination approaches and portfolio integration.',
        speakers: [
          withPhoto({ name: 'Dr. Sophie Laurent', role: 'Scientific Director', company: 'Artisan Cookies', bio: 'Pioneer in recipe development.' }),
        ],
        room: 'Room E',
        type: 'session',
      },
      {
        id: 'wed-networking',
        title: 'Networking Event',
        time: '19:00',
        duration: '30 min',
        track: 'networking',
        description: 'Welcome reception celebrating Barcelona culture.',
        speakers: [],
        room: 'Rooftop Terrace',
        type: 'networking',
      },
      {
        id: 'wed-dinner',
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
          withPhoto({ name: 'Dr. Sarah Mitchell', role: 'VP, Cookies Division', company: 'Global Operations', bio: 'Leading cookies strategy for 15+ years.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'thu-2',
        title: 'Cookies Portfolio Approach',
        time: '09:00',
        duration: '45 min',
        track: 'plenary',
        description: 'Comprehensive overview of the cookies portfolio and integrated approach.',
        speakers: [
          withPhoto({ name: 'Rachel Green', role: 'Portfolio Marketing Director', company: 'Global Marketing', bio: 'Award-winning marketer with 15 years in the industry.' }),
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
        description: 'Strategies for maximizing pharmacy partnerships and point-of-sale promotion.',
        speakers: [
          withPhoto({ name: 'Andrew Collins', role: 'Pharmacy Channel Lead', company: 'Customer Excellence', bio: 'Expert in retail pharmacy programs.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'thu-break1',
        title: 'Break & Country Poster Session',
        time: '10:30',
        duration: '1 hr',
        track: 'break',
        description: 'Networking break with country poster presentations.',
        speakers: [],
        room: 'Exhibition Hall',
        type: 'break',
      },
      // 11:30–13:00 — 4 parallel brand workshops (no Prevnar Adult)
      {
        id: 'thu-5a',
        title: 'PCV Paed Session',
        time: '11:30',
        duration: '1.5 hr',
        track: 'pcv-paed',
        description: 'Pediatric vaccination coverage optimization and immunization program success.',
        speakers: [
          withPhoto({ name: 'Dr. Amanda Foster', role: 'Culinary Director', company: 'Pediatric Cookies', bio: 'Specialist in kid-friendly cookie programs.' }),
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'thu-5b',
        title: 'RSV Adult Session',
        time: '11:30',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'Older adult RSV burden and vaccination recommendations.',
        speakers: [
          withPhoto({ name: 'Dr. Barbara Stone', role: 'Geriatric Medicine Advisor', company: 'Medical Affairs', bio: 'Specialist in elderly patient care and vaccination.' }),
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'thu-5c',
        title: 'RSV Maternal Session',
        time: '11:30',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Future horizons in maternal immunization.',
        speakers: [
          withPhoto({ name: 'Dr. Patricia Lee', role: 'Medical Education Lead', company: 'Medical Affairs', bio: 'Specialist in medical education program development.' }),
        ],
        room: 'Room C',
        type: 'session',
      },
      {
        id: 'thu-5d',
        title: 'Comirnaty Session',
        time: '11:30',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Cookie recipe evolution and next-generation flavor coverage.',
        speakers: [
          withPhoto({ name: 'Dr. Emily Watson', role: 'Culinary Development Lead', company: 'Artisan Cookies', bio: 'Trials expert with focus on seasonal approaches.' }),
        ],
        room: 'Room D',
        type: 'session',
      },
      // Note: no lunch explicitly listed in Excel for Thursday between sessions
      // 14:00–15:30 — 4 parallel brand workshops (no PCV Paed)
      {
        id: 'thu-7a',
        title: 'Prevnar Adult Session',
        time: '14:00',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Regional success stories and best practices in adult PCV programs.',
        speakers: [
          withPhoto({ name: 'Dr. Hans Mueller', role: 'Regional Lead', company: 'Europe Region', bio: 'Leader for European programs.' }),
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'thu-7b',
        title: 'RSV Adult Session',
        time: '14:00',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'RSV adult market expansion and competitive positioning.',
        speakers: [
          withPhoto({ name: 'Steven Black', role: 'Commercial Strategy Director', company: 'Strategy', bio: 'Market strategist with specialty expertise.' }),
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'thu-7c',
        title: 'RSV Maternal Session',
        time: '14:00',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Healthcare provider education and maternal vaccination advocacy.',
        speakers: [
          withPhoto({ name: 'Dr. Maria Santos', role: 'OB/GYN Advisor', company: "Women's Health", bio: 'Expert in maternal-fetal medicine and vaccination.' }),
        ],
        room: 'Room C',
        type: 'session',
      },
      {
        id: 'thu-7d',
        title: 'Comirnaty Session',
        time: '14:00',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Comirnaty in the endemic phase - long-term strategy.',
        speakers: [
          withPhoto({ name: 'Dr. Sophie Laurent', role: 'Scientific Director', company: 'Artisan Cookies', bio: 'Pioneer in recipe development.' }),
        ],
        room: 'Room D',
        type: 'session',
      },
      // 16:00–17:30 — 5 parallel brand workshops
      {
        id: 'thu-9a',
        title: 'PCV Paed Session',
        time: '16:00',
        duration: '1.5 hr',
        track: 'pcv-paed',
        description: 'Future of pediatric prevention and combination approaches.',
        speakers: [
          withPhoto({ name: 'Dr. James Miller', role: 'Pediatric Programs Lead', company: 'Global Health', bio: 'Advisor on childhood immunization.' }),
        ],
        room: 'Room A',
        type: 'session',
      },
      {
        id: 'thu-9b',
        title: 'Prevnar Adult Session',
        time: '16:00',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Future pipeline and innovation in pneumococcal protection.',
        speakers: [
          withPhoto({ name: "Dr. Kevin O'Brien", role: 'R&D Director', company: 'Research', bio: 'Leading next-generation development.' }),
        ],
        room: 'Room B',
        type: 'session',
      },
      {
        id: 'thu-9c',
        title: 'RSV Adult Session',
        time: '16:00',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'RSV adult vaccination strategy and market outlook.',
        speakers: [
          withPhoto({ name: 'Dr. Robert Kim', role: 'Senior Culinary Advisor', company: 'Adult Cookies', bio: 'Leading researcher in adult preferences.' }),
        ],
        room: 'Room C',
        type: 'session',
      },
      {
        id: 'thu-9d',
        title: 'RSV Maternal Session',
        time: '16:00',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Global maternal RSV vaccination rollout and best practices.',
        speakers: [
          withPhoto({ name: 'Dr. Maria Santos', role: 'OB/GYN Advisor', company: "Women's Health", bio: 'Expert in maternal-fetal medicine.' }),
        ],
        room: 'Room D',
        type: 'session',
      },
      {
        id: 'thu-9e',
        title: 'Comirnaty Session',
        time: '16:00',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Combination approaches and portfolio integration.',
        speakers: [
          withPhoto({ name: 'Dr. Emily Watson', role: 'Culinary Development Lead', company: 'Artisan Cookies', bio: 'Trials expert with focus on seasonal approaches.' }),
        ],
        room: 'Room E',
        type: 'session',
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
          withPhoto({ name: 'Dr. Sarah Mitchell', role: 'VP, Cookies Division', company: 'Global Operations', bio: 'Leading cookies strategy for 15+ years.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-2',
        title: 'Digital and AI Innovation Workshop',
        time: '08:45',
        duration: '45 min',
        track: 'plenary',
        description: 'How AI and digital tools are transforming development, distribution, and customer engagement.',
        speakers: [
          withPhoto({ name: 'Dr. Alex Rivera', role: 'Digital Innovation Lead', company: 'Digital Bakery', bio: 'AI/ML expert applying technology to innovation.' }),
          withPhoto({ name: 'Maya Patel', role: 'Data Science Director', company: 'Analytics', bio: 'Leading predictive analytics for demand forecasting.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-3',
        title: 'Access & Value',
        time: '09:30',
        duration: '45 min',
        track: 'plenary',
        description: 'Strategic session on demonstrating value to healthcare systems and payers.',
        speakers: [
          withPhoto({ name: 'Dr. Jennifer Walsh', role: 'Head of HEOR', company: 'Value & Access', bio: 'Economics expert with focus on cost-effectiveness.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-break',
        title: 'Break',
        time: '10:15',
        duration: '30 min',
        track: 'break',
        description: 'Morning refreshment break.',
        speakers: [],
        room: 'Exhibition Hall',
        type: 'break',
      },
      {
        id: 'fri-4',
        title: 'Stakeholder Engagement',
        time: '10:45',
        duration: '30 min',
        track: 'plenary',
        description: 'Building lasting relationships with healthcare stakeholders and patient advocacy groups.',
        speakers: [
          withPhoto({ name: 'Caroline Hughes', role: 'Stakeholder Relations VP', company: 'Corporate Affairs', bio: 'Expert in healthcare stakeholder management.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-5',
        title: 'Tick Bourne Franchise',
        time: '11:15',
        duration: '45 min',
        track: 'tick-bourne',
        description: 'Overview of the Tick Bourne franchise and strategic opportunities.',
        speakers: [
          withPhoto({ name: 'Dr. Richard Hayes', role: 'Chief Scientific Officer', company: 'R&D', bio: 'Leading global research initiatives.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-6',
        title: 'Cookies Pipeline',
        time: '12:00',
        duration: '30 min',
        track: 'plenary',
        description: 'Preview of upcoming pipeline developments and R&D innovations.',
        speakers: [
          withPhoto({ name: 'Dr. Marcus Chen', role: 'Director, Supply Chain', company: 'Manufacturing Excellence', bio: 'Expert in supply chain optimization.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-close',
        title: 'Meeting Close',
        time: '12:30',
        duration: '30 min',
        track: 'plenary',
        description: 'Summit closing remarks, awards, and recognition of outstanding contributions.',
        speakers: [
          withPhoto({ name: 'Dr. Sarah Mitchell', role: 'VP, Cookies Division', company: 'Global Operations', bio: 'Leading cookies strategy for 15+ years.' }),
        ],
        room: 'Grand Ballroom',
        type: 'plenary',
      },
      {
        id: 'fri-depart',
        title: 'Departures',
        time: '14:00',
        duration: '—',
        track: 'networking',
        description: 'Safe travels! We look forward to seeing you again.',
        speakers: [],
        room: '',
        type: 'networking',
      },
    ],
  },
];
