import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";

const Hero = () => {
  const taglines = [
    "Specializing in full-stack engineering, AI automation, and secure deployments - connecting data, design, and user feedback from planning to launch.",
    "Specializing in leading the complete product journey — from planning and architecture to AI-enabled automation, analytics, and user feedback loops.",
    "Specializing in AI-powered systems that learn, adapt, and optimize user engagement through analytics.",
    "I design systems that think, learn, and scale — blending AI, automation, and DevOps to drive real-world impact.",
    "Engineer with a mission to build secure, high-performance systems — from backend to cloud to AI automation",
  ];

  const [tagline, setTagline] = useState("");

  useEffect(() => {
    const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    setTagline(randomTagline);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

      {/* Content */}
      <div className="container mx-auto px-4  relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="text-primary font-semibold text-lg mb-4 inline-block">
              AI Engineer | SDE III
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Faizan
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {tagline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
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

          <div className="flex gap-6 justify-center pt-8">
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

          {/* Scroll Down Button */}
          <div
            className="mt-16 flex justify-center animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            <button
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
