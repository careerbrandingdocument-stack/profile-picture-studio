import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Download, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { NAV, CV_URL, CONTACT } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-semibold tracking-[0.12em] text-primary">FÁTIMA DE DIEGO</span>
          <span className="mt-1 font-ui text-[0.6rem] font-semibold tracking-[0.25em] text-muted-foreground">HEAD OF QUALITY</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="font-ui text-sm font-medium text-foreground/80 transition-colors hover:text-accent data-[status=active]:text-accent">
              {n.label}
            </Link>
          ))}
          <a href={CV_URL} download className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-ui text-xs font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-accent">
            <Download className="h-4 w-4" /> Download CV
          </a>
        </nav>
        <button className="lg:hidden text-primary" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
              className="block py-3 font-ui text-base text-foreground data-[status=active]:text-accent">{n.label}</Link>
          ))}
          <a href={CV_URL} download className="mt-3 inline-flex items-center gap-2 bg-primary px-4 py-3 font-ui text-xs font-bold uppercase tracking-widest text-primary-foreground">
            <Download className="h-4 w-4" /> Download CV
          </a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-navy-foreground">Fátima de Diego</p>
          <span className="gold-rule my-4" />
          <p className="text-sm text-navy-foreground/70">Head of Quality · Quality Strategy · Regulatory Compliance</p>
        </div>
        <div>
          <p className="eyebrow !text-gold mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="text-navy-foreground/80 hover:text-gold">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="space-y-3 text-sm text-navy-foreground/80">
          <p className="eyebrow !text-gold mb-4">Contact</p>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> {CONTACT.location}</p>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="h-4 w-4 text-gold" /> {CONTACT.email}</a>
          <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" /> {CONTACT.phone}</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold"><Linkedin className="h-4 w-4 text-gold" /> LinkedIn</a>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 py-6 text-center font-ui text-xs tracking-widest text-navy-foreground/50">
        © {new Date().getFullYear()} FÁTIMA DE DIEGO DE LAS HERAS
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: ReactNode }) {
  return (
    <section className="bg-navy-gradient">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="eyebrow !text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-tight !text-navy-foreground md:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-navy-foreground/75">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-4xl">{title}</h2>
      <span className="gold-rule mt-5" />
    </div>
  );
}
