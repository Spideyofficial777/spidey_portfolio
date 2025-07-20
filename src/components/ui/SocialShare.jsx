import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const SocialShare = ({ title, url, description }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;
  const shareDescription = description || 'Check out this article from SPIDEY OFFICIAL';

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-700'
    }
  ];

  const handleShare = (url) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-card rounded-lg border border-border">
      <h3 className="text-sm font-semibold text-card-foreground">Share this article</h3>
      
      <div className="flex items-center space-x-2">
        {shareLinks.map((platform) => (
          <Button
            key={platform.name}
            variant="ghost"
            size="icon"
            onClick={() => handleShare(platform.url)}
            className={`transition-smooth ${platform.color}`}
            aria-label={`Share on ${platform.name}`}
          >
            <Icon name={platform.icon} size={18} />
          </Button>
        ))}
        
        <div className="w-px h-6 bg-border mx-2" />
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopyLink}
          className="text-xs"
          iconName={copied ? 'Check' : 'Copy'}
          iconPosition="left"
          iconSize={14}
        >
          {copied ? 'Copied!' : 'Copy link'}
        </Button>
      </div>
      
      {shareDescription && (
        <p className="text-xs text-muted-foreground">
          {shareDescription}
        </p>
      )}
    </div>
  );
};

export default SocialShare;