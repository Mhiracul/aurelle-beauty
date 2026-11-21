import { useEffect, useRef } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const instagramImages = [
  {
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=85",
    alt: "Beauty portrait",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
    alt: "Editorial beauty portrait",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    alt: "Makeup inspiration",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=85",
    alt: "Beauty and portrait inspiration",
  },
];

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".instagram-image", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".instagram-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-ivory px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="contact-reveal mb-5 text-[10px] uppercase tracking-[0.4em] text-bronze">
              Let's create something beautiful
            </p>

            <h2 className="contact-reveal max-w-xl font-display text-5xl leading-[1.12] text-espresso md:text-7xl">
              Your beauty story starts <i className="text-bronze">here.</i>
            </h2>

            <p className="contact-reveal mt-7 max-w-md text-sm leading-8 text-[#76665E]">
              Whether you're preparing for your wedding day, celebrating a
              special moment, or simply ready to feel beautiful, we'd love to
              create something unforgettable with you.
            </p>

            <a
              href="#booking"
              className="contact-reveal mt-9 inline-flex items-center gap-5 border-b border-bronze pb-3 text-[10px] uppercase tracking-[0.25em] text-espresso transition-colors hover:text-bronze"
            >
              Book your appointment
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-reveal border-t border-[#D8CFC5] pt-8 lg:ml-auto lg:w-full lg:max-w-md">
            <div className="mb-9">
              <div className="mb-3 flex items-center gap-3 text-bronze">
                <MapPin size={16} />
                <span className="text-[9px] uppercase tracking-[0.3em]">
                  Location
                </span>
              </div>
              <p className="pl-7 font-display text-2xl text-espresso">
                Lagos, Nigeria
              </p>
            </div>

            <div className="mb-9">
              <div className="mb-3 flex items-center gap-3 text-bronze">
                <Mail size={16} />
                <span className="text-[9px] uppercase tracking-[0.3em]">
                  Email enquiries
                </span>
              </div>
              <a
                href="mailto:hello@aurellebeauty.com"
                className="pl-7 text-sm text-espresso transition-colors hover:text-bronze"
              >
                hello@aurellebeauty.com
              </a>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-3 text-bronze">
                <FaInstagram size={16} />{" "}
                <span className="text-[9px] uppercase tracking-[0.3em]">
                  Follow our work
                </span>
              </div>
              <a
                href="https://www.instagram.com/aurellebeauty/"
                target="_blank"
                rel="noreferrer"
                className="pl-7 text-sm text-espresso transition-colors hover:text-bronze"
              >
                @aurellebeauty
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-bronze">
                The beauty journal
              </p>
              <h3 className="font-display text-3xl text-espresso md:text-4xl">
                A glimpse into our world.
              </h3>
            </div>

            <a
              href="https://www.instagram.com/aurellebeauty/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Instagram"
              className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-espresso transition-colors hover:text-bronze sm:flex"
            >
              Instagram <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="instagram-grid grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {instagramImages.map((item, index) => (
              <a
                key={index}
                href="https://www.instagram.com/aurellebeauty/"
                target="_blank"
                rel="noreferrer"
                className="instagram-image group relative aspect-4/5 overflow-hidden bg-[#E8DED3]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/25">
                  <FaInstagram
                    size={23}
                    className="text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
