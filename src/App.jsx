import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Route components
import Signup from './Signup';
import Form from './Form';
import DownloadPage from './DownloadPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      value: ''
    };

    this.state = this.initialState;
  }

  componentDidMount() {
    this.setCookie();
  }

  setCookie() {
    fetch('/auth/set', { credentials: 'include' });
  }

  render() {
    return (
      <div>
        <h1>Webpack Config Generator</h1>
        {/* Treat these routes as if they're just regular components 
            that happen to be nested within an if statement */}
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/download" component={DownloadPage} />
          <Route exact path="/" render={() => <Form />} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
