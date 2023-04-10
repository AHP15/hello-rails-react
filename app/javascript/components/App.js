import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './greetings';
import store from '../redux/configureStore.js';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;