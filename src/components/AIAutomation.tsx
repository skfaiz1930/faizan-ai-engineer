import { Bot, Zap, TrendingUp } from "lucide-react";

const AIAutomation = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              ⚙️ AI & Automation Showcase
            </h2>
            <p className="text-lg text-muted-foreground">
              Building intelligent systems that scale and adapt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-lg">
              <Bot className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Nudge AI Engine</h3>
              <p className="text-muted-foreground">
                Built real-time personalization system using OpenAI and PostHog analytics to deliver context-aware nudges and adaptive learning paths.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-lg">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Workflow Automation</h3>
              <p className="text-muted-foreground">
                Automated content and workflow generation with Clay, Zapier, and n8n integrations, reducing manual setup time by 60%.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-lg">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Intelligent Feedback Loops</h3>
              <p className="text-muted-foreground">
                Designed performance tuning pipelines with automated A/B testing and real-time analytics for continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomation;
