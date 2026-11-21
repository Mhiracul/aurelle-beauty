import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-label, .about-heading, .about-copy", {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-image-main", {
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image-main",
          start: "top 85%",
        },
      });

      gsap.from(".about-image-small", {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image-small",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-ivory px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-350">
        {/* Section introduction */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="about-label mb-6 text-[10px] uppercase tracking-[0.35em] text-bronze">
              01 — The Aurelle Philosophy
            </p>

            <h2 className="about-heading font-display text-5xl leading-[1.05] text-espresso md:text-7xl lg:text-[90px]">
              Beauty is
              <br />
              an <span className="italic text-bronze">expression.</span>
            </h2>
          </div>

          <div className="about-copy max-w-lg lg:ml-auto">
            <p className="text-sm leading-8 text-espresso/70 md:text-base">
              At Aurelle, we believe beauty is more than what meets the eye. It
              is a feeling, an experience and a personal expression of
              confidence.
            </p>

            <p className="mt-5 text-sm leading-8 text-espresso/70 md:text-base">
              Every brushstroke is intentional. Every detail is considered. We
              create beauty experiences that celebrate individuality while
              embracing timeless elegance.
            </p>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-3 border-b border-bronze pb-3 text-[10px] uppercase tracking-[0.2em] text-espresso transition hover:gap-5"
            >
              Discover our approach
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Editorial image composition */}
        <div className="relative grid gap-8 md:grid-cols-12 md:gap-5">
          <div className="about-image-main relative md:col-span-7">
            <div className="overflow-hidden">
              <img
                src="https://i.ibb.co/zTyzxxQf/port-beauty-1.jpg"
                alt="Beauty editorial portrait"
                className="h-120 w-full object-cover object-center transition-transform duration-1000 hover:scale-105 md:h-175"
              />
            </div>

            <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-espresso/50">
              Beauty in every detail — Aurelle editorial
            </p>
          </div>

          <div className="relative flex flex-col justify-end md:col-span-5 md:pb-16">
            <div className="about-image-small relative z-10 ml-auto w-[85%] overflow-hidden md:-ml-16 md:mr-0 md:w-[90%]">
              <img
                src="https://lalalandcosmattecs.com/cdn/shop/files/Woman_with_bronze_makeup_and_skin_against_a_brown_background.png?v=1769362700&width=1946"
                alt="Professional beauty artistry"
                className="h-75 w-full object-cover transition-transform duration-1000 hover:scale-105 md:h-107.5"
              />
            </div>

            <div className="mt-10 md:ml-10">
              <p className="font-display text-4xl italic leading-tight text-bronze md:text-5xl">
                "Elegance is found in the details."
              </p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-espresso/50">
                The Aurelle Beauty Philosophy
              </p>
            </div>
          </div>
        </div>

        {/* Signature brand statement */}
        <div className="mt-28 border-t border-espresso/15 pt-8 md:mt-40">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="text-[9px] uppercase tracking-[0.3em] text-espresso/50">
              A celebration of individuality
            </p>

            <h3 className="font-display text-3xl text-espresso md:text-5xl">
              Your beauty. Your essence.{" "}
              <span className="italic text-bronze">Your art.</span>
            </h3>

            <span className="text-[10px] tracking-[0.2em] text-espresso/50">
              A — 01
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
