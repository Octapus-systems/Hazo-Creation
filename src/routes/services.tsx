import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Interior Design, Fit-Out & Automation | HAZO Creations" },
      { name: "description", content: "Twelve disciplines under one team: interior design, turnkey fit-out, villa renovation, commercial fit-out, joinery and full smart home automation across the UAE." },
      { property: "og:title", content: "HAZO Services — Interior Design, Fit-Out & Automation" },
      { property: "og:description", content: "Twelve disciplines under one team — across the UAE." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow"><span className="gold-line mr-4" />What we do</p>
            <h1 className="mt-6 text-display">
              Twelve disciplines.<br />
              <span className="text-gold">One accountable team.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 text-lg text-muted-foreground">
            From a single bespoke joinery commission to a fully automated
            12,000 sq ft villa — HAZO scales without losing the detail.
          </p>
        </div>
      </section>

      <section className="pb-28 md:pb-40">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <article
              key={s.number}
              className="group bg-background p-8 md:p-10 min-h-[280px] flex flex-col justify-between hover:bg-charcoal hover:text-warm-white transition-colors duration-500"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-sm text-muted-foreground group-hover:text-warm-white/55 transition">
                  {s.number}
                </span>
                <ArrowUpRight className="size-5 text-gold opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-warm-white/75 leading-relaxed transition">
                  {s.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-28 md:py-40 bg-secondary">
        <div className="container-luxe max-w-3xl text-center">
          <h2 className="text-headline">
            A brief in mind? <span className="text-gold">Let&apos;s talk.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us about your space, your timeline and your ambition. We&apos;ll
            respond with a preliminary direction within 48 hours.
          </p>
          <Button asChild variant="luxeLight" size="luxe" className="mt-10">
            <Link to="/contact">
              Start the conversation
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
