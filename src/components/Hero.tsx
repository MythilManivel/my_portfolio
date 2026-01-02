import {
  Mail,
  Sparkles,
  Download,
  Phone,
  Github,
  Linkedin
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '-3s' }}
      />

      {/* RIGHT SIDE FLOATING ICON BUTTONS - Hidden on mobile, visible from sm breakpoint */}
      <div className="hidden sm:fixed sm:right-4 md:right-6 sm:top-1/2 sm:-translate-y-1/2 sm:z-20 sm:flex flex-col gap-3 sm:gap-4">
        {/* Email */}
        <a
          href="mailto:m.mythili23manivel@gmail.com"
          className="icon-button social-pulse w-10 sm:w-12 h-10 sm:h-12"
          aria-label="Email"
        >
          <Mail size={18} className="sm:hidden" />
          <Mail size={20} className="hidden sm:block" />
        </a>

        {/* Phone */}
        <a
          href="tel:+919025930150"
          className="icon-button w-10 sm:w-12 h-10 sm:h-12"
          aria-label="Phone"
        >
          <Phone size={18} className="sm:hidden" />
          <Phone size={20} className="hidden sm:block" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MythilManivel/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button w-10 sm:w-12 h-10 sm:h-12"
          aria-label="GitHub"
        >
          <Github size={18} className="sm:hidden" />
          <Github size={20} className="hidden sm:block" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mythili-manivel-72779631b/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button w-10 sm:w-12 h-10 sm:h-12"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} className="sm:hidden" />
          <Linkedin size={20} className="hidden sm:block" />
        </a>
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="text-center max-w-4xl mx-auto relative z-10">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/5 border border-primary/10 mb-6 sm:mb-8 animate-fade-in text-xs sm:text-sm">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
          <span className="font-medium text-primary">
            Available for opportunities
          </span>
        </div>

        {/* Name - Responsive text sizes */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-display text-foreground mb-4 sm:mb-6 tracking-tight">
          Mythili <span className="gradient-text">M</span>
        </h1>

        {/* Role - Responsive layout and font */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
            Full Stack & AI/ML Developer
          </p>
          <span className="hidden sm:inline-block w-0.5 h-7 bg-primary rounded-full animate-pulse" />
        </div>

        {/* CTA Buttons - Stack on mobile, responsive sizes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
          <a
            href="mailto:m.mythili23manivel@gmail.com"
            className="btn-primary w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <Mail size={18} className="sm:hidden" />
            <Mail size={20} className="hidden sm:block" />
            <span className="sm:hidden">Connect</span>
            <span className="hidden sm:inline">Let's Connect</span>
          </a>

          <a
            href="/Mythili_M_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full border border-primary/30 text-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Download size={16} className="sm:hidden" />
            <Download size={18} className="hidden sm:block" />
            <span className="sm:hidden">Resume</span>
            <span className="hidden sm:inline">Download Resume</span>
          </a>
        </div>

        {/* Scroll Indicator - Hide on mobile */}
        <div className="hidden sm:absolute sm:bottom-8 md:bottom-12 sm:left-1/2 sm:-translate-x-1/2 sm:animate-in sm:opacity-0 sm:stagger-4">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
