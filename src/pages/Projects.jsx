// src/pages/Projects.jsx
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export const projectsData = [
  {
    id: "arctic",
    title: "Life in the Arctic",
    year: "2024",
    description: "A three-month expedition documenting the shifting ice landscapes and the resilient species that call it home.",
    coverUrl: "https://images.unsplash.com/photo-1518118014377-ce9d533fb22e?w=1600"
  },
  {
    id: "africa",
    title: "Wild Africa",
    year: "2022",
    description: "Capturing the raw, unfiltered essence of predator-prey dynamics across the Serengeti.",
    coverUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1600"
  }
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="pt-24 pb-12 px-4 md:px-12 min-h-screen">
        <h2 className="text-4xl font-light tracking-[0.2em] uppercase mb-16">Projects</h2>
        
        <div className="flex flex-col gap-24">
          {projectsData.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="block group relative w-full h-[60vh] md:h-[80vh] overflow-hidden cursor-pointer">
              <img 
                src={project.coverUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                <div className="overflow-hidden">
                  <span className="block text-gray-400 tracking-widest text-sm mb-4 transform translate-y-8 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.year}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-6 transform translate-y-8 opacity-0 transition-all duration-700 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.title}
                  </h3>
                  <p className="max-w-xl text-gray-300 font-light leading-relaxed transform translate-y-8 opacity-0 transition-all duration-700 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}