import { ExternalLink, Cloud, Calendar, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Cloud Practitioner Certification',
    issuer: 'AWS',
    period: 'Jan 2024 — Feb 2024',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    description: [
      'Validates foundational knowledge of cloud concepts and AWS services.',
      'Skills acquired include cloud computing basics, AWS core services, security, pricing, and support.',
      'Demonstrates ability to effectively utilize AWS cloud infrastructure for scalable applications.',
    ],
    tags: ['AWS', 'Cloud Computing', 'Cloud Foundations'],
  },
  {
    title: 'Oracle Certified Professional – APEX Cloud Developer',
    issuer: 'Oracle University',
    period: 'May 2025',
    link: 'https://www.linkedin.com/posts/mythilimanivel_oraclecertified-oracleapex-clouddeveloper-activity-7330073841706102784-pl8t',
    description: [
      'Thrilled to share a proud achievement!',
      'Officially certified as Oracle Certified Professional – APEX Cloud Developer as of May 16, 2025.',
      'Enhanced skills in building modern, scalable, and secure web applications using Oracle APEX.',
      'Excited to explore new opportunities and innovate with the power of cloud technology.',
      'Grateful to Oracle University for the recognition and support throughout the learning path.',
    ],
    tags: [
      'OracleCertified',
      'OracleAPEX',
      'CloudDeveloper',
      'ProfessionalGrowth',
      'TechJourney',
    ],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container section-alt">
      <div className="max-w-6xl mx-auto">
        <span className="section-label text-xs sm:text-sm">CERTIFICATIONS</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-10 sm:mb-16">
          Certifications
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-border card-hover overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 flex flex-col md:flex-row gap-4 sm:gap-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-secondary">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {cert.period}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-primary px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10">
                      @ {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold font-display text-foreground mb-4 sm:mb-6 line-clamp-2">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-1.5 sm:gap-2 group/link"
                    >
                      {cert.title}
                      <ExternalLink
                        size={14}
                        className="sm:w-4.5 sm:h-4.5 opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0"
                      />
                    </a>
                  </h3>

                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {cert.description.slice(0, 2).map((desc, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground text-xs sm:text-base flex gap-2 sm:gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {cert.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
