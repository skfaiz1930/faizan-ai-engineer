import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold">
              💬 Let's Build Something Amazing
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to discuss AI, automation, and systems design —
              whether it's scaling infrastructure or building the next
              intelligent product.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center">
            <a
              href="mailto:skfaiz0929@gmail.com"
              className="flex items-center gap-2 text-lg hover:text-primary transition-colors font-medium"
            >
              <Mail className="h-5 w-5" />
              skfaiz0929@gmail.com
            </a>
            <span className="hidden md:inline text-muted-foreground">|</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-primary transition-colors font-medium"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <span className="hidden md:inline text-muted-foreground">|</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-primary transition-colors font-medium"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
         
          </div>

          <p className="text-sm text-muted-foreground pt-6 border-t border-border/30">
            © {new Date().getFullYear()} Faizan. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
