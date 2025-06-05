import React from 'react';
import Image from 'next/image';

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  fill = false,
  width,
  height,
  sizes = "100vw",
  ...props 
}) {
  // Check if the image is external (not in our domain)
  const isExternal = !src.startsWith('/');
  
  // Common image props
  const imageProps = {
    src,
    alt,
    className: `${className} transition-opacity duration-500`,
    sizes,
    loading: priority ? 'eager' : 'lazy',
    placeholder: !priority ? 'blur' : undefined,
    blurDataURL: !priority ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHXU7LPAAAAABJRU5ErkJggg==' : undefined,
    ...props
  };

  if (fill) {
    return (
      <div className={`relative ${className}`}>
        <Image
          {...imageProps}
          className={`object-cover ${className}`}
          fill
          unoptimized={isExternal}
        />
      </div>
    );
  }
  
  return (
    <Image
      {...imageProps}
      width={width || 1200}
      height={height || 800}
      unoptimized={isExternal}
    />
  );
}
