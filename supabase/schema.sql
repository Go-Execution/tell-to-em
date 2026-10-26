-- ==============================================================================
-- TOK2EM SUPABASE DATABASE SCHEMA & INITIAL SEED DATA
-- Run this script in the Supabase SQL Editor (Dashboard > SQL Editor > New query)
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- TABLES
-- ==============================================================================

-- 1. Speaking Programs / Topics
CREATE TABLE IF NOT EXISTS public.programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    tagline TEXT,
    description TEXT NOT NULL,
    target_audience TEXT,
    bullet_points JSONB DEFAULT '[]'::jsonb,
    one_sheet_url TEXT,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. FAQs
CREATE TABLE IF NOT EXISTS public.faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category TEXT DEFAULT 'General',
    sort_order INT DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Testimonials / Administrator Reviews
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_name TEXT NOT NULL,
    author_title TEXT NOT NULL,
    school_district TEXT,
    quote TEXT NOT NULL,
    rating INT DEFAULT 5,
    is_featured BOOLEAN DEFAULT true,
    is_approved BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Legal & CMS Policy Pages (Privacy Policy, Terms of Service)
CREATE TABLE IF NOT EXISTS public.legal_pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    content_html TEXT NOT NULL,
    last_updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Site Settings (Contact, Phone, Announcement Banner)
CREATE TABLE IF NOT EXISTS public.site_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Inquiries / Booking Leads Inbox
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    school_name TEXT NOT NULL,
    district TEXT,
    contact_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    requested_date TEXT,
    audience_size TEXT,
    event_type TEXT,
    notes TEXT,
    status TEXT DEFAULT 'new', -- 'new', 'contacted', 'quote_sent', 'confirmed', 'completed', 'archived'
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.legal_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Drop previous policies if they exist (for idempotent runs)
DROP POLICY IF EXISTS "Public full access to programs" ON public.programs;
DROP POLICY IF EXISTS "Public full access to faqs" ON public.faqs;
DROP POLICY IF EXISTS "Public full access to testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Public full access to legal pages" ON public.legal_pages;
DROP POLICY IF EXISTS "Public full access to site settings" ON public.site_settings;
DROP POLICY IF EXISTS "Public full access to inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "Public can read active programs" ON public.programs;
DROP POLICY IF EXISTS "Public can read published faqs" ON public.faqs;
DROP POLICY IF EXISTS "Public can read approved testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Public can read legal pages" ON public.legal_pages;
DROP POLICY IF EXISTS "Public can read site settings" ON public.site_settings;
DROP POLICY IF EXISTS "Public can submit inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "Admins have full access to programs" ON public.programs;
DROP POLICY IF EXISTS "Admins have full access to faqs" ON public.faqs;
DROP POLICY IF EXISTS "Admins have full access to testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Admins have full access to legal pages" ON public.legal_pages;
DROP POLICY IF EXISTS "Admins have full access to site settings" ON public.site_settings;
DROP POLICY IF EXISTS "Admins have full access to inquiries" ON public.inquiries;

-- Allow anon & authenticated full access for the single-password client preview phase
CREATE POLICY "Public full access to programs" ON public.programs FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to faqs" ON public.faqs FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to testimonials" ON public.testimonials FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to legal pages" ON public.legal_pages FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to site settings" ON public.site_settings FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to inquiries" ON public.inquiries FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

-- ==============================================================================
-- INITIAL SEED DATA (Pre-populating current website content)
-- ==============================================================================

