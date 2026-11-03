import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/fatima-portrait.jpg";
import { CAPABILITIES, EDUCATION } from "@/lib/content";
import { PageHero, SectionTitle } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Professional Profile — Fátima de Diego" },
      { name: "description", content: "Biography of Fátima de Diego de las Heras: 15+ years of international quality leadership, QMS harmonization and ISO 9001 / EN 9100 alignment." },
      { property: "og:title", content: "Professional Profile — Fátima de Diego" },
      { property: "og:description", content: "Executive biography of a senior Head of Quality." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Me" title="Professional Profile" />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <img src={portrait} alt="Portrait of Fátima de Diego" className="aspect-[4/5] w-full object-cover shadow-elegant" />
          <p className="mt-6 font-display text-2xl text-primary">Fátima de Diego de las Heras</p>
          <p className="eyebrow mt-2">Head of Quality · Madrid</p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>With more than 15 years of professional experience, Fátima has built her career across diverse international industrial sectors — chemical, aeronautical, aerospace and defense, energy, engineering and construction.</p>
          <p>Her work centres on developing the Quality function strategically: defining policy, objectives and action plans, and designing the organizational structure, roles and governance of Quality teams.</p>
          <p>She has led the harmonization and deployment of Quality Management Systems across up to 50 subsidiaries and operations worldwide, aligning processes with ISO 9001 and EN 9100, and acting as the primary contact with national authorities and certification bodies.</p>
          <p>Fátima has defined and tracked Quality KPI reporting for executive committees, led multidisciplinary and international quality networks, and acts as a change agent for a lasting quality culture — combining proactivity, commitment and clear communication.</p>
          <div className="pt-8">
            <SectionTitle eyebrow="Education & Credentials" title="Academic foundation" />
            <ul className="space-y-3 text-base">
              {EDUCATION.map((e) => <li key={e} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />{e}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle eyebrow="Strategic Capabilities" title="How I Create Organizational Value" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <div key={c.title} className="border-t-2 border-accent bg-card p-8 shadow-elegant">
                <p className="font-display text-3xl text-gold">0{i + 1}</p>
                <h3 className="mt-4 text-xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
