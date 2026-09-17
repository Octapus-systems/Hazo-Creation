import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import aboutCraft from "@/assets/about-craft.jpg";
import hero from "@/assets/hero-villa.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A UAE Atelier for Luxury Interiors | HAZO Creations" },
      { name: "description", content: "HAZO Creations is a UAE-based atelier delivering luxury interior design, turnkey fit-out and smart home automation under one accountable team." },
      { property: "og:title", content: "About HAZO Creations" },
      { property: "og:description", content: "A UAE atelier for luxury interiors, fit-out and automation." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { t: "Restraint", d: "We design with the discipline to leave space — for light, life and material." },
  { t: "Craft", d: "Every joint, seam and finish is detailed in-house and built by trades we trust." },
  { t: "Accountability", d: "One contract, one team, one delivery date. We carry the project, not just our scope." },
  { t: "Discretion", d: "Private clients, private homes. We protect every brief and every address." },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow"><span className="gold-line mr-4" />The Studio</p>
            <h1 className="mt-6 text-display">
              A quiet atelier for <span className="text-gold">loud</span> ambitions.
            </h1>
          </div>
          <p className="lg:col-span-4 text-lg text-muted-foreground">
            Founded in the UAE. Built around private clients, principals and
            owner-developers who demand a single point of accountability.
          </p>
        </div>
      </section>

      <section className="pb-28 md:pb-40">
        <div className="container-luxe">
          <img
            src={aboutCraft}
            alt="Designer drafting a luxury floor plan"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full aspect-[21/9] object-cover"
          />
        </div>
      </section>

      <section className="pb-28 md:pb-40">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow"><span className="gold-line mr-4" />Philosophy</p>
            <h2 className="mt-6 text-headline">Architecture you live <span className="text-gold">inside</span>.</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              HAZO Creations was founded on a simple conviction: a luxury home
              should feel as effortless as a well-tailored garment. The lighting
              adapts. The climate anticipates. The cabinetry hides what shouldn&apos;t
              be seen and reveals what should.
            </p>
            <p>
              We work as a single team of interior architects, joinery
              craftsmen, MEP engineers and certified automation specialists.
              That structure is unusual in our region — and it is the reason our
              projects finish on time, on budget and on brief.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 bg-secondary">
        <div className="container-luxe">
          <p className="eyebrow"><span className="gold-line mr-4" />Values</p>
          <h2 className="mt-6 text-headline max-w-3xl">Four principles that shape every project.</h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map((v, i) => (
              <div key={v.t} className="bg-secondary p-8 md:p-10 min-h-[260px] flex flex-col justify-between">
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold">{v.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 bg-charcoal text-warm-white">
        <div className="container-luxe flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="text-headline max-w-2xl">
            Begin with a conversation.
          </h2>
          <Button asChild variant="luxeGold" size="luxe">
            <Link to="/contact">Book Consultation <ArrowUpRight /></Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
