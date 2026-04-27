// src/pages/Projects.jsx
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { projects } from '../data'; 

export default function Projects() {
  return (
    <PageTransition>
      <div className="pt-24 md:pt-32 pb-24 px-4 md:px-16 min-h-screen max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif tracking-wide mb-12 md:mb-20 text-white">
          Featured Projects
        </h2>
        
        <div className="flex flex-col gap-16 md:gap-32">
          {projects.map((project) => (
            // PROJECT FIX: Changed mobile from h-[60vh] to aspect-video
            <Link to={`/projects/${project.id}`} key={project.id} className="block group relative w-full aspect-video md:h-[80vh] overflow-hidden cursor-pointer">
              <img 
                src={project.coverUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-16">
                <div className="overflow-hidden">
                  <span className="block text-gray-400 tracking-widest text-xs md:text-sm mb-2 md:mb-4 transform translate-y-8 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.year} — {project.client}
                  </span>
                  <h3 className="text-2xl md:text-6xl font-serif tracking-wide text-white mb-2 md:mb-6 transform translate-y-8 opacity-0 transition-all duration-700 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.title}
                  </h3>
                  <p className="max-w-2xl text-gray-300 font-light text-sm md:text-base leading-relaxed transform translate-y-8 opacity-0 transition-all duration-700 delay-200 group-hover:translate-y-0 group-hover:opacity-100 hidden sm:block">
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