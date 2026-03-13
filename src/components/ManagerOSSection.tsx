const ManagerOSSection = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="manageros" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-[720px] mx-auto px-6">
        {/* Label */}
        <p className="text-[13px] text-muted-foreground mb-4">
          What I'm building right now
        </p>

        {/* Title */}
        <h2 className="text-[36px] font-extrabold text-foreground leading-[1.1] mb-3">
          ManagerOS
        </h2>

        {/* Subtitle */}
        <p className="text-[20px] text-muted-foreground font-normal mb-8">
          AI decision infrastructure for engineering managers
        </p>

        {/* Divider */}
        <div className="h-px bg-border w-full mb-8" />

        {/* Body */}
        <div className="space-y-5 mb-12">
          <p className="text-[17px] text-muted-foreground leading-[1.8]">
            Most engineering managers are flying blind. They run 1:1s, read
            status updates, sit in standups — but by the time they see a real
            problem, it's already too late. The best engineer has gone quiet. The
            team is burning out. The delivery is slipping.
          </p>
          <p className="text-[17px] text-muted-foreground leading-[1.8]">
            ManagerOS listens to what's actually happening — in meetings, in
            feedback, in team signals — and surfaces what managers need to act on
            before it becomes a crisis.
          </p>
        </div>

        {/* Feature list */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 mb-12 border-t border-border pt-8">
          {[
            "Meeting analysis & insight extraction",
            "Manager Effectiveness Score (MES)",
            "Burnout & flight risk detection",
            "Leadership coaching moments",
            "Psychological safety scoring",
            "Pseudo-alignment detection",
          ].map((feature) => (
            <p
              key={feature}
              className="text-[15px] text-muted-foreground py-1"
            >
              — {feature}
            </p>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 border border-border rounded-xl mb-12">
          {[
            { label: "Status", value: "Solo build" },
            { label: "Stage", value: "Early validation" },
            { label: "Looking for", value: "Co-founder" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-5 ${
                i < 2 ? "border-r border-border" : ""
              }`}
            >
              <p className="text-[12px] text-muted-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-[15px] font-semibold text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Insight card */}
        <div className="bg-card border-l-[3px] border-l-primary rounded-xl p-5 mb-10 border border-border">
          <p className="text-[15px] text-muted-foreground leading-[1.7] mb-3">
            "Alex has been unusually quiet in the last 3 standups. Psychological
            safety score dropped 8 points this week. Recommend a 1:1 before
            Friday."
          </p>
          <p className="text-[12px] text-muted-foreground/60">
            ManagerOS · Sample Insight · Alpha
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={scrollTo("contact")}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground text-[15px] font-semibold hover:opacity-90 transition-opacity"
          >
            Request Early Access
          </a>
          <a
            href="https://themanageros.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
          >
            themanageros.com →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ManagerOSSection;
