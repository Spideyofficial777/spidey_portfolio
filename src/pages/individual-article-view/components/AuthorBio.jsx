import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AuthorBio = ({ author }) => {
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4">
      <div className="flex items-start space-x-4">
        {/* Author Avatar */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
            <Image
              src={author.avatar}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Author Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-card-foreground text-lg">
              {author.name}
            </h3>
            {author.verified && (
              <Icon name="BadgeCheck" size={16} className="text-primary" />
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">
            {author.title}
          </p>
          
          <p className="text-sm text-card-foreground leading-relaxed">
            {author.bio}
          </p>
        </div>
      </div>

      {/* Author Stats */}
      <div className="flex items-center space-x-6 pt-4 border-t border-border">
        <div className="text-center">
          <div className="font-semibold text-card-foreground">
            {author.articlesCount}
          </div>
          <div className="text-xs text-muted-foreground">Articles</div>
        </div>
        
        <div className="text-center">
          <div className="font-semibold text-card-foreground">
            {author.followers.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">Followers</div>
        </div>
        
        <div className="text-center">
          <div className="font-semibold text-card-foreground">
            {author.experience}
          </div>
          <div className="text-xs text-muted-foreground">Experience</div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          {author.socialLinks.map((social) => (
            <Button
              key={social.platform}
              variant="ghost"
              size="icon"
              onClick={() => handleSocialClick(social.url)}
              className="w-8 h-8"
              aria-label={`Follow on ${social.platform}`}
            >
              <Icon name={social.icon} size={16} />
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSocialClick(author.profileUrl)}
          iconName="ExternalLink"
          iconPosition="right"
          iconSize={14}
        >
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default AuthorBio;