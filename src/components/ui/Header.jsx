import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('portfolio-home');
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/portfolio-home', icon: 'Home' },
    { label: 'Projects', path: '/projects-gallery', icon: 'FolderOpen' },
    { label: 'Blog', path: '/blog-articles', icon: 'FileText' },
    { label: 'Contact', path: '/contact-resume', icon: 'Mail' }
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = navigationItems.find(item => item.path === currentPath);
    if (currentItem) {
      setActiveSection(currentItem.path.replace('/', ''));
    }
  }, [location.pathname]);

  const handleNavClick = (path) => {
    setActiveSection(path.replace('/', ''));
    setIsMobileMenuOpen(false);
    window.location.href = path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <span className="text-primary-foreground font-bold text-sm font-mono">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground text-sm leading-none">SPIDEY</span>
              <span className="text-xs text-muted-foreground leading-none">OFFICIAL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium transition-smooth
                  hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                  ${activeSection === item.path.replace('/', '') 
                    ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                <span className="flex items-center space-x-2">
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </span>
                {activeSection === item.path.replace('/', '') && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={20} />
          </Button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={toggleMobileMenu} />
            <div className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-card border-l border-border shadow-elevation-3 animate-slide-in-from-right">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-6 h-6 bg-primary rounded-md">
                    <span className="text-primary-foreground font-bold text-xs font-mono">S</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-card-foreground text-xs leading-none">SPIDEY</span>
                    <span className="text-xs text-muted-foreground leading-none">OFFICIAL</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className="h-8 w-8"
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
              
              <nav className="p-4 space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-smooth
                      hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring
                      ${activeSection === item.path.replace('/', '') 
                        ? 'text-primary bg-primary/10 border border-primary/20' :'text-card-foreground hover:text-primary'
                      }
                    `}
                  >
                    <Icon name={item.icon} size={18} />
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.path.replace('/', '') && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                    )}
                  </button>
                ))}
              </nav>

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-muted/20 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground text-center">
                  © 2025 SPIDEY OFFICIAL
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;