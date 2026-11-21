import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "I want to feel like the most beautiful version of myself, and that's exactly the experience I want every Aurelle client to have.",
    name: "The Bridal Experience",
    occasion: "Bridal beauty",
    initials: "A.",
  },
  {
    quote:
      "There is something special about the little details. The preparation, the artistry and the final look should all feel intentional.",
    name: "The Soft Glam Edit",
    occasion: "Soft glam",
    initials: "B.",
  },
  {
    quote:
      "Makeup is more than a finished look. It is the confidence that comes with knowing every detail has been thoughtfully considered.",
    name: "The Editorial Muse",
    occasion: "Editorial beauty",
    initials: "C.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const active = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-intro", {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".testimonial-panel", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-panel",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="overflow-hidden bg-ivory px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-350">
        <div className="testimonial-intro mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-bronze">
              05 — The Words
            </p>

            <h2 className="font-display text-5xl leading-[1.05] text-espresso md:text-7xl lg:text-[88px]">
              Beauty is felt.
              <br />
              <span className="italic text-bronze">Memories remain.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-8 text-espresso/60">
            Every beauty experience should leave you with more than a beautiful
            reflection. It should leave you with a feeling worth remembering.
          </p>
        </div>

        {/* Testimonial panel */}
        <div className="testimonial-panel relative overflow-hidden bg-wine px-7 py-16 text-ivory md:px-20 md:py-24">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-16 h-60 w-60 rounded-full border border-white/10" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <Quote size={42} strokeWidth={1} className="text-champagne" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
                AURELLE JOURNAL
              </span>
            </div>

            <div
              key={activeIndex}
              className="min-h-65 pt-14 md:min-h-72.5 md:pt-20"
            >
              <p className="max-w-5xl font-display text-3xl leading-[1.4] text-white md:text-5xl lg:text-6xl">
                "{active.quote}"
              </p>

              <div className="mt-12 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/50 font-display text-xl text-champagne">
                  {active.initials}
                </div>

                <div>
                  <p className="text-sm tracking-wide text-white">
                    {active.name}
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/50">
                    {active.occasion}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-7">
              <div className="flex items-center gap-3">
                {testimonials.map((item, index) => (
                  <button
                    key={item.initials}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show sample ${index + 1}`}
                    aria-current={activeIndex === index}
                    className={`h-0.75 transition-all duration-300 ${
                      activeIndex === index
                        ? "w-12 bg-champagne"
                        : "w-5 bg-white/30 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-espresso"
                >
                  <ArrowLeft size={17} />
                </button>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-espresso"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer for portfolio presentation */}
        <p className="mt-5 text-center text-[9px] uppercase tracking-[0.15em] text-espresso/40">
          Demonstration content — sample testimonials, not verified client
          reviews.
        </p>

        <div className="mt-20 flex flex-col items-center text-center">
          <p className="text-[9px] uppercase tracking-[0.35em] text-bronze">
            Your story could be next
          </p>

          <h3 className="mt-5 font-display text-4xl text-espresso md:text-6xl">
            Let's create something beautiful.
          </h3>

          <a
            href="#booking"
            className="mt-9 inline-flex items-center gap-4 bg-espresso px-8 py-5 text-[10px] uppercase tracking-[0.2em] text-ivory transition hover:bg-wine"
          >
            Book your experience
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
