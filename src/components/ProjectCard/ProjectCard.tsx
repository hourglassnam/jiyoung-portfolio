import { Link } from 'react-router-dom';
import './ProjectCard.css';

type CardVariant = 'default' | 'mobile' | 'coming-soon';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  href: string;
  variant?: CardVariant;
}

export default function ProjectCard({
  title,
  description,
  tags,
  thumbnail,
  href,
  variant = 'default',
}: ProjectCardProps) {
  return (
    <Link
      to={href}
      className={`project-card${variant === 'coming-soon' ? ' project-card--coming-soon' : ''}`}
      aria-label={`View ${title} case study`}
    >
      {/* Thumbnail */}
      <div className="project-card-thumbnail">
        <img
          src={thumbnail}
          alt={`${title} project thumbnail`}
          className="project-card-thumbnail-img"
        />
        {variant === 'coming-soon' && (
          <div className="project-card-coming-soon" aria-label="Coming soon">
            <span>Coming Soon</span>
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="project-card-meta">
        {/* Tags as dot-separated text (Figma style) */}
        {tags.length > 0 && (
          <p className="project-card-tags">
            {tags.map((tag, i) => (
              <span key={tag}>
                {i > 0 && <span className="project-card-dot" aria-hidden="true">•</span>}
                {tag}
              </span>
            ))}
          </p>
        )}

        {/* Title */}
        <h3 className="project-card-title">{title}</h3>

        {/* Description */}
        <p className="project-card-description">{description}</p>
      </div>
    </Link>
  );
}
