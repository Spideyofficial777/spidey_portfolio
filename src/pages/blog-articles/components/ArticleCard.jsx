import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ArticleCard = ({ article, onReadMore }) => {
  const handleReadMore = () => {
    onReadMore(article.id);
  };

  return (
    <article className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevation-2 transition-smooth group">
      <div className="relative overflow-hidden h-48">
        <Image
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-layout"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={14} />
            <span>{article.publishDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{article.readTime} min read</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={12} />
              <span>{article.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Share2" size={12} />
              <span>{article.shares}</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReadMore}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={14}
            className="text-primary hover:text-primary-foreground hover:bg-primary"
          >
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;