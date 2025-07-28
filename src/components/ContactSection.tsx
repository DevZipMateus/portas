
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "WhatsApp",
      details: "(62) 99692-0869",
      link: "https://wa.me/5562996920869"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "E-mail",
      details: "vendas@mportasautomaticas.com.br",
      link: "mailto:vendas@mportasautomaticas.com.br"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Localização",
      details: "Goiânia - GO",
      link: null
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Horário",
      details: "Segunda a Sexta, 8h às 18h | Sábado, 8h às 12h",
      link: null
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-on-scroll">
            Entre em Contato
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Pronto para Automatizar?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Entre em contato conosco para orçamentos, instalações ou manutenções. 
            Nossa equipe especializada está pronta para transformar seu projeto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border border-border/50 shadow-card animate-on-scroll">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                  <p className="text-muted-foreground mb-8">
                    Para solicitar orçamentos, agendar instalações ou manutenções de portas automáticas,
                    utilize um dos canais de atendimento abaixo. Atendemos clientes em Goiás e todo o Brasil.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item, index) => (
                      <ContactInfoItem 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        details={item.details}
                        link={item.link}
                      />
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">Siga-nos</h4>
                    <div className="flex space-x-3">
                      <SocialLink 
                        icon={<Instagram size={20} />} 
                        href="https://instagram.com/mportasautomaticas_" 
                        label="Instagram" 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-primary/5 rounded-xl max-w-md">
                    <div className="mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Atendimento via WhatsApp</h3>
                    <p className="text-muted-foreground mb-6">
                      Fale diretamente com nossos especialistas em portas automáticas e receba 
                      atendimento personalizado com orçamento sem compromisso.
                    </p>
                    <button
                      onClick={() => window.open('https://wa.me/5562996920869?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20portas%20automáticas.', '_blank')}
                      className="w-full px-6 py-3 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-md flex items-center justify-center transition-colors"
                    >
                      <img 
                        src="/lovable-uploads/e5c365ac-2ba0-4157-bb97-d6821651fde1.png" 
                        alt="WhatsApp" 
                        className="w-5 h-5 mr-2" 
                      />
                      Iniciar Conversa
                    </button>
                    <div className="text-sm text-muted-foreground mt-4">
                      Tempo médio de resposta: <span className="font-medium text-foreground">10 minutos</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 animate-on-scroll">
          <Card className="border-none shadow-card bg-primary/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">17+</div>
                  <div className="font-medium mb-1">Anos de Experiência</div>
                  <div className="text-sm text-muted-foreground">Tradição em portas automáticas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">1000+</div>
                  <div className="font-medium mb-1">Projetos Realizados</div>
                  <div className="text-sm text-muted-foreground">Em Goiás e todo o Brasil</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">24h</div>
                  <div className="font-medium mb-1">Suporte Técnico</div>
                  <div className="text-sm text-muted-foreground">Para emergências</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string | null;
}

const ContactInfoItem = ({ icon, title, details, link }: ContactInfoItemProps) => {
  const content = (
    <div className="flex">
      <div className="flex-shrink-0 mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground mt-1">{details}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink = ({ icon, href, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default ContactSection;
