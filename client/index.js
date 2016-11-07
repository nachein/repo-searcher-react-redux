import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/main.css';

// Import Components
import App from './components/App';
import RepoList from './components/RepoList';
import RepoSearch from './components/RepoSearch';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const router = (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={RepoSearch}></IndexRoute>
          <Route path="/user/:userName" component={RepoList}></Route>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>

);
render(router, document.getElementById('root'));
