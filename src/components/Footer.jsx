// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#242628] text-[#cccccc] py-8 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light">
      
      {/* Left: Name */}
      <div className="text-lg tracking-wide">
        Jhon Doe
      </div>

      {/* Center: Copyright */}
      <div className="text-center leading-relaxed">
        Copyright © Jhon Doe 2026. All Rights Reserved.<br />
        Jhon Doe Wildlife Photography
      </div>

      {/* Right: Social Icons */}
      <div className="flex gap-4 items-center">
        {/* Instagram */}
        <a href="#" className="hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        {/* Facebook */}
        <a href="#" className="hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        {/* Email */}
        <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
      </div>
      
    </footer>
  );
}