import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/greetings';

// Action-types
const GET_MESSAGE = 'GET_MESSAGE';

// Reducers
const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_MESSAGE}/pending`:
      return state;
    case `${GET_MESSAGE}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}

// Action-Creators
export const getGreeting = createAsyncThunk(GET_MESSAGE,
    async () => {
      const res = await axios.get(BASE_URL);
      return res.data;
    });