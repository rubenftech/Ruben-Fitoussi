
import React from 'react';

interface TechBadgeProps {
  label: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label }) => {
  return (
    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
      {label}
    </span>
  );
};
