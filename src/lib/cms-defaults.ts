import type {
  ProgramTopic,
  CampusProgram,
  FaqItem,
  TestimonialItem,
  LegalPage,
  SiteSettings,
  InquiryLead,
} from "@/types/cms";

export const DEFAULT_CAMPUS_PROGRAMS: CampusProgram[] = [
  {
    id: "campus-1",
    title: "Student Assemblies",
    audience: "Middle & High School (Grades 6–12)",
    description:
      "High-energy presentations that dismantle peer pressure and inspire lasting self-respect.",
    image_url: "",
    inquire_label: "Inquire for Dates →",
    sort_order: 1,
    is_active: true,
  },
  {
    id: "campus-2",
    title: "Intervention Circles",
    audience: "Alternative Education & At-Risk Youth",
    description:
      "Knee-to-knee discussions focused on anger management, impulse control, and accountability.",
    image_url: "",
    inquire_label: "Inquire for Dates →",
    sort_order: 2,
    is_active: true,
  },
  {
    id: "campus-3",
    title: "Staff & Educator Workshops",
    audience: "Teachers, Counselors & Mentors",
    description:
      "Communication tools to reach emotionally guarded teens without lowering behavioral standards.",
    image_url: "",
    inquire_label: "Inquire for Dates →",
    sort_order: 3,
    is_active: true,
  },
];

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
    title: "TALK2EM LLC — Privacy Policy",
    content_html: `
      <h2>Privacy Policy</h2>
      <p class="text-sm text-[#7A746B]"><strong>Talk to 'Em LLC (TOK2EM)</strong> | How we collect, use and protect personal information</p>
      <p><strong>Effective date:</strong> November 6, 2026</p>
      <p>Talk to 'Em LLC (TOK2EM, “Talk to 'Em,” “we,” “us” or “our”) respects the privacy of website visitors and people who contact us about our services. This Privacy Policy explains the personal information we may receive, why we use it and how individuals can contact us about that information.</p>

      <h3>1. Information We Collect</h3>
      <p>When you contact us or inquire about an engagement, we may receive your name, telephone number, email address, company name, and event details and location (where available). We may also receive information you choose to include in emails or other correspondence.</p>

      <h3>2. How Information Is Provided</h3>
      <p>At present, the website does not offer a contact form, booking form, newsletter subscription form or consultation form. You may contact us directly using the published business contact details. Files, documents or photographs cannot currently be uploaded through the website, but may be emailed to us when necessary. We may introduce a booking calendar or telephone-consultation booking form in the future.</p>

      <h3>3. How We Use Personal Information</h3>
      <p>We use information for business purposes, including responding to inquiries, discussing or arranging speaking and coaching engagements, communicating with clients, organising event details and administering our services.</p>
      <p>We may introduce newsletters, promotional emails or other marketing communications in the future. If we do so, we will provide any required notices and choices, including a way to opt out where applicable.</p>

      <h3>4. Payments and Billing</h3>
      <p>We do not currently collect payment-card or billing information directly through the website. For business payments, we may use third-party providers such as Stripe, Square, PayPal or other payment services. If payment handling is introduced through the website, relevant provider policies and notices will apply, and this policy will be updated where appropriate.</p>

      <h3>5. Disclosure to Service Providers</h3>
      <p>We do not sell personal information. We do not share it with third parties for their independent purposes. Limited information may be disclosed to service providers where necessary to operate the business, such as a payment processor involved in a transaction.</p>

      <h3>6. Access to Information and Confidentiality</h3>
      <p>Within Talk to 'Em LLC, personal information is accessible to the owner and main operator. We handle collected information confidentially and take steps intended to protect it against unauthorised access or disclosure. No method of electronic storage or transmission can be guaranteed completely secure.</p>

      <h3>7. Retention of Information</h3>
      <p>We intend to retain customer information for up to five years. We review information at five-year intervals to consider whether it remains accurate or necessary. We may need to handle particular information differently where applicable legal or recordkeeping obligations require it.</p>

      <h3>8. Access, Correction and Deletion Requests</h3>
      <p>You may request access to, correction of or deletion of personal information that we hold about you. To make a request, contact <a href="mailto:info@tok2em.com">info@tok2em.com</a>. We will consider the request and respond in accordance with applicable legal and recordkeeping requirements.</p>

      <h3>9. Analytics, Advertising and Tracking</h3>
      <p>We do not currently use Google Analytics, Meta Pixel, Google Ads tracking or similar visitor-tracking tools. We reserve the option to introduce analytics or advertising technologies in the future. Before using such technologies, we will update our disclosures and provide any additional notices or choices required by applicable law.</p>

      <h3>10. Third-Party Websites and Embedded Content</h3>
      <p>Our website links to social-media platforms. We may also introduce third-party scheduling or booking features, YouTube videos, testimonials or other embedded external content. If you interact with a third-party website or feature, that provider may collect or process information under its own privacy policy. We encourage you to review the relevant provider’s notices.</p>

      <h3>11. Audience and Geographic Scope</h3>
      <p>Our services primarily serve clients and visitors in the United States. If our website practices or audience change, we may update this policy to reflect relevant new requirements.</p>

      <h3>12. Updates to This Privacy Policy</h3>
      <p>We may revise this Privacy Policy as our website, business practices, service providers or legal requirements change. Updates will be reflected in the policy posted on our website, together with an updated effective date.</p>

      <div class="mt-8 pt-6 border-t border-[#E8E4DC] bg-[#FAF8F5] p-5 rounded">
        <h4 class="font-serif font-bold text-lg text-[#181614] mb-2">Contact Information</h4>
        <p class="text-sm text-[#5A554E] mb-3">For questions about this document or to contact Talk to 'Em LLC, please use the details below:</p>
        <ul class="text-xs space-y-1.5 text-[#3A352E] font-mono">
          <li><strong>Business:</strong> Talk to 'Em LLC (TOK2EM)</li>
          <li><strong>Email:</strong> <a href="mailto:info@tok2em.com" class="underline">info@tok2em.com</a></li>
          <li><strong>Telephone:</strong> <a href="tel:+18444865236" class="underline">844-I-TOK-2-EM (844-486-5236)</a></li>
          <li><strong>Address:</strong> 6701 Corporate Drive, Suite N, Johnston, Iowa 50131, United States</li>
        </ul>
      </div>
    `,
  },
  "terms-of-service": {
    id: "legal-terms",
    slug: "terms-of-service",
    title: "TALK2EM LLC — Website Terms and Conditions",
    content_html: `
      <h2>Terms & Conditions</h2>
      <p class="text-sm text-[#7A746B]"><strong>Talk to 'Em LLC (TOK2EM)</strong> | Speaking, events, coaching and website usage</p>
      <p><strong>Effective date:</strong> November 6, 2026</p>
      <p>These Terms & Conditions describe the policies applicable to inquiries, engagements, services and website content provided by Talk to 'Em LLC, also known as TOK2EM or “Talk to 'Em” (referred to below as “we,” “us” or “our”). Please read them before arranging an engagement or using our materials.</p>

      <h3>1. Services Offered</h3>
      <p>We provide motivational speaking, keynote speaking, corporate-event presentations, seminars, workshops, coaching and youth intervention talks. The scope, timing, location and other arrangements for an engagement will be discussed with the client before confirmation.</p>

      <h3>2. Inquiries and Booking Confirmation</h3>
      <p>Clients begin by submitting an inquiry rather than completing an instant online booking. A booking is not confirmed until the owner or an authorised staff member of Talk to 'Em LLC confirms it. Any agreed event details and payment arrangements should be documented in the booking correspondence.</p>

      <h3>3. Fees, Deposits and Event Expenses</h3>
      <p>An advance payment or deposit is not presently required to confirm an engagement, although deposits are appreciated. Payment arrangements may be agreed before or after the event. Talk to 'Em LLC is responsible for travel, accommodation and other event-related expenses, which are covered from payments received in advance or after the event. Any engagement-specific fees and payment terms will be communicated during the booking process.</p>

      <h3>4. Cancellation</h3>
      <p>Clients must provide at least 48 hours’ notice before a scheduled speaking event or engagement to cancel without cancellation penalties or fees. Cancellations made with less than 48 hours’ notice may result in penalties or fees where these have been communicated and agreed as part of the booking arrangements.</p>

      <h3>5. Rescheduling and Postponement</h3>
      <p>At least 48 hours’ notice is required to reschedule or postpone an engagement. Any alternative date or time remains subject to confirmation by Talk to 'Em LLC.</p>

      <h3>6. Refunds</h3>
      <p>If payment has been made, a refund will be provided when a client cancels in accordance with the 48-hour notice requirement or if Talk to 'Em LLC is unable to attend the event for personal reasons. Otherwise, payments are non-refundable, subject to any non-waivable rights under applicable law. If no payment has been received, no refund is due.</p>

      <h3>7. Ownership of Content and Materials</h3>
      <p>Talk to 'Em LLC owns the rights to its speeches, presentations, videos, photographs, written content and other original materials. All rights are reserved. No part of these materials may be copied, reproduced, reused, published or distributed without our prior written permission.</p>

      <h3>8. Photography, Recording and Sharing</h3>
      <p>Clients and attendees may not photograph, audio-record, video-record or share our speaking sessions without prior written permission. Written permission is also required before using any speech, presentation, video or related materials. Permission, if granted, applies only to the use specifically authorised in writing.</p>

      <h3>9. Website Content and Acceptable Use</h3>
      <p>Website visitors must act respectfully and must not misuse the website or its content. Unauthorised copying, reproduction, commercial use or distribution of website materials is prohibited. Please obtain written permission before republishing or sharing our website content on social-media platforms or elsewhere.</p>

      <h3>10. External Links and Services</h3>
      <p>Our website may provide links to social-media sites or, in the future, to third-party scheduling, booking or other services. Those services are operated independently, and their own terms and policies may apply when you use them.</p>

      <h3>11. Changes to These Terms</h3>
      <p>We may update these Terms & Conditions as our services or booking practices change. The version posted on our website will state its effective date. Any separately agreed engagement-specific terms will continue to apply as agreed.</p>

      <div class="mt-8 pt-6 border-t border-[#E8E4DC] bg-[#FAF8F5] p-5 rounded">
        <h4 class="font-serif font-bold text-lg text-[#181614] mb-2">Contact Information</h4>
        <p class="text-sm text-[#5A554E] mb-3">For questions about this document or to contact Talk to 'Em LLC, please use the details below:</p>
        <ul class="text-xs space-y-1.5 text-[#3A352E] font-mono">
          <li><strong>Business:</strong> Talk to 'Em LLC (TOK2EM)</li>
          <li><strong>Email:</strong> <a href="mailto:info@tok2em.com" class="underline">info@tok2em.com</a></li>
          <li><strong>Telephone:</strong> <a href="tel:+18444865236" class="underline">844-I-TOK-2-EM (844-486-5236)</a></li>
          <li><strong>Address:</strong> 6701 Corporate Drive, Suite N, Johnston, Iowa 50131, United States</li>
        </ul>
      </div>
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
