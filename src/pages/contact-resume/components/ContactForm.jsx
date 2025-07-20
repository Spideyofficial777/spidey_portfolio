import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypeOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'full-stack', label: 'Full Stack Development' },
    { value: 'api-development', label: 'API Development' },
    { value: 'database-design', label: 'Database Design' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'other', label: 'Other' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-semibold text-card-foreground mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-card-foreground mb-2">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground">
          Ready to bring your project to life? Fill out the form below and I'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            error={errors.name}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
            required
          />
        </div>

        <Input
          label="Company/Organization"
          type="text"
          placeholder="Your company name (optional)"
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
        />

        <Select
          label="Project Type"
          placeholder="Select project type"
          options={projectTypeOptions}
          value={formData.projectType}
          onChange={(value) => handleInputChange('projectType', value)}
          error={errors.projectType}
          required
          searchable
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-card-foreground">
            Project Details <span className="text-destructive">*</span>
          </label>
          <textarea
            placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={6}
            className={`
              w-full px-3 py-2 bg-input border rounded-lg text-card-foreground placeholder:text-muted-foreground
              focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
              resize-none transition-smooth
              ${errors.message ? 'border-destructive' : 'border-border'}
            `}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="flex-1"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                company: '',
                projectType: '',
                message: ''
              });
              setErrors({});
            }}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Clear Form
          </Button>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
          <Icon name="Clock" size={16} />
          <span>Average response time: 12-24 hours</span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;