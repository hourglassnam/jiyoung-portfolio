import './Tag.css';

type TagColor = 'blue' | 'sky' | 'mint' | 'yellow' | 'pink' | 'peach' | 'default';
type TagSize = 'sm' | 'md' | 'lg';
type TagFill = 'solid' | 'outline';

interface TagProps {
  label: string;
  color?: TagColor;
  size?: TagSize;
  fill?: TagFill;
}

export default function Tag({
  label,
  color = 'default',
  size = 'sm',
  fill = 'solid',
}: TagProps) {
  return (
    <span
      className={[
        'tag',
        `tag--${color}`,
        `tag--${size}`,
        `tag--${fill}`,
      ].join(' ')}
    >
      {label}
    </span>
  );
}
