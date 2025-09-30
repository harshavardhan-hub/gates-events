import React from 'react';
import { EVENT_CATEGORIES } from '../utils/constants.js';

const EventFilters = ({ activeFilter, onFilterChange, eventCounts }) => {
  const filters = [
    { 
      key: EVENT_CATEGORIES.ALL, 
      label: 'All Events', 
      count: eventCounts.all 
    },
    { 
      key: EVENT_CATEGORIES.TECHNICAL, 
      label: 'Technical', 
      count: eventCounts.technical 
    },
    { 
      key: EVENT_CATEGORIES.NON_TECHNICAL, 
      label: 'Non-Technical', 
      count: eventCounts.nonTechnical 
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Categories</h2>
          <p className="text-gray-600">Filter events by category to find what interests you most</p>
        </div>
        
        {/* Active Filter Info */}
        <div className="mt-4 sm:mt-0 bg-gray-50 px-4 py-2 rounded-lg">
          <span className="text-sm text-gray-500">Showing: </span>
          <span className="text-sm font-semibold text-primary">
            {activeFilter === EVENT_CATEGORIES.ALL ? 'All Events' : activeFilter}
          </span>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`filter-btn ${
              activeFilter === filter.key ? 'active' : ''
            } group`}
            aria-pressed={activeFilter === filter.key}
          >
            <span className="flex items-center space-x-2">
              <span>{filter.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                activeFilter === filter.key
                  ? 'bg-white/20 text-white'
                  : 'bg-primary/10 text-primary group-hover:bg-primary/20'
              }`}>
                {filter.count}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventFilters;
