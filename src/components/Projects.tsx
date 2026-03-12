import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "AI Incident Response Agent",
    tagline: "Autonomous production failure detection, diagnosis, and remediation",
    problem:
      "Engineering teams were spending 30+ minutes per incident manually checking logs, dashboards, and runbooks before applying fixes. High-pressure situations led to slow responses and repeated mistakes.",
    solution:
      "Built an AI agent combining log retrieval, runbook retrieval, LLM-based reasoning, and direct tool-calling into infrastructure APIs. The agent automatically identifies root causes and executes safe remediation steps. Designed confidence thresholds and human escalation paths for ambiguous signals to prevent incorrect fixes.",
    impact:
      "Reduced mean time to recovery from 30 minutes to under 5 minutes. Eliminated a large portion of repetitive on-call troubleshooting. Production system — not a demo.",
    techStack: ["LLM Tool Calling", "Node.js", "AWS", "RAG", "OpenAI"],
    categoryTags: ["AI", "DevOps"],
    category: "AI & Automation",
    featured: true,
    isBest: false,
  },
  {
    title: "ManagerOS",
    tagline: "AI decision layer for engineering managers",
    problem:
      "Engineering managers make critical decisions about their teams based on gut feel, filtered information, and lagging indicators. By the time they see a problem — burnout, disengagement, flight risk — it's already too late.",
    solution:
      "Building an AI-driven system that analyzes meetings, team interactions, and behavioral signals to surface what's actually happening inside a team. Features include burnout detection, psychological safety scoring, flight risk alerts, Manager Effectiveness Score, and leadership coaching moments.",
    impact:
      "Currently in early validation with engineering managers. Solo build using Lovable and Supabase.",
    techStack: ["OpenAI", "Supabase", "Lovable", "Node.js", "AI Agents"],
    categoryTags: ["AI", "Product"],
    category: "AI & Automation",
    liveLabel: "Live — Seeking Early Users",
    isBest: false,
  },
  {
    title: "InfoSec Audit Agent",
    tagline: "Automating enterprise security compliance",
    problem:
      "Client security audits were slow, manual, and expensive — requiring constant back-and-forth between teams to gather evidence, answer questionnaires, and track compliance status.",
    solution:
      "Built an AI agent that automates the security audit workflow — gathering evidence, mapping controls, generating responses to questionnaire items, and tracking compliance gaps. Significantly reduced manual effort and turnaround time.",
    impact:
      "Reduced audit back-and-forth time significantly. Saved measurable org cost per audit cycle.",
    techStack: ["OpenAI", "Node.js", "AWS", "MongoDB"],
    categoryTags: ["AI", "Security"],
    category: "Security",
    isBest: false,
  },
  {
    title: "Super 20 — Tech Career Program",
    tagline: "Taking underprivileged students from zero to employed",
    problem:
      "Talented students from financially constrained backgrounds had no structured path into tech — no training, no network, no industry exposure, and no financial support to focus on learning.",
    solution:
      "Designed and ran a 3-month practical tech training program from scratch. Personally interviewed 150+ candidates, selected 20 students based on potential not credentials, arranged stipends so they could focus full-time, and connected them with companies for interviews.",
    impact:
      "Several students secured jobs in tech. Three were hired directly into our organization. For many, it was their first professional opportunity.",
    techStack: ["Leadership", "Mentorship", "Hiring", "Program Design"],
    categoryTags: ["Leadership"],
    category: "Leadership",
    isBest: false,
  },
  {
    title: "Automated Deployment & Quality Assurance System",
    tagline: "Streamlining deployments with automated CI/CD pipelines",
    problem:
      "Manual deployments were time-consuming, error-prone, and lacked consistent code quality checks.",
    solution:
      "Implemented a fully automated CI/CD pipeline using Bitbucket, Docker, and AWS Secrets Manager, integrated with SonarCloud for continuous code quality and vulnerability scanning.",
    impact:
      "Reduced deployment time by 80%, improved release reliability, and enabled faster iteration cycles for over 50+ projects.",
    techStack: ["Bitbucket", "Docker", "AWS", "SonarCloud"],
    category: "DevOps",
    isBest: true,
  },
  {
    title: "AI-Powered Email Intelligence System",
    tagline: "Optimizing email delivery with AI-driven personalization",
    problem:
      "Bulk marketing emails had low open and click rates due to poor delivery timing and lack of behavior-based personalization.",
    solution:
      "Built a high-volume email system using AWS SES with tracking and monitoring via CloudWatch, and developed an AI recommendation module that predicts optimal send times based on user engagement patterns.",
    impact:
      "Scaled to 500K+ emails/day, improved open rates by 22%, and reduced email bounce rates significantly.",
    techStack: ["AWS SES", "CloudWatch", "AI/ML", "Node.js"],
    category: "AI & Automation",
    isBest: true,
  },
  {
    title: "Nudge AI Engine",
    tagline:
      "Driving user engagement through intelligent behavior-based nudges",
    problem:
      "Managers often failed to take timely action on feedback reports due to generic reminders and poor contextual relevance.",
    solution:
      "Developed an AI-driven nudge engine that analyzed user behavior via PostHog and generated personalized prompts using OpenAI, improving follow-up and engagement patterns.",
    impact:
      "Increased product engagement by 27%, boosted response actions by 31%, and improved feature adoption through contextual AI nudges.",
    techStack: ["OpenAI API", "PostHog", "Node.js", "Mysql"],
    category: "AI & Automation",
    isBest: false,
  },
  {
    title: "Cloud Cost Optimization Framework",
    tagline: "Reducing cloud spend through intelligent resource management",
    problem:
      "AWS infrastructure costs were rising due to unmonitored resources and redundant services.",
    solution:
      "Audited all cloud resources, eliminated unused instances, and implemented cost governance policies with alerts and usage tracking.",
    impact:
      "Reduced overall AWS spend by ~40%, freeing budget for new product development.",
    techStack: ["AWS", "CloudWatch", "Cost Explorer"],
    category: "Cloud & Infrastructure",
    isBest: true,
  },
  {
    title: "Intelligent Error Monitoring & Resolution System",
    tagline: "Accelerating incident response with automated alerts",
    problem:
      "Critical errors often went unnoticed, slowing down issue resolution and affecting uptime.",
    solution:
      "Developed an Error Handler & Alert System that automatically sends error reports to internal chat tools, logs incidents in Notion, and assigns ownership.",
    impact:
      "Reduced mean time to resolution (MTTR) by 65%, ensuring faster recovery and better visibility.",
    techStack: ["Node.js", "Notion API", "Slack", "Monitoring"],
    category: "DevOps",
    isBest: false,
  },
  {
    title: "Self-Healing Uptime Monitoring System",
    tagline: "Automated recovery for maximum availability",
    problem:
      "Unplanned downtimes required manual intervention, affecting availability.",
    solution:
      "Built an uptime monitoring tool integrated with recovery scripts that automatically restarts services upon outage detection.",
    impact: "Reduced downtime to under 5 minutes, achieving 99.98% uptime.",
    techStack: ["Node.js", "AWS", "Monitoring", "Bash"],
    category: "DevOps",
    isBest: false,
  },
  {
    title: "Enterprise Security & Compliance Suite",
    tagline: "Meeting ISO 27001 standards with robust security measures",
    problem:
      "Needed to meet ISO 27001 standards and pass frequent VAPT and compliance audits for enterprise clients.",
    solution:
      "Conducted regular VAPT, code reviews, and implemented security hardening measures including DLP, BCP, endpoint protection, and log auditing using Microsoft 365.",
    impact:
      "Achieved ISO 27001 certification, passed 50+ client security audits, and strengthened the organization's overall security posture.",
    techStack: ["Microsoft 365", "VAPT", "Security Tools"],
    category: "Security",
    isBest: false,
  },
  {
    title: "Secure Database Access Management Tool",
    tagline: "Dynamic IP whitelisting for secure database access",
    problem:
      "Developers required database access, but manual credential sharing posed security risks.",
    solution:
      "Developed a secure database access tool that uses AWS SDK and EC2 Security Groups to whitelist developer IPs dynamically, sending automated notifications upon access.",
    impact:
      "Eliminated manual access risks and enhanced database access traceability and control.",
    techStack: ["AWS SDK", "EC2", "Node.js", "MongoDB"],
    category: "Security",
    isBest: true,
  },
  {
    title: "Product Analytics & User Behavior Insights",
    tagline: "Data-driven product optimization through user analytics",
    problem:
      "Product teams lacked insights into how users engaged with key features.",
    solution:
      "Implemented PostHog-based user tracking, Google Analytics, and Clarity heatmaps to analyze engagement patterns and user behavior.",
    impact:
      "Increased product usage by 17% through data-driven feature optimization and A/B testing.",
    techStack: ["PostHog", "Google Analytics", "Clarity"],
    category: "Analytics",
    isBest: false,
  },
  {
    title: "A/B Testing & Conversion Optimization",
    tagline: "Validating features through data-driven experimentation",
    problem:
      "Survey completion rates were low, and feature adoption needed validation.",
    solution:
      "Implemented an A/B testing framework to evaluate feature performance and user experience differences.",
    impact:
      "Improved survey response rate by 17%, leading to higher engagement and better data quality.",
    techStack: ["PostHog", "Analytics", "Node.js"],
    category: "Analytics",
    isBest: true,
  },
  {
    title: "Multi-Project DevOps Management",
    tagline: "Standardizing deployments across 50+ projects",
    problem:
      "Managing deployments for numerous projects created inconsistencies and overhead.",
    solution:
      "Standardized DevOps pipelines across the organization with shared templates and centralized deployment tracking.",
    impact:
      "Successfully handled deployment for 50+ projects, ensuring uniform quality and reduced rollout times.",
    techStack: ["Docker", "AWS", "CI/CD", "Bitbucket"],
    category: "Cloud & Infrastructure",
    isBest: false,
  },
];

