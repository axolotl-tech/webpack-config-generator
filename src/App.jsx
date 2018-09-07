import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from './Home';
import Signup from './Signup';

const App = () => (
  <BrowserRouter>
    <div>
      <h1>Webpack Config Generator</h1>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default hot(module)(App);
