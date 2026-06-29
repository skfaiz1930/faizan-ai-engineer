import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[620px] mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <span className="text-[13px] font-medium tracking-[0.08em] uppercase text-primary">
            AI Engineer | SDE III
          </span>

          {/* Name */}
          <h1 className="text-[36px] md:text-[56px] font-extrabold tracking-tight text-foreground leading-[1.1]">
            Hi, I'm Faizan
          </h1>

          {/* Location */}
          <p className="text-[13px] font-normal text-muted-foreground">
            Mumbai, India · Great Manager Institute (Great Place to Work group)
          </p>

          {/* Bio paragraphs */}
          <div className="space-y-5 text-left">
            <p className="text-[17px] font-normal leading-[1.8] text-body">
          I build AI systems that go from ideas to production.

Over the last 4.5+ years, I’ve been building scalable backend systems, LLM-powered applications, multi-agent workflows, and automation platforms that solve real-world problems.
            </p>

            <p className="text-[17px] font-normal leading-[1.8] text-body">
             I focus on building end-to-end AI systems — from data pipelines and retrieval layers to agent orchestration, tool integrations, APIs, and production infrastructure.
            </p>

               <p className="text-[17px] font-normal leading-[1.8] text-body">
           I’ve built AI agents that can reason, retrieve context, take actions, and automate complex workflows while running reliably in production. I enjoy working on hard engineering problems where AI moves beyond demos and becomes a system people can depend on.
            </p>
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
