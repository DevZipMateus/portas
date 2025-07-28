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
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-overlay"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 56, 168, 0.4), rgba(0, 56, 168, 0.3)), url('/lovable-uploads/314382ae-3b13-4cae-bef5-a1f039fb1d15.png')`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary-foreground font-medium mb-6 animate-slide-up [animation-delay:300ms]">
                Mais de 17 anos de experiência
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                Sua porta para o <span className="text-accent">futuro</span> é automática!
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-slide-up [animation-delay:700ms]">
                Soluções modernas, seguras e sofisticadas em portas automáticas. Referência em Goiás e todo o Brasil com qualidade garantida.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:900ms] mb-8">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-lg group cta-button"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 rounded-md"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Nossos Serviços
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-white/80 text-sm animate-slide-up [animation-delay:1100ms]">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Parceiros da maior indústria da América Latina
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Fabricação 70% robotizada
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-slide-up [animation-delay:800ms]">
              <div className="relative">
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <Shield className="h-8 w-8 text-accent mr-3" />
                      <h3 className="font-bold text-white">Segurança Garantida</h3>
                    </div>
                    <p className="text-white/80 text-sm">
                      Materiais de alto padrão e pintura eletrostática para máxima durabilidade
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <Clock className="h-8 w-8 text-accent mr-3" />
                      <h3 className="font-bold text-white">Suporte Completo</h3>
                    </div>
                    <p className="text-white/80 text-sm">
                      Vendas, instalação e manutenção com equipe especializada
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <Settings className="h-8 w-8 text-accent mr-3" />
                      <h3 className="font-bold text-white">Tecnologia Avançada</h3>
                    </div>
                    <p className="text-white/80 text-sm">
                      Automação de última geração com garantia real para o cliente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
