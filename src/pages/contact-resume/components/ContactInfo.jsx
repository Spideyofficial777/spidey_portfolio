import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'hello@spideyofficial.dev',
      action: 'mailto:hello@spideyofficial.dev',
      color: 'text-primary'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: 'text-success'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'San Francisco, CA',
      action: null,
      color: 'text-secondary'
    },
    {
      icon: 'Clock',
      label: 'Timezone',
      value: 'PST (UTC-8)',
      action: null,
      color: 'text-accent'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/spideyofficial',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/spideyofficial',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/spideyofficial',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Portfolio',
      icon: 'Globe',
      url: 'https://spideyofficial.dev',
      color: 'hover:text-primary'
    }
  ];

  const handleContactClick = (action) => {
    if (action) {
      window.open(action, '_blank');
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">
          Contact Information
        </h3>
        
        <div className="space-y-4">
          {contactDetails.map((contact, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`flex items-center justify-center w-10 h-10 bg-muted/20 rounded-lg ${contact.color}`}>
                <Icon name={contact.icon} size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-card-foreground">
                  {contact.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {contact.value}
                </p>
              </div>
              {contact.action && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleContactClick(contact.action)}
                  iconName="ExternalLink"
                  iconSize={14}
                  className="opacity-60 hover:opacity-100"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">
          Connect With Me
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleSocialClick(social.url)}
              className={`justify-start transition-smooth ${social.color}`}
              iconName={social.icon}
              iconPosition="left"
              iconSize={16}
            >
              {social.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Availability Status */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-3 h-3 bg-success rounded-full">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          </div>
          <h3 className="text-lg font-semibold text-card-foreground">
            Available for Projects
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Currently accepting new projects and collaborations. Let's discuss your next big idea!
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Response Time:</span>
            <span className="text-card-foreground font-medium">12-24 hours</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Project Start:</span>
            <span className="text-card-foreground font-medium">2-3 weeks</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Consultation:</span>
            <span className="text-success font-medium">Free 30min call</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">
          Quick Actions
        </h3>
        
        <div className="space-y-3">
          <Button
            variant="outline"
            fullWidth
            onClick={() => window.open('https://calendly.com/spideyofficial', '_blank')}
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule a Call
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            onClick={() => window.open('mailto:hello@spideyofficial.dev?subject=Project Inquiry', '_blank')}
            iconName="MessageSquare"
            iconPosition="left"
          >
            Send Quick Email
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            onClick={() => window.open('https://wa.me/15551234567', '_blank')}
            iconName="MessageCircle"
            iconPosition="left"
          >
            WhatsApp Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;