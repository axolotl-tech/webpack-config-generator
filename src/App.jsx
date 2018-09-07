import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Route components
import Home from './Home';
import Signup from './Signup';

class App extends Component {
  componentDidMount() {
    this.setCookie();
  }

  setCookie() {
    fetch('/auth/set', { credentials: 'include' });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Webpack Config Generator</h1>

          {/* Treat these routes as if they're just regular components 
            that happen to be nested within an if statement */}
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
