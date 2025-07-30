
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Users, Wrench } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const stats = [
    {
      icon: <Star className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />,
      number: "17+",
      label: "Anos de Experiência",
      description: "Liderando o mercado de portas automáticas"
    },
    {
      icon: <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />,
      number: "70%",
      label: "Fabricação Robotizada",
      description: "Tecnologia avançada e precisão"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />,
      number: "1000+",
      label: "Clientes Satisfeitos",
      description: "Referência em Goiás e Brasil"
    },
    {
      icon: <Wrench className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />,
      number: "100%",
      label: "Garantia Real",
      description: "Compromisso com a qualidade"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10 px-3 sm:px-4 md:px-6 lg:px-8 max-w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm animate-on-scroll">
            Sobre a Mportas
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 animate-on-scroll max-w-4xl mx-auto leading-tight">
            Mais de 17 Anos Transformando Ambientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base animate-on-scroll leading-relaxed px-2">
            Desde o início, nosso propósito é claro: oferecer soluções modernas, seguras e sofisticadas, 
            trazendo praticidade e durabilidade para cada projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
          <div className="animate-on-scroll order-2 lg:order-1">
            <div className="aspect-video bg-primary/10 rounded-2xl overflow-hidden mb-4 sm:mb-6">
              <video 
                src="/lovable-uploads/midia_3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center text-center sm:text-left">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                <span className="break-words">Parceiros da maior indústria da América Latina</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                <span className="whitespace-nowrap">Materiais de alto padrão</span>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll order-1 lg:order-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Nossa História e Missão</h3>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Com mais de 17 anos de experiência no mercado, a Mportas acompanha uma linhagem de 
                fundadores de portas automáticas no estado de Goiás. Nossa trajetória é marcada pela 
                inovação, qualidade e confiança.
              </p>
              <p>
                Hoje, temos orgulho de ser parceiros da maior indústria da América Latina, contando 
                com um sistema de fabricação 70% robotizado, que garante padrões rigorosos de 
                qualidade, resistência e acabamento impecável.
              </p>
              <p>
                Trabalhamos com materiais de alto padrão, incluindo chapas e lâminas reforçadas, 
                guias robustas e pintura eletrostática poliéster de alto padrão, disponível em 
                diversas cores para atender diferentes necessidades.
              </p>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
              <p className="text-foreground font-medium text-sm sm:text-base leading-relaxed">
                "A maior missão da MPortas é entregar soluções inovadoras e confiáveis, sempre 
                com qualidade e excelência, transformando ambientes com portas automáticas unindo 
                tecnologia e segurança."
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center service-card animate-on-scroll border-none shadow-card">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                <div className="font-medium text-foreground mb-1 text-xs sm:text-sm md:text-base leading-tight">{stat.label}</div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
