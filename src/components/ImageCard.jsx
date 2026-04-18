// src/components/ImageCard.jsx
export default function ImageCard({ image, onClick }) {
  return (
    <div 
      className="group relative overflow-hidden bg-gray-900 cursor-pointer aspect-square"
      onClick={() => onClick(image)}
    >
      <img 
        src={image.url} 
        alt={image.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 flex items-center justify-center">
        <h3 className="text-white text-lg tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0">
          {image.title}
        </h3>
      </div>
    </div>
  );
}