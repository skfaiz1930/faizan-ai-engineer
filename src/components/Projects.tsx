import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Automated Deployment & Quality Assurance System",
    tagline: "Streamlining deployments with automated CI/CD pipelines",
    problem: "Manual deployments were time-consuming, error-prone, and lacked consistent code quality checks.",
    solution: "Implemented a fully automated CI/CD pipeline using Bitbucket, Docker, and AWS Secrets Manager, integrated with SonarCloud for continuous code quality and vulnerability scanning.",
    impact: "🚀 Reduced deployment time by 80%, improved release reliability, and enabled faster iteration cycles for over 50+ projects.",
    techStack: ["Bitbucket", "Docker", "AWS", "SonarCloud"]
  },
  {
    title: "AI-Powered Email Intelligence System",
    tagline: "Optimizing email delivery with AI-driven personalization",
    problem: "Bulk marketing emails had low open and click rates due to poor delivery timing and lack of behavior-based personalization.",
    solution: "Built a high-volume email system using AWS SES with tracking and monitoring via CloudWatch, and developed an AI recommendation module that predicts optimal send times based on user engagement patterns.",
    impact: "📈 Scaled to 500K+ emails/day, improved open rates by 22%, and reduced email bounce rates significantly.",
    techStack: ["AWS SES", "CloudWatch", "AI/ML", "Node.js"]
  },
  {
    title: "Cloud Cost Optimization Framework",
    tagline: "Reducing cloud spend through intelligent resource management",
    problem: "AWS infrastructure costs were rising due to unmonitored resources and redundant services.",
    solution: "Audited all cloud resources, eliminated unused instances, and implemented cost governance policies with alerts and usage tracking.",
    impact: "💸 Reduced overall AWS spend by ~40%, freeing budget for new product development.",
    techStack: ["AWS", "CloudWatch", "Cost Explorer"]
  },
  {
    title: "Intelligent Error Monitoring & Resolution System",
    tagline: "Accelerating incident response with automated alerts",
    problem: "Critical errors often went unnoticed, slowing down issue resolution and affecting uptime.",
    solution: "Developed an Error Handler & Alert System that automatically sends error reports to internal chat tools, logs incidents in Notion, and assigns ownership.",
    impact: "⚙️ Reduced mean time to resolution (MTTR) by 65%, ensuring faster recovery and better visibility.",
    techStack: ["Node.js", "Notion API", "Slack", "Monitoring"]
  },
  {
    title: "Self-Healing Uptime Monitoring System",
    tagline: "Automated recovery for maximum availability",
    problem: "Unplanned downtimes required manual intervention, affecting availability.",
    solution: "Built an uptime monitoring tool integrated with recovery scripts that automatically restarts services upon outage detection.",
    impact: "🌐 Reduced downtime to under 5 minutes, achieving 99.98% uptime.",
    techStack: ["Node.js", "AWS", "Monitoring", "Bash"]
  },
  {
    title: "Enterprise Security & Compliance Suite",
    tagline: "Meeting ISO 27001 standards with robust security measures",
    problem: "Needed to meet ISO 27001 standards and pass frequent VAPT and compliance audits for enterprise clients.",
    solution: "Conducted regular VAPT, code reviews, and implemented security hardening measures including DLP, BCP, endpoint protection, and log auditing using Microsoft 365.",
    impact: "🛡️ Achieved ISO 27001 certification, passed 50+ client security audits, and strengthened the organization's overall security posture.",
    techStack: ["Microsoft 365", "VAPT", "Security Tools"]
  },
  {
    title: "Secure Database Access Management Tool",
    tagline: "Dynamic IP whitelisting for secure database access",
    problem: "Developers required database access, but manual credential sharing posed security risks.",
    solution: "Developed a secure database access tool that uses AWS SDK and EC2 Security Groups to whitelist developer IPs dynamically, sending automated notifications upon access.",
    impact: "🔒 Eliminated manual access risks and enhanced database access traceability and control.",
    techStack: ["AWS SDK", "EC2", "Node.js", "MongoDB"]
  },
  {
    title: "Product Analytics & User Behavior Insights",
    tagline: "Data-driven product optimization through user analytics",
    problem: "Product teams lacked insights into how users engaged with key features.",
    solution: "Implemented PostHog-based user tracking, Google Analytics, and Clarity heatmaps to analyze engagement patterns and user behavior.",
    impact: "📈 Increased product usage by 17% through data-driven feature optimization and A/B testing.",
    techStack: ["PostHog", "Google Analytics", "Clarity"]
  },
  {
    title: "A/B Testing & Conversion Optimization",
    tagline: "Validating features through data-driven experimentation",
    problem: "Survey completion rates were low, and feature adoption needed validation.",
    solution: "Implemented an A/B testing framework to evaluate feature performance and user experience differences.",
    impact: "🎯 Improved survey response rate by 17%, leading to higher engagement and better data quality.",
    techStack: ["PostHog", "Analytics", "Node.js"]
  },
  {
    title: "Multi-Project DevOps Management",
    tagline: "Standardizing deployments across 50+ projects",
    problem: "Managing deployments for numerous projects created inconsistencies and overhead.",
    solution: "Standardized DevOps pipelines across the organization with shared templates and centralized deployment tracking.",
    impact: "🚀 Successfully handled deployment for 50+ projects, ensuring uniform quality and reduced rollout times.",
    techStack: ["Docker", "AWS", "CI/CD", "Bitbucket"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              💡 My Work — Engineering with Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Problem-solving through scalable, secure, and data-driven solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                {...project}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
