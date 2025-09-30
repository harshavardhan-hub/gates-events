import { EVENT_CATEGORIES, SITE_CONFIG, ASSETS } from '../utils/constants.js';

// Sample Events Data for Gates Events 2K25
export const eventsData = [
  {
    id: 1,
    name: 'Hackathon 2K25',
    shortDescription: '24-hour coding marathon with cutting-edge challenges and innovation.',
    fullDescription: `Join the ultimate 24-hour hackathon where innovation meets technology! Gates Hackathon 2K25 brings together the brightest minds to solve real-world problems through code. Participants will work in teams of up to 4 members to develop creative solutions using any technology stack of their choice.

    This year's themes include AI/ML, Web Development, Mobile Apps, IoT, Blockchain, and Social Impact. With mentorship from industry experts, exciting prizes, and networking opportunities with tech leaders, this hackathon promises to be an unforgettable experience.

    What to expect:
    • 24 hours of non-stop coding
    • Industry mentors and guidance
    • Free food, beverages, and swag
    • Prizes worth ₹2,00,000
    • Networking with tech professionals
    • Certificate of participation`,
    category: EVENT_CATEGORIES.TECHNICAL,
    date: '2025-03-15',
    time: '09:00 AM - 09:00 AM (+1)',
    venue: 'Main Computer Lab & Innovation Center',
    organizers: ['CSE Department', 'Tech Club', 'Innovation Cell'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    registrationLink: SITE_CONFIG.links.registrationForm,
    featured: true,
  },
  {
    id: 2,
    name: 'Robotics Expo',
    shortDescription: 'Showcase of innovative robots with hands-on workshops and competitions.',
    fullDescription: `Explore the fascinating world of robotics at our annual Robotics Expo! This event features an exhibition of student-built robots, interactive workshops, and exciting competitions. From line-following bots to advanced humanoid demonstrations, witness the future of automation and artificial intelligence.

    The expo includes:
    • Robot exhibition and demonstrations
    • Hands-on workshops for beginners
    • Robot racing competitions
    • Drone flying demonstrations
    • Industry expert talks
    • Live robot battles

    Whether you're a beginner interested in robotics or an experienced builder, this expo offers something for everyone. Learn about Arduino, Raspberry Pi, sensors, and mechanical design while interacting with fellow robotics enthusiasts.`,
    category: EVENT_CATEGORIES.TECHNICAL,
    date: '2025-03-20',
    time: '10:00 AM - 05:00 PM',
    venue: 'Engineering Workshop & Main Auditorium',
    organizers: ['ECE Department', 'Robotics Club', 'Makers Lab'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    registrationLink: SITE_CONFIG.links.registrationForm,
    featured: false,
  },
  {
    id: 3,
    name: 'Coding Sprint',
    shortDescription: 'Intense algorithmic challenges and competitive programming marathon.',
    fullDescription: `Test your programming skills in the most challenging coding competition of the year! Coding Sprint features multiple rounds of algorithmic problems, data structures challenges, and competitive programming scenarios designed to push your limits.

    Competition format:
    • Online preliminary round (150 participants selected)
    • Semi-final coding challenge (50 participants)
    • Final showdown (Top 10 coders)
    • Live coding battle for the championship

    Topics covered include dynamic programming, graph algorithms, tree traversals, number theory, and optimization problems. Prizes include cash rewards, internship opportunities, and recognition certificates.

    Perfect for students preparing for technical interviews at top tech companies like Google, Microsoft, Amazon, and startups.`,
    category: EVENT_CATEGORIES.TECHNICAL,
    date: '2025-03-25',
    time: '02:00 PM - 08:00 PM',
    venue: 'Programming Lab & Online Platform',
    organizers: ['CSE Department', 'Coding Club', 'ACM Chapter'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    registrationLink: SITE_CONFIG.links.registrationForm,
    featured: false,
  },
  {
    id: 4,
    name: 'Treasure Hunt',
    shortDescription: 'Campus-wide adventure with puzzles, clues, and exciting discoveries.',
    fullDescription: `Embark on the ultimate campus adventure! Our treasure hunt combines physical exploration with mental challenges, taking participants on a journey across the entire GATES campus. Solve riddles, decode messages, and follow clues to discover hidden treasures.

    Hunt highlights:
    • Campus-wide exploration adventure
    • Mind-bending puzzles and riddles
    • Team collaboration challenges
    • Hidden clues in historical campus locations
    • GPS-based navigation tasks
    • Photo challenges and creative tasks

    Teams of 3-5 members will race against time to complete challenges that test not only intelligence but also teamwork, creativity, and campus knowledge. The winning team receives exciting prizes and the glory of being ultimate treasure hunters!

    This event promotes campus familiarity, team building, and problem-solving skills while ensuring tons of fun and excitement.`,
    category: EVENT_CATEGORIES.NON_TECHNICAL,
    date: '2025-04-02',
    time: '09:00 AM - 03:00 PM',
    venue: 'Entire GATES Campus',
    organizers: ['Student Council', 'Adventure Club', 'Cultural Committee'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    registrationLink: SITE_CONFIG.links.registrationForm,
    featured: true,
  },
  {
    id: 5,
    name: 'Cultural Fest',
    shortDescription: 'Spectacular showcase of dance, music, fashion, and artistic talent.',
    fullDescription: `Celebrate the vibrant cultural diversity and artistic talents of GATES! Our annual Cultural Fest is a three-day extravaganza featuring dance performances, musical concerts, fashion shows, and artistic exhibitions that showcase the creative spirit of our student community.

    Festival highlights:
    • Classical and contemporary dance performances
    • Solo and group singing competitions
    • Fashion show with designer themes
    • Art and craft exhibitions
    • Drama and theater performances
    • Celebrity guest performances
    • Food festival with regional cuisines

    Students from all departments participate in various competitions including:
    - Solo dance (Classical, Western, Folk)
    - Group dance choreography
    - Singing (Indian Classical, Western, Bollywood)
    - Fashion walk and designer challenges
    - Drama and mono-acting
    - Art competitions (Painting, Sketching, Digital Art)

    The festival concludes with a grand finale featuring professional artists and a cultural night that celebrates the rich heritage of our region.`,
    category: EVENT_CATEGORIES.NON_TECHNICAL,
    date: '2025-04-08',
    time: '06:00 PM - 10:00 PM',
    venue: 'Main Auditorium & Cultural Complex',
    organizers: ['Cultural Committee', 'Dance Club', 'Music Society'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    registrationLink: SITE_CONFIG.links.registrationForm,
    featured: true,
  },
  {
    id: 6,
    name: 'Quizmania',
    shortDescription: 'Inter-college quiz championship testing knowledge across all domains.',
    fullDescription: `Battle of the brains! Quizmania is the most prestigious inter-college quiz competition that tests knowledge across multiple domains including science, technology, current affairs, sports, entertainment, history, and general awareness.

    Competition structure:
    • Preliminary written round (All teams)
    • Semi-final buzzer round (Top 12 teams)
    • Final championship (Top 4 teams)
    • Special lightning rounds

    Quiz categories include:
    - Science and Technology
    - Current Affairs and Politics
    - Sports and Entertainment
    - History and Geography
    - Business and Economics
    - Literature and Arts

    Teams of 2-3 members representing different colleges will compete for the coveted Quizmania trophy. The event features experienced quizmasters, multimedia questions, and interactive audience rounds.

    Prizes include cash rewards, certificates, and the opportunity to represent GATES in national-level quiz competitions.`,
    category: EVENT_CATEGORIES.NON_TECHNICAL,
    date: '2025-04-12',
    time: '02:00 PM - 06:00 PM',
    venue: 'Main Auditorium',
    organizers: ['Quiz Club', 'Library Committee', 'Academic Affairs'],
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=800&q=80',
    registrationLink: SITE_CONFIG.links.registrationForm,
    featured: false,
  },
  {
    id: 7,
    name: 'Paper Presentation',
    shortDescription: 'Research showcase and innovation symposium for technical excellence.',
    fullDescription: `Present your research and innovative ideas at our annual technical paper presentation symposium! This prestigious event provides a platform for students and faculty to showcase cutting-edge research, innovative projects, and technical solutions to real-world problems.

    Presentation categories:
    • Computer Science and AI
    • Electronics and Communication
    • Mechanical and Civil Engineering
    • Renewable Energy and Sustainability
    • Biomedical Engineering
    • Management and Economics

    What we're looking for:
    - Original research work
    - Innovative problem-solving approaches
    - Practical applications and implementations
    - Future scope and impact analysis
    - Clear presentation and communication skills

    The event features:
    • Technical paper presentations (20 minutes each)
    • Poster presentations and exhibitions
    • Industry expert panel discussions
    • Networking sessions with researchers
    • Publication opportunities in college journal
    • Best paper awards and recognition

    Winners get opportunities for journal publications, conference presentations, and internships with partner research organizations.`,
    category: EVENT_CATEGORIES.TECHNICAL,
    date: '2025-04-18',
    time: '09:00 AM - 05:00 PM',
    venue: 'Conference Hall & Seminar Rooms',
    organizers: ['Research Cell', 'All Departments', 'Faculty Council'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
    registrationLink: SITE_CONFIG.links.registrationForm,
    featured: false,
  },
  {
    id: 8,
    name: 'Art & Photography',
    shortDescription: 'Creative exhibition and contest celebrating visual arts and photography.',
    fullDescription: `Capture moments, create memories, and express creativity! Our Art & Photography exhibition is a celebration of visual arts that brings together budding artists, photographers, and creative enthusiasts to showcase their talent and artistic vision.

    Competition categories:
    • Digital Photography (Portrait, Landscape, Street, Abstract)
    • Traditional Art (Oil, Watercolor, Acrylic, Sketching)
    • Digital Art and Graphic Design
    • Mixed Media and Experimental Art
    • Mobile Photography
    • Art Installation and Sculpture

    Exhibition features:
    - Student and faculty artwork displays
    - Photography workshops by professionals
    - Live art creation demonstrations
    - Digital art tutorials and software training
    - Art supply vendor stalls
    - Interactive art installations

    Special workshops include:
    • Portrait photography techniques
    • Landscape composition and lighting
    • Digital art software training (Photoshop, Illustrator)
    • Traditional painting techniques
    • Art history and appreciation sessions

    Winning artworks will be featured in the college magazine, website gallery, and permanent exhibition hall. Cash prizes and art supplies await the winners!`,
    category: EVENT_CATEGORIES.NON_TECHNICAL,
    date: '2025-04-22',
    time: '10:00 AM - 06:00 PM',
    venue: 'Art Gallery & Exhibition Hall',
    organizers: ['Fine Arts Club', 'Photography Society', 'Design Team'],
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80',
    registrationLink: SITE_CONFIG.links.registrationForm,
    featured: false,
  }
];

// Helper functions
export const getFeaturedEvents = () => eventsData.filter(event => event.featured);

export const getEventsByCategory = (category) => {
  if (category === EVENT_CATEGORIES.ALL) return eventsData;
  return eventsData.filter(event => event.category === category);
};

export const getEventById = (id) => eventsData.find(event => event.id === parseInt(id));

export const getUpcomingEvents = (limit = 3) => {
  const today = new Date();
  return eventsData
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit);
};

export const getTechnicalEvents = () => getEventsByCategory(EVENT_CATEGORIES.TECHNICAL);

export const getNonTechnicalEvents = () => getEventsByCategory(EVENT_CATEGORIES.NON_TECHNICAL);
