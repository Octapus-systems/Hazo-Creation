import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Consultation | HAZO Creations" },
      { name: "description", content: "Speak with HAZO Creations about your villa, apartment, office or hospitality project. Dubai · Abu Dhabi · UAE-wide." },
      { property: "og:title", content: "Contact HAZO Creations" },
      { property: "og:description", content: "Book a luxury interior consultation across the UAE." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-charcoal text-warm-white">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow"><span className="gold-line mr-4" />Get in touch</p>
            <h1 className="mt-6 text-display">
              Let&apos;s design <span className="text-gold">together</span>.
            </h1>
          </div>
          <p className="lg:col-span-4 text-lg text-warm-white/70">
            Share a few details about your project and our principal will be in
            touch within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-luxe grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-gold p-10 text-center">
                <p className="eyebrow">Message received</p>
                <h2 className="mt-6 font-display text-3xl font-bold">Thank you.</h2>
                <p className="mt-4 text-muted-foreground">
                  Our team will respond within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Full name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Project location" name="location" placeholder="e.g. Dubai Hills" />
                </div>
                <SelectField label="Project type" name="type" options={[
                  "Villa Renovation","Apartment Fit-Out","New Villa Interior","Office / Commercial","Hospitality","Home Automation Only","Other",
                ]} />
                <TextareaField label="Tell us about your project" name="message" />
                <Button
                  type="submit"
                  variant="luxeLight"
                  size="luxe"
                >
                  Send enquiry <ArrowUpRight />
                </Button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 lg:pl-12 lg:border-l border-border space-y-10">
            <ContactRow icon={Phone} label="Call" value="+971 4 000 0000" href="tel:+97140000000" />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="+971 50 000 0000" href="https://wa.me/971500000000" />
            <ContactRow icon={Mail} label="Email" value="hello@hazocreations.ae" href="mailto:hello@hazocreations.ae" />
            <ContactRow icon={MapPin} label="Studio" value="Business Bay, Dubai, UAE" />

            <div className="aspect-[4/3] bg-secondary overflow-hidden">
              <iframe
                title="HAZO Creations location"
                src="https://www.google.com/maps?q=Business+Bay+Dubai&output=embed"
                className="w-full h-full grayscale contrast-110"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="eyebrow !text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-gold transition-colors"
      />
    </label>
  );
}

function TextareaField({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="eyebrow !text-muted-foreground">{label}</span>
      <textarea
        name={name}
        rows={5}
        className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-gold transition-colors resize-none"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="eyebrow !text-muted-foreground">{label}</span>
      <select
        name={name}
        className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-base focus:outline-none focus:border-gold transition-colors"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-5 group">
      <Icon className="mt-1 size-5 text-gold" strokeWidth={1.5} />
      <div>
        <p className="eyebrow !text-muted-foreground">{label}</p>
        <p className="mt-2 font-display text-xl font-bold group-hover:text-gold transition">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
