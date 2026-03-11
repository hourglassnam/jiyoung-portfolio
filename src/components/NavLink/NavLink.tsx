import { Link } from 'react-router-dom';
import './NavLink.css';

interface NavLinkProps {
  to: string;
  label: string;
  isActive?: boolean;
  variant?: 'desktop' | 'mobile';
  onClick?: () => void;
}

export default function NavLink({
  to,
  label,
  isActive = false,
  variant = 'desktop',
  onClick,
}: NavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={[
        'navlink',
        `navlink--${variant}`,
        isActive ? 'navlink--active' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
    </Link>
  );
}
