import { Users, Calendar, Newspaper, UserCheck } from 'lucide-react';

const activities = [
  {
    period: '2025',
    title: 'Event Ambassador',
    organization: 'CIT',
    icon: Users,
    description: [
      'Represented the institution as an Event Ambassador, promoting technical and non-technical events across campus.',
      'Coordinated with organizing teams to manage registrations, student engagement, and event publicity.',
    ],
    tags: ['Public Speaking', 'Leadership', 'Event Management'],
  },
  {
    period: '2023 — 2026',
    title: 'IT Association Newsletter Contributor',
    organization: 'IT Department',
    icon: Newspaper,
    description: [
      'Contributed 5+ publications to the IT Association Newsletter, including technical articles, event reports, and student highlights.',
      'Collaborated with the editorial team to ensure high-quality content and timely releases.',
    ],
    tags: ['Content Writing', 'Communication', 'Teamwork'],
  },
  {
    period: '2023 — 2027',
    title: 'Student Placement Coordinator',
    organization: 'IT Department',
    icon: UserCheck,
    description: [
      'Served as Student Placement Coordinator, acting as a bridge between students and recruiters.',
      'Assisted in organizing placement drives, coordinating schedules, and supporting students during recruitment processes.',
    ],
    tags: ['Leadership', 'Coordination', 'Professional Communication'],
  },
  {
    period: 'Mar 29, 2025',
    title: 'Workshop Coordinator',
    organization: 'Kongu Engineering College',
    icon: Users,
    description: [
      'Coordinated the One-day National Level Workshop "Bug-Free Browsing: Selenium Java for Beginners" held on 29-03-2025.',
      'Managed workshop logistics, participant registration, and communication to ensure smooth execution.',
      'Supported speakers and participants during the Selenium Java hands-on sessions.',
    ],
    tags: ['Coordination', 'Workshop Management', 'Selenium', 'Java'],
  },
];

const Activities = () => {
  return (
    <section id="activities" className="section-container">
      <div className="max-w-6xl mx-auto">
        <span className="section-label text-xs sm:text-sm">ACTIVITIES & LEADERSHIP</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-10 sm:mb-16">Activities & Leadership</h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-border card-hover"
              >
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {activity.period}
                </div>

                <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-xs sm:text-base text-primary font-medium">@ {activity.organization}</p>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {activity.description.map((desc, idx) => (
                    <li key={idx} className="text-muted-foreground text-xs sm:text-base leading-relaxed flex gap-2 sm:gap-3">
                      <span className="w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/50 mt-1 sm:mt-2 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
