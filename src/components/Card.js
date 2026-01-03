import React from 'react';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
}) => {
  // Responsive padding - slightly smaller on mobile
  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-5 sm:p-8',
    xl: 'p-6 sm:p-10',
  };

  return (
    <div
      className={`
        bg-gradient-to-br from-forge-slate-800 to-forge-navy 
        border border-forge-slate-700/50 
        rounded-xl sm:rounded-xl
        card-glow
        ${hover ? 'hover:border-forge-accent/30 active:border-forge-accent/40 transition-all duration-300' : ''}
        ${paddingClasses[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
