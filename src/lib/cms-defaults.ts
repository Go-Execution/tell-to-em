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
    title: "Talk to Them LLC — Privacy Policy",
    content_html: `
      <h2>Talk to Them LLC — Privacy Policy</h2>
      <p><strong>Last updated:</strong> Nov 5, 2026</p>

      <h3>1. Who We Are</h3>
      <p>Talk to Them LLC ("Talk to Them," "we," "us," or "our") is an Iowa limited liability company that operates <a href="https://talk2emllc.com" target="_blank" rel="noreferrer">talk2emllc.com</a> (the "Site"). This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using the Site or our services, you agree to this policy.</p>

      <h3>2. Information We Collect and How We Use It</h3>
      <p><strong>Information you give us.</strong> When you contact us, book a session, make a payment or donation, or sign up for updates, we may collect your name, email address, phone number, mailing address, and any details you choose to share.</p>
      <p><strong>Information collected automatically.</strong> Like most websites, the Site may collect basic technical data such as your IP address, browser type, device type, pages visited, and time spent on the Site.</p>
      <p><strong>Payment information.</strong> Payments are handled by third-party processors. We do not store your full credit card or bank account numbers.</p>
      <p>We use this information to:</p>
      <ul>
        <li>Respond to your questions and requests</li>
        <li>Schedule and provide our services</li>
        <li>Process payments, donations, and invoices</li>
        <li>Send updates or marketing messages you've agreed to receive (you can unsubscribe anytime)</li>
        <li>Improve the Site and our services</li>
        <li>Meet legal, tax, and accounting obligations</li>
      </ul>

      <h3>3. Sharing, Cookies, and Third-Party Services</h3>
      <p><strong>We do not sell your personal information.</strong> We share it only:</p>
      <ul>
        <li>With trusted service providers who help us run the business (such as website hosting, scheduling, email, and payment processing), and only as needed to do that work</li>
        <li>When required by law, court order, or to protect our rights, safety, or property</li>
        <li>With your permission</li>
        <li>As part of a business transfer, such as a merger or sale, where the new owner keeps this policy's protections</li>
      </ul>
      <p><strong>Cookies.</strong> The Site may use cookies and similar tools to remember your preferences and understand how visitors use the Site (for example, through analytics services like Google Analytics). You can turn off cookies in your browser settings, though some features may not work properly.</p>
      <p><strong>Third-party sites.</strong> Links to other websites, booking tools, or social media are governed by those companies' own privacy policies, not ours.</p>

      <h3>4. Security, Your Choices, and Contact</h3>
      <p><strong>Security.</strong> We use reasonable safeguards to protect your information. No website or online service is 100% secure, so we cannot guarantee absolute security.</p>
      <p><strong>How long we keep it.</strong> We keep personal information only as long as needed for the purposes above, or as required for legal, tax, and accounting records.</p>
      <p><strong>Children.</strong> The Site is not directed to children under 13, and we do not knowingly collect their information. If you believe a child has shared information with us, contact us and we will delete it.</p>
      <p><strong>Your choices.</strong> You may ask us to access, correct, or delete your personal information, or to stop sending you marketing messages. Contact us using the details below and we will respond within a reasonable time.</p>
      <p><strong>Changes.</strong> We may update this policy from time to time. The "Last updated" date at the top shows the latest version.</p>

      <h3>Contact Us</h3>
      <p><strong>Talk to Them LLC</strong><br/>
      Website: <a href="https://talk2emllc.com" target="_blank" rel="noreferrer">talk2emllc.com</a><br/>
      Email: <a href="mailto:info@tok2em.com">info@tok2em.com</a><br/>
      Phone: <a href="tel:+18444865236">(844) I-tok-2-em</a></p>
    `,
  },
  "terms-of-service": {
    id: "legal-terms",
    slug: "terms-of-service",
    title: "Talk2Em LLC — Website Terms and Conditions",
    content_html: `
      <h2>Talk2Em LLC — Website Terms and Conditions</h2>
      <p><strong>Last updated:</strong> Nov 5, 2026</p>

      <h3>1. Agreement to These Terms</h3>
      <p>These Terms and Conditions ("Terms") govern your use of <a href="https://talk2emllc.com" target="_blank" rel="noreferrer">talk2emllc.com</a> (the "Site") and any services offered by Talk to Them LLC ("Talk to Them," "we," "us," or "our"), an Iowa limited liability company. By visiting the Site, contacting us, booking a session, or buying a service, you agree to these Terms. If you do not agree, please do not use the Site.</p>
      <p>You must be at least 18 years old, or have a parent or guardian's permission, to use the Site or book services.</p>

      <h3>2. Using the Site</h3>
      <p>You may use the Site for lawful, personal, and business purposes. When using the Site, you agree not to:</p>
      <ul>
        <li>Break any law or regulation</li>
        <li>Copy, sell, or reuse Site content without our written permission</li>
        <li>Upload viruses, spam, or harmful code, or try to hack or disrupt the Site</li>
        <li>Pretend to be someone else or give false information</li>
        <li>Harass, threaten, or abuse us or other users</li>
      </ul>
      <p>We may suspend or block access to the Site for anyone who breaks these rules.</p>

      <h3>3. Services, Payments, and Cancellations</h3>
      <p>Talk to Them may offer coaching, speaking, consulting, video production, and related services. Details, prices, and timelines for each service are set in the quote, booking confirmation, or separate agreement you receive. If that agreement conflicts with these Terms, the agreement controls.</p>
      <ul>
        <li><strong>Payment:</strong> Fees are due as stated on your invoice or at booking. Late payments may delay or pause services.</li>
        <li><strong>Cancellations and rescheduling:</strong> Please give at least 24 hours' notice to cancel or reschedule a session. Missed sessions or late cancellations may be charged in full.</li>
        <li><strong>Refunds:</strong> Payments for completed services are non-refundable. Deposits are non-refundable unless your agreement says otherwise.</li>
        <li><strong>Donations:</strong> Any donations made through the Site are voluntary and non-refundable.</li>
        <li><strong>No guaranteed results:</strong> Coaching and consulting are educational and supportive. We do not guarantee any specific personal, financial, or business outcome. Our services are not medical, mental health, legal, or financial advice.</li>
      </ul>

      <h3>4. Intellectual Property</h3>
      <p>All content on the Site, including text, logos, videos, photos, graphics, and the slogan "Our Words, Your Wisdom," belongs to Talk to Them LLC or its licensors and is protected by copyright and trademark law. You may view and share Site pages for personal use, but you may not copy, edit, sell, or reuse our content without written permission.</p>
      <p>If you send us content (such as photos, videos, testimonials, or messages), you confirm you have the right to share it. Unless we agree otherwise in writing, you allow us to use testimonials and feedback you provide to promote our services. Ownership of videos or other work we create for you is set by your service agreement.</p>

      <h3>5. Links, Disclaimers, and Limits of Liability</h3>
      <p><strong>Third-party links.</strong> The Site may link to other websites, booking tools, or payment processors. We do not control them and are not responsible for their content, policies, or practices.</p>
      <p><strong>As-is.</strong> The Site and its content are provided "as is" and "as available." We do our best to keep information accurate, but we do not promise the Site will be error-free, uninterrupted, or free of viruses.</p>
      <p><strong>Limitation of liability.</strong> To the fullest extent allowed by law, Talk to Them LLC and its owners, employees, and partners are not liable for any indirect, incidental, or consequential damages from your use of the Site or our services. Our total liability for any claim will not exceed the amount you paid us in the 12 months before the claim.</p>
      <p><strong>Indemnification.</strong> You agree to cover and protect Talk to Them LLC from any claims, losses, or costs (including reasonable attorney fees) caused by your misuse of the Site or your breach of these Terms.</p>

      <h3>6. Privacy, Governing Law, and Changes</h3>
      <p><strong>Privacy.</strong> We collect only the information needed to respond to you, book services, and process payments. We do not sell your personal information. See our Privacy Policy for details.</p>
      <p><strong>Governing law.</strong> These Terms are governed by the laws of the State of Iowa. Any dispute will be handled in the state or federal courts located in Polk County, Iowa.</p>
      <p><strong>Changes.</strong> We may update these Terms at any time. The "Last updated" date at the top shows the latest version. Continuing to use the Site after changes means you accept them.</p>
      <p><strong>Severability.</strong> If any part of these Terms is found unenforceable, the rest stays in effect.</p>

      <h3>Contact Us</h3>
      <p><strong>Talk to Them LLC</strong><br/>
      Website: <a href="https://talk2emllc.com" target="_blank" rel="noreferrer">talk2emllc.com</a><br/>
      Email: <a href="mailto:info@tok2em.com">info@tok2em.com</a><br/>
      Phone: <a href="tel:+18444865236">(844) I-tok-2-em</a></p>
    `,
  },
};

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  phone: "(844) I-tok-2-em",
  email: "info@tok2em.com",
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
