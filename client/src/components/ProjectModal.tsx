import { X } from 'lucide-react';
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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Design Philosophy: Minimalismo Científico
 * - Modal com fundo escuro semi-transparente
 * - Conteúdo em card branco com espaçamento generoso
 * - Tipografia clara e hierarquia visual
 * - Animação suave de entrada/saída
 */
export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in slide-up duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header com botão de fechar */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6 space-y-6">
          {/* Imagem */}
          <div className="rounded-lg overflow-hidden h-64">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Descrição longa */}
          {project.longDescription && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Sobre o Projeto
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          )}

          {/* Tecnologias */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Métricas */}
          {project.metrics && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Métricas de Desempenho
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(project.metrics)
                  .filter(([, value]) => value !== undefined)
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-secondary p-4 rounded-lg border border-border"
                    >
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        {key
                          .split(/(?=[A-Z])/)
                          .join(' ')
                          .toLowerCase()}
                      </p>
                      <p className="text-2xl font-bold text-primary">{value}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Categorias
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent/10 text-accent px-3 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Data */}
          <div className="text-sm text-muted-foreground border-t border-border pt-4">
            Publicado em{' '}
            <span className="font-medium text-foreground">
              {new Date(project.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          {/* Botão GitHub */}
          <div className="border-t border-border pt-6">
            <Button
              className="w-full"
              size="lg"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
