import { useEffect, useState, useRef } from 'react';
import { Code2, Briefcase, Layers } from 'lucide-react';

const stats = [
  { value: 10, suffix: '+', label: 'Projects Completed', icon: Code2 },
  { value: 1, label: 'Year Experience', icon: Briefcase },
  { value: 10, suffix: '+', label: 'Technologies Used', icon: Layers },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const increment = stat.value / 40;
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.value) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = stat.value;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
          }
        }, 40);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="section-container section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">STATS</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">By the Numbers</h2>
          <p className="text-sm text-muted-foreground uppercase tracking-widest">ACHIEVEMENTS & MILESTONES</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative text-center p-10 rounded-3xl bg-card border border-border card-hover overflow-hidden"
              >
                {/* Gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-6xl font-bold font-display gradient-text mb-3">
                    {counts[index]}{stat.suffix}
                  </div>
                  <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
