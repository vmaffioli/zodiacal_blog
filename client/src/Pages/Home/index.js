import React, { Component } from 'react';

import NavBar from '../../Components/NavBar';

import 'bootstrap/dist/css/bootstrap.css';
import LightTheme from '../../Components/Styles/LightTheme';
import DarkTheme from '../../Components/Styles/DarkTheme';




export default class Home extends Component {

  state = {
    colors: ['light', 'dark'],
    currentColor: '',
    theme: <></>,
  };

  componentDidMount() {
    this.setState({
      currentColor: this.state.colors[0],
      theme: <LightTheme />
    })
  };

  changePageColor() {
    if (this.state.currentColor === this.state.colors[0]) { //light
      this.setState({
        currentColor: this.state.colors[1],
        theme: <LightTheme />
      })
    } else { //black
      this.setState({
        currentColor: this.state.colors[0],
        theme: <DarkTheme />
      })
    }
  }


  render() {

    return (

      <>
        {this.state.theme}
        <NavBar />
      </>

    );
  };

}


