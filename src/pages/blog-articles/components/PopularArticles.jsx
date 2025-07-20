import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PopularArticles = ({ onArticleClick }) => {
  const popularArticles = [
    {
      id: 'popular-1',
      title: "React 18 Performance Optimization Techniques",
      views: 2840,
      publishDate: "Dec 15, 2024",
      readTime: 8
    },
    {
      id: 'popular-2',
      title: "Building Scalable Node.js APIs with TypeScript",
      views: 2156,
      publishDate: "Dec 10, 2024",
      readTime: 12
    },
    {
      id: 'popular-3',
      title: "Modern CSS Grid Layouts for Responsive Design",
      views: 1923,
      publishDate: "Dec 5, 2024",
      readTime: 6
    },
    {
      id: 'popular-4',
      title: "JavaScript ES2024 Features You Should Know",
      views: 1687,
      publishDate: "Nov 28, 2024",
      readTime: 10
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="font-semibold text-card-foreground mb-4 flex items-center">
        <Icon name="TrendingUp" size={18} className="mr-2 text-primary" />
        Popular Articles
      </h3>
      
      <div className="space-y-4">
        {popularArticles.map((article, index) => (
          <div key={article.id} className="group">
            <button
              onClick={() => onArticleClick(article.id)}
              className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-smooth focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary">
                  {index + 1}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-card-foreground group-hover:text-primary transition-smooth line-clamp-2 mb-2">
                    {article.title}
                  </h4>
                  
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{article.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{article.readTime}m</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
      
      <Button
        variant="outline"
        size="sm"
        className="w-full mt-4"
        iconName="ArrowRight"
        iconPosition="right"
        iconSize={14}
      >
        View All Popular
      </Button>
    </div>
  );
};

export default PopularArticles;