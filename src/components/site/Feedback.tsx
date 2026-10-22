import { useState } from "react";
import {
  Quote,
  Star,
  MessageSquarePlus,
  CheckCircle,
  School,
  Shield,
  User,
  Heart,
} from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Our students were completely locked in for the entire hour. In fifteen years of public education, I have rarely seen an assembly hold 800 high schoolers in total silence without a single phone out. Several students waited afterward just to thank him for being real.",
    author: "Marcus Vance",
    role: "Vice Principal & Dean of Students",
    organization: "Midwest High School",
    category: "High School Assembly",
    stars: 5,
    icon: School,
    accent: "border-blue-200 bg-blue-50/40",
  },
  {
    quote:
      "The small-group circle with our highest-tier disciplinary students was nothing short of a breakthrough. Brett dismantled their defensive walls without raising his voice. Weeks later, two of our most guarded students still quote his principle of 'owning your next five minutes' when tensions rise.",
    author: "Elena Rodriguez, M.Ed.",
    role: "Director of Alternative Education",
    organization: "Youth Transition Academy",
    category: "Intervention Circle",
    stars: 5,
    icon: Shield,
    accent: "border-amber-200 bg-amber-50/40",
  },
  {
    quote:
      "Adolescents can spot insincerity instantly. Brett earned their trust within the first two minutes because his lived experience is undeniable. He gave our young men practical tools for handling peer conflict that don't end in handcuffs or suspension.",
    author: "Darnell Jenkins",
    role: "Youth Diversion & Juvenile Justice Coordinator",
    organization: "County Youth Outreach Alliance",
    category: "Community Diversion",
    stars: 5,
    icon: User,
    accent: "border-teal-200 bg-teal-50/40",
  },
  {
    quote:
      "Talk2em bridged the gap between our teenagers and their parents during our community evening. It wasn't sugarcoated advice—it was direct, compassionate guidance on listening before reacting. Our church families are still talking about it.",
    author: "Pastor Thomas Hayes",
    role: "Community & Family Youth Leader",
    organization: "Faith Community Center",
    category: "Family & Community",
    stars: 5,
    icon: Heart,
    accent: "border-indigo-200 bg-indigo-50/40",
  },
];

export function Feedback() {
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [submitForm, setSubmitForm] = useState({
    name: "",
    role: "",
    org: "",
    rating: "5",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitForm.name && submitForm.comments) {
      setFeedbackSent(true);
      setTimeout(() => {
        setShowSubmitModal(false);
        setFeedbackSent(false);
        setSubmitForm({ name: "", role: "", org: "", rating: "5", comments: "" });
      }, 2500);
    }
  };

  return (
    <section
      id="feedback"
      className="relative py-24 sm:py-32 bg-slate-50/80 border-t border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">
              <Star className="h-3.5 w-3.5 fill-blue-600 text-blue-600" />
              Community &amp; Educator Endorsements
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Voices From <span className="text-gradient">The Field</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Hear directly from educators, administrators, and youth advocates who have witnessed
              the tangible transformation sparked by Talk2em LLC.
            </p>
          </div>
        </Reveal>

        {/* Testimonials 2x2 Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.author} delay={i * 100}>
              <figure
                className={`flex h-full flex-col justify-between rounded-3xl border bg-white p-7 sm:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover ${item.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.stars)].map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>

                  <Quote className="mt-5 h-8 w-8 text-blue-600/30" aria-hidden="true" />
                  <blockquote className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                    “{item.quote}”
                  </blockquote>
                </div>

                <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-slate-900">{item.author}</h4>
                    <p className="text-xs font-semibold text-primary">{item.role}</p>
                    <p className="text-[11px] text-slate-500">{item.organization}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Submit feedback CTA */}
        <Reveal delay={200}>
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-xs transition-colors hover:border-primary hover:text-primary"
            >
              <MessageSquarePlus className="h-4 w-4 text-primary" />
              <span>Have You Hosted Talk2em? Leave Your Review</span>
            </button>
          </div>
        </Reveal>
      </div>

      {/* Review Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl">
            {feedbackSent ? (
              <div className="py-8 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-teal-600" />
                <h3 className="font-display mt-4 text-xl font-bold text-slate-900">Thank You!</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Your feedback has been received and helps us continually serve students and
                  schools with excellence.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Submit Host / Attendee Feedback
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Name *
                    </label>
                    <input
                      required
                      value={submitForm.name}
                      onChange={(e) => setSubmitForm({ ...submitForm, name: e.target.value })}
                      placeholder="e.g. Principal Sarah Miller"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Role / Title
                      </label>
                      <input
                        value={submitForm.role}
                        onChange={(e) => setSubmitForm({ ...submitForm, role: e.target.value })}
                        placeholder="e.g. Counselor, Dean"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        School / Org
                      </label>
                      <input
                        value={submitForm.org}
                        onChange={(e) => setSubmitForm({ ...submitForm, org: e.target.value })}
                        placeholder="e.g. Lincoln High School"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Experience Rating
                    </label>
                    <select
                      value={submitForm.rating}
                      onChange={(e) => setSubmitForm({ ...submitForm, rating: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary"
                    >
                      <option value="5">★★★★★ Exceptional (5/5)</option>
                      <option value="4">★★★★☆ Very Good (4/5)</option>
                      <option value="3">★★★☆☆ Good (3/5)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Feedback / Student Response *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={submitForm.comments}
                      onChange={(e) => setSubmitForm({ ...submitForm, comments: e.target.value })}
                      placeholder="How did students react? What impact did you notice?"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-brand-gradient rounded-xl px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-glow"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
