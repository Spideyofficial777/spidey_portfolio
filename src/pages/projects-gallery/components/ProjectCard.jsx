import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLiveDemo = (e) => {
    e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };

  const handleGitHub = (e) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <div 
      className="group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-elevation-2 hover:border-primary/20 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(project)}
    >
      <div className="relative overflow-hidden h-48">
        <Image
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 flex items-center justify-center space-x-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleLiveDemo}
              iconName="ExternalLink"
              iconPosition="left"
              iconSize={16}
              className="bg-white/90 text-black hover:bg-white"
            >
              Live Demo
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleGitHub}
              iconName="Github"
              iconPosition="left"
              iconSize={16}
              className="bg-black/80 text-white border-white/20 hover:bg-black/90"
            >
              GitHub
            </Button>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-card-foreground text-lg leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center text-xs text-muted-foreground ml-2">
            <Icon name="Calendar" size={12} className="mr-1" />
            {project.completedDate}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {isHovered && (
          <div className="space-y-2 animate-fade-in">
            <div className="flex items-center text-xs text-muted-foreground">
              <Icon name="Clock" size={12} className="mr-1" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Icon name="Users" size={12} className="mr-1" />
              <span>{project.teamSize}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;