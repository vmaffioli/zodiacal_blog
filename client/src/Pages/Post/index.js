import React, { Component } from 'react';
import Header from '../../Components/Header';
import PostContents from '../../Components/PostContents';
import Comments from '../../Components/Comments';
import Footer from '../../Components/Footer';

export default class Post extends Component {

  render() {
    return (
      <div id="wrapper">
        <Header />
        <PostContents />
        <Comments />
        <Footer />
      </div>
    );
  };
}


