import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../redux/actions';
import { Card, Button } from 'react-bootstrap';

const EventCard = ({ event }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEvent(event.id));
  };

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>
          <small className="text-muted">Date: {event.date}</small>
        </Card.Text>
        <Link to={`/event/${event.id}`} className="btn btn-primary mr-2">
          View Details
        </Link>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
