
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageModal = ({ images, currentIndex, onClose, onNavigate }: ImageModalProps) => {
  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center">
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Navigation buttons */}
        <Button
          onClick={handlePrevious}
          variant="outline"
          size="icon"
          className="absolute left-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          onClick={handleNext}
          variant="outline"
          size="icon"
          className="absolute right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Main image */}
        <img
          src={images[currentIndex]}
          alt={`Projeto ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
