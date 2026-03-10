import { useState, useEffect, useCallback } from 'react';

interface Photo {
  url: string;
  caption: string;
}

interface Props {
  photos: Photo[];
  initialIndex?: number;
  onClose: () => void;
}

export function PhotoLightbox({ photos, initialIndex = 0, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);

  const prev = useCallback(() => { setScale(1); setIndex(i => (i - 1 + photos.length) % photos.length); }, [photos.length]);
  const next = useCallback(() => { setScale(1); setIndex(i => (i + 1) % photos.length); }, [photos.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Закрыть */}
      <button
        className="absolute top-4 right-5 text-white/60 hover:text-white text-3xl leading-none z-10"
        onClick={onClose}
      >
        ×
      </button>

      {/* Счётчик */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
        {index + 1} / {photos.length}
      </div>

      {/* Стрелки */}
      {photos.length > 1 && (
        <>
          <button
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl z-10 px-3 py-6"
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <button
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl z-10 px-3 py-6"
            onClick={e => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </>
      )}

      {/* Фото */}
      <div
        className="flex flex-col items-center gap-4 px-14 max-h-screen py-16"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={photos[index].url}
          alt={photos[index].caption}
          className="max-h-[75vh] max-w-[85vw] object-contain rounded transition-transform duration-200 cursor-zoom-in select-none"
          style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
          onClick={() => setScale(s => s === 1 ? 2 : 1)}
          draggable={false}
        />
        {photos[index].caption && (
          <p className="text-white/50 text-sm italic text-center max-w-lg">{photos[index].caption}</p>
        )}
        <p className="text-white/25 text-xs">Нажми на фото для увеличения · ESC для закрытия</p>
      </div>

      {/* Миниатюры */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setScale(1); setIndex(i); }}
              className={`w-10 h-10 rounded overflow-hidden border-2 transition-all ${i === index ? 'border-yellow-400 opacity-100' : 'border-transparent opacity-40 hover:opacity-70'}`}
            >
              <img src={p.url} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface GalleryProps {
  photos: Photo[];
}

export function PhotoGallery({ photos }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className={`grid gap-4 ${photos.length === 1 ? 'grid-cols-1 max-w-xs' : photos.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
        {photos.map((photo, i) => (
          <div
            key={i}
            className="photo-card cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setLightboxIndex(i)}
          >
            <div className="overflow-hidden">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="photo-caption px-3 pb-3 pt-1 line-clamp-2">{photo.caption}</p>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <PhotoLightbox
          photos={photos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
