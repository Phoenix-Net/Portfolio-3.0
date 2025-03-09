'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <div className="relative w-full max-w-7xl h-[95vh]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          onClick={(e) => e.stopPropagation()}
          quality={100}
          priority
        />
      </div>
      <button
        className="absolute top-4 left-4 text-white hover:text-gray-300 text-4xl"
        onClick={onClose}
      >
        ×
      </button>
    </div>
  );
} 