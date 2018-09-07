import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Route components
import Home from './Home';
import Signup from './Signup';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props) 

    this.initialState = {
      value: ''
    };

    this.state = this.initialState;
  };

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
            <Route 
            exact path="/" 
            render={() => <Form /> 
            }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
