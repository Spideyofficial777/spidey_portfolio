import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FloatingActions = ({ article, onShare, onBookmark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (onBookmark) {
      onBookmark(article.id, !isBookmarked);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      });
    } else if (onShare) {
      onShare();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Share Button */}
      <Button
        variant="default"
        size="icon"
        onClick={handleShare}
        className="w-12 h-12 rounded-full shadow-elevation-3 hover:shadow-elevation-2"
        aria-label="Share article"
      >
        <Icon name="Share2" size={20} />
      </Button>

      {/* Bookmark Button */}
      <Button
        variant={isBookmarked ? "default" : "outline"}
        size="icon"
        onClick={handleBookmark}
        className="w-12 h-12 rounded-full shadow-elevation-3 hover:shadow-elevation-2"
        aria-label={isBookmarked ? "Remove bookmark" : "Bookmark article"}
      >
        <Icon name={isBookmarked ? "BookmarkCheck" : "Bookmark"} size={20} />
      </Button>

      {/* Scroll to Top Button */}
      <Button
        variant="secondary"
        size="icon"
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full shadow-elevation-3 hover:shadow-elevation-2"
        aria-label="Scroll to top"
      >
        <Icon name="ArrowUp" size={20} />
      </Button>
    </div>
  );
};

export default FloatingActions;