import { fetchEventsSuccess, addEventSuccess, deleteEventSuccess } from './reducer';

export const fetchEvents = () => async dispatch => {
  const response = await fetch('http://localhost:5000/events');
  const data = await response.json();
  dispatch(fetchEventsSuccess(data));
};

export const addEvent = event => async dispatch => {
  const response = await fetch('http://localhost:5000/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  });
  const data = await response.json();
  dispatch(addEventSuccess(data));
};

export const deleteEvent = id => async dispatch => {
  await fetch(`http://localhost:5000/events/${id}`, {
    method: 'DELETE'
  });
  dispatch(deleteEventSuccess(id));
};
