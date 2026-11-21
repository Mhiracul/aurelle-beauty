import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Bridal from "../assets/brida.jpeg";
import Soft from "../assets/soft.jpeg";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Bridal Glam",
    subtitle: "For your most unforgettable moments.",
    description:
      "Thoughtfully curated bridal beauty for traditional weddings, white weddings and every beautiful moment in between.",
    image: Bridal,
    tag: "THE BRIDAL EXPERIENCE",
  },
  {
    number: "02",
    title: "Soft Glam",
    subtitle: "Effortless beauty. Elevated.",
    description:
      "A refined, radiant finish that enhances your natural features without taking away your individuality.",
    image: Soft,
    tag: "EVERYDAY ELEGANCE",
  },
  {
    number: "03",
    title: "Full Glam",
    subtitle: "Make an entrance. Own the moment.",
    description:
      "Beautifully sculpted, expressive makeup for celebrations, special occasions and statement moments.",
    image: "https://i.ibb.co/zTyzxxQf/port-beauty-1.jpg",
    tag: "THE SIGNATURE LOOK",
  },
  {
    number: "04",
    title: "Editorial Beauty",
    subtitle: "Beauty without boundaries.",
    description:
      "Creative makeup artistry for fashion campaigns, photoshoots, content productions and creative projects.",
    image:
      "https://lalalandcosmattecs.com/cdn/shop/files/Woman_with_bronze_makeup_and_skin_against_a_brown_background.png?v=1769362700&width=1946",
    tag: "CREATIVE EXPRESSION",
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-intro", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".service-card", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-espresso px-6 py-28 text-ivory md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-350]">
        <div className="services-intro mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-champagne">
              02 — The Artistry
            </p>

            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl lg:text-[88px]">
              Beauty, curated
              <br />
              <span className="italic text-champagne">for you.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-8 text-white/60">
            Every occasion deserves its own expression of beauty. Discover
            thoughtfully curated artistry designed to make you feel
            extraordinary.
          </p>
        </div>

        <div className="services-grid grid gap-x-7 gap-y-14 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service.number} className="service-card group">
              <div className="relative overflow-hidden bg-[#49352C]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-95 w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 md:h-130"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

                <span className="absolute left-6 top-6 text-[10px] tracking-[0.25em] text-white">
                  {service.tag}
                </span>

                <span className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 group-hover:border-champagne group-hover:bg-champagne group-hover:text-espresso">
                  <ArrowUpRight size={19} />
                </span>
              </div>

              <div className="flex items-start justify-between border-b border-white/20 py-7">
                <div className="max-w-[85%]">
                  <p className="mb-3 text-[9px] tracking-[0.3em] text-champagne">
                    {service.number} — {service.subtitle}
                  </p>

                  <h3 className="font-display text-4xl text-ivory md:text-5xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center">
          <p className="max-w-md font-display text-3xl italic text-champagne md:text-4xl">
            Your moment deserves beautiful artistry.
          </p>

          <a
            href="#booking"
            className="inline-flex items-center gap-4 border border-champagne/60 px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition hover:bg-champagne hover:text-espresso"
          >
            Explore booking
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
