import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso px-6 pt-16 text-ivory md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block">
              <h2 className="font-display text-4xl tracking-[0.12em]">
                AURELLE
              </h2>
              <p className="mt-1 text-[8px] tracking-[0.55em] text-champagne">
                BEAUTY
              </p>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/55">
              The art of bringing beauty to life. Creating timeless beauty
              experiences through artistry, elegance and intention.
            </p>

            <div className="mt-7 flex items-center gap-5">
              <a
                href="https://www.instagram.com/aurellebeauty/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white/65 transition-colors hover:text-champagne"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="text-white/65 transition-colors hover:text-champagne"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="text-white/65 transition-colors hover:text-champagne"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-[10px] uppercase tracking-[0.3em] text-champagne">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-white"
                >
                  Our services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="transition-colors hover:text-white"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="transition-colors hover:text-white"
                >
                  The experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[10px] uppercase tracking-[0.3em] text-champagne">
              Get in touch
            </h3>

            <p className="mb-4 text-sm leading-7 text-white/60">
              Ready to create your beauty moment?
            </p>

            <a
              href="#booking"
              className="inline-flex items-center gap-3 border-b border-champagne pb-2 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:text-champagne"
            >
              Book an appointment
              <ArrowUpRight size={14} />
            </a>

            <p className="mt-7 text-xs text-white/40">Lagos, Nigeria</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] tracking-wide text-white/40">
            © {currentYear} AURELLE BEAUTY. All rights reserved.
          </p>

          <p className="font-display text-lg italic text-champagne">
            Beauty, thoughtfully expressed.
          </p>

          <a
            href="#"
            aria-label="Back to top"
            className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
