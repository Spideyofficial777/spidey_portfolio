import React from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const getBreadcrumbItems = () => {
    const items = [{ label: 'Home', path: '/portfolio-home' }];

    switch (pathname) {
      case '/projects-gallery':
        items.push({ label: 'Projects', path: '/projects-gallery' });
        break;
      case '/blog-articles':
        items.push({ label: 'Blog', path: '/blog-articles' });
        break;
      case '/individual-article-view':
        items.push(
          { label: 'Blog', path: '/blog-articles' },
          { label: 'Article', path: '/individual-article-view' }
        );
        break;
      case '/contact-resume':
        items.push({ label: 'Contact', path: '/contact-resume' });
        break;
      default:
        break;
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="flex items-center space-x-2">
            {index > 0 && (
              <Icon name="ChevronRight" size={14} className="text-muted-foreground/60" />
            )}
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => handleNavigation(item.path)}
                className="hover:text-primary transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm px-1 py-0.5"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;