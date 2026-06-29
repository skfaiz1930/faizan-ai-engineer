import { Brain, Terminal, Database } from "lucide-react";

const AIAutomation = () => {
  return (
    <section id="ai" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-[26px] md:text-[32px] font-bold text-foreground">
              AI & Agentic Systems Showcase
            </h2>
            <p className="text-[16px] font-normal text-muted-foreground leading-[1.6]">
              Building intelligent systems that reason, automate, and solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Brain,
                title: "AI Leadership Coach",
                subtitle: "Multi-Agent Intelligence Platform",
                body: "Built an end-to-end AI coaching platform using LangGraph, LangChain, OpenAI, and RAG pipelines. Designed multi-agent workflows that analyze conversations, retrieve context, and generate personalized insights using memory-driven AI systems.",
              },
              {
                Icon: Terminal,
                title: "AI Production Engineer",
                subtitle: "Autonomous Incident Response Agent",
                body: "Built an AI agent that monitors production issues, analyzes logs and runbooks, reasons about failures, generates fixes, and interacts with infrastructure APIs to automate recovery workflows. Reduced incident resolution time from 30 minutes to under 5 minutes.",
              },
              {
                Icon: Database,
                title: "AI Knowledge & Retrieval Engine",
                subtitle: "Scalable RAG & Vector Search",
                body: "Designed scalable RAG pipelines with document ingestion, adaptive chunking, embeddings, and vector search to enable accurate AI responses over complex business knowledge.",
              },
            ].map(({ Icon, title, subtitle, body }) => (
              <div
                key={title}
                className="p-6 rounded-lg border bg-card hover:border-primary/50 transition-all hover:shadow-lg flex flex-col justify-between"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div>
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-[18px] font-semibold text-foreground mb-1">{title}</h3>
                  {subtitle && (
                    <p className="text-[12px] font-semibold text-primary/80 uppercase tracking-wider mb-3">
                      {subtitle}
                    </p>
                  )}
                  <p className="text-[14px] font-normal text-body leading-[1.6]">
                    {body}
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

export default AIAutomation;
