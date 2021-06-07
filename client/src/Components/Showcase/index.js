import React, { Component } from 'react';


export default class Showcase extends Component {

    render() {
        return (
            <>
                <section className="section first-section trends">
                    <div className="container-fluid">
                        <div className="masonry-blog clearfix">
                            <div className="left-side">
                                <div className="masonry-box post-media">
                                    <img src="upload/blog_masonry_01.jpg" alt="" className="img-fluid" />
                                    <div className="shadoweffect">
                                        <div className="shadow-desc">
                                            <div className="blog-meta">
                                                <span className="bg-aqua"><a href="blog-category-01.html" title="">Lifestyle</a></span>
                                                <h4><a href="single.html" title="">The golden rules you need to know for a positive life</a></h4>
                                                <small><a href="single.html" title="">24 July, 2017</a></small>
                                                <small><a href="blog-author.html" title="">by Amanda</a></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="center-side">
                                <div className="masonry-box post-media">
                                    <img src="upload/blog_masonry_02.jpg" alt="" className="img-fluid" />
                                    <div className="shadoweffect">
                                        <div className="shadow-desc">
                                            <div className="blog-meta">
                                                <span className="bg-green"><a href="blog-category-01.html" title="">Travel</a></span>
                                                <h4><a href="single.html" title="">5 places you should see</a></h4>
                                                <small><a href="single.html" title="">24 July, 2017</a></small>
                                                <small><a href="blog-author.html" title="">by Amanda</a></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="masonry-box small-box post-media">
                                    <img src="upload/blog_masonry_03.jpg" alt="" className="img-fluid" />
                                    <div className="shadoweffect">
                                        <div className="shadow-desc">
                                            <div className="blog-meta">
                                                <span className="bg-green"><a href="blog-category-01.html" title="">Travel</a></span>
                                                <h4><a href="single.html" title="">Separate your place with exotic hotels</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="masonry-box small-box post-media">
                                    <img src="upload/blog_masonry_04.jpg" alt="" className="img-fluid" />
                                    <div className="shadoweffect">
                                        <div className="shadow-desc">
                                            <div className="blog-meta">
                                                <span className="bg-green"><a href="blog-category-01.html" title="">Travel</a></span>
                                                <h4><a href="single.html" title="">What you need to know for child health</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-side hidden-md-down">
                                <div className="masonry-box post-media">
                                    <img src="upload/blog_masonry_05.jpg" alt="" className="img-fluid" />
                                    <div className="shadoweffect">
                                        <div className="shadow-desc">
                                            <div className="blog-meta">
                                                <span className="bg-aqua"><a href="blog-category-01.html" title="">Lifestyle</a></span>
                                                <h4><a href="single.html" title="">The rules you need to know for a happy union</a></h4>
                                                <small><a href="single.html" title="">03 July, 2017</a></small>
                                                <small><a href="blog-author.html" title="">by Jessica</a></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="invis1" />

            </>
        )
    }
}