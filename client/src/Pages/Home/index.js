import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavBar from '../../Components/NavBar';
import Banner from '../../Components/Banner';
import TextBox from '../../Components/TextBox';



import 'bootstrap/dist/css/bootstrap.css';
import LightTheme from '../../Components/Styles/LightTheme';
import DarkTheme from '../../Components/Styles/DarkTheme';
import ColorController from '../../Components/ColorController';





export default class Home extends Component {
  /* engine */
  constructor(props) {
    super(props)

    this.changePageColor = this.changePageColor.bind(this)
  }

  state = {
    colors: ['light', 'dark'],
    currentColor: '',
    theme: <></>,
    dataBanner: {}
  };

  callApi = async () => {
      const response = await fetch('/api/internal/data/example');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
      currentColor: this.state.colors[0],
      theme: <LightTheme />,
      dataBanner: res.Banner
    }))
    .catch(err => console.log(err));
}


  changePageColor = () => {
    console.log(this.state.colors)
        console.log(this.state.currentColor)

    if (this.state.currentColor === this.state.colors[0]) { //to dark
      this.setState({
        currentColor: this.state.colors[1],
        theme: <DarkTheme />
      })
    } else { //to light
      this.setState({
        currentColor: this.state.colors[0],
        theme: <LightTheme />
      })
    }
  }

  /* elements */ 
  navbar = (
    <>
      <Row>
        <Col md='12'>
          <NavBar />
        </Col>
      </Row>
    </>
  );
  
  banner = (data) => {
    return(
      <Row>
        <Col md='12'>
          <Banner data={data}/>
        </Col>
      </Row>
    )
};
  
  textBox = () => {
    let result = [];
    for (let i = 0; i < 3; i++) {
      result.push(<Col md='4'><TextBox count={i} /></Col>);
    };
    return (
        <Row>
          {result}
        </Row>
    );
  
  };

  changeColorButton = (
    <Row>
      <Col md='12'>
        <ColorController changePageColor={this.changePageColor}/>
      </Col>
    </Row>
  )
  


  render() {

    return (

      <>
        {this.state.theme}

        <div>
          <Container fluid={true}>

            {this.navbar}
              <hr />
            {this.banner(this.state.dataBanner)}
              <hr />
            {this.textBox()}

            {this.changeColorButton}

          </Container>
        </div>
      </>

    );
  };

}


