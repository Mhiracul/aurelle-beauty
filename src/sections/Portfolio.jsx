import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All Works",
  "Bridal",
  "Soft Glam",
  "Full Glam",
  "Editorial",
];

const portfolioItems = [
  {
    id: 1,
    category: "Bridal",
    title: "The Modern Bride",
    subtitle: "Timeless bridal elegance",
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    category: "Soft Glam",
    title: "Golden Hour",
    subtitle: "Soft, radiant beauty",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    category: "Full Glam",
    title: "The Statement",
    subtitle: "Bold and beautifully defined",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 4,
    category: "Editorial",
    title: "Beyond Beauty",
    subtitle: "An artistic expression",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 5,
    category: "Bridal",
    title: "A Timeless Affair",
    subtitle: "The bridal experience",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 6,
    category: "Full Glam",
    title: "Golden Muse",
    subtitle: "Confidence in every detail",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=90",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [selectedImage, setSelectedImage] = useState(null);

  const sectionRef = useRef(null);

  const filteredItems =
    activeCategory === "All Works"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-intro", {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".portfolio-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);

      if (event.key === "ArrowRight") {
        setSelectedImage((current) => {
          if (!current) return null;
          const index = filteredItems.findIndex(
            (item) => item.id === current.id,
          );
          return filteredItems[(index + 1) % filteredItems.length];
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage((current) => {
          if (!current) return null;
          const index = filteredItems.findIndex(
            (item) => item.id === current.id,
          );
          return filteredItems[
            (index - 1 + filteredItems.length) % filteredItems.length
          ];
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, filteredItems]);

  const changeImage = (direction) => {
    const index = filteredItems.findIndex(
      (item) => item.id === selectedImage.id,
    );

    const nextIndex =
      (index + direction + filteredItems.length) % filteredItems.length;

    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="bg-ivory px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-350">
        {/* Introduction */}
        <div className="portfolio-intro mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-bronze">
              03 — The Gallery
            </p>

            <h2 className="font-display text-5xl leading-[1.05] text-espresso md:text-7xl lg:text-[88px]">
              A canvas of
              <br />
              <span className="italic text-bronze">beautiful moments.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-8 text-espresso/65">
            Every face tells a different story. Explore our collection of beauty
            expressions, thoughtfully created with artistry and intention.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-x-8 gap-y-4 border-b border-espresso/15 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-[10px] uppercase tracking-[0.17em] transition-colors ${
                activeCategory === category
                  ? "border-b border-bronze pb-2 text-bronze"
                  : "text-espresso/50 hover:text-espresso"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="portfolio-grid grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`portfolio-card group relative block w-full overflow-hidden text-left ${
                index % 3 === 1 ? "md:mt-16" : ""
              }`}
            >
              <div className="relative overflow-hidden bg-champagne">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-62.5 w-full object-cover transition-transform duration-1000 group-hover:scale-110 sm:h-87.5 md:h-120"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ivory text-espresso opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <div className="flex items-start justify-between gap-2 py-5">
                <div>
                  <p className="mb-2 text-[8px] uppercase tracking-[0.25em] text-bronze">
                    {item.category}
                  </p>

                  <h3 className="font-display text-xl text-espresso md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] text-espresso/50">
                    {item.subtitle}
                  </p>
                </div>

                <span className="text-[9px] text-espresso/40">
                  0{index + 1}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Gallery footer */}
        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-espresso/15 pt-8 sm:flex-row sm:items-center">
          <p className="font-display text-3xl italic text-bronze">
            Beauty worth remembering.
          </p>

          <a
            href="#booking"
            className="inline-flex items-center gap-3 border border-espresso/30 px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition hover:bg-espresso hover:text-ivory"
          >
            Create your moment
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#17100D]/95 p-5 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="absolute right-6 top-6 text-white transition hover:text-champagne"
          >
            <X size={28} />
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              changeImage(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 text-white md:left-10"
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="flex max-h-[85vh] max-w-4xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[72vh] max-w-full object-contain"
            />

            <div className="mt-5 text-center">
              <p className="text-[9px] uppercase tracking-[0.3em] text-champagne">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 font-display text-3xl text-white">
                {selectedImage.title}
              </h3>
            </div>
          </div>

          <button
            onClick={(event) => {
              event.stopPropagation();
              changeImage(1);
            }}
            aria-label="Next image"
            className="absolute right-3 text-white md:right-10"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
