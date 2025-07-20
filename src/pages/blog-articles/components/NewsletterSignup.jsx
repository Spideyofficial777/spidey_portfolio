import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Check" size={24} className="text-success" />
          </div>
          <h3 className="font-semibold text-card-foreground mb-2">Successfully Subscribed!</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Thank you for subscribing to our newsletter. You'll receive the latest articles and updates.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSubscribed(false)}
          >
            Subscribe Another Email
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Icon name="Mail" size={24} className="text-primary" />
        </div>
        <h3 className="font-semibold text-card-foreground mb-2">Stay Updated</h3>
        <p className="text-sm text-muted-foreground">
          Get the latest articles and tech insights delivered to your inbox weekly.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
        
        <Button
          type="submit"
          variant="default"
          size="sm"
          className="w-full"
          loading={isLoading}
          disabled={!email || isLoading}
          iconName="Send"
          iconPosition="right"
          iconSize={14}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe Now'}
        </Button>
      </form>
      
      <p className="text-xs text-muted-foreground text-center mt-3">
        No spam, unsubscribe at any time. We respect your privacy.
      </p>
    </div>
  );
};

export default NewsletterSignup;