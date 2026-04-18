// src/components/Lightbox.jsx
export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors z-50"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="relative max-w-7xl max-h-[90vh] w-full flex flex-col items-center">
        <img 
          src={image.url} 
          alt={image.title} 
          className="max-w-full max-h-[85vh] object-contain shadow-2xl"
        />
        <p className="text-white/70 tracking-widest text-sm uppercase mt-6">{image.title} — {image.category}</p>
      </div>
    </div>
  );
}