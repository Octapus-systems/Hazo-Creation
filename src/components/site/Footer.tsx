import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="container-luxe py-20">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl font-black">HAZO</span>
              <span className="gold-line" />
              <span className="eyebrow">Creations</span>
            </div>
            <p className="mt-6 max-w-md text-warm-white/65 leading-relaxed">
              Turnkey interior design, fit-out and smart home automation for
              the UAE&apos;s most discerning residences, offices and hospitality
              spaces.
            </p>
            <p className="mt-8 eyebrow !text-warm-white/40">Dubai · Abu Dhabi</p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-gold transition">Services</Link></li>
              <li><Link to="/projects" className="hover:text-gold transition">Projects</Link></li>
              <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Get in touch</p>
            <ul className="space-y-3 text-sm text-warm-white/70">
              <li>hello@hazocreations.ae</li>
              <li>+971 4 000 0000</li>
              <li>Business Bay, Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-warm-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-warm-white/50">
          <p>© {new Date().getFullYear()} HAZO Creations. All rights reserved.</p>
          <p className="eyebrow !text-warm-white/40">Designing Spaces. Engineering Experiences.</p>
        </div>
      </div>
    </footer>
  );
}
