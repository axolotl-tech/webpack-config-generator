import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/* Configure app for Hot Reloading */
const root = document.getElementById('root');
let render = () => {
  const App = require('./App').default;
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root
  );
};

/* 
  If any files are not being hot reloaded,
    add them to this array.
*/
const HOT_RELOAD_THESE_FILES = ['./App'];

// Configure Hot Module Reloading
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept(HOT_RELOAD_THESE_FILES, () => {
      setTimeout(render);
    });
  }
}

// Run app
render();
