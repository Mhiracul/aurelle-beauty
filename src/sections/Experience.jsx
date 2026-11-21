import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experienceSteps = [
  {
    number: "01",
    title: "The Conversation",
    description:
      "Every beautiful experience begins with understanding you. We discuss your occasion, preferences, inspiration and desired look.",
  },
  {
    number: "02",
    title: "The Preparation",
    description:
      "From skin preparation to thoughtful product selection, every detail is considered to create the perfect canvas.",
  },
  {
    number: "03",
    title: "The Artistry",
    description:
      "With a thoughtful eye and a creative hand, your look comes to life through carefully considered techniques and details.",
  },
  {
    number: "04",
    title: "The Reveal",
    description:
      "The finishing touches, the final reflection and that beautiful feeling of being completely yourself.",
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-heading", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".experience-photo", {
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-photo",
          start: "top 80%",
        },
      });

      gsap.from(".experience-step", {
        x: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-steps",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="overflow-hidden bg-espresso px-6 py-28 text-ivory md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-350">
        {/* Heading */}
        <div className="experience-heading mb-20 text-center">
          <p className="mb-7 text-[10px] uppercase tracking-[0.4em] text-champagne">
            04 — Beyond the Makeup
          </p>

          <h2 className="font-display text-5xl leading-[1.1] md:text-7xl lg:text-[100px]">
            More than a look.
            <br />
            <span className="italic text-champagne">An experience.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-white/55">
            We believe the beauty experience should feel just as extraordinary
            as the final result. Thoughtful, personal and beautifully
            intentional.
          </p>
        </div>

        {/* Image and process */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Editorial image */}
          <div className="experience-photo relative">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=90"
                alt="Professional makeup artistry in progress"
                loading="lazy"
                className="h-120 w-full object-cover object-center md:h-170"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                  The beauty of being you
                </p>
                <p className="mt-3 font-display text-4xl italic text-white md:text-5xl">
                  Every detail matters.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -right-3 flex h-24 w-24 items-center justify-center rounded-full border border-champagne/50 bg-espresso md:-right-8 md:h-32 md:w-32">
              <div className="text-center">
                <p className="font-display text-3xl text-champagne md:text-4xl">
                  A.
                </p>
                <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/60">
                  Beauty House
                </p>
              </div>
            </div>
          </div>

          {/* Experience stages */}
          <div className="experience-steps flex flex-col justify-center">
            {experienceSteps.map((step, index) => (
              <div
                key={step.number}
                className="experience-step group border-b border-white/15 py-8 first:border-t"
              >
                <div className="flex items-start gap-6 md:gap-9">
                  <span className="pt-2 text-[10px] tracking-[0.2em] text-champagne">
                    {step.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-display text-3xl text-ivory transition-colors duration-300 group-hover:text-champagne md:text-4xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
                      {step.description}
                    </p>
                  </div>

                  <ArrowDownRight
                    size={20}
                    className="mt-2 text-champagne/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </div>
              </div>
            ))}

            <a
              href="#booking"
              className="mt-10 inline-flex w-fit items-center gap-4 border border-champagne/60 px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition hover:bg-champagne hover:text-espresso"
            >
              Begin your experience
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-36 border-t border-white/15 pt-10 text-center">
          <p className="font-display text-3xl leading-relaxed text-white/80 md:text-5xl">
            Not to transform who you are,
            <br />
            but to celebrate{" "}
            <span className="italic text-champagne">everything you are.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
