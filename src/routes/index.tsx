import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Hammer, Cpu, Sparkles, Key } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import aboutCraft from "@/assets/about-craft.jpg";
import heroVilla from "@/assets/hero-villa.jpg";
import { ZoomJourney } from "@/components/site/ZoomJourney";
import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HAZO Creations — Luxury Interior Design, Fit-Out & Smart Home Automation UAE" },
      { name: "description", content: "Turnkey luxury interior design, fit-out and smart home automation across the UAE. Designing spaces. Engineering experiences." },
      { property: "og:title", content: "HAZO Creations — Luxury Interior Design, Fit-Out & Smart Home Automation UAE" },
      { property: "og:description", content: "Turnkey luxury interior design, fit-out and smart home automation across the UAE. Designing spaces. Engineering experiences." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroVilla },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "HAZO Creations",
        url: "/",
        description: "Luxury interior design, turnkey fit-out and smart home automation across the UAE.",
        areaServed: "United Arab Emirates",
        address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
      }),
    }],
  }),
  component: HomePage,
});

const stats = [
  { value: "240+", label: "Projects Delivered" },
  { value: "14", label: "Years of Craft" },
  { value: "1.4M", label: "Sq Ft Completed" },
  { value: "98%", label: "Client Retention" },
];

const processSteps = [
  { icon: Compass, name: "Discovery", note: "Brief, brand & site." },
  { icon: Sparkles, name: "Design", note: "Concept to detail." },
  { icon: Hammer, name: "Build", note: "Turnkey execution." },
  { icon: Cpu, name: "Automate", note: "Systems & control." },
  { icon: Key, name: "Deliver", note: "Handover & care." },
];

function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <SiteLayout>
      {/* HERO — cinematic scroll-zoom into the home */}
      <ZoomJourney />

      {/* STATS */}
      <section className="bg-charcoal text-warm-white">
        <div className="container-luxe pb-20 md:pb-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-warm-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-charcoal p-6">
                <p className="font-display text-3xl md:text-5xl font-black">{s.value}</p>
                <p className="mt-2 eyebrow !text-warm-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-28 md:py-40">
        <div className="container-luxe grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-5">
            <p className="eyebrow"><span className="gold-line mr-4" />The HAZO Method</p>
            <h2 className="mt-6 text-headline">
              Concept &nbsp;·&nbsp; Design &nbsp;·&nbsp; Build &nbsp;·&nbsp;
              <span className="text-gold">Automate</span> &nbsp;·&nbsp; Deliver
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-lg text-muted-foreground leading-relaxed">
            From the first sketch to the final scene programmed into your home,
            HAZO operates as one team. No handoffs. No vendor finger-pointing. Just
            five disciplined stages that turn ambition into a delivered residence.
          </p>
        </div>

        <div className="container-luxe mt-20 grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
          {processSteps.map((s, i) => (
            <div key={s.name} className="bg-background p-8 md:p-10 group hover-lift">
              <div className="flex items-center justify-between">
                <s.icon className="size-6 text-gold" strokeWidth={1.5} />
                <span className="font-display text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <p className="mt-12 font-display text-xl font-bold">{s.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-28 md:py-40 bg-charcoal text-warm-white">
        <div className="container-luxe">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <p className="eyebrow"><span className="gold-line mr-4" />Selected Work</p>
              <h2 className="mt-6 text-headline">Featured Projects</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm hover:text-gold transition">
              All Projects <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-10 md:gap-14">
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                to="/projects"
                className={`group block ${i % 3 === 1 ? "md:mt-20" : ""}`}
              >
                <div className="overflow-hidden bg-graphite">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1600}
                    height={1200}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow !text-warm-white/50">{p.category} · {p.location}</p>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold">{p.title}</h3>
                  </div>
                  <ArrowUpRight className="mt-2 size-5 text-gold transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT / TRUST */}
      <section className="py-28 md:py-40">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <img
              src={aboutCraft}
              alt="Designer drafting a luxury floor plan"
              loading="lazy"
              width={1600}
              height={1200}
              className="w-full aspect-[5/4] object-cover"
            />
          </div>
          <div className="lg:col-span-6">
            <p className="eyebrow"><span className="gold-line mr-4" />Why HAZO</p>
            <h2 className="mt-6 text-headline">
              An atelier engineered for multi&#8209;million dirham ambition.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              HAZO Creations brings together interior architects, joinery
              craftsmen, MEP engineers and certified automation specialists
              under one roof — so the brief you sign on day one is the home
              you walk into on handover day.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-px bg-border">
              {[
                ["One team", "Design, build, automate."],
                ["Fixed price", "No surprises after sign-off."],
                ["UAE-licensed", "DM, DCD & Civil Defence approvals."],
                ["Post-handover", "12-month service contract."],
              ].map(([t, d]) => (
                <div key={t} className="bg-background p-6">
                  <dt className="font-display font-bold">{t}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-28 md:py-40 bg-secondary">
        <div className="container-luxe max-w-4xl text-center">
          <p className="eyebrow"><span className="gold-line mr-4" />Client Voice<span className="gold-line ml-4" /></p>
          <blockquote className="mt-10 font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            “HAZO delivered a home that feels both effortless to live in and
            <span className="text-gold"> impossible to leave</span>.”
          </blockquote>
          <p className="mt-10 eyebrow !text-foreground/55">
            Private Client · Emirates Hills Villa
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 bg-charcoal text-warm-white">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-end">
          <h2 className="lg:col-span-8 text-display">
            Let&apos;s design <span className="text-gold">your</span> next address.
          </h2>
          <div className="lg:col-span-4 lg:text-right">
            <Button asChild variant="luxeGold" size="luxe">
              <Link to="/contact">
                Start a Project
                <ArrowUpRight />
              </Link>
            </Button>
            <p className="mt-6 text-sm text-warm-white/55">Dubai · Abu Dhabi · Sharjah · UAE-wide</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
