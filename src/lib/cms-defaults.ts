import type {
  ProgramTopic,
  FaqItem,
  TestimonialItem,
  LegalPage,
  SiteSettings,
  InquiryLead,
} from "@/types/cms";

export const DEFAULT_PROGRAMS: ProgramTopic[] = [
  {
    id: "prog-1",
    title: "Choices & Consequences",
    slug: "choices-and-consequences",
    tagline: "The Ripple Effect of Daily Decisions",
    description:
      "A high-energy, lived-experience keynote dismantling the illusion of invincibility. Brett walks students through the real mechanics of peer influence, impulse decisions, and the enduring ripple effects that one choice can set into motion.",
    target_audience: "Middle & High School (Grades 6–12)",
    bullet_points: [
      "The 10-second pause: breaking reaction culture before consequence strikes",
      "Separating temporary loyalty to peer groups from lifetime consequences",
      "Rebuilding identity and trust after major missteps or disciplinary actions",
    ],
    sort_order: 1,
    is_active: true,
  },
  {
    id: "prog-2",
    title: "Behind the Mask",
    slug: "behind-the-mask",
    tagline: "Vulnerability as Armor in Youth Culture",
    description:
      "Youth today carry invisible pressures — social comparison, trauma, and the exhaustion of performing for peers. This keynote pierces the armor, encouraging authentic accountability and destigmatizing asking for help.",
    target_audience: "High School & Alternative Education",
    bullet_points: [
      "Unpacking the social masks young people wear to survive school culture",
      "Navigating silent mental health battles without turning to self-destructive coping",
      "Building genuine peer support networks that replace performative cruelty",
    ],
    sort_order: 2,
    is_active: true,
  },
  {
    id: "prog-3",
    title: "Resilient Minds, Real Futures",
    slug: "resilient-minds-real-futures",
    tagline: "Practical Mental Fortitude for Adversity",
    description:
      "Adversity is not an excuse to forfeit your future. In this intensive session, Brett provides concrete frameworks for mental resilience, emotional regulation under stress, and actionable goal-setting for students facing systemic or familial hardship.",
    target_audience: "At-Risk Youth, Alternative Ed & Student Leaders",
    bullet_points: [
      "Transforming lived trauma and adversity into unshakeable personal purpose",
      "Emotional regulation tactics when fight-or-flight triggers in classrooms or home",
      "Drafting a personal blueprint: grades, community, and mentorship navigation",
    ],
    sort_order: 3,
    is_active: true,
  },
];

export const DEFAULT_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What grade levels are Brett Lasko's keynotes best suited for?",
    answer:
      "Brett speaks primarily to Middle Schools (Grades 6–8), High Schools (Grades 9–12), Alternative Education Centers, and Juvenile Intervention programs. Every keynote is customized to the specific developmental stage, challenges, and climate of your student body.",
    category: "General",
    sort_order: 1,
    is_published: true,
  },
  {
    id: "faq-2",
    question: "How far in advance should our school reach out to reserve a date?",
    answer:
      "Most middle and high schools book 2 to 6 months in advance, especially for Fall kickoff assemblies (August–October), Red Ribbon Week (October), Mental Health Awareness Month (May), and pre-prom or graduation assemblies (April–May). However, we accommodate urgent intervention requests whenever tour dates permit.",
    category: "Booking & Schedule",
    sort_order: 2,
    is_published: true,
  },
  {
    id: "faq-3",
    question: "Does Brett offer smaller breakout sessions or student circles?",
    answer:
      "Yes. In fact, full-day packages combining a morning all-school assembly with afternoon small-group intervention circles (15–30 high-need or student-leader cohorts) produce the deepest, longest-lasting behavioral impact.",
    category: "Programs",
    sort_order: 3,
    is_published: true,
  },
  {
    id: "faq-4",
    question: "What audio/visual setup is required for the presentation?",
    answer:
      "Brett requires a reliable wireless handheld or lapel microphone and house audio connectivity for occasional video clips. He travels with his own presentation adapters. Detailed technical riders are provided upon booking confirmation.",
    category: "Logistics",
    sort_order: 4,
    is_published: true,
  },
  {
    id: "faq-5",
    question: "Can Title I, mental health, or violence prevention grants cover the fee?",
    answer:
      "Yes. Many partner school districts fund Brett's keynotes and intervention circles through Title I, Title II, Title IV (Student Support & Academic Enrichment), ESSER, STOP School Violence grants, and local community booster organizations.",
    category: "Pricing & Funding",
    sort_order: 5,
    is_published: true,
  },
  {
    id: "faq-6",
    question: "Does Brett travel nationwide, or only in the Midwest?",
    answer:
      "Brett is based in Des Moines, Iowa and travels nationwide across all 50 states for school assemblies, state student council conferences, and educator professional development events.",
    category: "Travel & Regions",
    sort_order: 6,
    is_published: true,
  },
];

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    author_name: "Dr. Marcus Vance",
    author_title: "High School Principal",
    school_district: "Des Moines Public Schools, IA",
    quote:
      "In eighteen years of secondary education leadership, I have never seen 1,200 teenagers sit in complete, rapt silence for an entire hour. Brett does not preach; he connects with honesty that our kids respect immediately.",
    rating: 5,
    is_featured: true,
    is_approved: true,
    sort_order: 1,
  },
  {
    id: "test-2",
    author_name: "Sarah Jenkins",
    author_title: "Director of Student Services",
    school_district: "Cedar Valley Community Schools",
    quote:
      "The afternoon circle session changed the trajectory for four students who were on the brink of expulsion. Brett gave them words for what they were going through and held them accountable with grace.",
    rating: 5,
    is_featured: true,
    is_approved: true,
    sort_order: 2,
  },
  {
    id: "test-3",
    author_name: "Coach Dave Miller",
    author_title: "Athletic Director & Dean of Students",
    school_district: "Midwest Regional High",
    quote:
      "Our staff was moved just as much as our athletes. Brett reminded every adult in the gym why we got into education in the first place. You cannot afford not to have him in your building.",
    rating: 5,
    is_featured: true,
    is_approved: true,
    sort_order: 3,
  },
];

