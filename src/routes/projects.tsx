import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { projects, categories } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Villas, Penthouses & Hospitality | HAZO Creations" },
      { name: "description", content: "Selected interior design, fit-out and automation projects across the UAE — villas, apartments, commercial offices and hospitality." },
      { property: "og:title", content: "HAZO Projects — Selected Work" },
      { property: "og:description", content: "Villas, penthouses, offices and hospitality — across the UAE." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="container-luxe">
          <p className="eyebrow"><span className="gold-line mr-4" />Portfolio</p>
          <h1 className="mt-6 text-display max-w-4xl">
            A record of <span className="text-gold">delivered</span> ambition.
          </h1>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-luxe flex flex-wrap gap-2 border-y border-border py-5">
          {categories.map((c) => (
            <Button
              key={c}
              variant="luxeFilter"
              size="sm"
              onClick={() => setFilter(c)}
              data-active={filter === c}
              className="px-5 text-xs uppercase tracking-[0.2em]"
            >
              {c}
            </Button>
          ))}
        </div>
      </section>

      <section className="pb-28 md:pb-40">
        <div className="container-luxe grid md:grid-cols-2 gap-10 md:gap-14">
          {filtered.map((p, i) => (
            <article key={p.slug} className={`group ${i % 4 === 1 || i % 4 === 2 ? "md:mt-20" : ""}`}>
              <div className="overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow !text-muted-foreground">{p.category} · {p.year}</p>
                  <ArrowUpRight className="size-5 text-gold" />
                </div>
                <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold">{p.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>
                <dl className="mt-6 grid grid-cols-3 gap-6 text-sm">
                  <div>
                    <dt className="eyebrow !text-muted-foreground/70">Location</dt>
                    <dd className="mt-2">{p.location}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow !text-muted-foreground/70">Area</dt>
                    <dd className="mt-2">{p.area}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow !text-muted-foreground/70">Services</dt>
                    <dd className="mt-2">{p.services.length}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-28 bg-charcoal text-warm-white">
        <div className="container-luxe flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="text-headline max-w-2xl">Could yours be the next?</h2>
          <Button asChild variant="luxeGold" size="luxe">
            <Link to="/contact">Book Consultation <ArrowUpRight /></Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
