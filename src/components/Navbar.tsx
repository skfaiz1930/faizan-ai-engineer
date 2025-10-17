import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "tech", label: "Tech Stack" },
    { id: "ai", label: "AI & Automation" },
    { id: "projects", label: "Projects" },
    { id: "learning", label: "Learning" },
    { id: "beyond", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const updateIndicator = () => {
      if (navRef.current) {
        const activeButton = navRef.current.querySelector(
          `[data-section="${activeSection}"]`
        ) as HTMLElement;
        if (activeButton) {
          setIndicatorStyle({
            left: activeButton.offsetLeft,
            width: activeButton.offsetWidth,
          });
        }
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section.element) {
          const top = section.element.offsetTop;
          const bottom = top + section.element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 animate-fade-in">
      <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-2 py-2 shadow-lg">
        <ul ref={navRef} className="flex gap-1 items-center relative">
          {/* Sliding indicator */}
          <div
            className="absolute bg-primary rounded-full transition-all duration-300 ease-out h-[calc(100%-4px)] top-[2px]"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
          
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                data-section={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
