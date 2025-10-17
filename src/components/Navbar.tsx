import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-lg">
        <ul className="flex gap-1 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
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
