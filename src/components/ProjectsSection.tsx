
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  // Lista completa das imagens - todas as 27 imagens (exceto imagem 11 removida)
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
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_13.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_14.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_15.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_16.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_17.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_18.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_19.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_20.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_21.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_22.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_23.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_24.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_25.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_26.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_27.jpg',
    '/lovable-uploads/Mportas automticas e climatiza_midias/midia_28.jpg'
  ];

  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      projectImages.forEach((src) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]));
        };
        img.onerror = () => {
          setImageErrors(prev => new Set([...prev, src]));
          console.warn(`Failed to load image: ${src}`);
        };
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set([...prev, src]));
  };

  const handleImageError = (src: string) => {
    setImageErrors(prev => new Set([...prev, src]));
    console.warn(`Failed to load image: ${src}`);
  };

  // Filter out images that failed to load
  const validImages = projectImages.filter(img => !imageErrors.has(img));

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
            {validImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 relative">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    {loadedImages.has(image) ? (
                      <img
                        src={image}
                        alt={`Projeto ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onLoad={() => handleImageLoad(image)}
                        onError={() => handleImageError(image)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <div className="animate-pulse">
                          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-primary/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold">Projeto {index + 1}</h3>
                      <p className="text-sm opacity-90">Portas Automáticas e Climatização</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
