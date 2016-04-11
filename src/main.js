import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';
import HeroList from './components/hero/HeroList';
import HeroPage from './components/hero/HeroPage';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HeroList} />
    <Route path="/heroes/:heroId" component={HeroPage} />
  </Route>
);

// Start of the app
ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app')
);