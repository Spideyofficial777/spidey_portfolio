import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsPreview from './components/ProjectsPreview';
import BlogPreview from './components/BlogPreview';
import ContactSection from './components/ContactSection';

const PortfolioHome = () => {
  useEffect(() => {
    // Set page title
    document.title = 'SPIDEY OFFICIAL - Full Stack Developer Portfolio';
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional portfolio of SPIDEY OFFICIAL - Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Available for freelance projects and full-time opportunities.');
    }

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="relative">
        <div className="container max-w-6xl mx-auto px-4 pt-4">
          <Breadcrumb />
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Preview */}
        <ProjectsPreview />

        {/* Blog Preview */}
        <BlogPreview />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                    <span className="text-primary-foreground font-bold font-mono">S</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-card-foreground">SPIDEY OFFICIAL</span>
                    <span className="text-xs text-muted-foreground">Full Stack Developer</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm max-w-md">
                  Passionate full-stack developer creating exceptional digital experiences 
                  with modern web technologies and scalable solutions.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/portfolio-home" className="text-muted-foreground hover:text-primary transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/projects-gallery" className="text-muted-foreground hover:text-primary transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/blog-articles" className="text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact-resume" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-card-foreground mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>contact@spidey-official.dev</li>
                  <li>+1 (555) 123-4567</li>
                  <li>San Francisco, CA</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} SPIDEY OFFICIAL. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <a
                  href="https://github.com/spidey-official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/spidey-official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/spidey_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter Profile"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PortfolioHome;