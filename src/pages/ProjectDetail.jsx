// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return null;

  return (
    <PageTransition>
      <div className="bg-black min-h-screen">
        <div className="h-[80vh] relative">
          <img src={project.coverUrl} className="w-full h-full object-cover opacity-80" alt={project.title} />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl md:text-8xl font-light tracking-[0.3em] uppercase">{project.title}</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-32 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-[10px] tracking-[0.4em] uppercase text-gray-500">
            <div><p className="text-white mb-2">Year</p>{project.year}</div>
            <div><p className="text-white mb-2">Client</p>{project.client}</div>
            <div className="col-span-2"><p className="text-white mb-2">Location</p>Various Expeditions</div>
          </div>
          <p className="text-2xl font-light leading-relaxed text-gray-300 italic mb-24">
            "{project.description}"
          </p>

          <div className="space-y-1">
            {project.images.map((url, i) => (
              <img key={i} src={url} className="w-full grayscale hover:grayscale-0 transition-all duration-1000 mb-12" />
            ))}
          </div>

          <div className="pt-24 text-center">
            <Link to="/projects" className="text-xs tracking-[0.5em] uppercase border-b border-white/30 pb-2 hover:border-white transition-all">
              Return to Archives
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}