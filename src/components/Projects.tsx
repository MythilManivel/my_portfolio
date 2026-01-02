import { ExternalLink, Github, Calendar } from 'lucide-react';
import hospitalImg from '@/assets/projects/hospital.jpeg';
import classroomImg from '@/assets/projects/classroom.png';
import turmericImg from '@/assets/projects/turmeric.jpeg';
import recipeImg from '@/assets/projects/recipe.jpeg';
import curriculumImg from '@/assets/projects/curriculum.png';
import cattleImg from '@/assets/projects/cattle.png';

const projects = [
  {
    title: 'AI-Powered Hospital Management System',
    description: 'Developed a comprehensive hospital portal integrating an AI chatbot to streamline patient interactions and optimize database operations.',
    details: [
      'Utilized MERN stack technologies including MongoDB, Express.js, React, and Node.js, with JWT for authentication and REST APIs for efficient communication.',
      'This system reduced appointment scheduling time by 40%, demonstrating significant operational efficiency improvements.',
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AI chatbot'],
    link: 'https://github.com/MythilManivel/SMART-HOSPITAL',
    image: hospitalImg,
  },
  {
    title: 'AI Surveillance of Classroom Engagement',
    period: 'Sep 2024 — Nov 2024',
    description: 'Built an AI-driven video analytics system using YOLOv8 and OpenCV to monitor and assess student attentiveness in classrooms.',
    details: [
      'Developed real-time detection algorithms to generate detailed engagement reports.',
      'This system aids educators in understanding student focus levels, enhancing teaching effectiveness.',
    ],
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision', 'AI Surveillance'],
    link: 'https://github.com/MythilManivel/mindwatch',
    image: classroomImg,
  },
  {
    title: 'AI-Based Turmeric Classification',
    period: 'Jul 2025 — Sep 2025',
    subtitle: '@ CubeAI Solution, Bangalore',
    description: 'Designed and trained AI models for classification of turmeric varieties and detection of diseases affecting the crops.',
    details: [
      'Employed Python with YOLOv8 and OpenCV to develop precise image recognition and classification algorithms.',
      'This project supports agricultural health monitoring, improving yield quality and disease management.',
    ],
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'AI Classification'],
    link: 'https://github.com/MythilManivel/Curcuma_longa',
    image: turmericImg,
  },
  {
    title: 'Cooking Recipe Sharing App',
    period: 'May 2025 — Jul 2025',
    description: 'Developed a full-stack MERN application facilitating recipe sharing with user authentication and interactive UI features.',
    details: [
      'Implemented JWT for secure authentication and built RESTful APIs to manage user data and recipes efficiently.',
      'The app encourages community engagement among cooking enthusiasts.',
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    link: 'https://github.com/MythilManivel/cooking-recipe-sharing',
    image: recipeImg,
  },
  {
    title: 'Smart Curriculum & Attendance App',
    period: 'Aug 2025 — Nov 2025',
    description: 'Developed a smart education management app to digitalize curriculum progression, student activity tracking, and attendance monitoring.',
    details: [
      'Implemented real-time updates, role-based access (admin/teacher/student), and automated report generation.',
    ],
    techStack: ['Python', 'React.js', 'OpenCV', 'AWS', 'YOLO V8', 'MongoDB'],
    link: 'https://github.com/MythilManivel/Smart-Curriculum-Activity-Attendance-App',
    image: curriculumImg,
  },
  {
    title: 'Cattle Breed Classification',
    period: 'Sep 2025 — Dec 2025',
    description: 'Built a deep learning model to classify multiple cattle breeds using image datasets collected from farms.',
    details: [
      'Trained a CNN/YOLO-based classifier for high-accuracy breed prediction.',
      'Implemented a FastAPI/Flask backend to process uploaded images and return real-time identification results.',
    ],
    techStack: ['Python', 'CNN', 'YOLO V8', 'Roboflow', 'OpenCV'],
    link: 'https://github.com/MythilManivel/Cattle-Breed-Detection',
    image: cattleImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container section-alt">
      <div className="max-w-6xl mx-auto">
        <span className="section-label text-xs sm:text-sm">PROJECTS</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-12 sm:mb-16">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border card-hover"
            >
              <div className="relative h-40 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Floating link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <Github size={16} className="sm:hidden" />
                  <Github size={18} className="hidden sm:block" />
                </a>
              </div>

              <div className="p-4 sm:p-6">
                {project.period && (
                  <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mb-2">
                    <Calendar size={12} className="sm:w-4 sm:h-4" />
                    {project.period}
                  </p>
                )}
                <h3 className="text-lg sm:text-xl font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs sm:text-sm text-primary mb-3">{project.subtitle}</p>
                )}
                <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                  {project.details.slice(0, 1).map((detail, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2 line-clamp-2">
                      <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-primary/50 mt-1.5 sm:mt-2 shrink-0" />
                      {detail}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-muted text-muted-foreground font-medium">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  View Project
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
