import { Eye, Layers, Lightbulb } from "lucide-react";

const beliefs = [
  {
    icon: Eye,
    heading: "Visibility over execution",
    body: "The world doesn't have an execution problem — it has a visibility problem. Every organization I've worked with had the information needed to prevent their biggest failures. It was sitting in their logs, their teams, their systems.",
  },
  {
    icon: Layers,
    heading: "Failures are never sudden",
    body: "System outages, team burnout, bad decisions — none of it is sudden. It's been building quietly in places nobody was watching. The signal is always there. The gap is in how it's surfaced.",
  },
  {
    icon: Lightbulb,
    heading: "Build what makes the invisible visible",
    body: "I didn't learn this from a book. I learned it by building systems that made invisible data visible. That's all I want to build.",
  },
];

const BeyondCode = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="beyond" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">

          {/* Header */}
          <div className="text-center space-y-2">
            <p className="text-[11px] uppercase tracking-[0.12em] text-primary font-semibold">Philosophy</p>
            <h2 className="text-[26px] md:text-[32px] font-bold text-foreground">What I Actually Believe</h2>
          </div>

          {/* Single panel with vertical dividers */}
          <div className="rounded-xl bg-card border border-border/40 overflow-hidden" style={{boxShadow: "var(--shadow-card)"}}>
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border/40">
              {beliefs.map(({ icon: Icon, heading, body }) => (
                <div key={heading} className="flex-1 px-8 py-8 space-y-4 group">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-foreground leading-snug">{heading}</h3>
                  <p className="text-[14px] font-normal text-body leading-[1.7]">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-2 border-t border-border/30">
            <p className="text-[13px] font-normal text-muted-foreground mt-4 tracking-wide">
              This is why I'm building{" "}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="text-primary font-medium hover:underline underline-offset-4 transition-colors duration-200"
              >
                ManagerOS →
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeyondCode;
