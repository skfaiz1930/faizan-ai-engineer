import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  impact: string[];
  techStack: string[];
  delay?: number;
}

const ProjectCard = ({ title, type, description, impact, techStack, delay = 0 }: ProjectCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {type}
            </CardDescription>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </CardHeader>
      
      <CardContent className="relative space-y-6">
        <p className="text-foreground/90 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-primary">Impact:</h4>
          <ul className="space-y-2">
            {impact.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-3 pt-4 border-t border-border/50">
          <h4 className="text-sm font-semibold text-muted-foreground">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="text-xs bg-background/50"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
