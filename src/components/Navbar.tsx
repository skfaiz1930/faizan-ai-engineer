import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onChatbotToggle: () => void;
}

const Navbar = ({ onChatbotToggle }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Work" },
    { id: "manageros", label: "ManagerOS" },
    { id: "thinking", label: "Thinking" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-[15px] font-bold text-foreground"
        >
          Faizan
        </button>

        {/* Nav links - desktop */}
        <ul ref={navRef} className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-[13px] transition-colors ${
                  activeSection === item.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onChatbotToggle}
            className="text-muted-foreground hover:text-foreground"
            title="Chat with Faizan"
          >
            <Bot className="h-5 w-5" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
