"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import images from '@/data/images'; // <— Twoje URL-e

const getSpanClasses = (size, orientation) => {
  switch (size) {
    case 'large':
      return 'col-span-2 row-span-2';
    case 'medium':
      return orientation === 'portrait'
        ? 'col-span-1 row-span-2'
        : 'col-span-2 row-span-1';
    case 'small':
    default:
      return 'col-span-1 row-span-1';
  }
};

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 grid-flow-row-dense">
        {images.map((img, idx) => {
          const spanClasses = getSpanClasses(img.size, img.orientation);
          return (
            <div
              key={idx}
              className={`${spanClasses} relative overflow-hidden cursor-pointer`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover"
                unoptimized={!img.url.startsWith('/')}
              />
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >

          <div
            className="relative w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>


            <div className="relative w-full h-full">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                unoptimized={!selectedImage.url.startsWith('/')}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
