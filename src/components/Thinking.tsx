const Thinking = () => {
  return (
    <section id="thinking" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-[680px] mx-auto px-6">
        {/* Header */}
        <div className="space-y-2 mb-16">
          <h2 className="text-[30px] font-bold text-foreground leading-[1.2]">
            Thinking
          </h2>
          <p className="text-[15px] text-muted-foreground">
            What's on my mind. What I believe. What I'm reading.
          </p>
        </div>

        {/* Block 1 — The belief */}
        <div className="mb-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6">
            What I believe
          </p>
          <blockquote className="border-l-2 border-primary pl-5 text-[17px] italic text-muted-foreground leading-[1.9] mb-4">
            The world doesn't have an execution problem — it has a visibility
            problem. Every organization I've worked with had the information
            needed to prevent their biggest failures. It was sitting in their
            logs, their teams, their systems. They just couldn't see it in time. I
            didn't learn this from a book. I learned it by building the systems
            that made invisible data visible. That's all I want to build.
          </blockquote>
          <p className="text-[13px] text-muted-foreground/60">
            — This is why I'm building ManagerOS
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-border w-full mb-12" />

        {/* Block 2 — Currently */}
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-8">
            Right now
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground mb-3">
                Exploring
              </p>
              <p className="text-[13px] text-muted-foreground leading-[1.8]">
                Multi-agent systems · LLM confidence calibration · Org
                intelligence as a product · Vector databases · Security
                compliance automation
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground mb-3">
                Building
              </p>
              <p className="text-[13px] text-muted-foreground leading-[1.8]">
                ManagerOS · InfoSec automation agent · Team health signal tooling
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground mb-3">
                Reading
              </p>
              <p className="text-[13px] text-muted-foreground leading-[1.8]">
                The Hard Thing About Hard Things · OpenAI Cookbook · Org behavior
                research papers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thinking;
