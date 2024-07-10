import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const EventDetailPage = () => {
  const { id } = useParams();
  const event = useSelector(state =>
    state.events.find(event => event.id === parseInt(id))
  );

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>
          <small className="text-muted">Date: {event.date}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EventDetailPage;
