import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Categories from './Pages/Categories';
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';


import './reset.css';

ReactDOM.render(
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/404" component={NotFound}/>
      <Route exact path="/post" component={Post}/>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
