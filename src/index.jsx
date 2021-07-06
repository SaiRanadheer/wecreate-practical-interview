import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import store from './redux/configureStore';
import About from './pages/About';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
