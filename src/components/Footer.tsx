
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary-foreground text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Mportas</span> Automáticas
            </h3>
            <p className="text-white/80 max-w-xs">
              Há mais de 17 anos transformando ambientes com portas automáticas seguras e tecnológicas.
            </p>
            <div className="text-sm text-white/60">
              <p className="font-medium text-accent">Sua porta para o futuro é automática!</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#services">Serviços</FooterNavItem>
              <FooterNavItem href="#testimonials">Depoimentos</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#services">Vendas</FooterNavItem>
              <FooterNavItem href="#services">Instalação</FooterNavItem>
              <FooterNavItem href="#services">Manutenção</FooterNavItem>
              <FooterNavItem href="#services">Consultoria</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="https://wa.me/5562996920869" className="hover:text-primary transition-colors">
                  (62) 99692-0869
                </a>
              </li>
              <li>
                <a href="mailto:vendas@mportasautomaticas.com.br" className="hover:text-primary transition-colors">
                  vendas@mportasautomaticas.com.br
                </a>
              </li>
              <li>Goiânia - GO</li>
              <li>Segunda a Sexta, 8h às 18h</li>
              <li>Sábado, 8h às 12h</li>
              <li>
                <a href="https://instagram.com/mportasautomaticas_" className="hover:text-primary transition-colors">
                  @mportasautomaticas_
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-white/70 text-sm mb-2">
              © {new Date().getFullYear()} Mportas Automáticas e Climatizadores LTDA. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-xs">
              Parceiros da maior indústria da América Latina • Fabricação 70% robotizada
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-primary/80 border-primary/20 hover:bg-primary/90 text-white"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({ href, children }: FooterNavItemProps) => (
  <li>
    <a
      href={href}
      className="text-white/70 hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

export default Footer;
