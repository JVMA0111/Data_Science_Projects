import { Briefcase, MapPin, Calendar } from 'lucide-react';

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

interface ExperienceCardProps {
  experience: Experience;
  isLast?: boolean;
}

/**
 * Design Philosophy: Minimalismo Científico
 * - Timeline visual com linha conectando experiências
 * - Card com informações claras e hierarquia visual
 * - Ícones para empresa, localização e período
 * - Listagem de conquistas com bullets
 * - Tecnologias em badges
 */
export default function ExperienceCard({ experience, isLast = false }: ExperienceCardProps) {
  return (
    <div className="relative">
      {/* Linha da timeline */}
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />

      {/* Ponto da timeline */}
      <div className="absolute left-0 top-4 w-12 h-12 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Card de experiência */}
      <div className="ml-20 pb-12 slide-up">
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-1">
              {experience.position}
            </h3>
            <p className="text-primary font-semibold mb-3">{experience.company}</p>

            {/* Informações de período e localização */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Conquistas */}
          {experience.achievements.length > 0 && (
            <div className="mb-4 pb-4 border-t border-border pt-4">
              <p className="text-sm font-semibold text-foreground mb-2">Principais Conquistas:</p>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tecnologias */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Tecnologias:</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
