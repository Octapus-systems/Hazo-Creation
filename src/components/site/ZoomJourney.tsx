import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import zoom1 from "@/assets/zoom-1-exterior.jpg";
import zoom2 from "@/assets/zoom-2-foyer.jpg";
import zoom3 from "@/assets/zoom-3-living.jpg";
import zoom4 from "@/assets/zoom-4-detail.jpg";
import { Button } from "@/components/ui/button";

/**
 * Cinematic scroll-driven "zoom into the home" hero.
 * Uses an eased progress (--p) so the camera glides seamlessly between
 * each of the four layered rooms rather than snapping between stops.
 */

const layers = [
  { src: zoom1, eyebrow: "Approach", title: "A residence, waiting." },
  { src: zoom2, eyebrow: "Enter", title: "The threshold of craft." },
  { src: zoom3, eyebrow: "Inhabit", title: "Space becomes experience." },
  { src: zoom4, eyebrow: "Automate", title: "Every detail, at your fingertip." },
];

// smoothstep — removes linear feel, gives cinematic ease in/out at every stage boundary
const smooth = (t: number) => t * t * (3 - 2 * t);

export function ZoomJourney() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    let raf = 0;
    let current = 0;
    let target = 0;

    const measure = () => {
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      target = total > 0 ? scrolled / total : 0;
    };

    const tick = () => {
      // lerp toward target for silky momentum
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0002) current = target;

      // ease each per-stage segment individually so the "speed ramps"
      // gently through every room instead of gliding uniformly
      const segCount = layers.length - 1;
      const seg = Math.min(Math.floor(current * segCount), segCount - 1);
      const local = current * segCount - seg;
      const eased = (seg + smooth(local)) / segCount;

      stage.style.setProperty("--p", eased.toFixed(4));

      if (Math.abs(target - current) > 0.0002) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onScroll = () => {
      measure();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    measure();
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={trackRef}
      className="relative bg-charcoal text-warm-white"
      style={{ height: "500vh" }}
      aria-label="Journey into a HAZO home"
    >
      <div
        ref={stageRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ ["--p" as string]: "0" }}
      >
        {/* Layered zoom images */}
        {layers.map((layer, i) => (
          <ZoomLayer
            key={layer.src}
            index={i}
            total={layers.length}
            src={layer.src}
            alt={layer.title}
          />
        ))}

        {/* Cinematic wash — darker at edges so text is always legible */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/10 to-charcoal/90" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(15,15,16,0.75) 100%)",
          }}
        />

        {/* Hero copy — fades on first stage */}
        <div className="absolute inset-x-0 top-0 z-30 pt-32 md:pt-40 pointer-events-none">
          <div className="container-luxe">
            <p
              className="eyebrow"
              style={{
                opacity: "clamp(0, calc(1 - var(--p) * 5), 1)",
                transform: "translateY(calc(var(--p) * -20px))",
              }}
            >
              <span className="gold-line mr-4" />
              Scroll to enter
            </p>
            <h1
              className="mt-6 max-w-5xl text-display drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
              style={{
                opacity: "clamp(0, calc(1 - var(--p) * 4), 1)",
                transform: "translateY(calc(var(--p) * -40px))",
              }}
            >
              Designing Spaces.
              <br />
              <span className="text-gold">Engineering</span> Experiences.
            </h1>
          </div>
        </div>

        {/* Per-stage captions */}
        <div className="absolute inset-x-0 bottom-0 z-30 pb-20 md:pb-28 pointer-events-none">
          <div className="container-luxe relative h-40 md:h-48">
            {layers.map((l, i) => (
              <StageCaption
                key={l.title}
                index={i}
                total={layers.length}
                eyebrow={l.eyebrow}
                title={l.title}
              />
            ))}
          </div>
        </div>

        {/* Final CTA — appears at the end of the journey */}
        <div
          className="absolute inset-x-0 bottom-10 md:bottom-14 z-40"
          style={{
            opacity: "clamp(0, calc((var(--p) - 0.82) * 6), 1)",
            transform: "translateY(calc((1 - var(--p)) * 20px))",
            pointerEvents: "auto",
          }}
        >
          <div className="container-luxe flex flex-wrap gap-4">
            <Button asChild variant="luxeGold" size="luxe">
              <Link to="/projects">
                View Projects
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="luxeOutline" size="luxe">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Progress rail */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-3">
          {layers.map((_, i) => (
            <span
              key={i}
              className="block w-px"
              style={{
                height: "44px",
                background: `linear-gradient(to bottom, var(--color-gold) calc((var(--p) * ${layers.length} - ${i}) * 100%), rgba(248,247,244,0.25) 0)`,
              }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className="absolute left-1/2 bottom-4 -translate-x-1/2 z-30 text-[10px] tracking-[0.4em] text-warm-white/70 uppercase"
          style={{ opacity: "clamp(0, calc(1 - var(--p) * 6), 1)" }}
        >
          Scroll ↓
        </div>
      </div>
    </section>
  );
}

function ZoomLayer({
  index,
  total,
  src,
  alt,
}: {
  index: number;
  total: number;
  src: string;
  alt: string;
}) {
  // local ∈ [-index, total-1-index]. Scale ramps exponentially so the camera
  // accelerates as it "falls" into each room, matching the eased --p.
  const style: React.CSSProperties = {
    ["--local" as string]: `calc(var(--p) * ${total - 1} - ${index})`,
    // scale = 0.85 + 1.15 * 2^local  → grows through & past the layer
    transform:
      "scale(calc(0.85 + pow(2, var(--local)) * 0.6))",
    opacity:
      "clamp(0, calc(1 - abs(var(--local)) * 1.05), 1)",
    transformOrigin: "center 52%",
    willChange: "transform, opacity",
    filter: "brightness(0.92)",
  };
  return (
    <img
      src={src}
      alt={alt}
      width={1920}
      height={1280}
      loading={index === 0 ? "eager" : "lazy"}
      className="absolute inset-0 size-full object-cover"
      style={style}
    />
  );
}

function StageCaption({
  index,
  total,
  eyebrow,
  title,
}: {
  index: number;
  total: number;
  eyebrow: string;
  title: string;
}) {
  // Only fully visible when --p * (total-1) is near `index`
  const style: React.CSSProperties = {
    ["--local" as string]: `calc(var(--p) * ${total - 1} - ${index})`,
    opacity: "clamp(0, calc(1 - abs(var(--local)) * 1.8), 1)",
    transform: "translateY(calc(var(--local) * 24px))",
  };
  return (
    <div className="absolute inset-x-0 bottom-0" style={style}>
      <p className="eyebrow">
        <span className="gold-line mr-4" />
        {eyebrow} · 0{index + 1} / 0{total}
      </p>
      <p className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tight max-w-2xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
        {title}
      </p>
    </div>
  );
}
