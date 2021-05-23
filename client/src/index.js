import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Pages/Home';
import GlobalStyles from './Components/Styles/Global';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <Router>
    <GlobalStyles />
    <Route exact path="/" component={Home} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
