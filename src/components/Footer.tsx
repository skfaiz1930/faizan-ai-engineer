import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold">Let's Connect</h3>
          
          <div className="flex flex-wrap gap-6 justify-center items-center text-muted-foreground">
            <a 
              href="mailto:faiz.dev@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              faiz.dev@gmail.com
            </a>
            <span className="hidden md:inline">|</span>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <span className="hidden md:inline">|</span>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <span className="hidden md:inline">|</span>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground pt-6">
            © {new Date().getFullYear()} Faiz. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
