import React from 'react';
import images from '@/data/images' // zaimportuj swoją tablicę

const getSpanClasses = (size, orientation) => {
  switch (size) {
    case 'large':
      // duże zdjęcie: 2 kolumny na 2 wiersze
      return 'col-span-2 row-span-2';
    case 'medium':
      // średnie: jeśli pionowe → 1 kolumna × 2 wiersze; jeśli poziome → 2 kolumny × 1 wiersz
      return orientation === 'portrait'
        ? 'col-span-1 row-span-2'
        : 'col-span-2 row-span-1';
    case 'small':
    default:
      // małe: 1 kolumna × 1 wiersz
      return 'col-span-1 row-span-1';
  }
};

const ImagesGrid = () => {
  return (
    <div className="p-4">
  <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 grid-flow-row-dense">
    {images.map((img, idx) => {
      const spanClasses = getSpanClasses(img.size, img.orientation);
      return (
        <div key={idx} className={`${spanClasses} overflow-hidden rounded`}>
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
        </div>
      );
    })}
  </div>
</div>

  );
};

export default ImagesGrid;
