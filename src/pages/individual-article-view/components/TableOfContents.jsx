import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TableOfContents = ({ content }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Extract headings from content
  const extractHeadings = (text) => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(text)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      headings.push({
        id,
        title,
        level
      });
    }

    return headings;
  };

  const headings = extractHeadings(content);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-40">
        <button
          onClick={toggleVisibility}
          className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-elevation-3 hover:bg-primary/90 transition-smooth"
          aria-label="Toggle table of contents"
        >
          <Icon name="List" size={20} />
        </button>
      </div>

      {/* Table of Contents */}
      <div className={`
        lg:block lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto
        ${isVisible ? 'fixed inset-0 z-50 bg-background/95 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none' : 'hidden'}
      `}>
        <div className={`
          lg:bg-card lg:border lg:border-border lg:rounded-lg lg:p-4
          ${isVisible ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 max-w-[90vw] bg-card border border-border rounded-lg p-4' : ''}
        `}>
          {/* Mobile Close Button */}
          {isVisible && (
            <div className="flex items-center justify-between mb-4 lg:hidden">
              <h3 className="font-semibold text-card-foreground">Table of Contents</h3>
              <button
                onClick={toggleVisibility}
                className="p-1 hover:bg-muted rounded"
                aria-label="Close table of contents"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
          )}

          {/* Desktop Title */}
          <h3 className="hidden lg:block font-semibold text-card-foreground mb-4">
            Table of Contents
          </h3>

          <nav className="space-y-1">
            {headings.map((heading) => (
              <button
                key={heading.id}
                onClick={() => {
                  scrollToSection(heading.id);
                  setIsVisible(false);
                }}
                className={`
                  block w-full text-left px-2 py-1 rounded text-sm transition-smooth
                  hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring
                  ${activeSection === heading.id 
                    ? 'text-primary bg-primary/10 border-l-2 border-primary' :'text-muted-foreground hover:text-foreground'
                  }
                  ${heading.level > 1 ? `ml-${(heading.level - 1) * 3}` : ''}
                `}
              >
                {heading.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default TableOfContents;