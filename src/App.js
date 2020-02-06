import React from 'react';
import { Route } from 'react-router-dom';
import NewmoForm from './pages/NewmoForm';
import NewPages from './pages/NewPages';

const App = () => {
  return (
    <>
      <Route path="/:category?" component={NewPages} exact />
      <Route path="/page/newmoform" component={NewmoForm} />
    </>
  );
};

export default App;