const categories = ["All", "AI & Automation", "DevOps", "Cloud & Infrastructure", "Security", "Analytics", "Leadership"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const nonFeaturedProjects = filteredProjects.filter((p) => !p.featured);

  const PAGE_SIZE = 3;
  const totalPages = Math.ceil(nonFeaturedProjects.length / PAGE_SIZE);
  const pageProjects = nonFeaturedProjects.slice(
    currentPage * PAGE_SIZE,
    currentPage * PAGE_SIZE + PAGE_SIZE
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 animate-fade-in">
            <h2 className="text-[28px] md:text-[38px] font-bold text-foreground">
              My Work — Engineering with Impact
            </h2>
            <p className="text-[16px] font-normal text-muted-foreground leading-[1.6] max-w-2xl mx-auto">
              Problem-solving through scalable, secure, and data-driven solutions
            </p>
            <p className="text-[14px] font-normal text-muted-foreground max-w-2xl mx-auto">
              Explore different categories to see my diverse project portfolio
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer px-4 py-2 text-[13px] font-medium transition-all hover:scale-105"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured project — full width */}
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} delay={0} />
          ))}

          {/* Paginated non-featured projects — one row (3 cards) at a time */}
          {nonFeaturedProjects.length > 0 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pageProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    delay={index * 100}
                  />
                ))}
              </div>

              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                    disabled={currentPage === 0}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-all border border-border/50 hover:border-primary/50 hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Prev
                  </button>

                  <div className="flex gap-2 items-center">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`rounded-full transition-all duration-200 ${
                          i === currentPage
                            ? "w-6 h-2.5 bg-primary"
                            : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                    disabled={currentPage === totalPages - 1}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-all border border-border/50 hover:border-primary/50 hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
