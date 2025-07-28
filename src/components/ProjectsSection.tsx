import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ProjectsSection = () => {
  // Lista das imagens do carrossel (removidas as imagens dos projetos 13, 16, 22, 23 e 11)
  const projectImages = [
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_1.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_2.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_4.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_5.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_6.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_7.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_8.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_9.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_10.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_12.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_14.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_15.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_17.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_18.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_19.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_20.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_21.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_24.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_25.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_26.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_27.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_28.jpg'
  ];

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps'
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section id="projects" className="section-padding bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Alguns de Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Confira alguns dos projetos de portas automáticas e climatização que realizamos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            ref={emblaRef}
            opts={{
              align: 'center',
              loop: true,
              containScroll: 'trimSnaps'
            }}
            plugins={[
              Autoplay({ delay: 3000, stopOnInteraction: false })
            ]}
            className="w-full animate-on-scroll"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projectImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-0 relative">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={image}
                            alt={`Projeto ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="font-semibold">Projeto {index + 1}</h3>
                            <p className="text-sm opacity-90">Portas Automáticas e Climatização</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Instalação Profissional
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Materiais de Qualidade
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Garantia Estendida
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
