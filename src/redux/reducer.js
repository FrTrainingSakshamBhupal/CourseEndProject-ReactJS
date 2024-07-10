import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    fetchEventsSuccess(state, action) {
      return action.payload;
    },
    addEventSuccess(state, action) {
      state.push(action.payload);
    },
    deleteEventSuccess(state, action) {
      return state.filter(event => event.id !== action.payload);
    }
  }
});

export const { fetchEventsSuccess, addEventSuccess, deleteEventSuccess } = eventsSlice.actions;

export default eventsSlice.reducer;
