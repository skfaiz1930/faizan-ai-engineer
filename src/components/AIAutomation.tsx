import { Bot, Zap, TrendingUp } from "lucide-react";

const AIAutomation = () => {
  return (
    <section id="ai" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-[26px] md:text-[32px] font-bold text-foreground">
              AI & Automation Showcase
            </h2>
            <p className="text-[16px] font-normal text-muted-foreground leading-[1.6]">
              Building intelligent systems that scale and adapt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Bot,
                title: "Nudge AI Engine",
                body: "Built real-time personalization system using OpenAI and PostHog analytics to deliver context-aware nudges and adaptive learning paths.",
              },
              {
                Icon: Zap,
                title: "Workflow Automation",
                body: "Automated content and workflow generation with Clay, Zapier, and n8n integrations, reducing manual setup time by 60%.",
              },
              {
                Icon: TrendingUp,
                title: "Intelligent Feedback Loops",
                body: "Designed performance tuning pipelines with automated A/B testing and real-time analytics for continuous optimization.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="p-6 rounded-lg border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-[18px] font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-[15px] font-normal text-body leading-[1.7]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomation;
