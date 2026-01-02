import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const experienceData = [
  {
    period: 'Feb 2025 — May 2025',
    title: 'AI/ML Developer Intern',
    company: 'CubeAI Solutions',
    companyUrl: 'https://cubeaisolutions.com/',
    location: 'Bangalore',
    linkedInUrl: 'https://www.linkedin.com/posts/mythilimanivel_internshipcompletion-ai-machinelearning-activity-7359183756986920960-y3WE',
    highlights: [
      'Developed a Turmeric Leaf Disease Classification system using Convolutional Neural Networks (CNN) to accurately identify multiple disease categories.',
      'Implemented Turmeric Quality Assessment models including size estimation and freshness classification (Old vs New) using deep learning techniques.',
      'Built an Automatic Number Plate Recognition (ANPR) system using YOLO-based object detection integrated with OCR for real-time vehicle tracking.',
      'Worked on Textile Fabric Defect Detection and Production Progress Monitoring systems to identify cloth faults and track manufacturing workflow efficiency.',
      'Designed and developed the official corporate website for CubeAI Solutions with a responsive, modern UI aligned to company branding.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-6xl mx-auto">
        <span className="section-label text-xs sm:text-sm">PROFESSIONAL EXPERIENCE</span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-12 sm:mb-16">
          Professional Experience
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-border card-hover overflow-hidden"
            >
              {/* Accent gradient */}
              <div className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-primary via-accent to-primary" />

              {/* Period & Location */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm">
                <span className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1 rounded-full bg-primary/10 text-primary font-medium">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {exp.location}
                </span>
              </div>

              {/* Role & Company */}
              <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-2xl font-bold font-display text-foreground">
                    {exp.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm mt-1">
                    <span className="font-medium text-foreground">
                      {exp.company}
                    </span>

                    <span className="hidden sm:inline text-muted-foreground">•</span>

                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary font-semibold hover:underline break-words"
                    >
                      Website
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 sm:space-y-4">
                {exp.highlights.slice(0, 2).map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground leading-relaxed text-xs sm:text-base flex items-start gap-2 sm:gap-3"
                  >
                    <span className="w-0.5 h-0.5 sm:w-2 sm:h-2 rounded-full bg-primary/50 mt-1.5 sm:mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
