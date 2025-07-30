
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Proprietário de Empresa",
      location: "Goiânia - GO",
      rating: 5,
      text: "Excelente atendimento e qualidade excepcional. A equipe da Mportas foi muito profissional na instalação da nossa porta automática. Recomendo para todos!"
    },
    {
      name: "Maria Santos",
      role: "Administradora",
      location: "Anápolis - GO",
      rating: 5,
      text: "A porta automática instalada pela Mportas transformou nosso estabelecimento. Qualidade impecável e funcionamento perfeito há mais de 2 anos."
    },
    {
      name: "João Oliveira",
      role: "Engenheiro",
      location: "Aparecida de Goiânia - GO",
      rating: 5,
      text: "Profissionalismo e qualidade que só a Mportas oferece. Atendimento excepcional desde o orçamento até a instalação final."
    }
  ];

  const stats = [
    {
      number: "98%",
      label: "Clientes Satisfeitos",
      description: "Baseado em avaliações dos últimos 12 meses"
    },
    {
      number: "1000+",
      label: "Projetos Concluídos",
      description: "Residenciais, comerciais e industriais"
    },
    {
      number: "17+",
      label: "Anos de Mercado",
      description: "Experiência e tradição em Goiás"
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-on-scroll">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            A satisfação dos nossos clientes é o nosso maior orgulho. Veja o que eles falam sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="service-card animate-on-scroll border-none shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 text-primary mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="animate-on-scroll">
          <Card className="border-none shadow-card bg-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-on-scroll">
          <Card className="border-none shadow-card bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Quer fazer parte destes depoimentos?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar seu projeto com 
                nossas soluções em portas automáticas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/5562996920869?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.', '_blank')}
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors"
                >
                  Solicitar Orçamento
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-md transition-colors"
                >
                  Falar Conosco
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
