import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Cloud,
  Bot,
  BarChart3,
  Layers,
  Users,
  Rocket,
  Lock
} from "lucide-react";

const techCategories = [
  {
    icon: Code2,
    title: "Core Languages",
    items: ["Node.js", "Python", "TypeScript", "JavaScript"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    items: ["AWS", "Docker", "Jenkins", "RabbitMQ", "Nginx", "Redis", "Vercel"],
  },
  {
    icon: Bot,
    title: "AI, Automation & Agents",
    items: ["OpenAI", "Clay", "Zapier", "Cursor", "Windsurf", "Lovable"],
  },
  {
    icon: BarChart3,
    title: "Product & Analytics",
    items: ["PostHog", "Metabase", "Google Analytics", "Microsoft Clarity"],
  },
  {
    icon: Layers,
    title: "Frontend Frameworks",
    items: ["React", "Angular", "Tailwind CSS", "Next.js"],
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    items: [
      "VAPT",
      "ISO 27001",
      "AWS Secrets Manager",
      "IAM Policies",
      "DLP",
      "BCP",
    ],
  },
  {
    icon: Rocket,
    title: "DevOps & Deployment",
    items: [
      "Bitbucket Pipelines",
      "GitHub Actions",
      "CI/CD",
      "SonarCloud",
      "CloudWatch",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    icon: Users,
    title: "Product Management & Research",
    items: [
      "A/B Testing",
      "User Interviews",
      "Product Roadmapping",
      "Feature Prioritization",
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className=" relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            🧠 Tech Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-left">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-sm px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
