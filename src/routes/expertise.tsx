import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, Scale, Compass, TrendingUp, Factory } from "lucide-react";
import { EXPERTISE } from "@/lib/content";
import { PageHero } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise & Capabilities — Fátima de Diego" },
      { name: "description", content: "Quality management, regulatory compliance, strategic leadership, performance improvement and industry experience." },
      { property: "og:title", content: "Quality Leadership Expertise — Fátima de Diego" },
      { property: "og:description", content: "ISO 9001, EN 9100, audits, KPI reporting and change management." },
    ],
  }),
  component: Expertise,
});

const ICONS = [ClipboardCheck, Scale, Compass, TrendingUp, Factory];

function Expertise() {
  return (
    <>
      <PageHero eyebrow="Expertise" title="Quality Leadership & Professional Expertise" />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE.map((c, i) => {
          const Icon = ICONS[i % ICONS.length]!;
          return (
            <div key={c.code} className="group relative bg-card p-9 shadow-elegant transition hover:-translate-y-1">
              <span className="absolute right-8 top-6 font-display text-6xl text-secondary">{c.code}</span>
              <Icon className="relative h-8 w-8 text-accent" strokeWidth={1.4} />
              <p className="eyebrow relative mt-6">Category {c.code}</p>
              <h2 className="relative mt-2 text-2xl">{c.title}</h2>
              <span className="gold-rule my-5" />
              <ul className="space-y-2.5 text-sm">
                {c.items.map((x) => <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />{x}</li>)}
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
}
