import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  categoryTags?: string[];
  delay?: number;
  isBest?: boolean;
  featured?: boolean;
  liveLabel?: string;
}

const ProjectCard = ({
  title,
  tagline,
  problem,
  solution,
  impact,
  techStack,
  categoryTags = [],
  delay = 0,
  isBest = false,
  featured = false,
  liveLabel,
}: ProjectCardProps) => {
  return (
    <Card
      className={`group relative overflow-hidden bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 animate-slide-up${
        featured ? " ring-1 ring-primary/40" : ""
      }`}
      style={{ animationDelay: `${delay}ms`, boxShadow: "var(--shadow-card)" }}
    >
      {/* Featured badge — top-left */}
      {featured && (
        <div className="absolute top-0 left-0 z-20">
          <Badge className="rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-4 py-1.5 shadow-lg flex items-center gap-1.5 text-[11px]">
            <Flame className="w-3.5 h-3.5" />
            Featured
          </Badge>
        </div>
      )}

      {/* isBest badge — top-right (when not featured) */}
      {isBest && !featured && (
        <div className="absolute top-0 right-0 z-20">
          <Badge className="rounded-tl rounded-tr rounded-br-none bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-4 py-1.5 shadow-lg text-[11px]">
            <Star className="w-3.5 h-3.5" /> Best Project
          </Badge>
        </div>
      )}

      {/* Live label badge — top-right */}
      {liveLabel && (
        <div className="absolute top-0 right-0 z-20">
          <Badge className="rounded-tr-none rounded-tl-none rounded-bl-md rounded-br-none bg-green-500/90 text-white font-semibold px-3 py-1 text-[11px] shadow-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            {liveLabel}
          </Badge>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader
        className={`relative${featured || liveLabel || (isBest && !featured) ? " pt-10" : ""}`}
      >
        <div className="space-y-2">
          {categoryTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-1">
              {categoryTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[10px] px-2 py-0.5 text-muted-foreground border-border/60"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <CardTitle
            className={`group-hover:text-primary transition-colors font-semibold${
              featured ? " text-[22px]" : " text-[18px]"
            }`}
          >
            {title}
          </CardTitle>
          <CardDescription className="text-[14px] font-normal text-muted-foreground italic leading-[1.5]">
            {tagline}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <div className="space-y-1.5">
          <h4 className="text-[12px] font-semibold uppercase tracking-wide text-destructive">
            Problem
          </h4>
          <p className="text-[14px] font-normal text-body leading-[1.7]">
            {problem}
          </p>
        </div>

        <div className="space-y-1.5">
          <h4 className="text-[12px] font-semibold uppercase tracking-wide text-primary">
            Solution
          </h4>
          <p className="text-[14px] font-normal text-body leading-[1.7]">
            {solution}
          </p>
        </div>

        <div className="space-y-1.5">
          <h4 className="text-[12px] font-semibold uppercase tracking-wide text-accent light:text-accent-foreground">
            Impact
          </h4>
          <p className="text-[14px] font-medium text-body leading-[1.7]">
            {impact}
          </p>
        </div>

        <div className="space-y-2 pt-3 border-t border-border/50">
          <h4 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="tech-pill text-[11px] font-medium px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