-- Seed Programs / Speaking Topics
INSERT INTO public.programs (title, slug, tagline, description, target_audience, bullet_points, sort_order, is_active)
VALUES
(
    'Choices & Consequences',
    'choices-and-consequences',
    'The Ripple Effect of Daily Decisions',
    'A high-energy, lived-experience keynote dismantling the illusion of invincibility. Brett walks students through the real mechanics of peer influence, impulse decisions, and the enduring ripple effects that one choice can set into motion.',
    'Middle & High School (Grades 6–12)',
    '["The 10-second pause: breaking reaction culture before consequence strikes", "Separating temporary loyalty to peer groups from lifetime consequences", "Rebuilding identity and trust after major missteps or disciplinary actions"]'::jsonb,
    1,
    true
),
(
    'Behind the Mask',
    'behind-the-mask',
    'Vulnerability as Armor in Youth Culture',
    'Youth today carry invisible pressures — social comparison, trauma, and the exhaustion of performing for peers. This keynote pierces the armor, encouraging authentic accountability and destigmatizing asking for help.',
    'High School & Alternative Education',
    '["Unpacking the social masks young people wear to survive school culture", "Navigating silent mental health battles without turning to self-destructive coping", "Building genuine peer support networks that replace performative cruelty"]'::jsonb,
    2,
    true
),
(
    'Resilient Minds, Real Futures',
    'resilient-minds-real-futures',
    'Practical Mental Fortitude for Adversity',
    'Adversity is not an excuse to forfeit your future. In this intensive session, Brett provides concrete frameworks for mental resilience, emotional regulation under stress, and actionable goal-setting for students facing systemic or familial hardship.',
    'At-Risk Youth, Alternative Ed & Student Leaders',
    '["Transforming lived trauma and adversity into unshakeable personal purpose", "Emotional regulation tactics when fight-or-flight triggers in classrooms or home", "Drafting a personal blueprint: grades, community, and mentorship navigation"]'::jsonb,
    3,
    true
)
ON CONFLICT (slug) DO NOTHING;

-- Seed FAQs
INSERT INTO public.faqs (question, answer, category, sort_order, is_published)
VALUES
(
    'What grade levels are Brett Lasko''s keynotes best suited for?',
    'Brett speaks primarily to Middle Schools (Grades 6–8), High Schools (Grades 9–12), Alternative Education Centers, and Juvenile Intervention programs. Every keynote is customized to the specific developmental stage, challenges, and climate of your student body.',
    'General',
    1,
    true
),
(
    'How far in advance should our school reach out to reserve a date?',
    'Most middle and high schools book 2 to 6 months in advance, especially for Fall kickoff assemblies (August–October), Red Ribbon Week (October), Mental Health Awareness Month (May), and pre-prom or graduation assemblies (April–May). However, we accommodate urgent intervention requests whenever tour dates permit.',
    'Booking & Schedule',
    2,
    true
),
(
    'Does Brett offer smaller breakout sessions or student circles?',
    'Yes. In fact, full-day packages combining a morning all-school assembly with afternoon small-group intervention circles (15–30 high-need or student-leader cohorts) produce the deepest, longest-lasting behavioral impact.',
    'Programs',
    3,
    true
),
(
    'What audio/visual setup is required for the presentation?',
    'Brett requires a reliable wireless handheld or lapel microphone and house audio connectivity for occasional video clips. He travels with his own presentation adapters. Detailed technical riders are provided upon booking confirmation.',
    'Logistics',
    4,
    true
),
(
    'Can Title I, mental health, or violence prevention grants cover the fee?',
    'Yes. Many partner school districts fund Brett''s keynotes and intervention circles through Title I, Title II, Title IV (Student Support & Academic Enrichment), ESSER, STOP School Violence grants, and local community booster organizations.',
    'Pricing & Funding',
    5,
    true
),
(
    'Does Brett travel nationwide, or only in the Midwest?',
    'Brett is based in Des Moines, Iowa and travels nationwide across all 50 states for school assemblies, state student council conferences, and educator professional development events.',
    'Travel & Regions',
    6,
    true
);

