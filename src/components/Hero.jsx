import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from(".hero-image", {
          scale: 1.15,
          duration: 2,
        })
        .from(
          ".hero-label",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=1.1",
        )
        .from(
          ".hero-title",
          {
            y: 70,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.6",
        )
        .from(
          ".hero-description, .hero-actions",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.5",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-espresso"
    >
      {/* Background image */}

      <div
        className="hero-image absolute inset-0 bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1779181668325-6f918a73bb54?auto=format&fit=crop&fm=jpg&q=90&w=2400')",
          backgroundPosition: "center 35%",
        }}
      />

      {/* Cinematic overlays */}

      <div className="absolute inset-0 bg-[#21130f]/25" />

      <div className="absolute inset-0 bg-linear-to-r from-[#21130f]/85 via-[#21130f]/35 to-transparent" />

      <div className="absolute inset-0 bg-linear-to-t from-[#21130f]/75 via-transparent to-[#21130f]/10" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-24 pt-40 md:px-12 md:pb-32">
        <div className="max-w-4xl">
          <p className="hero-label mb-7 text-[10px] uppercase tracking-[0.4em] text-champagne md:text-xs">
            The Luxury Beauty Experience · Est. 2026
          </p>

          <h1 className="hero-title font-display text-6xl leading-[0.95] text-white sm:text-7xl md:text-8xl lg:text-[120px]">
            Where beauty
            <br />
            becomes <span className="italic text-champagne">art.</span>
          </h1>

          <p className="hero-description mt-8 max-w-md text-sm leading-7 text-white/75 md:text-base">
            An intimate expression of elegance, confidence and timeless beauty.
            Discover the art of looking and feeling extraordinary.
          </p>

          <div className="hero-actions mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#portfolio"
              className="group flex items-center gap-4 bg-ivory px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-espresso transition hover:bg-champagne"
            >
              Explore our artistry
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#booking"
              className="border-b border-white/60 pb-2 text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-champagne hover:text-champagne"
            >
              Book an experience
            </a>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-24 flex items-end justify-between border-t border-white/30 pt-6">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">
              Based in
            </p>
            <p className="mt-2 text-xs tracking-wider text-white">
              Lagos, Nigeria
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/60">
              Scroll to discover
            </span>
            <ArrowDown size={15} className="text-champagne" />
          </div>

          <p className="text-[9px] tracking-[0.2em] text-white/60">01 — 06</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
