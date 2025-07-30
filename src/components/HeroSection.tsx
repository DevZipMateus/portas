
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5562996920869?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20porta%20automática.', '_blank');
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/lovable-uploads/midia_3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Badge */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Há mais de 17 anos no mercado
              </Badge>
            </div>

            {/* Main Heading */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                Sua porta para o futuro é{' '}
                <span className="text-accent block sm:inline">automática!</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl lg:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4 sm:px-0">
                Transformamos ambientes com <span className="font-semibold text-accent">portas automáticas seguras e tecnológicas</span>. 
                Parceiros da maior indústria da América Latina com fabricação 70% robotizada.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[48px] sm:min-h-[56px]"
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Solicitar Orçamento
                </Button>
                
                <Button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium backdrop-blur-sm transition-all duration-300 min-h-[48px] sm:min-h-[56px]"
                >
                  Conhecer Serviços
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 max-w-4xl mx-auto px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">17+</div>
                  <div className="text-sm sm:text-base text-white/80">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">1000+</div>
                  <div className="text-sm sm:text-base text-white/80">Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm sm:text-base text-white/80">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button 
            onClick={scrollToAbout}
            className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
          >
            <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
