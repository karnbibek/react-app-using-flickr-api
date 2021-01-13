import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import Groups from './components/Groups';
import Gallery from './components/Gallery';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={App} />
    <Route path="/groups" component={Groups} />
    <Route path="/gallery/:id" component={Gallery} />
  </BrowserRouter>,
  document.getElementById('root')
);