import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const EventForm = () => {
  const [event, setEvent] = useState({
    name: '',
    description: '',
    date: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setEvent(prevEvent => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addEvent(event));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit} className="shadow-sm p-4 bg-light rounded">
      <Form.Group className="mb-3">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={event.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={event.description}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="w-100">
        Add Event
      </Button>
    </Form>
  );
};

export default EventForm;
