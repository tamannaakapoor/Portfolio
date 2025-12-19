import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          Designed & Built with ❤️ by <span className="text-foreground font-medium">Tamanna</span>
        </p>

        {/* Center */}
        <p className="text-sm text-muted-foreground">
          © {year} All rights reserved
        </p>

        {/* Right */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/tamannaakapoor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/tamanna-kapoor-776586287/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>

          {/* <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter size={20} />
          </a> */}

          <a
            href="https://instagram.com/justlikethatbilkulwese"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
