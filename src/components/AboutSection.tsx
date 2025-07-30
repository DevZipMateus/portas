
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
      icon: <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      number: "17+",
      label: "Anos de Experiência",
      description: "Liderando o mercado de portas automáticas"
    },
    {
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      number: "70%",
      label: "Fabricação Robotizada",
      description: "Tecnologia avançada e precisão"
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      number: "1000+",
      label: "Clientes Satisfeitos",
      description: "Referência em Goiás e Brasil"
    },
    {
      icon: <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      number: "100%",
      label: "Garantia Real",
      description: "Compromisso com a qualidade"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <Badge variant="outline" className="mb-4 sm:mb-6 text-xs sm:text-sm animate-on-scroll">
            Sobre a Mportas
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll leading-tight">
            Mais de 17 Anos Transformando Ambientes
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg animate-on-scroll leading-relaxed">
            Desde o início, nosso propósito é claro: oferecer soluções modernas, seguras e sofisticadas, 
            trazendo praticidade e durabilidade para cada projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
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
            
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-center sm:text-left">Parceiros da maior indústria da América Latina</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2"></div>
                <span>Materiais de alto padrão</span>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Nossa História e Missão</h3>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
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

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
              <p className="text-foreground font-medium text-sm sm:text-base md:text-lg leading-relaxed">
                "A maior missão da MPortas é entregar soluções inovadoras e confiáveis, sempre 
                com qualidade e excelência, transformando ambientes com portas automáticas unindo 
                tecnologia e segurança."
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center service-card animate-on-scroll border-none shadow-card">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                <div className="font-medium text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{stat.label}</div>
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
