import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/content";
import { PageHero } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Projects — Fátima de Diego" },
      { name: "description", content: "How Fátima approaches complex quality challenges: Quality Function strategy, QMS harmonization, process alignment and KPI reporting." },
      { property: "og:title", content: "Leadership & Organizational Impact — Fátima de Diego" },
      { property: "og:description", content: "Documented areas of quality leadership responsibility." },
    ],
  }),
  component: Leadership,
});

function Leadership() {
  return (
    <>
      <PageHero eyebrow="Leadership & Projects" title="Leadership, Transformation & Organizational Impact"
        intro="Documented areas of responsibility that show how Fátima approaches complex quality challenges." />
      <section className="mx-auto max-w-6xl space-y-10 px-6 py-24">
        {PROJECTS.map((p) => (
          <article key={p.n} className="grid bg-card shadow-elegant md:grid-cols-[14rem_1fr]">
            <div className="bg-primary p-8">
              <p className="font-ui text-xs font-bold uppercase tracking-widest text-gold">Project</p>
              <p className="font-display text-6xl text-primary-foreground">{p.n}</p>
            </div>
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl">{p.title}</h2>
              <p className="eyebrow mt-3">{p.org}</p>
              <dl className="mt-8 grid gap-6 md:grid-cols-2">
                {[["Challenge", p.challenge], ["Strategic Approach", p.approach], ["Leadership Contribution", p.contribution],
                  ["Outcome / Impact", "Documented area of responsibility — verified outcomes can be added here."]].map(([k, v]) => (
                  <div key={k} className="border-l-2 border-gold pl-4">
                    <dt className="font-ui text-xs font-bold uppercase tracking-widest text-primary">{k}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
