import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from './components/Main';
import HomePage from './components/pages/HomePage';

const App = ({ location }) => (
  <div>
    <Route location={location} path="/" exact component={HomePage} />
    <Route location={location} path="/upload" exact component={Main} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
