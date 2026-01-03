import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidthMobile = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-forge-dark disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]';

  const variants = {
    primary: 'bg-forge-accent hover:bg-forge-accent-light active:bg-forge-accent-dark text-white focus:ring-forge-accent',
    secondary: 'bg-forge-slate-700/50 hover:bg-forge-slate-700 active:bg-forge-slate-600 text-forge-gray-50 border border-forge-slate-700 hover:border-forge-slate-600 focus:ring-forge-slate-600',
    outline: 'bg-transparent hover:bg-forge-slate-700/50 active:bg-forge-slate-700 text-forge-gray-100 hover:text-forge-gray-50 border border-forge-slate-700 hover:border-forge-slate-600 focus:ring-forge-slate-600',
    ghost: 'bg-transparent hover:bg-forge-slate-700/50 active:bg-forge-slate-700 text-forge-gray-100 hover:text-forge-gray-50 focus:ring-forge-slate-600',
  };

  // Sizes with minimum 44px height for touch targets on mobile
  const sizes = {
    sm: 'px-3 py-2 text-sm min-h-[40px] sm:min-h-0 sm:py-1.5',
    md: 'px-4 sm:px-5 py-2.5 sm:py-2.5 text-sm min-h-[44px]',
    lg: 'px-5 sm:px-6 py-3 sm:py-3 text-base min-h-[48px]',
    xl: 'px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg min-h-[52px]',
  };

  const mobileWidth = fullWidthMobile ? 'w-full sm:w-auto' : '';

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${mobileWidth} ${className}`;

  // Render as Link if "to" prop is provided (internal navigation)
  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  // Render as anchor if "href" prop is provided (external link)
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  // Render as button by default
  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
