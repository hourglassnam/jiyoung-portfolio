import './SectionHeader.css';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4';
  align?: 'left' | 'center';
  accentColor?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  level = 'h2',
  align = 'left',
  accentColor,
}: SectionHeaderProps) {
  const Tag = level;

  return (
    <div
      className={`section-header section-header--${align}`}
    >
      {label && (
        <p
          className="section-header-label"
          style={accentColor ? { color: accentColor } : undefined}
        >
          {label}
        </p>
      )}
      <Tag className={`section-header-title section-header-title--${level}`}>
        {title}
      </Tag>
      {subtitle && (
        <p className="section-header-subtitle">{subtitle}</p>
      )}
    </div>
  );
}
