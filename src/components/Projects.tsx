import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Nudge AI Engine",
    type: "AI / Automation / Product Intelligence",
    description: "Developed an AI-driven behavior engine that personalizes nudges, insights, and learning paths for managers and teams in real time. Integrated OpenAI, n8n, and PostHog analytics to analyze engagement and adapt chatbot recommendations dynamically.",
    impact: [
      "📈 Increased feature engagement by 27%",
      "⚙️ Reduced manual setup time by 60% with automation workflows",
      "🧠 Improved survey adaptability and personalization"
    ],
    techStack: ["OpenAI", "Node.js", "MongoDB", "n8n", "AWS Lambda", "PostHog"]
  },
  {
    title: "Secure DevOps Infrastructure",
    type: "Cloud & Security Engineering",
    description: "Built end-to-end CI/CD pipelines and automated cloud security controls using AWS Secrets Manager, IAM policies, and VAPT testing.",
    impact: [
      "🚀 Reduced deployment time by 70%",
      "🧩 Achieved ISO 27001-aligned compliance for internal systems",
      "🛡️ Eliminated manual credential leaks using secret rotation automation"
    ],
    techStack: ["AWS", "Docker", "Terraform", "GitHub Actions", "SonarCloud", "Node.js"]
  },
  {
    title: "Product Analytics System",
    type: "Data Analytics / Growth",
    description: "Implemented PostHog, Metabase, and Clarity to visualize product usage, run A/B tests, and improve retention.",
    impact: [
      "📊 Increased product usage by 22% using analytics-driven nudges",
      "🧩 Improved UX flow conversion through heatmaps and user tracking",
      "💡 Created automated dashboards for product and growth teams"
    ],
    techStack: ["PostHog", "Metabase", "Google Analytics", "Node.js"]
  },
  {
    title: "Scalable Full-Stack Product",
    type: "Full-Stack Engineering",
    description: "Designed and deployed a full-stack application handling 50K+ concurrent users. Focused on performance, security, and user experience.",
    impact: [
      "⚙️ 99.98% uptime",
      "🧩 40% faster response times through optimized APIs",
      "🔐 Enhanced data protection and backend resilience"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Redis", "Nginx", "AWS EC2"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building AI-powered systems and scalable infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
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
