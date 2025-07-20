import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchTerm, onSearchChange, resultsCount }) => {
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search projects by name or technology..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        <Icon 
          name="Search" 
          size={18} 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Clear search"
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>
      
      {searchTerm && (
        <div className="mt-2 text-sm text-muted-foreground">
          {resultsCount > 0 ? (
            <span>Found {resultsCount} project{resultsCount !== 1 ? 's' : ''} matching "{searchTerm}"</span>
          ) : (
            <span>No projects found matching "{searchTerm}"</span>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;