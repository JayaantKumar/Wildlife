// src/components/Sidebar.jsx
import { NavLink, Link } from 'react-router-dom';

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Projects', path: '/projects' },
    { name: 'Safaris', path: '/safaris' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Mobile Header & Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 p-4 flex justify-between items-center">
        <Link to="/" onClick={closeMobileMenu} className="text-xl tracking-[0.2em] font-light uppercase">
          WILD
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar Content */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-black border-r border-white/10 flex flex-col justify-between py-12 px-8 transform transition-transform duration-500 ease-in-out lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div>
          <Link to="/" onClick={closeMobileMenu} className="block text-2xl tracking-[0.3em] font-light uppercase mb-16 mt-8 lg:mt-0">
            WILD.
          </Link>
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) => `
                  text-left text-sm uppercase tracking-widest transition-colors duration-300
                  ${isActive ? 'text-white font-medium' : 'text-gray-500 hover:text-white'}
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">IG</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">X</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">IN</a>
        </div>
      </div>
    </>
  );
}