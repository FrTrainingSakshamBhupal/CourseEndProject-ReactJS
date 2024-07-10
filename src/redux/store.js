import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './reducer';

const store = configureStore({
  reducer: {
    events: eventsReducer
  }
});

export default store;
