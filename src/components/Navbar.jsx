import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Artistry", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 z-50 w-full px-6 md:px-12">
      <nav className="mx-auto flex h-24 max-w-[1600px] items-center justify-between border-b border-white/20">
        <a
          href="#home"
          className="text-2xl font-display tracking-wider text-white"
        >
          AURELLE<span className="text-champagne">.</span>
          <span className="block text-[8px] tracking-[0.45em] text-white/70">
            BEAUTY HOUSE
          </span>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.18em] text-white/80 transition hover:text-champagne"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#booking"
          className="hidden items-center gap-3 border border-white/50 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-espresso lg:flex"
        >
          Book an appointment
          <ArrowUpRight size={14} />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 top-24 flex w-full flex-col gap-7 bg-espresso px-8 py-10 lg:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-sm text-champagne"
          >
            Book an appointment <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
