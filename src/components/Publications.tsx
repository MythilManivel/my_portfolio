import { BookOpen, Calendar, Link } from 'lucide-react';
import bookImage1 from '../assets/BOOK.webp'; // First imageE:\port\src\assets\BOOK.webp

const publications = [
  {
    period: '2025',
    title: 'Smart Hospitals in the Modern Era – Surgical Robots in Smart Hospitals',
    publisher: 'Wiley',
    type: 'Book Chapter (Chapter 7)',
    isbn: '978-1-394-35533-4',
    url: 'https://www.wiley.com/en-in/Surgical+Robots+in+Smart+Hospitals-p-9781394355358',
    description: [
      'Authored Chapter 7 focusing on the role of surgical robots in smart hospital ecosystems.',
      'Discusses advancements in robotic-assisted surgery, precision healthcare, and automation in modern hospitals.',
    ],
    tags: ['Smart Healthcare', 'Surgical Robotics', 'Research'],
  },
];

const Publications = () => {
  return (
    <section id="publications" className="section-container">
      <div className="max-w-6xl mx-auto">
        <span className="section-label text-xs sm:text-sm">PUBLICATIONS</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-10 sm:mb-16">
          Publications
        </h2>

        <div className="grid md:grid-cols-1 gap-6 sm:gap-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-border card-hover flex flex-col sm:flex-row gap-4 sm:gap-8"
            >
              {/* Left card with image */}
              <div className="flex flex-col gap-2 sm:gap-4 shrink-0 w-full sm:w-auto">
                <div className="flex gap-2 sm:gap-4 justify-center sm:justify-start">
                  <img
                    src={bookImage1}
                    alt="Book Cover"
                    className="w-32 h-44 sm:w-48 sm:h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right card: Publication content */}
              <div className="flex-1">
                {/* Period */}
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {pub.period}
                </div>

                {/* Title and publisher info */}
                <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors mb-0.5 sm:mb-1 line-clamp-2">
                      {pub.title}
                    </h3>
                    <p className="text-xs sm:text-base text-primary font-medium">
                      {pub.type} @ {pub.publisher}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-1.5 sm:space-y-3 mb-4 sm:mb-6">
                  {pub.description.slice(0, 1).map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground text-xs sm:text-base leading-relaxed flex gap-2 sm:gap-3"
                    >
                      <span className="w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/50 mt-1 sm:mt-2 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* ISBN + Link */}
                <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
                  <p className="text-xs sm:text-base">
                    <strong>ISBN:</strong> {pub.isbn}
                  </p>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <Link className="w-3.5 h-3.5 sm:w-4 sm:h-4" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
