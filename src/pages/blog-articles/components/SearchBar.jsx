import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SearchBar = ({ onSearch, searchQuery }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery || '');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(localQuery);
  };

  const handleClear = () => {
    setLocalQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSearch} className="relative mb-6">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Input
            type="search"
            placeholder="Search articles by title, content, or tags..."
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            className="pr-10"
          />
          {localQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
              aria-label="Clear search"
            >
              <Icon name="X" size={16} />
            </button>
          )}
        </div>
        
        <Button
          type="submit"
          variant="default"
          iconName="Search"
          iconPosition="left"
          iconSize={16}
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;