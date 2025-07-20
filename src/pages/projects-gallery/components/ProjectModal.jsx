import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const handleShare = (platform) => {
    const shareUrl = project.liveUrl || window.location.href;
    const shareText = `Check out ${project.title} by SPIDEY OFFICIAL`;
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-elevation-3">
        <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-4 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold text-card-foreground">{project.title}</h2>
            {project.featured && (
              <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <Icon name="X" size={16} />
          </Button>
        </div>

        <div className="p-6">
          {/* Image Carousel */}
          <div className="relative mb-6">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-muted">
              <Image
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <Icon name="ChevronLeft" size={16} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <Icon name="ChevronRight" size={16} />
                  </button>
                </>
              )}
            </div>
            
            {project.screenshots.length > 1 && (
              <div className="flex justify-center mt-3 space-x-2">
                {project.screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                      <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Technical Challenges</h3>
                <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Lessons Learned</h3>
                <p className="text-muted-foreground leading-relaxed">{project.lessonsLearned}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Completed</span>
                    <span className="text-sm font-medium text-card-foreground">{project.completedDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="text-sm font-medium text-card-foreground">{project.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Team Size</span>
                    <span className="text-sm font-medium text-card-foreground">{project.teamSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Type</span>
                    <span className="text-sm font-medium text-card-foreground">{project.type}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  iconName="ExternalLink"
                  iconPosition="left"
                  iconSize={16}
                >
                  View Live Demo
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  iconName="Github"
                  iconPosition="left"
                  iconSize={16}
                >
                  View Source Code
                </Button>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-card-foreground mb-2">Share Project</h3>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleShare('twitter')}
                    className="hover:text-blue-400"
                  >
                    <Icon name="Twitter" size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleShare('linkedin')}
                    className="hover:text-blue-600"
                  >
                    <Icon name="Linkedin" size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleShare('facebook')}
                    className="hover:text-blue-700"
                  >
                    <Icon name="Facebook" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;