
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}`;
    
    window.open(`https://wa.me/5562996920869?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Telefones",
      items: [
        { text: "(62) 99692-0869", link: "https://wa.me/5562996920869" },
        { text: "(62) 99221-7013", link: "https://wa.me/5562992217013" },
        { text: "(62) 99974-1069", link: "https://wa.me/5562999741069" }
      ]
    },
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "E-mail",
      items: [
        { text: "vendas@mportasautomaticas.com.br", link: "mailto:vendas@mportasautomaticas.com.br" }
      ]
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Localização",
      items: [
        { text: "Goiânia - GO", link: null },
        { text: "Atendemos todo o estado", link: null }
      ]
    },
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Horário de Funcionamento",
      items: [
        { text: "Segunda a Sexta: 8h às 18h", link: null },
        { text: "Sábado: 8h às 12h", link: null },
        { text: "Plantão WhatsApp 24h", link: null }
      ]
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <Badge variant="outline" className="mb-4 sm:mb-6 text-xs sm:text-sm animate-on-scroll">
            Entre em Contato
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll leading-tight">
            Vamos Transformar Seu <span className="text-primary">Projeto</span> Juntos
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg animate-on-scroll leading-relaxed">
            Entre em contato conosco e descubra como podemos ajudar você com as melhores 
            soluções em portas automáticas e climatização.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-16">
          {/* Contact Form */}
          <Card className="animate-on-scroll border-none shadow-card">
            <CardHeader className="p-6 sm:p-8">
              <CardTitle className="text-xl sm:text-2xl flex items-center gap-2 sm:gap-3">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                Solicite seu Orçamento
              </CardTitle>
              <p className="text-muted-foreground text-sm sm:text-base">
                Preencha o formulário e entraremos em contato rapidamente
              </p>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full min-h-[44px] text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu e-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full min-h-[44px] text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Seu telefone (WhatsApp)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full min-h-[44px] text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Descreva seu projeto ou necessidade..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full resize-none text-sm sm:text-base"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px] sm:min-h-[52px] text-sm sm:text-base"
                >
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 animate-on-scroll">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">{info.title}</h3>
                      <div className="space-y-1 sm:space-y-2">
                        {info.items.map((item, idx) => (
                          <div key={idx}>
                            {item.link ? (
                              <a 
                                href={item.link} 
                                className="text-primary hover:text-primary/80 transition-colors text-sm sm:text-base break-all"
                                target={item.link.startsWith('http') ? '_blank' : undefined}
                                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {item.text}
                              </a>
                            ) : (
                              <span className="text-muted-foreground text-sm sm:text-base">{item.text}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="animate-on-scroll">
          <Card className="border-none shadow-card bg-primary/5">
            <CardContent className="p-6 sm:p-8 md:p-10 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Atendimento Personalizado</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                Nossa equipe está pronta para atender você com todo cuidado e atenção que seu projeto merece. 
                Entre em contato agora mesmo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button
                  onClick={() => window.open('https://wa.me/5562996920869?text=Olá!%20Gostaria%20de%20falar%20sobre%20portas%20automáticas.', '_blank')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px] sm:min-h-[52px] px-6 sm:px-8"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Ligar Agora
                </Button>
                <Button
                  onClick={() => window.open('https://wa.me/5562996920869?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.', '_blank')}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 min-h-[48px] sm:min-h-[52px] px-6 sm:px-8"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
