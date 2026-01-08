import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import ExperienceCard from '@/components/ExperienceCard';
import projectsData from '@/data/projects.json';
import experiencesData from '@/data/experiences.json';

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

interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
  location: string;
}

/**
 * Design Philosophy: Minimalismo Científico Moderno
 * - Hero section com background abstrato e tipografia clara
 * - Projetos em grid assimétrico com cards elegantes
 * - Animações suaves ao scroll e hover
 * - Espaçamento generoso para respiração visual
 * - Paleta minimalista: branco, cinza, azul profundo
 */
export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    setProjects(projectsData);
    setExperiences(experiencesData);
  }, []);

  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags))
  ).sort();

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-primary">DS Portfolio</h1>
          <div className="flex items-center gap-6">
            <a
              href="#projetos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projetos
            </a>
            <a
              href="#experiencias"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experiências
            </a>
            <a
              href="#sobre"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl slide-up">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Bem-vindo ao meu portfólio
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Data Science & Machine Learning
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transformando dados em insights valiosos através de análise estatística,
              machine learning e visualização de dados. Explore meus projetos e veja
              como a ciência de dados pode resolver problemas reais.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="#projetos" className="flex items-center gap-2">
                  Ver Projetos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contato">Entrar em Contato</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Stack Tecnológico
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Trabalho com as ferramentas e tecnologias mais modernas em Data Science,
                desde análise exploratória até deploy de modelos em produção.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Python',
                  'Machine Learning',
                  'Data Analysis',
                  'Visualization',
                  'Deep Learning',
                  'Cloud Computing',
                ].map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img
                src="/images/tech-stack-visual.png"
                alt="Tech Stack"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 border-b border-border">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Uma seleção dos meus projetos mais recentes e relevantes em Data Science.
            </p>

            {/* Filtros */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Todos
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === tag
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum projeto encontrado com esse filtro.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiencias" className="py-20 border-b border-border">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Experiências Profissionais
            </h2>
            <p className="text-muted-foreground text-lg">
              Minha trajetória profissional em Data Science, com foco em desenvolvimento
              de modelos, análise de dados e liderança de projetos.
            </p>
          </div>

          {/* Timeline de Experiências */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 border-b border-border">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-8">Sobre Mim</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Sou um cientista de dados apaixonado por transformar dados complexos em
              insights acionáveis. Com experiência em machine learning, análise estatística
              e visualização de dados, trabalho para resolver problemas reais através da
              ciência de dados.
            </p>
            <p>
              Minha especialidade está em desenvolver modelos preditivos robustos,
              realizar análises exploratórias profundas e comunicar resultados de forma
              clara e visual. Sou proficiente em Python, SQL e ferramentas de visualização
              modernas.
            </p>
            <p>
              Quando não estou analisando dados, gosto de contribuir para projetos open
              source e compartilhar conhecimento com a comunidade de Data Science.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Estou sempre aberto a novas oportunidades e colaborações. Entre em contato
            através dos canais abaixo.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="mailto:seu-email@example.com"
              className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </a>
          </div>

          <Button size="lg" asChild>
            <a href="mailto:seu-email@example.com">Enviar Email</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-secondary/50">
        <div className="container text-center text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} Data Science Portfolio. Desenvolvido com React
            e Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Modal de Detalhes do Projeto */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
