import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RelatedArticles = ({ articles }) => {
  const handleArticleClick = (articleId) => {
    // In a real app, this would navigate to the article
    window.location.href = `/individual-article-view?id=${articleId}`;
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(new Date(date));
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Icon name="BookOpen" size={20} className="text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Related Articles</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {articles.map((article) => (
          <div
            key={article.id}
            className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-elevation-2 transition-smooth cursor-pointer"
            onClick={() => handleArticleClick(article.id)}
          >
            {/* Article Image */}
            <div className="relative h-48 bg-muted overflow-hidden">
              <Image
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-4 space-y-3">
              <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-smooth line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>{formatDate(article.publishedAt)}</span>
                  </span>
                  
                  <span className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{calculateReadTime(article.content)} min</span>
                  </span>
                </div>

                <div className="flex items-center space-x-1">
                  <Icon name="Eye" size={12} />
                  <span>{article.views}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {article.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center pt-4">
        <Button
          variant="outline"
          onClick={() => window.location.href = '/blog-articles'}
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
        >
          View All Articles
        </Button>
      </div>
    </div>
  );
};

export default RelatedArticles;