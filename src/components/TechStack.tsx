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
  Compass
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
  {
    icon: Compass,
    title: "Leadership & Founder Mindset",
    items: [
      "Solo Founder",
      "0 to 1 Building",
      "User Interviews",
      "Async Team Leadership",
      "Super 20 (Mentorship Program)",
      "Hiring & Talent Spotting",
      "Security Audit Leadership",
      "Cross-functional Collaboration",
      "Stakeholder Communication",
      "Decision Making Under Ambiguity",
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
              Not a list of tutorials I've watched. Every tool here has been used to ship something real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const isLast = categoryIndex === techCategories.length - 1;
              return (
                <div
                  key={category.title}
                  className={`p-6 rounded-lg border bg-card hover:border-primary/50 transition-all${
                    isLast ? " md:col-span-2 lg:col-span-3" : ""
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
