import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const BlogPreview = () => {
  const recentArticles = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large-scale React applications using TypeScript, advanced patterns, and best practices for maintainable code architecture.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      category: "React",
      readTime: "8 min read",
      publishDate: "2025-01-15",
      tags: ["React", "TypeScript", "Architecture"],
      featured: true
    },
    {
      id: 2,
      title: "Optimizing Node.js Performance for Production",
      excerpt: "Discover advanced techniques for optimizing Node.js applications, including memory management, clustering, and performance monitoring strategies.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
      category: "Backend",
      readTime: "12 min read",
      publishDate: "2025-01-10",
      tags: ["Node.js", "Performance", "Production"],
      featured: true
    },
    {
      id: 3,
      title: "Modern CSS Techniques with Tailwind CSS",
      excerpt: "Explore advanced Tailwind CSS techniques, custom configurations, and design system implementation for consistent UI development.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      category: "Frontend",
      readTime: "6 min read",
      publishDate: "2025-01-05",
      tags: ["CSS", "Tailwind", "Design"],
      featured: false
    }
  ];

  const categories = [
    { name: "React", count: 12, color: "text-blue-500" },
    { name: "Node.js", count: 8, color: "text-green-500" },
    { name: "TypeScript", count: 6, color: "text-blue-600" },
    { name: "Performance", count: 4, color: "text-orange-500" }
  ];

  const handleViewAllArticles = () => {
    window.location.href = '/blog-articles';
  };

  const handleArticleClick = (articleId) => {
    window.location.href = '/individual-article-view';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog-section" className="py-20 bg-muted/5">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and best practices in web development, 
            technology trends, and software engineering experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {recentArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300 cursor-pointer"
                  onClick={() => handleArticleClick(article.id)}
                >
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {article.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                          <Icon name="Star" size={12} />
                          <span>Featured</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={12} />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md border border-border"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-primary">
                        <span>Read more</span>
                        <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle bookmark
                          }}
                          className="w-8 h-8 rounded-full hover:bg-muted/50 flex items-center justify-center transition-colors"
                          aria-label="Bookmark article"
                        >
                          <Icon name="Bookmark" size={14} className="text-muted-foreground hover:text-foreground" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle share
                          }}
                          className="w-8 h-8 rounded-full hover:bg-muted/50 flex items-center justify-center transition-colors"
                          aria-label="Share article"
                        >
                          <Icon name="Share2" size={14} className="text-muted-foreground hover:text-foreground" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${category.color}`}>
                      {category.name}
                    </span>
                    <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
              <div className="text-center">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest articles and insights delivered to your inbox.
                </p>
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => {
                    // Handle newsletter signup
                    alert('Newsletter signup feature coming soon!');
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'TypeScript', 'CSS', 'Performance', 'Tutorial', 'Best Practices'].map((tag, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary text-xs rounded-full border border-border hover:border-primary/20 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={handleViewAllArticles}
            iconName="FileText"
            iconPosition="left"
            className="min-w-[200px]"
          >
            View All Articles ({recentArticles.length + 15})
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;