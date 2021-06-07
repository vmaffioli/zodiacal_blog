import React, { Component } from 'react';
import Header from '../../Components/Header';
import Showcase from '../../Components/Showcase';
import Trends from '../../Components/Trends';
import Footer from '../../Components/Footer';

export default class Home extends Component {

  render() {
    return (
      <div id="wrapper">
        <Header />
        <div className="container">
          <Showcase />
          <Trends />
        </div>
        <Footer />
      </div>
    );
  };
}


