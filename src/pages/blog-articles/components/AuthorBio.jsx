import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AuthorBio = () => {
  const author = {
    name: "SPIDEY OFFICIAL",
    title: "Full-Stack Developer & Tech Writer",
    bio: `Passionate full-stack developer with expertise in React, Node.js, and modern web technologies. I share insights on development best practices, career growth, and emerging tech trends.`,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    stats: {
      articles: 42,
      followers: 1250,
      experience: "5+ years"
    },
    social: [
      { name: 'GitHub', icon: 'Github', url: 'https://github.com/spidey-official' },
      { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/spidey-official' },
      { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/spidey_official' }
    ]
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <Image
            src={author.avatar}
            alt={author.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-card flex items-center justify-center">
            <Icon name="Check" size={12} className="text-accent-foreground" />
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-card-foreground">{author.name}</h3>
          <p className="text-sm text-muted-foreground">{author.title}</p>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {author.bio}
      </p>
      
      <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/20 rounded-lg">
        <div className="text-center">
          <div className="text-lg font-semibold text-card-foreground">{author.stats.articles}</div>
          <div className="text-xs text-muted-foreground">Articles</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-card-foreground">{author.stats.followers}</div>
          <div className="text-xs text-muted-foreground">Followers</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-card-foreground">{author.stats.experience}</div>
          <div className="text-xs text-muted-foreground">Experience</div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {author.social.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              onClick={() => window.open(social.url, '_blank')}
              className="h-8 w-8"
              aria-label={`Follow on ${social.name}`}
            >
              <Icon name={social.icon} size={16} />
            </Button>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          iconName="UserPlus"
          iconPosition="left"
          iconSize={14}
        >
          Follow
        </Button>
      </div>
    </div>
  );
};

export default AuthorBio;