import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Activities', href: '#activities' },
  { label: 'Publications', href: '#publications' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/90 backdrop-blur-xl shadow-xl border border-border/50'
          : 'bg-card/70 backdrop-blur-md border border-transparent'
      } rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3.5 max-w-5xl w-[98%] sm:w-[95%] md:w-auto`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="flex items-center justify-between gap-4 md:gap-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground transition-all duration-300 rounded-lg sm:rounded-xl hover:text-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right-side controls: theme + mobile menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            className="md:hidden icon-button w-9 h-9 sm:w-10 sm:h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 sm:mt-3 bg-card/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl border border-border/50 p-2 sm:p-4 animate-scale-in max-h-[60vh] overflow-y-auto">
          <div className="flex flex-col gap-0.5 sm:gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-base text-muted-foreground font-medium hover:bg-primary/5 hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
