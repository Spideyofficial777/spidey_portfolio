import React from 'react';

const ProjectSkeleton = () => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
      <div className="h-48 bg-muted" />
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="h-6 bg-muted rounded w-3/4" />
          <div className="h-4 bg-muted rounded w-16" />
        </div>
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-2/3" />
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <div className="h-6 bg-muted rounded w-16" />
          <div className="h-6 bg-muted rounded w-20" />
          <div className="h-6 bg-muted rounded w-14" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;