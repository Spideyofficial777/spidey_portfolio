import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import SocialShare from '../../components/ui/SocialShare';
import ArticleHeader from './components/ArticleHeader';
import ArticleContent from './components/ArticleContent';
import TableOfContents from './components/TableOfContents';
import AuthorBio from './components/AuthorBio';
import RelatedArticles from './components/RelatedArticles';
import ReadingProgress from './components/ReadingProgress';
import FloatingActions from './components/FloatingActions';

const IndividualArticleView = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Mock article data
  const article = {
    id: "react-performance-optimization",
    title: "Advanced React Performance Optimization Techniques for Large-Scale Applications",
    summary: "Explore cutting-edge strategies to optimize React applications, including code splitting, memoization, virtual scrolling, and advanced bundling techniques that can dramatically improve your app's performance.",
    content: `React applications can become sluggish as they grow in complexity and size. Performance optimization becomes crucial for maintaining a smooth user experience and ensuring your application scales effectively.

## Understanding React Performance Bottlenecks

Before diving into optimization techniques, it's essential to understand where performance issues typically arise in React applications. Common bottlenecks include unnecessary re-renders, large bundle sizes, and inefficient state management.

### Identifying Performance Issues

The first step in optimization is identifying where your application is struggling. React DevTools Profiler is an invaluable tool for this purpose.

\`\`\`javascript
// Example of a component that might cause performance issues
const ExpensiveComponent = ({ data, filters }) => {
  // This calculation runs on every render
  const processedData = data.map(item => {
    return {
      ...item,
      processed: expensiveCalculation(item, filters)
    };
  });

  return (
    <div>
      {processedData.map(item => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};
\`\`\`

## Memoization Strategies

React.memo, useMemo, and useCallback are powerful tools for preventing unnecessary re-renders and expensive calculations.

### Using React.memo Effectively

React.memo is a higher-order component that memoizes the result of a component. It only re-renders when its props change.

\`\`\`jsx
const OptimizedComponent = React.memo(({ data, onUpdate }) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return prevProps.data.id === nextProps.data.id &&
         prevProps.data.title === nextProps.data.title;
});
\`\`\`

### Leveraging useMemo for Expensive Calculations

useMemo helps cache expensive calculations between renders.

\`\`\`javascript
const DataProcessor = ({ rawData, filters }) => {
  const processedData = useMemo(() => {
    return rawData
      .filter(item => filters.includes(item.category))
      .map(item => ({
        ...item,
        score: calculateComplexScore(item)
      }))
      .sort((a, b) => b.score - a.score);
  }, [rawData, filters]);

  return <DataVisualization data={processedData} />;
};
\`\`\`

## Code Splitting and Lazy Loading

Breaking your application into smaller chunks can significantly improve initial load times.

### Route-Based Code Splitting

\`\`\`jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

### Component-Level Code Splitting

\`\`\`jsx
const HeavyChart = lazy(() => import('./components/HeavyChart'));

const Dashboard = () => {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setShowChart(true)}>
        Load Chart
      </button>
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
};
\`\`\`

## Virtual Scrolling for Large Lists

When dealing with thousands of items, virtual scrolling can dramatically improve performance by only rendering visible items.

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      <ItemComponent item={items[index]} />
    </div>
  );

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={80}
      width="100%"
    >
      {Row}
    </List>
  );
};
\`\`\`

## Bundle Optimization

Optimizing your bundle size is crucial for faster load times.

### Tree Shaking

Ensure your bundler can eliminate dead code by using ES6 imports and avoiding importing entire libraries.

\`\`\`javascript
// Bad: imports entire lodash library


// Good: imports only the needed function

\`\`\`

### Dynamic Imports for Third-Party Libraries

\`\`\`javascript
const loadChartLibrary = async () => {
  const { Chart } = await import('chart.js');
  return Chart;
};

const ChartComponent = () => {
  const [Chart, setChart] = useState(null);

  useEffect(() => {
    loadChartLibrary().then(setChart);
  }, []);

  if (!Chart) return <div>Loading chart...</div>;

  return <Chart {...chartProps} />;
};
\`\`\`

## State Management Optimization

Efficient state management can prevent unnecessary re-renders across your application.

### Context Optimization

Split contexts to minimize re-renders when only part of the state changes.

\`\`\`jsx
// Instead of one large context
const AppContext = createContext();

// Create separate contexts
const UserContext = createContext();
const ThemeContext = createContext();
const DataContext = createContext();
\`\`\`

## Conclusion

Performance optimization in React is an ongoing process that requires careful analysis and strategic implementation. By applying these techniques systematically, you can build React applications that remain fast and responsive even as they scale to handle complex requirements and large datasets.

Remember to measure performance before and after implementing optimizations to ensure they're having the desired effect. Tools like React DevTools Profiler, Chrome DevTools, and Lighthouse are invaluable for this process.`,
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2025-01-15T10:30:00Z",
    views: 15420,
    tags: ["React", "Performance", "JavaScript", "Web Development", "Optimization"],
    category: "Technical",
    excerpt: "Learn advanced techniques to optimize React applications for better performance, including memoization, code splitting, and bundle optimization strategies."
  };

  // Mock author data
  const author = {
    id: "spidey-official",
    name: "SPIDEY OFFICIAL",
    title: "Senior Full-Stack Developer & Technical Writer",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Specializes in React, Node.js, and modern web technologies. Loves sharing knowledge through technical writing and open-source contributions.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    verified: true,
    articlesCount: 47,
    followers: 12500,
    experience: "5+ Years",
    profileUrl: "/contact-resume",
    socialLinks: [
      { platform: "GitHub", icon: "Github", url: "https://github.com/spidey-official" },
      { platform: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/in/spidey-official" },
      { platform: "Twitter", icon: "Twitter", url: "https://twitter.com/spidey_official" }
    ]
  };

  // Mock related articles
  const relatedArticles = [
    {
      id: "react-hooks-guide",
      title: "Complete Guide to React Hooks: From Basics to Advanced Patterns",
      excerpt: "Master React Hooks with practical examples and advanced patterns for building modern React applications.",
      featuredImage: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      publishedAt: "2025-01-10T14:20:00Z",
      views: 8750,
      category: "Tutorial",
      tags: ["React", "Hooks", "JavaScript"],
      content: "React Hooks revolutionized how we write React components..."
    },
    {
      id: "typescript-react-best-practices",
      title: "TypeScript with React: Best Practices and Common Pitfalls",
      excerpt: "Learn how to effectively use TypeScript in React projects with practical examples and best practices.",
      featuredImage: "https://images.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png?auto=compress&cs=tinysrgb&w=600",
      publishedAt: "2025-01-05T09:15:00Z",
      views: 6320,
      category: "Best Practices",
      tags: ["TypeScript", "React", "Best Practices"],
      content: "TypeScript brings type safety to React development..."
    },
    {
      id: "modern-css-techniques",
      title: "Modern CSS Techniques Every Developer Should Know in 2025",
      excerpt: "Explore cutting-edge CSS features and techniques that will improve your web development workflow.",
      featuredImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      publishedAt: "2024-12-28T16:45:00Z",
      views: 11200,
      category: "CSS",
      tags: ["CSS", "Web Development", "Frontend"],
      content: "CSS has evolved significantly in recent years..."
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleShare = () => {
    console.log('Share article');
  };

  const handleBookmark = (articleId, isBookmarked) => {
    console.log(`Article ${articleId} ${isBookmarked ? 'bookmarked' : 'unbookmarked'}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-64 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | SPIDEY OFFICIAL</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.featuredImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.featuredImage} />
      </Helmet>

      <Header />
      <ReadingProgress />

      <main className="container mx-auto px-4 lg:px-8 py-8">
        <Breadcrumb />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <ArticleHeader article={article} />
            <ArticleContent content={article.content} />
            
            {/* Social Share */}
            <div className="border-t border-border pt-8">
              <SocialShare 
                title={article.title}
                url={window.location.href}
                description={article.excerpt}
              />
            </div>

            {/* Author Bio */}
            <div className="border-t border-border pt-8">
              <AuthorBio author={author} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <TableOfContents content={article.content} />
            <RelatedArticles articles={relatedArticles} />
          </div>
        </div>
      </main>

      <FloatingActions 
        article={article}
        onShare={handleShare}
        onBookmark={handleBookmark}
      />
    </div>
  );
};

export default IndividualArticleView;