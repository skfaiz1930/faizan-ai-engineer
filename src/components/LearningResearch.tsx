import { Microscope, Wrench, BookOpen } from "lucide-react";

const columns = [
  {
    icon: <Microscope className="w-6 h-6 text-primary" />,
    title: "Currently Exploring",
    items: [
      "Multi-agent systems and agent orchestration",
      "LLM confidence calibration in production",
      "Org intelligence as a product category",
      "Vector databases and RAG architecture",
      "Security compliance automation with AI",
    ],
  },
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: "Currently Building",
    items: [
      "ManagerOS — AI decision layer for engineering managers",
      "InfoSec automation agent for enterprise audit workflows",
      "Internal tooling for team health signal detection",
    ],
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Currently Reading",
    items: [
      "The Hard Thing About Hard Things — Ben Horowitz",
      "AWS Architecture Best Practices",
      "OpenAI Cookbook",
      "Research papers on organizational behavior and team dynamics",
    ],
  },
];

const LearningResearch = () => {
  return (
    <section id="learning" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-[26px] md:text-[32px] font-bold text-foreground">
              
              📖 Learning & Research
            </h2>
            <p className="text-[16px] font-normal text-muted-foreground">
              What's on my mind right now
            </p>
          </div>

          {/* Three-column cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {columns.map(({ icon, title, items }) => (
              <div
                key={title}
                className="p-6 rounded-lg border bg-card space-y-4"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Icon + title */}
                <div className="space-y-1">
                  {icon}
                  <h3 className="text-[12px] font-semibold text-primary tracking-widest uppercase">
                    {title}
                  </h3>
                </div>

                {/* Bullet list */}
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[14px] font-normal text-body leading-[1.6]"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningResearch;