export const DEFAULT_LEGAL_PAGES: Record<string, LegalPage> = {
  "privacy-policy": {
    id: "legal-privacy",
    slug: "privacy-policy",
    title: "Privacy Policy",
    content_html: `
      <h2>Privacy Policy</h2>
      <p>Last Updated: October 2026</p>
      <p>TOK2EM LLC ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you provide when using our website and engaging our youth keynote speaking and intervention services.</p>
      <h3>Information We Collect</h3>
      <p>When you submit an inquiry form, schedule a discovery call, or communicate with us, we may collect:</p>
      <ul>
        <li>Your name, job title, and school or organization name</li>
        <li>Work email address and phone number</li>
        <li>Event logistics (requested dates, student body size, grade levels, and venue location)</li>
        <li>Correspondence notes and feedback provided during discovery discussions</li>
      </ul>
      <h3>How We Use Your Information</h3>
      <p>We use collected data solely to:</p>
      <ul>
        <li>Respond to booking inquiries and prepare customized fee proposals</li>
        <li>Coordinate assembly logistics, travel itineraries, and technical requirements</li>
        <li>Issue contracts, invoices, and school vendor documentation</li>
        <li>Send post-event feedback requests and optional updates regarding speaker availability</li>
      </ul>
      <h3>Data Security & Protection</h3>
      <p>We maintain administrative, technical, and physical safeguards to prevent unauthorized access or disclosure of school and educator contact records. We never sell, rent, or trade your contact information to any third parties.</p>
      <h3>Contact Us</h3>
      <p>If you have any questions regarding this Privacy Policy, please contact Brett Lasko at <a href="mailto:brett.lasko@icloud.com">brett.lasko@icloud.com</a> or call 515.238.4806.</p>
    `,
  },
  "terms-of-service": {
    id: "legal-terms",
    slug: "terms-of-service",
    title: "Terms of Service",
    content_html: `
      <h2>Terms & Conditions of Service</h2>
      <p>Last Updated: October 2026</p>
      <p>Welcome to TOK2EM LLC. By browsing our website, requesting speaking availability, or executing a speaker agreement with TOK2EM LLC, you agree to comply with and be bound by the following terms.</p>
      <h3>1. Inquiries & Booking Reservations</h3>
      <p>Submission of a booking inquiry through this website does not guarantee date availability or constitute a binding engagement. An event date is officially confirmed only upon mutual execution of our formal Speaker Agreement and receipt of any required booking deposit or authorized school purchase order.</p>
      <h3>2. Intellectual Property</h3>
      <p>All materials presented during assemblies, including spoken keynotes, multimedia video clips, student circle frameworks, and one-sheet collateral, remain the exclusive intellectual property of Brett Lasko and TOK2EM LLC. Audio or video recording of presentations requires prior written authorization.</p>
      <h3>3. Cancellations & Rescheduling</h3>
      <p>In the event of severe weather closures, emergency school cancellations, or unforeseen circumstances, TOK2EM LLC works proactively with host districts to reschedule the appearance to a mutually agreed makeup date without penalty.</p>
      <h3>4. Contact & Inquiries</h3>
      <p>For inquiries regarding our terms, vendor compliance, or W-9 documentation, please email <a href="mailto:brett.lasko@icloud.com">brett.lasko@icloud.com</a>.</p>
    `,
  },
};

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  phone: "515.238.4806",
  email: "brett.lasko@icloud.com",
  location: "Des Moines, Iowa • Nationwide",
  banner_enabled: false,
  banner_text:
    "Now booking keynote assemblies and youth intervention circles for the 2026–2027 school year.",
};

export const DEFAULT_INQUIRIES: InquiryLead[] = [
  {
    id: "inq-1",
    school_name: "Oakridge High School",
    district: "Polk County District",
    contact_name: "Principal David Ross",
    email: "d.ross@oakridge.edu",
    phone: "515-555-0192",
    requested_date: "November 14, 2026",
    audience_size: "800-1,000 students",
    event_type: "Full-School Assembly + 2 Breakout Circles",
    notes: "Focus requested on peer pressure and substance avoidance.",
    status: "new",
    created_at: new Date().toISOString(),
  },
];
