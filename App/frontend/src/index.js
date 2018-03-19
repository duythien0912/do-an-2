import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);
