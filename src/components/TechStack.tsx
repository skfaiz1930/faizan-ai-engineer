import { Badge } from "@/components/ui/badge";

const techStack = [
  "AWS", "Node.js", "React", "OpenAI", "PostHog", 
  "Docker", "Terraform", "MongoDB", "Redis", "Nginx",
  "n8n", "Metabase", "GitHub Actions", "Prometheus", "Grafana"
];

const TechStack = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech Stack
          </h2>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="text-base px-4 py-2 bg-secondary/50 hover:bg-secondary border border-border/50 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
