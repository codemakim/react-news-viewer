import React from 'react';
import { Route } from 'react-router-dom';
import NewPages from './pages/NewPages';

const App = () => {
  return (
    <>
      <Route path="/:category?" component={NewPages} />
    </>
  );
};

export default App;
