
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle automatic scrolling when URL contains hash
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5562996920869?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20portas%20automáticas.', '_blank');
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Update URL with hash and scroll to section
      navigate(`/${href}`, { replace: true });
      
      // Smooth scroll to the section
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 sm:py-3 bg-background/95 backdrop-blur-md shadow-nav' 
          : 'py-3 sm:py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-full">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-20 flex-shrink-0">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/bec97fe8-4b86-4d49-86bf-fad30c701380.png" 
                alt="Mportas Automáticas Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 mr-2 sm:mr-3 flex-shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-display font-bold text-foreground leading-tight truncate">
                  <span className="text-primary">Mportas</span> Automáticas
                </h1>
                <span className="text-xs sm:text-sm text-foreground/70 font-medium hidden sm:block truncate">
                  e Climatizadores LTDA
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLinks onNavClick={handleNavClick} />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm lg:text-base px-3 sm:px-4 lg:px-6 whitespace-nowrap"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex-shrink-0">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10 text-foreground">
                  <Menu size={18} className="sm:w-5 sm:h-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-14 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6">
                <nav className="flex flex-col items-center space-y-3 sm:space-y-4 text-base sm:text-lg">
                  <NavLinks mobile onNavClick={handleNavClick} />
                  <SheetClose asChild>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full max-w-xs bg-primary hover:bg-primary/90 text-primary-foreground mt-4 text-sm sm:text-base"
                    >
                      Solicitar Orçamento
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onNavClick: (href: string) => void;
}

const NavLinks = ({ mobile, onNavClick }: NavLinksProps) => {
  const links = [
    { name: 'Início', href: '#hero', isInternal: true },
    { name: 'Sobre', href: '#about', isInternal: true },
    { name: 'Serviços', href: '#services', isInternal: true },
    { name: 'Projetos', href: '/projetos', isInternal: false },
    { name: 'Depoimentos', href: '#testimonials', isInternal: true },
    { name: 'Contato', href: '#contact', isInternal: true },
  ];

  const handleClick = (link: typeof links[0]) => {
    if (link.isInternal) {
      onNavClick(link.href);
    }
  };

  return (
    <>
      {links.map((link) => {
        if (link.isInternal) {
          return (
            <button
              key={link.name}
              onClick={() => handleClick(link)}
              className={`font-medium transition-all duration-300 px-3 py-2 rounded-md cursor-pointer truncate
                ${mobile 
                  ? 'text-base sm:text-lg text-foreground hover:text-primary mb-2 w-full text-center py-2 sm:py-3 max-w-xs' 
                  : 'text-sm lg:text-base text-foreground/80 hover:text-primary hover:bg-secondary/50 whitespace-nowrap'
                }`}
            >
              {link.name}
            </button>
          );
        } else {
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium transition-all duration-300 px-3 py-2 rounded-md truncate
                ${mobile 
                  ? 'text-base sm:text-lg text-foreground hover:text-primary mb-2 w-full text-center py-2 sm:py-3 max-w-xs' 
                  : 'text-sm lg:text-base text-foreground/80 hover:text-primary hover:bg-secondary/50 whitespace-nowrap'
                }`}
            >
              {link.name}
            </Link>
          );
        }
      })}
    </>
  );
};

export default Header;
