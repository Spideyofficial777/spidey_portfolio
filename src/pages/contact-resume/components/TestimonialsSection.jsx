import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechFlow",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `SPIDEY delivered an exceptional full-stack solution that exceeded our expectations. The attention to detail and technical expertise was outstanding. Our platform now handles 10x more traffic seamlessly.`,
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "StartupLab Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Working with SPIDEY was a game-changer for our startup. The React application was delivered on time, within budget, and with features we didn't even know we needed. Highly recommended!`,
      rating: 5,
      project: "SaaS Dashboard"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder & CEO",
      company: "Digital Ventures",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `The mobile-first approach and attention to user experience made our app stand out in the market. SPIDEY's expertise in modern web technologies is truly impressive.`,
      rating: 5,
      project: "Mobile Web App"
    }
  ];

  const clientLogos = [
    { name: "TechFlow", logo: "https://via.placeholder.com/120x40/6366F1/FFFFFF?text=TechFlow" },
    { name: "StartupLab", logo: "https://via.placeholder.com/120x40/8B5CF6/FFFFFF?text=StartupLab" },
    { name: "Digital Ventures", logo: "https://via.placeholder.com/120x40/10B981/FFFFFF?text=DigitalV" },
    { name: "InnovateCorp", logo: "https://via.placeholder.com/120x40/F59E0B/FFFFFF?text=Innovate" },
    { name: "CloudTech", logo: "https://via.placeholder.com/120x40/EF4444/FFFFFF?text=CloudTech" },
    { name: "DataSoft", logo: "https://via.placeholder.com/120x40/3B82F6/FFFFFF?text=DataSoft" }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Client Testimonials */}
      <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-card-foreground mb-2">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground">
            What clients say about working with me
          </p>
        </div>

        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-muted/10 rounded-lg p-6 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="overflow-hidden rounded-full w-12 h-12 flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                  <div className="inline-flex items-center gap-1 mt-1 px-2 py-1 bg-primary/10 rounded-full">
                    <Icon name="Briefcase" size={12} className="text-primary" />
                    <span className="text-xs text-primary font-medium">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-card-foreground italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">
            Trusted by Leading Companies
          </h3>
          <p className="text-sm text-muted-foreground">
            Proud to have worked with these amazing organizations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-muted/10 rounded-lg border border-border hover:bg-muted/20 transition-smooth"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full h-8 object-contain opacity-70 hover:opacity-100 transition-smooth"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
        <h3 className="text-lg font-semibold text-card-foreground mb-6 text-center">
          Project Success Metrics
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-success/5 rounded-lg border border-success/20">
            <div className="text-2xl font-bold text-success mb-1">100%</div>
            <div className="text-xs text-muted-foreground">Client Satisfaction</div>
          </div>
          
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-xs text-muted-foreground">Projects Delivered</div>
          </div>
          
          <div className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/20">
            <div className="text-2xl font-bold text-secondary mb-1">98%</div>
            <div className="text-xs text-muted-foreground">On-Time Delivery</div>
          </div>
          
          <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
            <div className="text-2xl font-bold text-accent mb-1">24h</div>
            <div className="text-xs text-muted-foreground">Avg Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;