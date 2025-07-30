
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';

const Projetos = () => {
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

  const projects = [
    {
      id: 1,
      title: "Porta Automática Residencial",
      category: "Residencial",
      image: "/lovable-uploads/galeria/1083883429935146.jpeg",
      description: "Instalação de porta automática de vidro em residência moderna"
    },
    {
      id: 2,
      title: "Sistema de Climatização Comercial",
      category: "Comercial",
      image: "/lovable-uploads/galeria/1102318838552346.jpeg",
      description: "Projeto completo de climatização para escritório corporativo"
    },
    {
      id: 3,
      title: "Porta Automática Industrial",
      category: "Industrial",
      image: "/lovable-uploads/galeria/1150543456894754.jpeg",
      description: "Porta automática de alta resistência para ambiente industrial"
    },
    {
      id: 4,
      title: "Climatização Hospitalar",
      category: "Hospitalar",
      image: "/lovable-uploads/galeria/1153235999966743.jpeg",
      description: "Sistema de climatização especializado para ambiente hospitalar"
    },
    {
      id: 5,
      title: "Porta de Vidro Automática",
      category: "Comercial",
      image: "/lovable-uploads/galeria/1222596636310598.jpeg",
      description: "Porta de vidro automática para loja comercial"
    },
    {
      id: 6,
      title: "Sistema HVAC Completo",
      category: "Industrial",
      image: "/lovable-uploads/galeria/1242422570540030.jpeg",
      description: "Sistema completo de ar condicionado industrial"
    }
  ];

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

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-background shadow-card animate-on-scroll overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projetos;
