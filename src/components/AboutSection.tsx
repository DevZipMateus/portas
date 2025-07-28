
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
      icon: <Star className="h-6 w-6 text-primary" />,
      number: "17+",
      label: "Anos de Experiência",
      description: "Liderando o mercado de portas automáticas"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      number: "70%",
      label: "Fabricação Robotizada",
      description: "Tecnologia avançada e precisão"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      number: "1000+",
      label: "Clientes Satisfeitos",
      description: "Referência em Goiás e Brasil"
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      number: "100%",
      label: "Garantia Real",
      description: "Compromisso com a qualidade"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-on-scroll">
            Sobre a Mportas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Mais de 17 Anos Transformando Ambientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Desde o início, nosso propósito é claro: oferecer soluções modernas, seguras e sofisticadas, 
            trazendo praticidade e durabilidade para cada projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <div className="aspect-video bg-primary/10 rounded-2xl overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Portas automáticas Mportas - Tecnologia e qualidade"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Parceiros da maior indústria da América Latina
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                Materiais de alto padrão
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Nossa História e Missão</h3>
            <div className="space-y-4 text-muted-foreground">
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

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
              <p className="text-foreground font-medium">
                "A maior missão da MPortas é entregar soluções inovadoras e confiáveis, sempre 
                com qualidade e excelência, transformando ambientes com portas automáticas unindo 
                tecnologia e segurança."
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center service-card animate-on-scroll border-none shadow-card">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
