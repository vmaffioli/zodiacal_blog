import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Title from '../../Components/Title';
import Display from '../../Components/Display';


export default class Home extends Component {

    render() {
        return (
            <div id="wrapper">
                <Header />
                <Title />

                    <Display />

                <Footer />
            </div>
        );
    };

}


