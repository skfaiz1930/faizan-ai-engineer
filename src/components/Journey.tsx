const timelineEntries = [
  {
    year: "2021",
    title: "Started as an intern at Great Place to Work",
    description:
      "Built backend modules for leadership feedback and employee experience platforms. First exposure to how organizations try to understand their own people — and how badly they often fail at it.",
  },
  {
    year: "2022",
    title: "Joined Great Manager Institute as SDE I",
    description:
      "Rebuilt email infrastructure to handle 150,000 emails/day. Reduced a critical data upload from 2 hours to 10 minutes. Started doing security audits for external organizations on my own time — found real vulnerabilities, reported them for free. 20+ orgs audited.",
  },
  {
    year: "2022",
    title: "Led Super 20",
    description:
      "Interviewed 150+ candidates, selected 20 underprivileged students, built a funded 3-month training program from scratch. Several got hired. Three joined our org. First time I understood what it means to build something that changes someone's trajectory.",
  },
  {
    year: "2023",
    title: "Promoted to SDE II",
    description:
      "Scaled platform infrastructure to 30,000 concurrent users. Built analytics pipelines integrating survey data, behavioral metrics, and product usage signals. Started seeing the same pattern everywhere — organizations have the data, they just can't see it in time.",
  },
  {
    year: "2025",
    title: "Promoted to SDE III",
    description:
      "Built an AI incident response agent that reduced MTTR from 30 minutes to under 5. Production system with LLM reasoning, tool-calling into infrastructure APIs, confidence thresholds, and human escalation paths. Built an InfoSec agent to automate client security audits.",
  },
  {
    year: "Now",
    title: "Building ManagerOS",
    description:
      "Solo founder. AI decision layer for engineering managers. The same visibility problem I've seen in systems, I now see in teams. ManagerOS is the product I've been accidentally building toward for 4 years.",
    isActive: true,
  },
];

const Journey = () => {
  return (
    <section id="journey" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-[680px] mx-auto px-6">
        {/* Header */}
        <div className="space-y-2 mb-16">
          <h2 className="text-[30px] font-bold text-foreground leading-[1.2]">
            How I got here
          </h2>
          <p className="text-[15px] text-muted-foreground">
            4 years. One consistent obsession.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[52px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {timelineEntries.map((entry, index) => (
              <div key={index} className="flex gap-8">
                {/* Year label */}
                <div className="w-[52px] shrink-0 text-right">
                  <span
                    className={`text-[13px] font-medium ${
                      entry.isActive
                        ? "text-primary flex items-center gap-1.5 justify-end"
                        : "text-muted-foreground"
                    }`}
                  >
                    {entry.isActive && (
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot inline-block" />
                    )}
                    {entry.year}
                  </span>
                </div>

                {/* Dot on timeline */}
                <div className="relative shrink-0">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      entry.isActive ? "bg-primary" : "bg-border"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="space-y-2 pb-2">
                  <h3
                    className={`text-[15px] font-semibold leading-snug ${
                      entry.isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {entry.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-[1.7]">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
