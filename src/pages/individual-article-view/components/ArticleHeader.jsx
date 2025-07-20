import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ArticleHeader = ({ article }) => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <div className="space-y-6">
      {/* Article Title */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          {article.title}
        </h1>
        
        {/* Article Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} />
            <span>{calculateReadTime(article.content)} min read</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Icon name="Eye" size={16} />
            <span>{article.views.toLocaleString()} views</span>
          </div>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden bg-muted">
        <Image
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </div>

      {/* Article Summary */}
      {article.summary && (
        <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
          <p className="text-muted-foreground italic">
            {article.summary}
          </p>
        </div>
      )}
    </div>
  );
};

export default ArticleHeader;