-- Seed Testimonials
INSERT INTO public.testimonials (author_name, author_title, school_district, quote, rating, is_featured, is_approved, sort_order)
VALUES
(
    'Dr. Marcus Vance',
    'High School Principal',
    'Des Moines Public Schools, IA',
    'In eighteen years of secondary education leadership, I have never seen 1,200 teenagers sit in complete, rapt silence for an entire hour. Brett does not preach; he connects with honesty that our kids respect immediately.',
    5,
    true,
    true,
    1
),
(
    'Sarah Jenkins',
    'Director of Student Services',
    'Cedar Valley Community Schools',
    'The afternoon circle session changed the trajectory for four students who were on the brink of expulsion. Brett gave them words for what they were going through and held them accountable with grace.',
    5,
    true,
    true,
    2
),
(
    'Coach Dave Miller',
    'Athletic Director & Dean of Students',
    'Midwest Regional High',
    'Our staff was moved just as much as our athletes. Brett reminded every adult in the gym why we got into education in the first place. You cannot afford not to have him in your building.',
    5,
    true,
    true,
    3
);

-- Seed Legal Policy Pages
INSERT INTO public.legal_pages (slug, title, content_html)
VALUES
(
    'privacy-policy',
    'Privacy Policy',
    '<h2>Privacy Policy</h2><p>Last Updated: October 2026</p><p>TOK2EM LLC ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you provide when using our website and engaging our youth keynote speaking and intervention services.</p><h3>Information We Collect</h3><p>When you submit an inquiry form, schedule a discovery call, or communicate with us, we may collect:</p><ul><li>Your name, job title, and school or organization name</li><li>Work email address and phone number</li><li>Event logistics (requested dates, student body size, grade levels, and venue location)</li><li>Correspondence notes and feedback provided during discovery discussions</li></ul><h3>How We Use Your Information</h3><p>We use collected data solely to:</p><ul><li>Respond to booking inquiries and prepare customized fee proposals</li><li>Coordinate assembly logistics, travel itineraries, and technical requirements</li><li>Issue contracts, invoices, and school vendor documentation</li><li>Send post-event feedback requests and optional updates regarding speaker availability</li></ul><h3>Data Security & Protection</h3><p>We maintain strict administrative, technical, and physical safeguards to prevent unauthorized access or disclosure of school and educator contact records. We do not sell, rent, or trade your contact information to any third parties.</p><h3>Contact Us</h3><p>If you have any questions regarding this Privacy Policy, please contact Brett Lasko at <a href="mailto:brett.lasko@icloud.com">brett.lasko@icloud.com</a> or call 515.238.4806.</p>'
),
(
    'terms-of-service',
    'Terms of Service',
    '<h2>Terms & Conditions of Service</h2><p>Last Updated: October 2026</p><p>Welcome to TOK2EM LLC. By browsing our website, requesting speaking availability, or executing a speaker agreement with TOK2EM LLC, you agree to comply with and be bound by the following terms.</p><h3>1. Inquiries & Booking Reservations</h3><p>Submission of a booking inquiry through this website does not guarantee date availability or constitute a binding engagement. An event date is officially confirmed only upon mutual execution of our formal Speaker Agreement and receipt of any required booking deposit or authorized school purchase order.</p><h3>2. Intellectual Property</h3><p>All materials presented during assemblies, including spoken keynotes, multimedia video clips, student circle frameworks, and one-sheet collateral, remain the exclusive intellectual property of Brett Lasko and TOK2EM LLC. Audio or video recording of presentations requires prior written authorization.</p><h3>3. Cancellations & Rescheduling</h3><p>In the event of severe weather closures, emergency school cancellations, or unforeseen circumstances, TOK2EM LLC works proactively with host districts to reschedule the appearance to a mutually agreed makeup date without penalty.</p><h3>4. Contact & Inquiries</h3><p>For inquiries regarding our terms, vendor compliance, or W-9 documentation, please email <a href="mailto:brett.lasko@icloud.com">brett.lasko@icloud.com</a>.</p>'
)
ON CONFLICT (slug) DO NOTHING;

-- Seed Site Settings
INSERT INTO public.site_settings (key, value)
VALUES
(
    'general',
    '{
        "phone": "515.238.4806",
        "email": "brett.lasko@icloud.com",
        "location": "Des Moines, Iowa • Nationwide",
        "banner_enabled": false,
        "banner_text": "Now booking keynote assemblies and youth intervention circles for the 2026–2027 school year."
    }'::jsonb
)
ON CONFLICT (key) DO NOTHING;
