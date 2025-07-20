import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/spidey-official',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/spidey-official',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/spidey_official',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:contact@spidey-official.dev',
      color: 'hover:text-green-500'
    }
  ];

  const contactInfo = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'contact@spidey-official.dev',
      link: 'mailto:contact@spidey-official.dev'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'San Francisco, CA',
      link: null
    },
    {
      icon: 'Clock',
      label: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM PST',
      link: null
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Mock form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact-section" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm available for freelance projects, 
            full-time opportunities, and technical consultations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-elevation-1">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Input
                label="Subject"
                type="text"
                name="subject"
                placeholder="Project Discussion"
                value={formData.subject}
                onChange={handleInputChange}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-card-foreground">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-success bg-success/10 px-4 py-3 rounded-lg border border-success/20">
                  <Icon name="CheckCircle" size={16} />
                  <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-error bg-error/10 px-4 py-3 rounded-lg border border-error/20">
                  <Icon name="AlertCircle" size={16} />
                  <span className="text-sm">Failed to send message. Please try again or contact me directly.</span>
                </div>
              )}

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={info.icon} size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-card-foreground text-sm">
                        {info.label}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">
                Connect With Me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.url)}
                    className={`flex items-center space-x-3 p-4 bg-muted/20 rounded-lg border border-border hover:border-primary/20 transition-all duration-200 ${social.color}`}
                  >
                    <Icon name={social.icon} size={20} />
                    <span className="font-medium">{social.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-foreground">Currently Available</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently accepting new projects and collaborations. Let's discuss how we can work together to bring your vision to life.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you need a complete web application, technical consultation, 
            or ongoing development support, I'm here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => window.location.href = '/contact-resume'}
              iconName="User"
              iconPosition="left"
            >
              View Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const contactForm = document.querySelector('form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              iconName="MessageCircle"
              iconPosition="left"
            >
              Schedule Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;