import { Link } from 'react-router-dom';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Button({
  label,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  disabled = false,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const className = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    disabled ? 'btn--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {leftIcon && <span className="btn-icon btn-icon--left">{leftIcon}</span>}
      <span>{label}</span>
      {rightIcon && <span className="btn-icon btn-icon--right">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={disabled}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={className} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
