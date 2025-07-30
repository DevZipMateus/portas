import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Wrench, Settings, Phone, Shield, Clock } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: "Vendas",
      description: "Consultoria especializada para escolha da porta automática ideal para seu projeto",
      features: [
        "Porta automática de enrolar",
        "Porta seccionada residencial e industrial", 
        "Porta rápida industrial",
        "Niveladora de Doca",
        "Porta corta fogo",
        "Climatizador industrial e portátil"
      ],
      highlight: "Destaque"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Instalação",
      description: "Equipe especializada garantindo instalação segura e funcional",
      features: [
        "Equipe de montagem experiente",
        "Instalação segura e funcional",
        "Testes de funcionamento",
        "Garantia de instalação"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Manutenção",
      description: "Serviços de manutenção preventiva e corretiva para máxima durabilidade",
      features: [
        "Manutenção preventiva",
        "Suporte técnico especializado",
        "Peças originais",
        "Atendimento rápido"
      ]
    }
  ];

  const differentials = [
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Qualidade Garantida",
      description: "Materiais de alto padrão e pintura eletrostática poliéster"
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Atendimento Ágil",
      description: "Equipe pronta para atender suas necessidades rapidamente"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Suporte Completo",
      description: "Acompanhamento desde a venda até o pós-venda"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5562996920869?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20portas%20automáticas.', '_blank');
  };

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-on-scroll">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Soluções Completas em Portas Automáticas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Oferecemos serviços completos de vendas, instalação e manutenção com equipe especializada 
            e materiais de alta qualidade.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-card animate-on-scroll border-none shadow-card h-full">
              <CardHeader className="text-center">
                {service.highlight && (
                  <Badge variant="destructive" className="w-fit mx-auto mb-4">
                    {service.highlight}
                  </Badge>
                )}
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  variant="default"
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentials */}
        <div className="animate-on-scroll">
          <Card className="border-none shadow-card bg-primary/5">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Por que escolher a Mportas?</h3>
                <p className="text-muted-foreground">
                  Somos referência no mercado de portas automáticas com diferenciais únicos
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {differentials.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white rounded-full shadow-sm">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
