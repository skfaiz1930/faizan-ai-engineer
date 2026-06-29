import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Cloud,
  Bot,
  BarChart3,
  Layers,
  Users,
  Rocket,
  Lock,
  Compass,
  Activity,
  Database
} from "lucide-react";

const techCategories = [
  {
    icon: Code2,
    title: "Core Languages & Frameworks",
    items: [
      "Python",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Java"
    ],
  },

  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Docker",
      "Bedrock",
      "Agent Core",
      "Lambda",
      "ECS",
      "ECR",
      "API Gateway",
      "CloudWatch",
      "X-Ray",
      "IAM",
      "VPC",
      "Secrets Manager",
    ],
  },

  {
    icon: Bot,
    title: "AI, LLMs & Agent Systems",
    items: [
      "OpenAI API",
      "LLM Agents",
      "LangChain",
      "LangGraph",
      "RAG",
      "Prompt Engineering",
      "Tool Calling",
      "AI Workflows",
      "Agent Orchestration",
      "Embeddings",
      "Vector Search"
    ],
  },

  {
    icon: Database,
    title: "Data & Backend Systems",
    items: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "Celery",
      "ETL Pipelines",
      "Data Processing",
      "pgvector"
    ],
  },

  {
    icon: Layers,
    title: "Frontend Frameworks",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS"
    ],
  },

  {
    icon: Activity,
    title: "Observability & Reliability",
    items: [
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "Logging",
      "Monitoring",
      "Alerting",
      "Incident Management",
      "Performance Optimization"
    ],
  },

  {
    icon: Rocket,
    title: "DevOps & Deployment",
    items: [
      "CI/CD",
      "Bitbucket Pipelines",
      "GitHub Actions",
      "Jenkins",
      "SonarCloud",
      "Docker Compose",
      "Containerization"
    ],
  },

  {
    icon: Lock,
    title: "Security & Compliance",
    items: [
      "ISO 27001",
      "VAPT",
      "AWS IAM",
      "DLP",
      "AWS Security",
      "Secrets Management",
      "Infrastructure Hardening"
    ],
  },

  {
    icon: BarChart3,
    title: "Product & Analytics",
    items: [
      "PostHog",
      "Metabase",
      "Google Analytics",
      "A/B Testing",
      "User Analytics",
      "Experimentation"
    ],
  },

  {
    icon: Compass,
    title: "Leadership & Founder Mindset",
    items: [
      "0 to 1 Building",
      "AI Product Development",
      "User Interviews",
      "Technical Leadership",
      "Mentoring Engineers",
      "System Design",
      "Cross-functional Collaboration",
      "Decision Making Under Ambiguity",
      "Super 20 Mentorship Program"
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-12 animate-slide-up">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-[26px] md:text-[32px] font-bold text-foreground">
              Things I've Actually Used in Production
            </h2>
            <p className="text-[16px] font-normal text-muted-foreground leading-[1.6] max-w-2xl mx-auto">
              Not a list of tutorials I've watched. Every tool here has been
              used to ship something real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const isLast = categoryIndex === techCategories.length - 1;
              return (
                <div
                  key={category.title}
                  className={`p-6 rounded-lg border bg-card hover:border-primary/50 transition-all${isLast ? " md:col-span-2 lg:col-span-3" : ""
                    }`}
                  style={{
                    animationDelay: `${categoryIndex * 100}ms`,
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <h3 className="text-[18px] font-semibold text-foreground text-left">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill text-[12px] font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
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
