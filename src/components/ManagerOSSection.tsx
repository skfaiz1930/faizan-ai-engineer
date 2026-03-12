const features = [
  { icon: "🔍", text: "Meeting analysis and insight extraction" },
  { icon: "🚨", text: "Burnout and flight risk detection" },
  { icon: "🛡️", text: "Psychological safety scoring" },
  { icon: "📊", text: "Manager Effectiveness Score (MES)" },
  { icon: "🤝", text: "Leadership coaching moments" },
  { icon: "⚠️",  text: "Pseudo-alignment detection" },
];

const ManagerOSSection = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="manageros" className="py-24 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left column ── */}
          <div className="space-y-8 animate-fade-in">
            {/* Eyebrow */}
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-400/80">
              Currently Building
            </p>

            {/* Title + subtitle */}
            <div className="space-y-3">
              <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-foreground">
                ManagerOS
              </h2>
              <p className="text-[17px] font-normal text-body leading-[1.6]">
                AI decision infrastructure for engineering managers
              </p>
            </div>

            {/* Body */}
            <div className="space-y-4 text-[15px] font-normal text-body leading-[1.75] max-w-lg">
              <p>
                Most engineering managers are flying blind. They run 1:1s, read status updates, and sit in standups — but by the time they see a real problem, it's already too late. The best engineer has gone quiet. The team is burning out. The delivery is slipping.
              </p>
              <p>
                ManagerOS is an AI system that listens to what's actually happening — in meetings, in feedback, in team signals — and surfaces what managers need to act on before it becomes a crisis.
              </p>
            </div>

            {/* Feature list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {features.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-[14px] font-normal text-body">
                  <span className="mt-0.5 text-base leading-none">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                onClick={scrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-[14px] font-medium hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Request Early Access
              </a>
              <a
                href="#projects"
                onClick={scrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border/60 text-[14px] font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* ── Right column — mock dashboard ── */}
          <div className="flex items-center justify-center animate-fade-in">
            {/* Animated gradient border wrapper */}
            <div className="relative w-full max-w-sm rounded-2xl p-px overflow-hidden">
              {/* Pulsing gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/40 via-primary/30 to-blue-800/20 animate-pulse" />

              {/* Inner dark card */}
              <div className="relative rounded-2xl bg-card overflow-hidden">
                {/* Fake top bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-[11px] text-muted-foreground/50 font-mono">
                    themanageros.com
                  </span>
                </div>

                {/* Mock content */}
                <div className="px-6 py-8 space-y-5">
                  {/* MES score */}
                  <div className="space-y-1.5">
                    <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                      Manager Effectiveness Score
                    </p>
                    <div className="flex items-end gap-2">
                      <span className="text-[38px] font-bold text-foreground/90">82</span>
                      <span className="text-[13px] text-green-400 mb-1">↑ +4 this week</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-muted/30 overflow-hidden">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-primary to-blue-400" />
                    </div>
                  </div>

                  {/* Signal rows */}
                  {[
                    { label: "Burnout Risk", value: "Low", color: "text-green-400" },
                    { label: "Psych Safety", value: "74 / 100", color: "text-blue-400" },
                    { label: "Flight Risk",  value: "1 alert",  color: "text-yellow-400" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
                      <span className="text-[12px] text-muted-foreground/60">{label}</span>
                      <span className={`text-[12px] font-medium ${color}`}>{value}</span>
                    </div>
                  ))}

                  {/* Insight chip */}
                  <div className="rounded-lg bg-primary/10 border border-primary/20 px-4 py-3">
                    <p className="text-[12px] text-muted-foreground leading-relaxed">
                      💡 <span className="text-foreground/80 font-medium">Insight:</span> Alex has been unusually quiet in the last 3 standups. Consider a check-in.
                    </p>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="px-6 pb-5 text-center">
                  <p className="text-[10px] text-muted-foreground/30 tracking-widest uppercase font-mono">
                    ManagerOS · Alpha Preview
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManagerOSSection;
