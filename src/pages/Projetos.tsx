
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ImageModal from '@/components/ImageModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Projetos = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    // Scroll para o topo da página ao acessar
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista de todas as imagens da pasta galeria - nova imagem como primeira
  const galleryImages = [
    '/lovable-uploads/e62dbc24-e16b-43ab-84c8-bd9e1489b257.png',
    '/lovable-uploads/galeria/1083883429935146.jpeg',
    '/lovable-uploads/galeria/1102318838552346.jpeg',
    '/lovable-uploads/galeria/1150543456894754.jpeg',
    '/lovable-uploads/galeria/1153235999966743.jpeg',
    '/lovable-uploads/galeria/1222596636310598.jpeg',
    '/lovable-uploads/galeria/1242422570540030.jpeg',
    '/lovable-uploads/galeria/1252988306623441.jpeg',
    '/lovable-uploads/galeria/1255609409300751.jpeg',
    '/lovable-uploads/galeria/1276507387385563.jpeg',
    '/lovable-uploads/galeria/1284050706764728.jpeg',
    '/lovable-uploads/galeria/1315471966614294.jpeg',
    '/lovable-uploads/galeria/1330968395697226.jpeg',
    '/lovable-uploads/galeria/1382419246192264.jpeg',
    '/lovable-uploads/galeria/1399636767934357.jpeg',
    '/lovable-uploads/galeria/1412979613312661.jpeg',
    '/lovable-uploads/galeria/1422064622179083.jpeg',
    '/lovable-uploads/galeria/1444272663490031.jpeg',
    '/lovable-uploads/galeria/1455767175699446.jpeg',
    '/lovable-uploads/galeria/1475668087084465.jpeg',
    '/lovable-uploads/galeria/1482360063198367.jpeg',
    '/lovable-uploads/galeria/1490419918969804.jpeg',
    '/lovable-uploads/galeria/1502827771131963.jpeg',
    '/lovable-uploads/galeria/1510502120325522.jpeg',
    '/lovable-uploads/galeria/1530911838285589.jpeg',
    '/lovable-uploads/galeria/1698252834166585.jpeg',
    '/lovable-uploads/galeria/1724444828191894.jpeg',
    '/lovable-uploads/galeria/1937144117040028.jpeg',
    '/lovable-uploads/galeria/2083672125490974.jpeg',
    '/lovable-uploads/galeria/2225019064600155.jpeg',
    '/lovable-uploads/galeria/2605196023194186.jpeg',
    '/lovable-uploads/galeria/2611554079199475.jpeg',
    '/lovable-uploads/galeria/2705264036342113.jpeg',
    '/lovable-uploads/galeria/2892819337772605.jpeg',
    '/lovable-uploads/galeria/3694567197506230.jpeg',
    '/lovable-uploads/galeria/3942202939375372.jpeg',
    '/lovable-uploads/galeria/4111628872444832.jpeg',
    '/lovable-uploads/galeria/4265300930418976.jpeg',
    '/lovable-uploads/galeria/615338658287155.jpeg',
    '/lovable-uploads/galeria/627860669898626.jpeg',
    '/lovable-uploads/galeria/667047646395103.jpeg',
    '/lovable-uploads/galeria/704804945707928.jpeg',
    '/lovable-uploads/galeria/712494951783451.jpeg',
    '/lovable-uploads/galeria/721227017416921.jpeg',
    '/lovable-uploads/galeria/729352603062735.jpeg',
    '/lovable-uploads/galeria/729382689966594.jpeg',
    '/lovable-uploads/galeria/739097822239853.jpeg',
    '/lovable-uploads/galeria/739428622285490.jpeg',
    '/lovable-uploads/galeria/745698424884088.jpeg',
    '/lovable-uploads/galeria/747390124714155.jpeg',
    '/lovable-uploads/galeria/751246040867546.jpeg',
    '/lovable-uploads/galeria/768133555652966.jpeg'
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNavigateImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5562996920869?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20porta%20automática.', '_blank');
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
              Galeria de Projetos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">
              Nossos <span className="text-primary">Projetos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Conheça alguns dos projetos de portas automáticas e climatização que já realizamos. 
              Cada projeto é desenvolvido com excelência e dedicação para atender às necessidades específicas de nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg bg-muted animate-on-scroll hover:shadow-xl transition-all duration-300 cursor-pointer break-inside-avoid inline-block w-full"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image}
                  alt={`Projeto ${index + 1}`}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Overlay para indicar que é clicável */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-2">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <Card className="border-none shadow-card bg-white animate-on-scroll">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Gostou dos nossos projetos?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                Entre em contato conosco e solicite um orçamento personalizado para seu projeto. 
                Nossa equipe está pronta para transformar suas ideias em realidade com a qualidade 
                e excelência que você viu em nossos trabalhos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="px-8 py-3 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Solicitar Orçamento
                </Button>
                <p className="text-sm text-muted-foreground">
                  Resposta em até 24 horas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modal para exibir imagem expandida */}
      {selectedImageIndex !== null && (
        <ImageModal
          images={galleryImages}
          currentIndex={selectedImageIndex}
          onClose={handleCloseModal}
          onNavigate={handleNavigateImage}
        />
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projetos;
