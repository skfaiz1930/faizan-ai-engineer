import { Github, Linkedin, Mail } from "lucide-react";
import ResumeViewer from "./ResumeViewer";

const Hero = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[720px] mx-auto text-center space-y-6">
          {/* Eyebrow */}
          <p className="text-[13px] text-muted-foreground">
            Mumbai · Great Manager Institute
          </p>

          {/* Name */}
          <h1 className="text-[40px] md:text-[56px] font-extrabold tracking-tight text-foreground leading-[1.05]">
            Shaikh Faizan
          </h1>

          {/* Role */}
          <p className="text-[20px] text-muted-foreground font-normal">
            AI Product Engineer & Founder
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-border mx-auto my-8" />

          {/* Paragraphs */}
          <div className="max-w-[600px] mx-auto space-y-4 text-left">
            <p className="text-[17px] font-normal leading-[1.8] text-muted-foreground">
              I build systems that make organizations visible to themselves. 4 years shipping AI products, scaling infrastructure, and solving problems most engineers don't notice until they become incidents.
            </p>

            <p className="text-[17px] font-normal leading-[1.8] text-muted-foreground">
              Currently building ManagerOS — an AI decision layer for engineering managers that surfaces burnout signals, psychological safety scores, and leadership blind spots before they become people problems.
            </p>

            <p className="text-[13px] font-normal leading-[1.6] text-muted-foreground/60">
              Open to: early ManagerOS users · co-founders · people thinking seriously about AI in organizations
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center pt-6">
            <a
              href="#contact"
              onClick={scrollTo("contact")}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground text-[15px] font-semibold hover:opacity-90 transition-opacity"
            >
              Request ManagerOS Access
            </a>
            <a
              href="#projects"
              onClick={scrollTo("projects")}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-muted-foreground text-[15px] font-medium hover:text-foreground transition-colors"
            >
              View My Work ↓
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 justify-center pt-4">
            <a
              href="https://www.linkedin.com/in/shaikh-faizan-66b443216/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/skfaiz1930"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:skfaiz0929@gmail.com"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
