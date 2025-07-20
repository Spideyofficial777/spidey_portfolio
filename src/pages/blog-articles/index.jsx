import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import AuthorBio from './components/AuthorBio';
import PopularArticles from './components/PopularArticles';
import NewsletterSignup from './components/NewsletterSignup';
import Pagination from './components/Pagination';
import Icon from '../../components/AppIcon';

const BlogArticles = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const articlesPerPage = 6;

  // Mock data for articles
  const articles = [
    {
      id: 'featured-1',
      title: "Advanced React Patterns: Building Scalable Component Architecture",
      excerpt: `Explore advanced React patterns including compound components, render props, and custom hooks to build maintainable and scalable applications. Learn how to structure your components for maximum reusability and performance optimization.`,
      featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      category: "React",
      publishDate: "Jan 15, 2025",
      readTime: 12,
      views: 3420,
      shares: 156,
      isFeatured: true
    },
    {
      id: 'article-1',
      title: "TypeScript Best Practices for Large-Scale Applications",
      excerpt: "Learn essential TypeScript patterns and practices that will help you build robust, maintainable applications at enterprise scale.",
      featuredImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
      category: "TypeScript",
      publishDate: "Jan 12, 2025",
      readTime: 8,
      views: 2840,
      shares: 92
    },
    {
      id: 'article-2',
      title: "Building RESTful APIs with Node.js and Express",
      excerpt: "A comprehensive guide to creating scalable and secure REST APIs using Node.js, Express, and modern development practices.",
      featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      category: "Node.js",
      publishDate: "Jan 10, 2025",
      readTime: 15,
      views: 2156,
      shares: 78
    },
    {
      id: 'article-3',
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout method for optimal results.",
      featuredImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      category: "CSS",
      publishDate: "Jan 8, 2025",
      readTime: 6,
      views: 1923,
      shares: 64
    },
    {
      id: 'article-4',
      title: "JavaScript Performance Optimization Techniques",
      excerpt: "Discover proven techniques to optimize JavaScript performance, from code splitting to memory management and beyond.",
      featuredImage: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
      category: "JavaScript",
      publishDate: "Jan 5, 2025",
      readTime: 10,
      views: 1687,
      shares: 45
    },
    {
      id: 'article-5',
      title: "Career Growth Tips for Junior Developers",
      excerpt: "Essential advice for junior developers looking to advance their careers and build expertise in the tech industry.",
      featuredImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      category: "Career Tips",
      publishDate: "Jan 3, 2025",
      readTime: 7,
      views: 1432,
      shares: 89
    },
    {
      id: 'article-6',
      title: "Modern Authentication Patterns in Web Applications",
      excerpt: "Implementing secure authentication using JWT, OAuth, and modern security practices in web applications.",
      featuredImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      category: "Security",
      publishDate: "Dec 30, 2024",
      readTime: 14,
      views: 1298,
      shares: 56
    },
    {
      id: 'article-7',
      title: "Database Design Principles for Scalable Applications",
      excerpt: "Learn fundamental database design principles that will help you create efficient and scalable data architectures.",
      featuredImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      category: "Database",
      publishDate: "Dec 28, 2024",
      readTime: 11,
      views: 1156,
      shares: 42
    },
    {
      id: 'article-8',
      title: "React Testing Strategies: Unit, Integration & E2E",
      excerpt: "Comprehensive guide to testing React applications using Jest, React Testing Library, and Cypress for complete coverage.",
      featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Testing",
      publishDate: "Dec 25, 2024",
      readTime: 13,
      views: 1089,
      shares: 38
    }
  ];

  // Mock categories with counts
  const categories = [
    { id: 'react', name: 'React', count: 3 },
    { id: 'javascript', name: 'JavaScript', count: 2 },
    { id: 'nodejs', name: 'Node.js', count: 2 },
    { id: 'career-tips', name: 'Career Tips', count: 1 },
    { id: 'css', name: 'CSS', count: 1 },
    { id: 'typescript', name: 'TypeScript', count: 1 },
    { id: 'security', name: 'Security', count: 1 },
    { id: 'database', name: 'Database', count: 1 },
    { id: 'testing', name: 'Testing', count: 1 }
  ];

  // Filter articles based on category and search query
  useEffect(() => {
    let filtered = articles;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(article => 
        article.category.toLowerCase().replace(/\s+/g, '-') === activeCategory ||
        article.category.toLowerCase() === activeCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Get featured article
  const featuredArticle = articles.find(article => article.isFeatured);
  
  // Get regular articles (excluding featured)
  const regularArticles = filteredArticles.filter(article => !article.isFeatured);
  
  // Pagination logic
  const totalPages = Math.ceil(regularArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = regularArticles.slice(startIndex, startIndex + articlesPerPage);

  const handleReadMore = (articleId) => {
    window.location.href = '/individual-article-view';
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePopularArticleClick = (articleId) => {
    window.location.href = '/individual-article-view';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-8">
        <Breadcrumb />
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="FileText" size={20} className="text-primary" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Blog Articles</h1>
              <p className="text-muted-foreground mt-1">
                Insights, tutorials, and thoughts on web development and technology
              </p>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <FeaturedArticle 
            article={featuredArticle} 
            onReadMore={handleReadMore}
          />
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-8">
              <SearchBar 
                onSearch={handleSearch}
                searchQuery={searchQuery}
              />
              
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>

            {/* Articles Grid */}
            {paginatedArticles.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {paginatedArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onReadMore={handleReadMore}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={24} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery 
                    ? `No articles match "${searchQuery}". Try different keywords or browse all articles.`
                    : "No articles found in this category. Try selecting a different category."
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-primary hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-lg transition-smooth"
                    >
                      Clear search
                    </button>
                  )}
                  <button
                    onClick={() => setActiveCategory('all')}
                    className="text-primary hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-lg transition-smooth"
                  >
                    View all articles
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <AuthorBio />
            <PopularArticles onArticleClick={handlePopularArticleClick} />
            <NewsletterSignup />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <span className="text-primary-foreground font-bold text-sm font-mono">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-card-foreground text-sm leading-none">SPIDEY</span>
                <span className="text-xs text-muted-foreground leading-none">OFFICIAL</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SPIDEY OFFICIAL. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogArticles;