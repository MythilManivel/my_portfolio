import { Trophy, Award, Medal } from 'lucide-react';

const achievements = [
  {
    title: 'Best Student Award (2023 - 2024)',
    description: 'Honored with the Best Student Award (2023–2024) for overall academic and extracurricular excellence.',
    icon: Trophy,
    highlight: true,
  },
  {
    title: 'Top 5% Merit Scholarship (2023-2025)',
    description: 'Recipient of the Top 5% Merit Scholarship for consistent high academic performance.',
    icon: Award,
    highlight: true,
  },
  {
    title: '1st Prize – Paper Presentation on "AI in Agriculture", CIT (2024)',
    description: '',
    icon: Medal,
    highlight: false,
  },
  {
    title: '2nd Prize – Project Presentation "Caesar Cipher" at SKCET, 2024',
    description: '',
    icon: Medal,
    highlight: false,
  },
  {
    title: '3rd Prize – Hackathon CIT "AI-Powered Hospital Management System" (2025)',
    description: '',
    icon: Medal,
    highlight: false,
  },
  {
    title: '3rd Prize – Hackathon KEC "Cattle Breed Classification"',
    description: '',
    icon: Medal,
    highlight: false,
  },
  {
    title: 'Participated in SIH and MSME',
    description: 'Participated twice in national-level hackathons including Smart India Hackathon (SIH) and MSME Hackathon.',
    icon: Award,
    highlight: false,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <div className="max-w-6xl mx-auto">
        <span className="section-label text-xs sm:text-sm">AWARDS & ACHIEVEMENTS</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-10 sm:mb-16">Awards & Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`group relative bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 border card-hover overflow-hidden ${
                  achievement.highlight 
                    ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5' 
                    : 'border-border'
                }`}
              >
                {achievement.highlight && (
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
                )}
                
                <div className="relative z-10 flex gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl flex items-center justify-center shrink-0 ${
                    achievement.highlight 
                      ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground' 
                      : 'bg-primary/10'
                  }`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${achievement.highlight ? '' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-lg font-bold font-display text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {achievement.title}
                    </h3>
                    {achievement.description && (
                      <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">{achievement.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
