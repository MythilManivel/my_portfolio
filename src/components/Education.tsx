import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const educationData = [
  {
    period: 'Jan 2023 — Jan 2027',
    degree: 'B.Tech Information Technology',
    institution: 'Kongu Engineering College',
    institutionUrl: 'https://www.kongu.ac.in/',
    location: 'ERODE',
    highlights: [
      'Achieved 91.2% marks in B.Tech Information Technology program.',
      'Relevant coursework includes advanced subjects in IT and software development.',
      'Recognized for academic excellence with a strong foundation in programming and system design.',
    ],
    tags: ['Information Technology', 'Software Development', 'Programming', 'Academic Excellence', 'Engineering'],
  },
  {
    period: 'Jan 2020 — Jan 2023',
    degree: 'Higher Secondary Certificate (HSC) & (SSLC)',
    institution: 'Vivekananda Vidyalaya Matric Hr Sec School',
    institutionUrl: '#',
    location: '',
    highlights: [
      'Scored 92.66% in Higher Secondary Certificate examination.',
      'Completed higher secondary education with strong academic performance.',
      'Focused on foundational science and mathematics courses.',
    ],
    tags: [],
  },
];

const Education = () => {
  return (
    <section id="education" className="section-container section-alt">
      <div className="max-w-6xl mx-auto">
        <span className="section-label text-xs sm:text-sm">EDUCATION</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-12 sm:mb-16">Education</h2>

        <div className="relative">
          {/* Timeline line - Hide on mobile */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative md:pl-20"
              >
                {/* Timeline dot - Hide on mobile */}
                <div className="absolute left-3 sm:left-6 top-10 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-card border-3 sm:border-4 border-primary hidden md:flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary" />
                </div>

                <div className="bg-card rounded-xl sm:rounded-3xl p-4 sm:p-8 border border-border card-hover">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {edu.period}
                    </span>
                    {edu.location && (
                      <span className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        {edu.location}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold font-display text-foreground">{edu.degree}</h3>
                  </div>

                  <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      {edu.institution}
                    </a>
                  </p>

                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground text-xs sm:text-base flex items-start gap-2 sm:gap-3">
                        <span className="w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/50 mt-1.5 sm:mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {edu.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {edu.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
