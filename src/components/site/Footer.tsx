import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Feedback", href: "#feedback" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram (placeholder)", icon: Instagram, href: "#" },
  { label: "Facebook (placeholder)", icon: Facebook, href: "#" },
  { label: "LinkedIn (placeholder)", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Gradient top edge */}
      <div className="bg-brand-gradient absolute inset-x-0 top-0 h-px opacity-60" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="bg-brand-gradient flex h-9 w-9 items-center justify-center rounded-xl text-sm font-extrabold text-background">
                T2
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Talk2em <span className="text-gradient">LLC</span>
              </span>
            </a>
            <p className="font-display mt-4 text-base italic text-muted-foreground">
              “Our Words, Your Wisdom”
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-aqua/50 hover:text-aqua"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="text-aqua h-4 w-4 shrink-0" aria-hidden="true" />
                <a href="mailto:brett.lasko@icloud.com" className="text-muted-foreground transition-colors hover:text-foreground">
                  brett.lasko@icloud.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-aqua h-4 w-4 shrink-0" aria-hidden="true" />
                <a href="tel:+15152384806" className="text-muted-foreground transition-colors hover:text-foreground">
                  (515) 238-4806
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 Talk2em LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
