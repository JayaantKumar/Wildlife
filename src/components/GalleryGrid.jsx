// src/components/GalleryGrid.jsx
import ImageCard from './ImageCard';

export default function GalleryGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={onImageClick} />
      ))}
    </div>
  );
}