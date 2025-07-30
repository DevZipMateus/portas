
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  // Selecionando 10 imagens da galeria para o carrossel
  const images = [
    { url: '/lovable-uploads/galeria/1083883429935146.jpeg', alt: 'Projeto de Porta Automática 1' },
    { url: '/lovable-uploads/galeria/1102318838552346.jpeg', alt: 'Projeto de Porta Automática 2' },
    { url: '/lovable-uploads/galeria/1150543456894754.jpeg', alt: 'Projeto de Porta Automática 3' },
    { url: '/lovable-uploads/galeria/1222596636310598.jpeg', alt: 'Projeto de Porta Automática 4' },
    { url: '/lovable-uploads/galeria/1242422570540030.jpeg', alt: 'Projeto de Porta Automática 5' },
    { url: '/lovable-uploads/galeria/1276507387385563.jpeg', alt: 'Projeto de Porta Automática 6' },
    { url: '/lovable-uploads/galeria/1315471966614294.jpeg', alt: 'Projeto de Porta Automática 7' },
    { url: '/lovable-uploads/galeria/1382419246192264.jpeg', alt: 'Projeto de Porta Automática 8' },
    { url: '/lovable-uploads/galeria/1455767175699446.jpeg', alt: 'Projeto de Porta Automática 9' },
    { url: '/lovable-uploads/galeria/1502827771131963.jpeg', alt: 'Projeto de Porta Automática 10' }
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-4xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none shadow-lg">
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
