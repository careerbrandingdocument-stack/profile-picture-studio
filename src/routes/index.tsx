import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, ShieldCheck, Layers, FileCheck2, BarChart3, Globe2, RefreshCcw } from "lucide-react";
import portrait from "@/assets/fatima-portrait.jpg";
import { CAPABILITIES, CV_URL, SECTORS } from "@/lib/content";
import { SectionTitle } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fátima de Diego — Head of Quality | Executive Portfolio" },
      { name: "description", content: "Strategic quality leader with 15+ years in QMS, ISO 9001, EN 9100 and regulatory compliance across aerospace, defense, energy and chemical sectors." },
      { property: "og:title", content: "Fátima de Diego — Head of Quality" },
      { property: "og:description", content: "Leading quality excellence across international industrial environments." },
    ],
  }),
  component: Index,
});

const ICONS = [ShieldCheck, Layers, FileCheck2, BarChart3, Globe2, RefreshCcw];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">Head of Quality · Quality Strategy · Regulatory Compliance</p>
            <h1 className="mt-6 text-4xl leading-[1.1] md:text-6xl">
              Leading Quality Excellence. <span className="italic text-accent">Strengthening Organizations.</span> Delivering Sustainable Performance.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Strategic quality leadership professional with 15+ years of experience developing quality management systems, strengthening regulatory compliance, and transforming organizational quality capabilities across international industrial environments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 font-ui text-xs font-bold uppercase tracking-widest">
              <Link to="/about" className="inline-flex items-center gap-2 bg-primary px-6 py-4 text-primary-foreground transition hover:bg-accent">Explore My Profile <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/experience" className="inline-flex items-center gap-2 border border-primary px-6 py-4 text-primary transition hover:bg-primary hover:text-primary-foreground">View Professional Experience</Link>
              <a href={CV_URL} download className="inline-flex items-center gap-2 px-2 py-4 text-accent hover:text-primary"><Download className="h-4 w-4" /> Download Executive CV</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -right-4 -top-4 h-full w-full border border-gold" aria-hidden />
            <img src={portrait} alt="Fátima de Diego de las Heras, Head of Quality" width={1024} height={1280}
              className="relative aspect-[4/5] w-full object-cover shadow-elegant" />
            <div className="absolute -bottom-6 -left-6 bg-primary px-6 py-5 shadow-elegant">
              <p className="font-display text-3xl text-gold">15+</p>
              <p className="font-ui text-[0.65rem] font-semibold uppercase tracking-widest text-primary-foreground">Years in quality leadership</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-primary">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-6 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/85">
          {SECTORS.map((s, i) => (
            <span key={s} className="flex items-center gap-8">{s}{i < SECTORS.length - 1 && <span className="text-gold">|</span>}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="Executive Introduction" title="Quality as a strategic lever for the business." />
          <p className="text-lg leading-relaxed text-muted-foreground">
            Fátima is a Madrid-based quality executive with experience across chemical, aeronautical, energy, defense and construction sectors. She has standardized and deployed quality management systems across dozens of subsidiaries worldwide, led international quality networks, and today defines the Quality Function strategy as Head of Quality at Destinus, a European defense manufacturer.
          </p>
        </div>
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => {
            const Icon = ICONS[i % ICONS.length]!;
            return (
              <div key={c.title} className="group bg-background p-8 transition hover:bg-card">
                <Icon className="h-7 w-7 text-accent" strokeWidth={1.4} />
                <h3 className="mt-6 text-xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-navy-gradient">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="eyebrow !text-gold">Professional Philosophy</p>
          <blockquote className="mt-8 font-display text-2xl italic leading-relaxed text-navy-foreground md:text-4xl">
            “Anticipate problems, lead teams by influence, and achieve objectives with one final goal — the full satisfaction of our customers.”
          </blockquote>
          <span className="gold-rule mx-auto mt-10" />
        </div>
      </section>
    </>
  );
}
