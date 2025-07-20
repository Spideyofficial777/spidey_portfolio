import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const handleViewProjects = () => {
    window.location.href = '/projects-gallery';
  };

  const handleDownloadResume = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/spidey-official-resume.pdf';
    link.download = 'SPIDEY_OFFICIAL_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  SPIDEY
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Full-Stack Developer & Technical Innovator
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate about creating exceptional digital experiences with modern web technologies. 
              Specializing in React, Node.js, and scalable full-stack solutions that drive business growth 
              and user engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={handleViewProjects}
                iconName="FolderOpen"
                iconPosition="left"
                className="min-w-[160px]"
              >
                View Projects
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadResume}
                iconName="Download"
                iconPosition="left"
                className="min-w-[160px]"
              >
                Download Resume
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevation-3">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="SPIDEY OFFICIAL - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 backdrop-blur-sm">
                <span className="text-primary font-mono text-sm font-bold">JS</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20 backdrop-blur-sm">
                <span className="text-secondary font-mono text-sm font-bold">⚛️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={handleScrollToContact}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-smooth"
            aria-label="Scroll to next section"
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;