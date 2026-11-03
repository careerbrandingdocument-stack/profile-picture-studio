import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EXPERIENCE } from "@/lib/content";
import { PageHero } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Career Journey & Experience — Fátima de Diego" },
      { name: "description", content: "Career timeline: Destinus, Capgemini Engineering (Airbus Defence & Space), MAXAM and Bureau Veritas." },
      { property: "og:title", content: "Career Journey — Fátima de Diego" },
      { property: "og:description", content: "Two decades of quality leadership roles across international industry." },
    ],
  }),
  component: Experience,
});

function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageHero eyebrow="Experience" title="Career Journey & Professional Experience" />
      <section className="mx-auto max-w-5xl px-6 py-24">
        <ol className="relative border-l border-gold/60 pl-8 md:pl-12">
          {EXPERIENCE.map((r, i) => {
            const isOpen = open === i;
            return (
              <li key={r.company + r.period} className="relative mb-8">
                <span className="absolute -left-[2.45rem] top-8 h-3 w-3 rotate-45 bg-accent md:-left-[3.45rem]" />
                <div className="bg-card shadow-elegant">
                  <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 p-7 text-left">
                    <div>
                      <p className="eyebrow">{r.period}{r.location ? ` · ${r.location}` : ""}</p>
                      <h2 className="mt-2 text-2xl">{r.company}</h2>
                      <p className="mt-1 font-ui font-semibold text-foreground">{r.position}</p>
                    </div>
                    <ChevronDown className={`mt-2 h-5 w-5 shrink-0 text-accent transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="animate-in fade-in border-t border-border px-7 pb-8 pt-6">
                      <p className="italic text-muted-foreground">{r.overview}</p>
                      <h3 className="mt-6 font-ui text-sm font-bold uppercase tracking-widest text-primary">Responsibilities</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                        {r.objectives.map((o) => <li key={o} className="flex gap-3"><span className="mt-2 h-1 w-3 shrink-0 bg-gold" />{o}</li>)}
                      </ul>
                      {r.accomplishments && <>
                        <h3 className="mt-6 font-ui text-sm font-bold uppercase tracking-widest text-primary">Accomplishments</h3>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                          {r.accomplishments.map((o) => <li key={o} className="flex gap-3"><span className="mt-2 h-1 w-3 shrink-0 bg-accent" />{o}</li>)}
                        </ul>
                      </>}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {r.expertise.map((e) => <span key={e} className="border border-border px-3 py-1 font-ui text-xs text-muted-foreground">{e}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
