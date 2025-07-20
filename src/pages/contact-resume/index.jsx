import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactForm from './components/ContactForm';
import ResumeDownload from './components/ResumeDownload';
import ContactInfo from './components/ContactInfo';
import TestimonialsSection from './components/TestimonialsSection';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';

const ContactResumePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-8">
        <Breadcrumb />
        
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="overflow-hidden rounded-full w-24 h-24 border-4 border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="SPIDEY OFFICIAL - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-background flex items-center justify-center">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Let's Build Something
              <span className="text-primary"> Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your ideas into powerful digital solutions? Get in touch and let's discuss your next project.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mx-auto mb-2">
                <Icon name="Code" size={20} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center justify-center w-10 h-10 bg-success/10 rounded-lg mx-auto mb-2">
                <Icon name="CheckCircle" size={20} className="text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-lg mx-auto mb-2">
                <Icon name="Users" size={20} className="text-secondary" />
              </div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mx-auto mb-2">
                <Icon name="Clock" size={20} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>

        {/* Resume Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Resume Download */}
          <div className="lg:col-span-2">
            <ResumeDownload />
          </div>
          
          {/* Professional Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Professional Summary
              </h3>
              
              <div className="space-y-4 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  Passionate full-stack developer with 5+ years of experience building scalable web applications using modern technologies like React, Node.js, and TypeScript.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" size={16} className="text-primary" />
                    <span className="text-card-foreground">Expert in React & Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Database" size={16} className="text-success" />
                    <span className="text-card-foreground">Database Design & Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Cloud" size={16} className="text-secondary" />
                    <span className="text-card-foreground">Cloud Architecture & DevOps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Smartphone" size={16} className="text-accent" />
                    <span className="text-card-foreground">Mobile-First Development</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Available for freelance projects, consulting, and full-time opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 border border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you need a complete web application, mobile app, or technical consultation, I'm here to help bring your vision to life with cutting-edge technology and best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} className="text-success" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Free 30-minute Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Award" size={16} className="text-secondary" />
                <span>5+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <span className="text-primary-foreground font-bold text-sm font-mono">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-card-foreground text-sm leading-none">SPIDEY</span>
                <span className="text-xs text-muted-foreground leading-none">OFFICIAL</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SPIDEY OFFICIAL. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Built with</span>
              <Icon name="Heart" size={16} className="text-destructive fill-current" />
              <span className="text-sm text-muted-foreground">and React</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactResumePage;