import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Shield, Clock, Settings } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5562996920869?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20portas%20automáticas.', '_blank');
  };

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat hero-overlay" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 56, 168, 0.4), rgba(0, 56, 168, 0.3)), url('/lovable-uploads/533cab1e-55c1-4769-9078-74f112a4039c.png')`,
            backgroundPosition: 'center top'
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary-foreground font-medium text-sm sm:text-base animate-slide-up [animation-delay:300ms]">
              Mais de 17 anos de experiência
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-slide-up [animation-delay:500ms]">
              Sua porta para o <span className="text-accent">futuro</span> é automática!
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 animate-slide-up [animation-delay:700ms]">
              Soluções modernas, seguras e sofisticadas em portas automáticas. Referência em Goiás e todo o Brasil com qualidade garantida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-up [animation-delay:900ms]">
              <Button 
                onClick={handleWhatsAppClick} 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-lg group cta-button w-full sm:w-auto"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
                className="border-white/30 text-white rounded-md bg-transparent hover:bg-white/10 w-full sm:w-auto"
              >
                Nossos Serviços
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-white/80 text-xs sm:text-sm animate-slide-up [animation-delay:1100ms]">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2"></div>
                <span className="text-center sm:text-left">Parceiros da maior indústria da América Latina</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2"></div>
                <span>Fabricação 70% robotizada</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-slide-up [animation-delay:800ms]">
            <div className="space-y-4 xl:space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 xl:p-6 border border-white/20">
                <div className="flex items-center mb-3 xl:mb-4">
                  <Shield className="h-6 w-6 xl:h-8 xl:w-8 text-accent mr-3" />
                  <h3 className="font-bold text-white text-sm xl:text-base">Segurança Garantida</h3>
                </div>
                <p className="text-white/80 text-xs xl:text-sm">
                  Materiais de alto padrão e pintura eletrostática para máxima durabilidade
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 xl:p-6 border border-white/20">
                <div className="flex items-center mb-3 xl:mb-4">
                  <Clock className="h-6 w-6 xl:h-8 xl:w-8 text-accent mr-3" />
                  <h3 className="font-bold text-white text-sm xl:text-base">Suporte Completo</h3>
                </div>
                <p className="text-white/80 text-xs xl:text-sm">
                  Vendas, instalação e manutenção com equipe especializada
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 xl:p-6 border border-white/20">
                <div className="flex items-center mb-3 xl:mb-4">
                  <Settings className="h-6 w-6 xl:h-8 xl:w-8 text-accent mr-3" />
                  <h3 className="font-bold text-white text-sm xl:text-base">Tecnologia Avançada</h3>
                </div>
                <p className="text-white/80 text-xs xl:text-sm">
                  Automação de última geração com garantia real para o cliente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={24} className="sm:w-8 sm:h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
