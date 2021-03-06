import React, { Component } from 'react';

export default class Trends extends Component {

    render() {
        return (
            <>
                <div className="row trends" >
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Recent Posts</h2>
                            <div className="blog-list-widget">
                                <div className="list-group">
                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src="upload/blog_square_01.jpg" alt="" className="img-fluid float-left" />
                                            <h5 className="mb-1">5 Beautiful buildings you need to before dying</h5>
                                            <small>12 Jan, 2016</small>
                                        </div>
                                    </a>

                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src="upload/blog_square_02.jpg" alt="" className="img-fluid float-left" />
                                            <h5 className="mb-1">Let's make an introduction for creative life</h5>
                                            <small>11 Jan, 2016</small>
                                        </div>
                                    </a>

                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 last-item justify-content-between">
                                            <img src="upload/blog_square_03.jpg" alt="" className="img-fluid float-left" />
                                            <h5 className="mb-1">Did you see the most beautiful sea in the world?</h5>
                                            <small>07 Jan, 2016</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Popular Posts</h2>
                            <div className="blog-list-widget">
                                <div className="list-group">
                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src="upload/blog_square_04.jpg" alt="" className="img-fluid float-left" />
                                            <h5 className="mb-1">Banana-chip chocolate cake recipe with customs</h5>
                                            <span className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                    </a>

                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src="upload/blog_square_07.jpg" alt="" className="img-fluid float-left" />
                                            <h5 className="mb-1">10 practical ways to choose organic vegetables</h5>
                                            <span className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                    </a>

                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 last-item justify-content-between">
                                            <img src="upload/blog_square_06.jpg" alt="" className="img-fluid float-left" />
                                            <h5 className="mb-1">We are making homemade ravioli, nice and good</h5>
                                            <span className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Popular Categories</h2>
                            <div className="link-widget">
                                <ul>
                                    <li><a href="#">Fahsion <span>(21)</span></a></li>
                                    <li><a href="#">Lifestyle <span>(15)</span></a></li>
                                    <li><a href="#">Art & Design <span>(31)</span></a></li>
                                    <li><a href="#">Health Beauty <span>(22)</span></a></li>
                                    <li><a href="#">Clothing <span>(66)</span></a></li>
                                    <li><a href="#">Entertaintment <span>(11)</span></a></li>
                                    <li><a href="#">Food & Drink <span>(87)</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="invis1" />
            </>
        )
    }
}