import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import ResumeViewer from "@/components/ResumeViewer";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[620px] mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <span className="text-sm font-mono uppercase tracking-widest text-primary/80">
            AI Engineer | SDE III
          </span>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Hi, I'm Faizan
          </h1>

          {/* Location */}
          <p className="text-sm text-muted-foreground">
            Mumbai, India · Great Manager Institute (Great Place to Work group)
          </p>

          {/* Bio paragraphs */}
          <div className="space-y-6 text-left">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              I build systems that make organizations visible to themselves. 4 years shipping AI products, scaling infrastructure, and solving problems most engineers don't notice until they become incidents — production AI agents, systems handling 150K emails/day, infrastructure scaled to 30K concurrent users.
            </p>

            <p className="text-lg leading-[1.7] text-muted-foreground">
              Currently building ManagerOS — an AI decision layer for engineering managers. It surfaces burnout signals, psychological safety scores, and leadership blind spots before they become people problems.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground/60">
              Open to: early ManagerOS users · co-founders · people thinking seriously about AI in organizations
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <ResumeViewer />
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/80"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 justify-center pt-4">
            <a
              href="https://www.linkedin.com/in/shaikh-faizan-66b443216/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/skfaiz1930"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:skfaiz0929@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
