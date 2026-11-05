-- ==============================================================================
-- TOK2EM SUPABASE DATABASE SCHEMA & INITIAL SEED DATA
-- Run this script in the Supabase SQL Editor (Dashboard > SQL Editor > New query)
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- TABLES
-- ==============================================================================

-- 0. Campus Programs (Speaking Formats - Student Assemblies, Intervention Circles, Staff Workshops)
CREATE TABLE IF NOT EXISTS public.campus_programs (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    title TEXT NOT NULL,
    audience TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    inquire_label TEXT DEFAULT 'Inquire for Dates →',
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

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

ALTER TABLE public.campus_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.legal_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Drop previous policies if they exist (for idempotent runs)
DROP POLICY IF EXISTS "Public full access to campus programs" ON public.campus_programs;
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
CREATE POLICY "Public full access to campus programs" ON public.campus_programs FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to programs" ON public.programs FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to faqs" ON public.faqs FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to testimonials" ON public.testimonials FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to legal pages" ON public.legal_pages FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to site settings" ON public.site_settings FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public full access to inquiries" ON public.inquiries FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

-- ==============================================================================
-- INITIAL SEED DATA (Pre-populating current website content)
-- ==============================================================================

-- Seed Campus Programs (Speaking Formats)
INSERT INTO public.campus_programs (id, title, audience, description, image_url, inquire_label, sort_order, is_active)
VALUES
(
    'campus-1',
    'Student Assemblies',
    'Middle & High School (Grades 6–12)',
    'High-energy presentations that dismantle peer pressure and inspire lasting self-respect.',
    '',
    'Inquire for Dates →',
    1,
    true
),
(
    'campus-2',
    'Intervention Circles',
    'Alternative Education & At-Risk Youth',
    'Knee-to-knee discussions focused on anger management, impulse control, and accountability.',
    '',
    'Inquire for Dates →',
    2,
    true
),
(
    'campus-3',
    'Staff & Educator Workshops',
    'Teachers, Counselors & Mentors',
    'Communication tools to reach emotionally guarded teens without lowering behavioral standards.',
    '',
    'Inquire for Dates →',
    3,
    true
)
ON CONFLICT (id) DO UPDATE
SET title = EXCLUDED.title,
    audience = EXCLUDED.audience,
    description = EXCLUDED.description,
    image_url = EXCLUDED.image_url,
    inquire_label = EXCLUDED.inquire_label,
    sort_order = EXCLUDED.sort_order,
    is_active = EXCLUDED.is_active,
    updated_at = NOW();

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
    'TALK2EM LLC — Privacy Policy',
    '<h2>Privacy Policy</h2><p><strong>Talk to ''Em LLC (TOK2EM)</strong> | How we collect, use and protect personal information</p><p><strong>Effective date:</strong> November 6, 2026</p><p>Talk to ''Em LLC (TOK2EM, “Talk to ''Em,” “we,” “us” or “our”) respects the privacy of website visitors and people who contact us about our services. This Privacy Policy explains the personal information we may receive, why we use it and how individuals can contact us about that information.</p><h3>1. Information We Collect</h3><p>When you contact us or inquire about an engagement, we may receive your name, telephone number, email address, company name, and event details and location (where available). We may also receive information you choose to include in emails or other correspondence.</p><h3>2. How Information Is Provided</h3><p>At present, the website does not offer a contact form, booking form, newsletter subscription form or consultation form. You may contact us directly using the published business contact details. Files, documents or photographs cannot currently be uploaded through the website, but may be emailed to us when necessary. We may introduce a booking calendar or telephone-consultation booking form in the future.</p><h3>3. How We Use Personal Information</h3><p>We use information for business purposes, including responding to inquiries, discussing or arranging speaking and coaching engagements, communicating with clients, organising event details and administering our services.</p><p>We may introduce newsletters, promotional emails or other marketing communications in the future. If we do so, we will provide any required notices and choices, including a way to opt out where applicable.</p><h3>4. Payments and Billing</h3><p>We do not currently collect payment-card or billing information directly through the website. For business payments, we may use third-party providers such as Stripe, Square, PayPal or other payment services. If payment handling is introduced through the website, relevant provider policies and notices will apply, and this policy will be updated where appropriate.</p><h3>5. Disclosure to Service Providers</h3><p>We do not sell personal information. We do not share it with third parties for their independent purposes. Limited information may be disclosed to service providers where necessary to operate the business, such as a payment processor involved in a transaction.</p><h3>6. Access to Information and Confidentiality</h3><p>Within Talk to ''Em LLC, personal information is accessible to the owner and main operator. We handle collected information confidentially and take steps intended to protect it against unauthorised access or disclosure. No method of electronic storage or transmission can be guaranteed completely secure.</p><h3>7. Retention of Information</h3><p>We intend to retain customer information for up to five years. We review information at five-year intervals to consider whether it remains accurate or necessary. We may need to handle particular information differently where applicable legal or recordkeeping obligations require it.</p><h3>8. Access, Correction and Deletion Requests</h3><p>You may request access to, correction of or deletion of personal information that we hold about you. To make a request, contact <a href="mailto:info@tok2em.com">info@tok2em.com</a>. We will consider the request and respond in accordance with applicable legal and recordkeeping requirements.</p><h3>9. Analytics, Advertising and Tracking</h3><p>We do not currently use Google Analytics, Meta Pixel, Google Ads tracking or similar visitor-tracking tools. We reserve the option to introduce analytics or advertising technologies in the future. Before using such technologies, we will update our disclosures and provide any additional notices or choices required by applicable law.</p><h3>10. Third-Party Websites and Embedded Content</h3><p>Our website links to social-media platforms. We may also introduce third-party scheduling or booking features, YouTube videos, testimonials or other embedded external content. If you interact with a third-party website or feature, that provider may collect or process information under its own privacy policy. We encourage you to review the relevant provider’s notices.</p><h3>11. Audience and Geographic Scope</h3><p>Our services primarily serve clients and visitors in the United States. If our website practices or audience change, we may update this policy to reflect relevant new requirements.</p><h3>12. Updates to This Privacy Policy</h3><p>We may revise this Privacy Policy as our website, business practices, service providers or legal requirements change. Updates will be reflected in the policy posted on our website, together with an updated effective date.</p><h4>Contact Information</h4><p>For questions about this document or to contact Talk to ''Em LLC, please use the details below:</p><p><strong>Business:</strong> Talk to ''Em LLC (TOK2EM)<br/><strong>Email:</strong> <a href="mailto:info@tok2em.com">info@tok2em.com</a><br/><strong>Telephone:</strong> <a href="tel:+18444865236">844-I-TOK-2-EM (844-486-5236)</a><br/><strong>Address:</strong> 6701 Corporate Drive, Suite N, Johnston, Iowa 50131, United States</p>'
),
(
    'terms-of-service',
    'TALK2EM LLC — Website Terms and Conditions',
    '<h2>Terms & Conditions</h2><p><strong>Talk to ''Em LLC (TOK2EM)</strong> | Speaking, events, coaching and website usage</p><p><strong>Effective date:</strong> November 6, 2026</p><p>These Terms & Conditions describe the policies applicable to inquiries, engagements, services and website content provided by Talk to ''Em LLC, also known as TOK2EM or “Talk to ''Em” (referred to below as “we,” “us” or “our”). Please read them before arranging an engagement or using our materials.</p><h3>1. Services Offered</h3><p>We provide motivational speaking, keynote speaking, corporate-event presentations, seminars, workshops, coaching and youth intervention talks. The scope, timing, location and other arrangements for an engagement will be discussed with the client before confirmation.</p><h3>2. Inquiries and Booking Confirmation</h3><p>Clients begin by submitting an inquiry rather than completing an instant online booking. A booking is not confirmed until the owner or an authorised staff member of Talk to ''Em LLC confirms it. Any agreed event details and payment arrangements should be documented in the booking correspondence.</p><h3>3. Fees, Deposits and Event Expenses</h3><p>An advance payment or deposit is not presently required to confirm an engagement, although deposits are appreciated. Payment arrangements may be agreed before or after the event. Talk to ''Em LLC is responsible for travel, accommodation and other event-related expenses, which are covered from payments received in advance or after the event. Any engagement-specific fees and payment terms will be communicated during the booking process.</p><h3>4. Cancellation</h3><p>Clients must provide at least 48 hours’ notice before a scheduled speaking event or engagement to cancel without cancellation penalties or fees. Cancellations made with less than 48 hours’ notice may result in penalties or fees where these have been communicated and agreed as part of the booking arrangements.</p><h3>5. Rescheduling and Postponement</h3><p>At least 48 hours’ notice is required to reschedule or postpone an engagement. Any alternative date or time remains subject to confirmation by Talk to ''Em LLC.</p><h3>6. Refunds</h3><p>If payment has been made, a refund will be provided when a client cancels in accordance with the 48-hour notice requirement or if Talk to ''Em LLC is unable to attend the event for personal reasons. Otherwise, payments are non-refundable, subject to any non-waivable rights under applicable law. If no payment has been received, no refund is due.</p><h3>7. Ownership of Content and Materials</h3><p>Talk to ''Em LLC owns the rights to its speeches, presentations, videos, photographs, written content and other original materials. All rights are reserved. No part of these materials may be copied, reproduced, reused, published or distributed without our prior written permission.</p><h3>8. Photography, Recording and Sharing</h3><p>Clients and attendees may not photograph, audio-record, video-record or share our speaking sessions without prior written permission. Written permission is also required before using any speech, presentation, video or related materials. Permission, if granted, applies only to the use specifically authorised in writing.</p><h3>9. Website Content and Acceptable Use</h3><p>Website visitors must act respectfully and must not misuse the website or its content. Unauthorised copying, reproduction, commercial use or distribution of website materials is prohibited. Please obtain written permission before republishing or sharing our website content on social-media platforms or elsewhere.</p><h3>10. External Links and Services</h3><p>Our website may provide links to social-media sites or, in the future, to third-party scheduling, booking or other services. Those services are operated independently, and their own terms and policies may apply when you use them.</p><h3>11. Changes to These Terms</h3><p>We may update these Terms & Conditions as our services or booking practices change. The version posted on our website will state its effective date. Any separately agreed engagement-specific terms will continue to apply as agreed.</p><h4>Contact Information</h4><p>For questions about this document or to contact Talk to ''Em LLC, please use the details below:</p><p><strong>Business:</strong> Talk to ''Em LLC (TOK2EM)<br/><strong>Email:</strong> <a href="mailto:info@tok2em.com">info@tok2em.com</a><br/><strong>Telephone:</strong> <a href="tel:+18444865236">844-I-TOK-2-EM (844-486-5236)</a><br/><strong>Address:</strong> 6701 Corporate Drive, Suite N, Johnston, Iowa 50131, United States</p>'
)
ON CONFLICT (slug) DO UPDATE
SET title = EXCLUDED.title, content_html = EXCLUDED.content_html, last_updated_at = NOW();

-- Seed Site Settings
INSERT INTO public.site_settings (key, value)
VALUES
(
    'general',
    '{
        "phone": "(844) I-tok-2-em",
        "email": "info@tok2em.com",
        "location": "Des Moines, Iowa • Nationwide",
        "banner_enabled": false,
        "banner_text": "Now booking keynote assemblies and youth intervention circles for the 2026–2027 school year."
    }'::jsonb
)
ON CONFLICT (key) DO UPDATE
SET value = EXCLUDED.value, updated_at = NOW();
