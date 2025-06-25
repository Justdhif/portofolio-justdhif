import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navigation({ activeSection, setActiveSection }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experiences", label: "Experiences" },
    { id: "contact", label: "Contact" },
  ];

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - 80;
    const duration = 800;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    smoothScrollTo(id);
  };

  return (
    <ul className="relative flex flex-col gap-6 sm:flex-row sm:gap-8">
      {links.map((link) => (
        <li key={link.id} className="relative">
          <a
            href={`#${link.id}`}
            className={`nav-link relative text-lg transition-colors duration-300 ${
              activeSection === link.id
                ? "text-white font-medium"
                : "text-neutral-400 hover:text-white"
            }`}
            onClick={(e) => handleClick(e, link.id)}
          >
            {link.label}
            {activeSection === link.id && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                style={{
                  boxShadow: "0 0 8px rgba(96, 165, 250, 0.6)",
                }}
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["home", "about", "projects", "experiences", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-20 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-primary/80 shadow-lg"
          : "backdrop-blur-md bg-primary/40"
      }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <motion.a
            href="#home"
            className="text-xl font-bold transition-colors duration-200 text-neutral-400 hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              setActiveSection("home");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Didippp
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer transition-all duration-200 text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                alt="toggle"
                className="w-7 h-7"
              />
            </motion.div>
          </button>

          <nav className="hidden sm:block z-50">
            <Navigation
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block overflow-hidden sm:hidden"
            initial={{ opacity: 0, height: 0, x: -10 }}
            animate={{ opacity: 1, height: "auto", x: 0 }}
            exit={{ opacity: 0, height: 0, x: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-6 py-4 border-t border-white/10">
              <Navigation
                activeSection={activeSection}
                setActiveSection={(section) => {
                  setActiveSection(section);
                  setIsOpen(false);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
