// components/Loader.tsx
import React from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string; // Tailwind color class
}

const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  color = 'border-black',
}) => {
  let sizeClasses = '';

  switch (size) {
    case 'sm':
      sizeClasses = 'w-4 h-4 border-2';
      break;
    case 'lg':
      sizeClasses = 'w-12 h-12 border-4';
      break;
    case 'md':
    default:
      sizeClasses = 'w-6 h-6 border-4';
  }

  return (
    <div
      className={`animate-spin rounded-full border-t-transparent ${sizeClasses} ${color}`}
    />
  );
};

export default Loader;
