import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition.jsx';
import EventFilters from '../components/EventFilters.jsx';
import EventCard from '../components/EventCard.jsx';
import { eventsData, getEventsByCategory } from '../data/events.js';
import { EVENT_CATEGORIES, SITE_CONFIG } from '../utils/constants.js';

const ExploreEvents = () => {
  const [activeFilter, setActiveFilter] = useState(EVENT_CATEGORIES.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter events based on category and search query
  const filteredEvents = useMemo(() => {
    let events = getEventsByCategory(activeFilter);
    
    if (searchQuery) {
      events = events.filter(event =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return events;
  }, [activeFilter, searchQuery]);

  // Calculate event counts for filters
  const eventCounts = useMemo(() => ({
    all: eventsData.length,
    technical: eventsData.filter(e => e.category === EVENT_CATEGORIES.TECHNICAL).length,
    nonTechnical: eventsData.filter(e => e.category === EVENT_CATEGORIES.NON_TECHNICAL).length,
  }), []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{SITE_CONFIG.name} - Explore Events</title>
        <meta name="description" content="Explore all technical and cultural events at Gates Events 2K25. Find hackathons, workshops, competitions, and cultural programs." />
        <meta property="og:title" content={`${SITE_CONFIG.name} - Explore Events`} />
        <meta property="og:description" content="Browse through exciting technical and cultural events at Gates Events 2K25." />
        <meta property="og:image" content={SITE_CONFIG.ogImage} />
      </Helmet>

      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Explore Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Discover amazing technical and cultural events tailored for every interest
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events by name, description, or category..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-6 py-4 pr-20 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                />
                
                {searchQuery ? (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                    aria-label="Clear search"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                ) : (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">{eventCounts.all}</div>
                <div className="text-sm text-gray-300">Total Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{eventCounts.technical}</div>
                <div className="text-sm text-gray-300">Technical</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{eventCounts.nonTechnical}</div>
                <div className="text-sm text-gray-300">Cultural</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {/* Event Filters */}
          <EventFilters
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            eventCounts={eventCounts}
          />

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredEvents.length > 0 ? (
                  <>
                    Found <span className="font-semibold text-primary">{filteredEvents.length}</span> event{filteredEvents.length !== 1 ? 's' : ''} matching 
                    <span className="font-semibold"> "{searchQuery}"</span>
                    {activeFilter !== EVENT_CATEGORIES.ALL && (
                      <span> in <span className="font-semibold">{activeFilter}</span> category</span>
                    )}
                  </>
                ) : (
                  <>
                    No events found matching <span className="font-semibold">"{searchQuery}"</span>
                    {activeFilter !== EVENT_CATEGORIES.ALL && (
                      <span> in <span className="font-semibold">{activeFilter}</span> category</span>
                    )}. Try adjusting your search or filters.
                  </>
                )}
              </p>
            </div>
          )}

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : !searchQuery ? (
            /* No events in category */
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v13a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h2M8 7h8M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No events in this category</h3>
              <p className="text-gray-600 mb-6">Try selecting a different category or check back later for updates.</p>
              <button
                onClick={() => setActiveFilter(EVENT_CATEGORIES.ALL)}
                className="btn-primary"
              >
                View All Events
              </button>
            </div>
          ) : (
            /* No search results */
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse all events by clearing the search.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={clearSearch}
                  className="btn-primary"
                >
                  Clear Search
                </button>
                <button
                  onClick={() => {
                    setActiveFilter(EVENT_CATEGORIES.ALL);
                    setSearchQuery('');
                  }}
                  className="btn-secondary"
                >
                  Show All Events
                </button>
              </div>
            </div>
          )}

          {/* Event Summary */}
          {filteredEvents.length > 0 && (
            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Join the Fun?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Don't miss out on these amazing events! Register now to secure your spot and be part of the Gates Events 2K25 experience.
                </p>
                <a
                  href={SITE_CONFIG.links.registrationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                >
                  Register for Events
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M7 7l10 10M17 7v4" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default ExploreEvents;
