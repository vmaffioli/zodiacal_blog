import React, { Component } from 'react';

export default class Recomendations extends Component {

    render() {
        return (
            <>
                <div className="custombox clearfix">
                    <h4 className="small-title">You may also like</h4>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="blog-box">
                                <div className="post-media">
                                    <a href="single.html" title="">
                                        <img src="upload/menu_06.jpg" alt="" className="img-fluid" />
                                        <div className="hovereffect">
                                            <span className=""></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="blog-meta">
                                    <h4><a href="single.html" title="">We are guests of ABC Design Studio</a></h4>
                                    <small><a href="blog-category-01.html" title="">Trends</a></small>
                                    <small><a href="blog-category-01.html" title="">21 July, 2017</a></small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="blog-box">
                                <div className="post-media">
                                    <a href="single.html" title="">
                                        <img src="upload/menu_07.jpg" alt="" className="img-fluid" />
                                        <div className="hovereffect">
                                            <span className=""></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="blog-meta">
                                    <h4><a href="single.html" title="">Nostalgia at work with family</a></h4>
                                    <small><a href="blog-category-01.html" title="">News</a></small>
                                    <small><a href="blog-category-01.html" title="">20 July, 2017</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="invis1" />
            </>
        )
    }
}