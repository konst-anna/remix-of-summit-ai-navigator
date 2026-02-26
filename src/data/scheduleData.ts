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
  'rsv-adult': 'Abrysvo Adult',
  'rsv-maternal': 'Abrysvo Maternal',
  'plenary': 'Plenary',
  'break': 'Break',
  'networking': 'Networking',
  'tick-bourne': 'Tick Bourne',
};

// Helper to create a speaker object
function speaker(name: string, role = '', company = '', bio = ''): Speaker {
  return { name, role, company, bio };
}

export const scheduleData: DaySchedule[] = [
  // ===================== DAY 1 — Wednesday, March 25 =====================
  {
    date: 'March 25, 2026',
    dayName: 'Wednesday',
    sessions: [
      // ---- PLENARY ----
      {
        id: 'wed-1',
        title: 'Meeting Intro & Leaders',
        time: '08:30',
        duration: '30 min',
        track: 'plenary',
        description: 'Welcome address and strategic overview from leadership team.',
        speakers: [],
        room: 'Living A+B, floor -2',
        type: 'plenary',
      },
      {
        id: 'wed-2',
        title: 'PROTECT Debut',
        time: '09:00',
        duration: '45 min',
        track: 'plenary',
        description: 'Introducing the PROTECT initiative.',
        speakers: [],
        room: 'Living A+B, floor -2',
        type: 'plenary',
      },
      {
        id: 'wed-3',
        title: 'Policy Panel: Current Vaccines Environment',
        time: '09:45',
        duration: '45 min',
        track: 'plenary',
        description: 'Expert panel discussing the current vaccines environment, regulatory landscape, and policy changes.',
        speakers: [
          speaker('Jenn'),
          speaker('Marie'),
          speaker('Shanaya'),
          speaker('Stefy'),
          speaker('Nico'),
          speaker('Donna'),
        ],
        room: 'Living A+B, floor -2',
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
        type: 'break',
      },

      // ---- 11:30–13:00 — Parallel brand workshops ----
      {
        id: 'wed-5a',
        title: 'PCV KOL Engagement — A Critical Success Factor for Commercial Readiness, Advocacy and Early Market Shaping',
        time: '11:30',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Exploring the role of KOL engagement as a critical success factor for commercial readiness, advocacy and early market shaping.',
        speakers: [speaker('Martina Bruno')],
        type: 'session',
      },
      {
        id: 'wed-5b',
        title: 'Winning Where It Matters: Strategy & Differentiation for ABRYSVO Adult',
        time: '11:30',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'Strategic positioning and differentiation approach for ABRYSVO Adult.',
        speakers: [],
        type: 'session',
      },
      {
        id: 'wed-5c',
        title: 'Narrative Soundcheck: Harnessing the Power of RWE in Our Brand Narrative',
        time: '11:30',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'How real-world evidence powers the Abrysvo Maternal brand narrative.',
        speakers: [speaker('Melanie Ceber')],
        type: 'session',
      },
      {
        id: 'wed-5d',
        title: 'Celebrating 5 Years of Success · Executional Excellence Framework · Commercial & Launch Excellence',
        time: '11:30',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Celebrate 5 years of COMIRNATY. Present the Launch Execution Framework that translates global strategy into best-in-class local execution. 3-4 markets to present commercialization best practices.',
        speakers: [
          speaker('Aylin Tuzel'),
          speaker('Amy Lewis'),
          speaker('Kachiko Hayashi'),
          speaker('Julia Mahieu'),
          speaker('Shahida Rasul'),
          speaker('Anton Pronin'),
        ],
        type: 'session',
      },
      {
        id: 'wed-lunch',
        title: 'Lunch',
        time: '13:00',
        duration: '1 hr',
        track: 'break',
        description: 'Networking lunch.',
        speakers: [],
        type: 'break',
      },

      // ---- 14:00–15:30 — Parallel brand workshops ----
      {
        id: 'wed-7a',
        title: 'Prevenar 20 HCP Competitive Readiness — Win Drivers & Priority Actions',
        time: '14:00',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Competitive readiness strategies, win drivers, and priority actions for Prevenar 20.',
        speakers: [speaker('Anne Glasel')],
        type: 'session',
      },
      {
        id: 'wed-7b',
        title: 'ABRYSVO Adult Game On: RSV Rivalry Run',
        time: '14:00',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'Competitive strategy and positioning for ABRYSVO Adult in the RSV landscape.',
        speakers: [],
        type: 'session',
      },
      {
        id: 'wed-7c',
        title: 'Access That Wins: Competing Effectively in a Shifting Market',
        time: '14:00',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Market access strategies for competing effectively in a shifting maternal RSV landscape.',
        speakers: [speaker('Lucia Berrocal'), speaker('Vanessa Briceno')],
        type: 'session',
      },
      {
        id: 'wed-7d',
        title: 'Amplifying BoD Across Stakeholders: KOL Perspective · Reasons to Believe · Go to Market Planning',
        time: '14:00',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Engage colleagues on the ongoing burden of COVID-19 and available tools to develop impactful Burden of Disease execution plans, increasing support for patients at risk.',
        speakers: [speaker('Jonas Schnittert'), speaker('Shahida Rasul')],
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
        type: 'break',
      },

      // ---- 16:00–17:30 — Parallel brand workshops ----
      {
        id: 'wed-9a',
        title: 'Maximizing Prevenar 20 Adult Uptake In and Out of the Season',
        time: '16:00',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Strategies for maximizing Prevenar 20 adult uptake both during and outside the traditional season.',
        speakers: [speaker('Dorothee Bottemanne')],
        type: 'session',
      },
      {
        id: 'wed-9b',
        title: 'ABRYSVO Adult: The Payer Power Play',
        time: '16:00',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'Payer strategies and value demonstrations for ABRYSVO Adult.',
        speakers: [],
        type: 'session',
      },
      {
        id: 'wed-9c',
        title: 'Execution That Delivers: Scaling the Abrysvo MI Platform Across Markets',
        time: '16:00',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Scaling the Abrysvo Maternal Immunization platform across markets for optimal execution.',
        speakers: [speaker('Lucia Berrocal')],
        type: 'session',
      },
      {
        id: 'wed-9d',
        title: 'Executional Excellence In Action · Pediatric Dose Harmonization: What is the Plan?',
        time: '16:00',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Collect market feedback on Executional Excellence tracker and market baseline execution levels. Clarify clinical rationale, operational steps, and unified messaging for the pediatric dose harmonization strategy.',
        speakers: [
          speaker('Kachiko Hayashi'),
          speaker('Julia Mahieu'),
          speaker('Veneta Donova'),
        ],
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
        type: 'networking',
      },
    ],
  },

  // ===================== DAY 2 — Thursday, March 26 =====================
  {
    date: 'March 26, 2026',
    dayName: 'Thursday',
    sessions: [
      // ---- PLENARY ----
      {
        id: 'thu-1',
        title: 'Meeting Intro & Leaders',
        time: '08:30',
        duration: '30 min',
        track: 'plenary',
        description: 'Day 2 kickoff with leadership insights and agenda overview.',
        speakers: [],
        room: 'Living A+B, floor -2',
        type: 'plenary',
      },
      {
        id: 'thu-2',
        title: 'Unlocking Opportunities with an Adult Respiratory Vaccine Portfolio Approach',
        time: '09:00',
        duration: '1 hr',
        track: 'plenary',
        description: 'Comprehensive overview of the adult respiratory vaccine portfolio and integrated approach to unlocking opportunities.',
        speakers: [
          speaker('Emma'),
          speaker('Marcy'),
          speaker('Virginia'),
          speaker('Shree'),
        ],
        room: 'Living A+B, floor -2',
        type: 'plenary',
      },
      {
        id: 'thu-3',
        title: 'Igniting Vaccination in the Pharmacy Channel',
        time: '10:00',
        duration: '30 min',
        track: 'plenary',
        description: 'Strategies for maximizing pharmacy channel partnerships and activating vaccination at point-of-care.',
        speakers: [speaker('Marcy'), speaker('Shree')],
        room: 'Living A+B, floor -2',
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
        type: 'break',
      },

      // ---- 11:30–13:00 — Parallel brand workshops ----
      {
        id: 'thu-5a',
        title: 'Prevenar 20 Era in Pediatric Pneumococcal Vaccination — The Cornerstone of Long-Term Success',
        time: '11:30',
        duration: '1.5 hr',
        track: 'pcv-paed',
        description: 'Exploring the Prevenar 20 era in pediatric pneumococcal vaccination as the cornerstone of long-term success.',
        speakers: [speaker('Sisi Ni')],
        type: 'session',
      },
      {
        id: 'thu-5b',
        title: 'ABRYSVO Adult RWE Impact Accelerator: From Data to Key Differentiators',
        time: '11:30',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'Leveraging real-world evidence as an impact accelerator, transforming data into key differentiators for ABRYSVO Adult.',
        speakers: [speaker('Sheelu Samuel')],
        type: 'session',
      },
      {
        id: 'thu-5c',
        title: 'Unlocking Sources of Growth Workshop Pt 1',
        time: '11:30',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Workshop Part 1: Identifying and unlocking sources of growth for Abrysvo Maternal.',
        speakers: [],
        type: 'session',
      },
      {
        id: 'thu-5d',
        title: 'The Competitive Landscape · Deploying an Enhanced 2026 Strategy',
        time: '11:30',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Main competitor deep dive and competitive threats. Winning Edge Tactics Spotlight and group ideation session: integrating WE tactics in 2026 plans with market feedback on focus areas and must wins.',
        speakers: [speaker('Paul Racioppi')],
        type: 'session',
      },
      {
        id: 'thu-lunch',
        title: 'Lunch',
        time: '13:00',
        duration: '1 hr',
        track: 'break',
        description: 'Networking lunch.',
        speakers: [],
        type: 'break',
      },

      // ---- 14:00–15:30 — Parallel brand workshops ----
      {
        id: 'thu-7a',
        title: 'Reinforcing Prevenar Leadership in Adult Pneumococcal Vaccination',
        time: '14:00',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Strategies for reinforcing Prevenar leadership in adult pneumococcal vaccination.',
        speakers: [speaker('Beth Williams')],
        type: 'session',
      },
      {
        id: 'thu-7b',
        title: 'The ABRYSVO Adult Advantage: Elevating the Value for HCPs',
        time: '14:00',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'Elevating the ABRYSVO Adult value proposition for healthcare professionals.',
        speakers: [speaker('Sheelu Samuel')],
        type: 'session',
      },
      {
        id: 'thu-7c',
        title: 'Unlocking Sources of Growth Workshop Pt 2',
        time: '14:00',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Workshop Part 2: Continuing to identify and unlock sources of growth for Abrysvo Maternal.',
        speakers: [],
        type: 'session',
      },
      {
        id: 'thu-7d',
        title: 'Building the Bold New Narrative',
        time: '14:00',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Overview of Winning Edge positioning, messaging, and materials.',
        speakers: [speaker('Sarah Cannon'), speaker('Virginia Wall')],
        type: 'session',
      },
      {
        id: 'thu-break2',
        title: 'Break',
        time: '15:30',
        duration: '30 min',
        track: 'break',
        description: 'Afternoon refreshment break.',
        speakers: [],
        type: 'break',
      },

      // ---- 16:00–17:30 — Parallel brand workshops ----
      {
        id: 'thu-9a',
        title: 'Future PCV Landscape',
        time: '16:00',
        duration: '1.5 hr',
        track: 'pcv-adult',
        description: 'Exploring the future PCV landscape and strategic opportunities.',
        speakers: [speaker('Andrew Harvey')],
        type: 'session',
      },
      {
        id: 'thu-9b',
        title: 'Blue Reasons, Bold Impact: The Next Chapter of the Adult RSV Consumer Campaign',
        time: '16:00',
        duration: '1.5 hr',
        track: 'rsv-adult',
        description: 'The next chapter of the adult RSV consumer campaign — bold impact through brand storytelling.',
        speakers: [speaker('Sheelu Samuel')],
        type: 'session',
      },
      {
        id: 'thu-9c',
        title: 'Unlocking Sources of Growth Workshop Pt 3',
        time: '16:00',
        duration: '1.5 hr',
        track: 'rsv-maternal',
        description: 'Workshop Part 3: Finalizing sources of growth strategies for Abrysvo Maternal.',
        speakers: [],
        type: 'session',
      },
      {
        id: 'thu-9d',
        title: 'Driving COVID Value-Based Pricing · Winning Edge: Execution in Action · Wrap-Up',
        time: '16:00',
        duration: '1.5 hr',
        track: 'comirnaty',
        description: 'Relay importance and rationale for maintaining value of our brand in a post-APA pricing environment. Ideation session for market stakeholder engagement anchored to WE deliverables with group discussion and feedback gathering. Key takeaways and action steps.',
        speakers: [
          speaker('Charlotte Leversha'),
          speaker('Paul Racioppi'),
          speaker('Kachiko Hayashi'),
          speaker('Aylin Tuzel'),
          speaker('Amy Lewis'),
        ],
        type: 'session',
      },
    ],
  },

  // ===================== DAY 3 — Friday, March 27 =====================
  {
    date: 'March 27, 2026',
    dayName: 'Friday',
    sessions: [
      {
        id: 'fri-1',
        title: 'Meeting Intro & Leaders',
        time: '08:30',
        duration: '15 min',
        track: 'plenary',
        description: 'Final day kickoff and agenda overview.',
        speakers: [],
        room: 'Living A+B, floor -2',
        type: 'plenary',
      },
      {
        id: 'fri-2',
        title: 'AI in Practice: Real-World Innovation at Pfizer',
        time: '08:45',
        duration: '1 hr 15 min',
        track: 'plenary',
        description: 'How AI and digital tools are transforming development, distribution, and customer engagement with real-world examples.',
        speakers: [speaker('Mostafa'), speaker('Sergul')],
        room: 'Living A+B, floor -2',
        type: 'plenary',
      },
      {
        id: 'fri-break',
        title: 'Break',
        time: '10:00',
        duration: '30 min',
        track: 'break',
        description: 'Morning refreshment break.',
        speakers: [],
        type: 'break',
      },
      {
        id: 'fri-3',
        title: 'Stakeholder Engagement',
        time: '10:30',
        duration: '45 min',
        track: 'plenary',
        description: 'Building lasting relationships with healthcare stakeholders and patient advocacy groups.',
        speakers: [speaker('Benita')],
        room: 'Living A+B, floor -2',
        type: 'plenary',
      },
      {
        id: 'fri-4',
        title: 'Tick Bourne Franchise (TBC)',
        time: '11:30',
        duration: '45 min',
        track: 'tick-bourne',
        description: 'Overview of the Tick Bourne franchise and strategic opportunities.',
        speakers: [],
        room: 'Living A+B, floor -2',
        type: 'session',
      },
      {
        id: 'fri-5',
        title: 'Vaccines Pipeline',
        time: '12:00',
        duration: '1 hr',
        track: 'plenary',
        description: 'Preview of upcoming pipeline developments and R&D innovations.',
        speakers: [
          speaker('Marc Dreiner'),
          speaker('Dan Bakken'),
          speaker('Jason Klein'),
        ],
        room: 'Living A+B, floor -2',
        type: 'plenary',
      },
      {
        id: 'fri-close',
        title: 'Meeting Close',
        time: '13:00',
        duration: '30 min',
        track: 'plenary',
        description: 'Summit closing remarks, key takeaways, and next steps.',
        speakers: [],
        room: 'Living A+B, floor -2',
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
        type: 'networking',
      },
    ],
  },
];
