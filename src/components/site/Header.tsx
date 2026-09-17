import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border text-foreground"
          : "bg-gradient-to-b from-charcoal/70 to-transparent text-warm-white"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-lg font-black tracking-tight">
            HAZO
          </span>
          <span className="gold-line" />
          <span className={`eyebrow group-hover:!text-gold transition-colors ${scrolled ? "!text-foreground/60" : "!text-warm-white/70"}`}>
            Creations
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-sm font-medium transition-colors relative py-1 ${
                scrolled
                  ? "text-foreground/75 hover:text-foreground"
                  : "text-warm-white/80 hover:text-warm-white"
              }`}
              activeOptions={{ exact: n.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <Button asChild variant="luxe" className="hidden min-h-11 px-5 py-2.5 md:inline-flex">
          <Link to="/contact">Book Consultation</Link>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container-luxe py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-lg font-display py-2"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="luxe" size="luxe" className="mt-2 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>Book Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
