import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProjectsPreview = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://demo-ecommerce.spidey.dev",
      githubUrl: "https://github.com/spidey-official/ecommerce-platform",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard for productivity tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB"],
      liveUrl: "https://taskflow.spidey.dev",
      githubUrl: "https://github.com/spidey-official/task-management",
      featured: true
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Real-time weather data visualization platform with interactive charts, forecasting models, and location-based weather insights using modern APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Next.js", "D3.js", "Weather API", "Tailwind"],
      liveUrl: "https://weather-analytics.spidey.dev",
      githubUrl: "https://github.com/spidey-official/weather-dashboard",
      featured: true
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform with sentiment analysis, engagement tracking, and automated reporting for digital marketing teams.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "FastAPI", "Chart.js"],
      liveUrl: "https://social-analytics.spidey.dev",
      githubUrl: "https://github.com/spidey-official/social-analytics",
      featured: false
    }
  ];

  const handleViewAllProjects = () => {
    window.location.href = '/projects-gallery';
  };

  const handleProjectClick = (project) => {
    // Navigate to project detail or external link
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };

  const handleGithubClick = (e, githubUrl) => {
    e.stopPropagation();
    window.open(githubUrl, '_blank');
  };

  return (
    <section id="projects-section" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating expertise in full-stack development, 
            modern frameworks, and scalable architecture solutions.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => handleGithubClick(e, project.githubUrl)}
                    className="w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Icon name="Github" size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, '_blank');
                    }}
                    className="w-8 h-8 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="View live demo"
                  >
                    <Icon name="ExternalLink" size={16} className="text-primary-foreground" />
                  </button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    <span>2024</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Icon name="ArrowRight" size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleViewAllProjects}
            iconName="FolderOpen"
            iconPosition="left"
            className="min-w-[200px]"
          >
            View All Projects ({featuredProjects.length})
          </Button>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;