import React, { Component } from 'react';

export default class SideBar extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="sidebar">
                    <div className="widget">
                        <h2 className="widget-title">Search</h2>
                        <form className="form-inline search-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search on the site" />
                            </div>
                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                        </form>
                    </div>

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



                    <div className="widget">
                        <h2 className="widget-title">Instagram Feed</h2>
                        <div className="instagram-wrapper clearfix">
                            <a className="" href="#"><img src="upload/insta_01.jpeg" alt="" className="img-fluid" /></a>
                            <a href="#"><img src="upload/insta_02.jpeg" alt="" className="img-fluid" /></a>
                            <a href="#"><img src="upload/insta_03.jpeg" alt="" className="img-fluid" /></a>
                            <a href="#"><img src="upload/insta_04.jpeg" alt="" className="img-fluid" /></a>
                            <a href="#"><img src="upload/insta_05.jpeg" alt="" className="img-fluid" /></a>
                            <a href="#"><img src="upload/insta_06.jpeg" alt="" className="img-fluid" /></a>
                            <a href="#"><img src="upload/insta_07.jpeg" alt="" className="img-fluid" /></a>
                            <a href="#"><img src="upload/insta_08.jpeg" alt="" className="img-fluid" /></a>
                            <a href="#"><img src="upload/insta_09.jpeg" alt="" className="img-fluid" /></a>
                        </div>
                    </div>

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
        )
    }
}