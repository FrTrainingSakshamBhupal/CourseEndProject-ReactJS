import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { Button } from 'react-bootstrap';

const HomePage = () => {
  const events = useSelector(state => state.events);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Upcoming Events</h1>
        <Link to="/create">
          <Button variant="primary">Create New Event</Button>
        </Link>
      </div>
      {events.length > 0 ? (
        events.map(event => (
          <EventCard key={event.id} event={event} />
        ))
      ) : (
        <p>No events available. Please add some events.</p>
      )}
    </div>
  );
};

export default HomePage;
