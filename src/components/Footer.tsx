import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-10 sm:py-14 px-3 sm:px-4 border-t border-border bg-card/60 backdrop-blur dark:bg-card-dark/60">

      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-6">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-lg sm:text-2xl font-bold font-display gradient-text hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition inline-block"
            >
              Mythili Portfolio
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground-dark mt-0.5 sm:mt-1">
              Aspiring Software Engineer | AI & Web Development
            </p>
          </div>

          {/* Social & Contact Links */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="https://github.com/Mythili23Manivel/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button w-9 h-9 sm:w-10 sm:h-10"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/mythili-manivel-72779631b/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button w-9 h-9 sm:w-10 sm:h-10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="mailto:m.mythili23manivel@gmail.com"
              rel="noopener noreferrer"
              className="icon-button w-9 h-9 sm:w-10 sm:h-10"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="tel:+919025930150"
              rel="noopener noreferrer"
              className="icon-button w-9 h-9 sm:w-10 sm:h-10"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground-dark">
            <p>© 2026 Mythili. All rights reserved.</p>
            <p
              className="flex items-center justify-center gap-1 mt-0.5 sm:mt-1"
              aria-label="Designed and built with love by Mythili"
            >
              Designed & built by
              <span className="font-medium text-foreground">Mythili M</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
