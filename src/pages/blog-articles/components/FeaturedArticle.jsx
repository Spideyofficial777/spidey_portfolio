import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedArticle = ({ article, onReadMore }) => {
  const handleReadMore = () => {
    onReadMore(article.id);
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden mb-8 hover:shadow-elevation-3 transition-smooth">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative overflow-hidden h-64 lg:h-auto">
          <Image
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground">
              Featured
            </span>
          </div>
        </div>
        
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={16} />
              <span>{article.publishDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={16} />
              <span>{article.readTime} min read</span>
            </div>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {article.category}
            </span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4 leading-tight">
            {article.title}
          </h2>
          
          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Eye" size={16} />
                <span>{article.views} views</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Share2" size={16} />
                <span>{article.shares} shares</span>
              </div>
            </div>
            
            <Button
              variant="default"
              onClick={handleReadMore}
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={16}
            >
              Read Full Article
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;