
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tractor, Sprout, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';

const CategoriesSection = () => {
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

  const handleWhatsAppRedirect = (category: string) => {
    const message = `Olá! Gostaria de ver os produtos da categoria ${category}.`;
    const whatsappUrl = `https://wa.me/5567999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const categories = [
    {
      icon: <Tractor className="h-10 w-10 sm:h-12 sm:w-12 text-primary flex-shrink-0" />,
      title: "Máquinas e Tratores",
      description: "Plantadeiras, colheitadeiras, tratores e equipamentos de última geração",
      items: ["Plantadeiras", "Colheitadeiras", "Tratores", "Pulverizadores"],
      image: "/lovable-uploads/b0e53f15-a099-4bb1-b233-49c1f725a92a.png",
      color: "bg-green-500"
    },
    {
      icon: <Sprout className="h-10 w-10 sm:h-12 sm:w-12 text-primary flex-shrink-0" />,
      title: "Sementes e Mudas",
      description: "Sementes certificadas e mudas de alta qualidade para sua lavoura",
      items: ["Soja", "Milho", "Algodão", "Feijão"],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-yellow-500"
    },
    {
      icon: <ShieldCheck className="h-10 w-10 sm:h-12 sm:w-12 text-primary flex-shrink-0" />,
      title: "Defensivos e Fertilizantes",
      description: "Proteção completa e nutrição adequada para suas culturas",
      items: ["Herbicidas", "Fungicidas", "Inseticidas", "Fertilizantes"],
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-blue-500"
    },
    {
      icon: <Wrench className="h-10 w-10 sm:h-12 sm:w-12 text-primary flex-shrink-0" />,
      title: "Peças e Assistência",
      description: "Peças originais e serviços especializados para seus equipamentos",
      items: ["Peças Originais", "Manutenção", "Suporte Técnico", "Garantia"],
      image: "/lovable-uploads/ed1a0b4e-6a76-423c-a8ab-cc75ca716c4b.png",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="categories" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container mx-auto relative z-10 px-3 sm:px-4 md:px-6 lg:px-8 max-w-full">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-on-scroll">
            Nossos Produtos
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 animate-on-scroll max-w-4xl mx-auto leading-tight">
            Soluções Completas para o <span className="text-primary">Agronegócio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll text-sm sm:text-base leading-relaxed px-2">
            Encontre tudo que você precisa para aumentar a produtividade da sua propriedade rural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="flex items-center space-x-2 text-white">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-1 mb-3 sm:mb-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        <span className="break-words">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-primary/20 hover:bg-primary hover:text-primary-foreground text-sm"
                    onClick={() => handleWhatsAppRedirect(category.title)}
                  >
                    <span className="truncate">Ver Produtos</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-6 sm:px-8"
            onClick={() => handleWhatsAppRedirect("Todos os Produtos")}
          >
            <span className="truncate">Ver Todos os Produtos</span>
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
