import { useState } from "react";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    num: "01",
    category: "AI Agent",
    title: "Incident Response Agent",
    oneLiner: "Autonomous production failure detection and remediation",
    metric: "MTTR 30min → 5min",
    stack: ["LLM", "Node.js", "AWS", "OpenAI"],
    problem:
      "Engineering teams were spending 30+ minutes per incident manually checking logs, dashboards, and runbooks before applying fixes.",
    solution:
      "Built an AI agent combining log retrieval, runbook retrieval, LLM-based reasoning, and direct tool-calling into infrastructure APIs. Designed confidence thresholds and human escalation paths.",
    impact:
      "Reduced mean time to recovery from 30 minutes to under 5 minutes. Eliminated repetitive on-call troubleshooting. Production system — not a demo.",
  },
  {
    num: "02",
    category: "Founder Project",
    title: "ManagerOS",
    oneLiner: "AI decision layer for engineering managers",
    metric: "In early validation",
    stack: ["OpenAI", "Supabase", "Lovable"],
    isLive: true,
    problem:
      "Engineering managers make critical decisions based on gut feel and lagging indicators. By the time they see burnout or disengagement, it's too late.",
    solution:
      "Building an AI system that analyzes meetings, team interactions, and behavioral signals to surface what's actually happening inside a team.",
    impact:
      "Currently in early validation with engineering managers. Solo build.",
  },
  {
    num: "03",
    category: "AI Agent",
    title: "InfoSec Audit Agent",
    oneLiner: "Automating enterprise security compliance workflows",
    metric: "Audit time cut 70%+",
    stack: ["OpenAI", "Node.js", "MongoDB"],
    problem:
      "Client security audits were slow, manual, and expensive — requiring constant back-and-forth between teams.",
    solution:
      "Built an AI agent that automates the security audit workflow — gathering evidence, mapping controls, generating responses, and tracking compliance gaps.",
    impact:
      "Reduced audit back-and-forth time significantly. Saved measurable org cost per audit cycle.",
  },
  {
    num: "04",
    category: "Infrastructure",
    title: "30K Concurrent User Scale",
    oneLiner: "Zero downtime during live bank survey registration",
    metric: "100% uptime",
    stack: ["Node.js", "AWS", "MongoDB", "Redis"],
    problem:
      "Platform needed to handle massive concurrent load during live bank survey registration events without any downtime.",
    solution:
      "Scaled platform infrastructure with load balancing, caching layers, and database optimization to handle 30,000 concurrent users.",
    impact:
      "Achieved 100% uptime during peak load events. Zero user-facing errors.",
  },
  {
    num: "05",
    category: "Leadership",
    title: "Super 20",
    oneLiner: "Underprivileged students from zero to employed",
    metric: "20 selected · 3 hired into org",
    stack: ["Mentorship", "Program Design"],
    problem:
      "Talented students from financially constrained backgrounds had no structured path into tech.",
    solution:
      "Designed and ran a 3-month practical tech training program. Personally interviewed 150+ candidates, selected 20 students, arranged stipends.",
    impact:
      "Several students secured jobs in tech. Three were hired directly into our organization.",
  },
  {
    num: "06",
    category: "Optimization",
    title: "PIS Upload Pipeline",
    oneLiner: "Critical data upload process rebuilt from scratch",
    metric: "2 hours → 10 minutes",
    stack: ["Node.js", "MongoDB", "AWS"],
    problem:
      "Critical data upload process was taking 2 hours, blocking downstream workflows.",
    solution:
      "Rebuilt the entire upload pipeline with optimized batch processing, parallel execution, and streaming.",
    impact:
      "Reduced upload time from 2 hours to 10 minutes. Unblocked dependent workflows.",
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-[720px] mx-auto space-y-2 mb-16">
          <h2 className="text-[30px] font-bold text-foreground leading-[1.2]">
            Things I've built
          </h2>
          <p className="text-[15px] text-muted-foreground">
            The ones worth talking about
          </p>
        </div>

        {/* Project rows */}
        <div className="border-t border-border">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-border">
              {/* Row */}
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full text-left py-6 px-4 flex items-center gap-6 hover:bg-secondary/50 transition-colors group"
              >
                {/* Number */}
                <span className="text-[24px] font-bold text-muted-foreground/30 shrink-0 w-10">
                  {project.num}
                </span>

                {/* Category tag */}
                <span className="hidden sm:inline-flex text-[11px] font-medium px-2.5 py-1 rounded-lg bg-primary/10 text-primary shrink-0">
                  {project.category}
                </span>

                {/* Title + one-liner */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[17px] font-semibold text-foreground truncate">
                      {project.title}
                    </h3>
                    {project.isLive && (
                      <span className="flex items-center gap-1 text-[11px] text-green-500 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] text-muted-foreground truncate">
                    {project.oneLiner}
                  </p>
                </div>

                {/* Metric */}
                <span className="hidden md:block text-[13px] font-semibold text-primary shrink-0">
                  {project.metric}
                </span>

                {/* Stack pills */}
                <div className="hidden lg:flex gap-1.5 shrink-0">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded-md border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Chevron */}
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expanded content */}
              {expandedIndex === index && (
                <div className="px-4 pb-8 pl-20 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Problem
                    </h4>
                    <p className="text-[14px] text-muted-foreground leading-[1.7]">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Solution
                    </h4>
                    <p className="text-[14px] text-muted-foreground leading-[1.7]">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Impact
                    </h4>
                    <p className="text-[14px] text-muted-foreground leading-[1.7]">
                      {project.impact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
