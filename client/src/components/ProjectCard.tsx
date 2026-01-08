import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  metrics?: Record<string, string | undefined>;
  image: string;
  githubUrl: string;
  tags: string[];
  date: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

/**
 * Design Philosophy: Minimalismo Científico
 * - Cards com hover sutil que revelam mais informações
 * - Tipografia clara com hierarquia visual
 * - Espaçamento generoso para respiração visual
 * - Transições suaves (300ms) para interações
 */
export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <div className="fade-in group">
      <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Imagem do projeto */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Conteúdo do card */}
        <div className="p-6">
          {/* Data e tags */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground font-medium">
              {new Date(project.date).toLocaleDateString('pt-BR', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </span>
            <div className="flex gap-2 flex-wrap justify-end">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Título */}
          <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
            {project.title}
          </h3>

          {/* Descrição */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tecnologias */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-muted-foreground px-2 py-1">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Métricas (se disponível) */}
          {project.metrics && (
            <div className="mb-4 pb-4 border-t border-border pt-4">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                    </span>
                    <p className="font-semibold text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Botões de ação */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            {onViewDetails && (
              <Button
                size="sm"
                className="flex-1"
                onClick={() => onViewDetails(project)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Detalhes
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
