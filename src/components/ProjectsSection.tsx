
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Alguns de Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Confira alguns dos projetos de portas automáticas e climatização que realizamos
          </p>
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Instalação Profissional
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Materiais de Qualidade
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Garantia Estendida
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
