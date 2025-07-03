import { mySocials } from "../constants";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="relative mt-20">
      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-neutral-800 hover:bg-neutral-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-neutral-600"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-neutral-300" />
        </button>
      )}

      {/* Footer Content */}
      <section className="flex flex-col gap-6 pb-8 pt-12 text-sm text-neutral-400 c-space border-t border-neutral-800">
        <div className="container mx-auto px-4">
          {/* Social Links */}
          <div className="flex justify-center gap-5 mb-6">
            {mySocials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300 group"
                aria-label={social.name}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href="#"
              className="hover:text-neutral-300 transition-colors duration-300"
            >
              Terms & Conditions
            </a>
            <span className="text-neutral-600">•</span>
            <a
              href="#"
              className="hover:text-neutral-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-600">•</span>
            <a
              href="#"
              className="hover:text-neutral-300 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} All rights reserved by Justdhif.
            Made with ❤️
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
