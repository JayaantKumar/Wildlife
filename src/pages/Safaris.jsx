// src/pages/Safaris.jsx
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { safaris } from '../data';

export default function Safaris() {
  return (
    <PageTransition>
      <div className="bg-white min-h-screen text-[#1a1a1a]">
        
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[80vh] w-full">
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2500" 
            alt="Safari Vehicle" 
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-wide text-center px-4 drop-shadow-lg">
              Wildlife Safaris & Photography Tours
            </h1>
          </div>
        </div>

        {/* Philosophy Intro Section */}
        <div className="bg-[#f4f4f4] py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-gray-900">
              Wildlife Tours & Photo Safaris for Photographers
            </h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Our wildlife photo tour leaders are full-time wildlife photographers with decades of experience in the field as well as in guiding and photographic instruction.
              </p>
              <p>
                Group sizes are deliberately small, and we offer a small client-leader ratio that allows for personal attention and customised guidance during your wildlife photography safari with us. Every tour is paired with hands-on photography tuition.
              </p>
              <p>
                I lead each group to ensure you leave not just with extraordinary images, but with improved technique and creative confidence. Photographers of all levels are welcome.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif mt-20 mb-8 text-gray-900">
              Our Wildlife Photo Safari Philosophy
            </h3>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Our aim is for you to finish your wildlife photography tour with us as a better wildlife photographer than when you first arrived. The photography of our guests comes before our own. While we also take pictures while on safari, we will always ensure our guests have the right of way.
              </p>
              <p>
                As in any natural environment, the wildlife comes first. We come second. During all our photo tours, we abide by guidelines that ensure that the welfare of the wildlife is not compromised or impeded by our presence.
              </p>
            </div>
          </div>
        </div>

        {/* Safaris Grid Section */}
        <div className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">
              Photographic Safaris and Wildlife Photo Tours
            </h2>
            <p className="text-xl md:text-2xl font-serif text-gray-800">2026 | 2027</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {safaris.map((safari) => (
              <div key={safari.id} className="flex flex-col items-center text-center group">
                <Link to={`/safaris/${safari.id}`} className="w-full overflow-hidden mb-6 aspect-[4/3]">
                  <img 
                    src={safari.coverUrl} 
                    alt={safari.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </Link>
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{safari.title}</h3>
                <p className="text-sm text-gray-500 mb-1 font-light">{safari.duration}</p>
                <p className="text-sm text-gray-500 mb-6 font-light">{safari.location}</p>
                <Link 
                  to={`/safaris/${safari.id}`}
                  className="bg-[#454a4f] text-white text-xs tracking-widest uppercase py-3 px-6 rounded-sm hover:bg-[#2a2d30] transition-colors"
                >
                  More About This Safari
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}