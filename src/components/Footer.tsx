
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
    <footer className="bg-secondary-foreground text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              <span className="text-primary">Mportas</span> Automáticas
            </h3>
            <p className="text-white/80 text-sm sm:text-base max-w-xs mx-auto sm:mx-0">
              Há mais de 17 anos transformando ambientes com portas automáticas seguras e tecnológicas.
            </p>
            <div className="text-xs sm:text-sm text-white/60">
              <p className="font-medium text-accent">Sua porta para o futuro é automática!</p>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Links Rápidos</h4>
            <ul className="space-y-1 sm:space-y-2">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#services">Serviços</FooterNavItem>
              <FooterNavItem href="#testimonials">Depoimentos</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Serviços</h4>
            <ul className="space-y-1 sm:space-y-2">
              <FooterNavItem href="#services">Vendas</FooterNavItem>
              <FooterNavItem href="#services">Instalação</FooterNavItem>
              <FooterNavItem href="#services">Manutenção</FooterNavItem>
              <FooterNavItem href="#services">Consultoria</FooterNavItem>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
              <li>
                <a href="https://wa.me/5562996920869" className="hover:text-primary transition-colors">
                  (62) 99692-0869
                </a>
              </li>
              <li>
                <a href="mailto:vendas@mportasautomaticas.com.br" className="hover:text-primary transition-colors break-all">
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

        <hr className="border-white/20 my-6 sm:my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-white/70 text-xs sm:text-sm mb-1 sm:mb-2">
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
              className="rounded-full bg-primary/80 border-primary/20 hover:bg-primary/90 text-white h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
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
      className="text-white/70 hover:text-primary transition-colors duration-200 text-sm sm:text-base"
    >
      {children}
    </a>
  </li>
);

export default Footer;
