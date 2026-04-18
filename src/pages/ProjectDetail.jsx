// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import PageTransition from '../components/PageTransition';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  // Proper fallback UI instead of returning null (fixes the blank page)
  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-[80vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
          <h1 className="text-4xl font-serif text-white">Project Not Found</h1>
          <p className="text-gray-400 font-light mb-4">The project you are looking for does not exist or has been moved.</p>
          <Link to="/projects" className="border-b border-white pb-1 text-sm tracking-widest uppercase hover:text-gray-400 transition-colors">
            Return to Projects
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-black min-h-screen">
        {/* Hero Section */}
        <div className="h-[70vh] md:h-[85vh] relative">
          <img src={project.coverUrl} className="w-full h-full object-cover opacity-70" alt={project.title} />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-8xl font-serif tracking-wide text-white drop-shadow-lg">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto py-32 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-xs tracking-[0.3em] uppercase text-gray-500 border-b border-white/10 pb-12">
            <div><p className="text-white mb-2 font-serif tracking-normal text-lg">Year</p>{project.year}</div>
            <div><p className="text-white mb-2 font-serif tracking-normal text-lg">Client</p>{project.client}</div>
            <div className="col-span-2"><p className="text-white mb-2 font-serif tracking-normal text-lg">Location</p>Various Expeditions</div>
          </div>
          
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 italic mb-24 text-center max-w-4xl mx-auto">
            "{project.description}"
          </p>

          {/* Project Image Gallery */}
          <div className="space-y-4 md:space-y-8">
            {project.images.map((url, i) => (
              <div key={i} className="w-full overflow-hidden">
                <img 
                  src={url} 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  alt={`${project.title} detailed shot ${i + 1}`} 
                />
              </div>
            ))}
          </div>

          <div className="pt-32 text-center">
            <Link to="/projects" className="text-xs tracking-[0.4em] uppercase border-b border-white/30 pb-2 hover:border-white transition-all text-gray-400 hover:text-white">
              Return to Archives
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}