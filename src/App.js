import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
