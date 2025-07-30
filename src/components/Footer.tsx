
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
    <footer className="bg-secondary-foreground text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left lg:col-span-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              <span className="text-primary">Mportas</span> Automáticas
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xs mx-auto sm:mx-0">
              Há mais de 17 anos transformando ambientes com portas automáticas seguras e tecnológicas.
            </p>
            <div className="text-xs sm:text-sm text-white/60">
              <p className="font-medium text-accent">Sua porta para o futuro é automática!</p>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6">Links Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#services">Serviços</FooterNavItem>
              <FooterNavItem href="#testimonials">Depoimentos</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6">Serviços</h4>
            <ul className="space-y-2 sm:space-y-3">
              <FooterNavItem href="#services">Vendas</FooterNavItem>
              <FooterNavItem href="#services">Instalação</FooterNavItem>
              <FooterNavItem href="#services">Manutenção</FooterNavItem>
              <FooterNavItem href="#services">Consultoria</FooterNavItem>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6">Contato</h4>
            <ul className="space-y-2 sm:space-y-4 text-white/80 text-sm sm:text-base">
              <li>
                <a href="https://wa.me/5562996920869" className="hover:text-primary transition-colors block">
                  (62) 99692-0869
                </a>
              </li>
              <li>
                <a href="https://wa.me/5562992217013" className="hover:text-primary transition-colors block">
                  (62) 99221-7013
                </a>
              </li>
              <li>
                <a href="https://wa.me/5562999741069" className="hover:text-primary transition-colors block">
                  (62) 99974-1069
                </a>
              </li>
              <li>
                <a href="mailto:vendas@mportasautomaticas.com.br" className="hover:text-primary transition-colors break-all">
                  vendas@mportasautomaticas.com.br
                </a>
              </li>
              <li className="text-white/70">Goiânia - GO</li>
              <li className="text-white/70">Segunda a Sexta, 8h às 18h</li>
              <li className="text-white/70">Sábado, 8h às 12h</li>
              <li>
                <a href="https://instagram.com/mportasautomaticas_" className="hover:text-primary transition-colors">
                  @mportasautomaticas_
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8 sm:my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-white/70 text-xs sm:text-sm mb-2">
              © {new Date().getFullYear()} Mportas Automáticas e Climatizadores LTDA. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-xs leading-relaxed">
              Parceiros da maior indústria da América Latina • Fabricação 70% robotizada
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-primary/80 border-primary/20 hover:bg-primary/90 text-white h-10 w-10 sm:h-12 sm:w-12"
            >
              <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
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
