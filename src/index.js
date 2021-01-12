import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Groups from './components/Groups';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={App} />
    <Route path="/groups" component={Groups} />
  </BrowserRouter>,
  document.getElementById('root')
);