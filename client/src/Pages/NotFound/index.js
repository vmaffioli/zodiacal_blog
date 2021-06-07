import React, { Component } from 'react';
import Header from '../../Components/Header';
import Error from '../../Components/Error';
import Footer from '../../Components/Footer';

export default class NotFound extends Component {

  render() {
    return (
      <div id="wrapper">
        <Header />
        <Error />
        <Footer />
      </div>
    );
  };
}


