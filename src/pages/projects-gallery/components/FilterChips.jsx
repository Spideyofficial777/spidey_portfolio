import React from 'react';
import Button from '../../../components/ui/Button';

const FilterChips = ({ activeFilters, onFilterChange }) => {
  const filterOptions = [
    { id: 'all', label: 'All Projects', type: 'category' },
    { id: 'react', label: 'React', type: 'technology' },
    { id: 'nodejs', label: 'Node.js', type: 'technology' },
    { id: 'fullstack', label: 'Full-Stack', type: 'technology' },
    { id: 'typescript', label: 'TypeScript', type: 'technology' },
    { id: 'webapp', label: 'Web App', type: 'projectType' },
    { id: 'api', label: 'API', type: 'projectType' },
    { id: 'mobile', label: 'Mobile', type: 'projectType' }
  ];

  const handleFilterClick = (filterId) => {
    if (filterId === 'all') {
      onFilterChange({ technology: [], projectType: [] });
    } else {
      const filter = filterOptions.find(f => f.id === filterId);
      if (filter) {
        const newFilters = { ...activeFilters };
        
        if (filter.type === 'technology') {
          if (newFilters.technology.includes(filterId)) {
            newFilters.technology = newFilters.technology.filter(t => t !== filterId);
          } else {
            newFilters.technology = [...newFilters.technology, filterId];
          }
        } else if (filter.type === 'projectType') {
          if (newFilters.projectType.includes(filterId)) {
            newFilters.projectType = newFilters.projectType.filter(t => t !== filterId);
          } else {
            newFilters.projectType = [...newFilters.projectType, filterId];
          }
        }
        
        onFilterChange(newFilters);
      }
    }
  };

  const isFilterActive = (filterId) => {
    if (filterId === 'all') {
      return activeFilters.technology.length === 0 && activeFilters.projectType.length === 0;
    }
    return activeFilters.technology.includes(filterId) || activeFilters.projectType.includes(filterId);
  };

  const getActiveFilterCount = () => {
    return activeFilters.technology.length + activeFilters.projectType.length;
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-foreground">Filter by Technology & Type</h3>
        {getActiveFilterCount() > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onFilterChange({ technology: [], projectType: [] })}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Clear all ({getActiveFilterCount()})
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((filter) => (
          <Button
            key={filter.id}
            variant={isFilterActive(filter.id) ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterClick(filter.id)}
            className={`
              transition-all duration-200 text-xs
              ${isFilterActive(filter.id) 
                ? 'bg-primary text-primary-foreground border-primary' 
                : 'hover:border-primary/50 hover:text-primary'
              }
            `}
          >
            {filter.label}
            {isFilterActive(filter.id) && filter.id !== 'all' && (
              <span className="ml-1 text-xs opacity-75">✓</span>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterChips;