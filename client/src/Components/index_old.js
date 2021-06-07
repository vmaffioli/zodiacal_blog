import React, { Component } from 'react';





export default class Home extends Component {




  render() {

    return (
      <>

    <div id="preloader">
        <img className="preloader" src="images/loader.gif" alt=""/>
    </div>

    <div id="wrapper">
        <div className="collapse top-search" id="collapseExample">
            <div className="card card-block">
                <div className="newsletter-widget text-center">
                    <form className="form-inline">
                        <input type="text" className="form-control" placeholder="What you are looking for?"/>
                        <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>

        <div className="topbar-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div className="topsocial">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fa fa-youtube"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Flickr"><i className="fa fa-flickr"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google+"><i className="fa fa-google-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 hidden-md-down">
                        <div className="topmenu text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="blog-category-01.html"><i className="fa fa-star"></i> Trends</a></li>
                                <li className="list-inline-item"><a href="blog-category-02.html"><i className="fa fa-bolt"></i> Hot Topics</a></li>
                                <li className="list-inline-item"><a href="page-contact.html"><i className="fa fa-user-circle-o"></i> Write for us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="topsearch text-right">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-search"></i> Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo">
                            <a href="index.html"><img src="images/logo.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse navbar-toggleable-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#cloapediamenu" aria-controls="cloapediamenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="cloapediamenu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link color-pink-hover" href="index.html">Home</a>
                            </li>
                            <li className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                                <ul className="dropdown-menu megamenu" aria-labelledby="dropdown01">
                                    <li>
                                        <div className="mega-menu-content clearfix">
                                            <div className="tab">
                                                <button className="tablinks active" onclick="openCategory(event, 'cat01')">Beauty</button>
                                                <button className="tablinks" onclick="openCategory(event, 'cat02')">Fashion</button>
                                                <button className="tablinks" onclick="openCategory(event, 'cat03')">Travel</button>
                                                <button className="tablinks" onclick="openCategory(event, 'cat04')">Architecture</button>
                                                <button className="tablinks" onclick="openCategory(event, 'cat05')">Recipes</button>
                                            </div>

                                            <div className="tab-details clearfix">
                                                <div id="cat01" className="tabcontent active">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_01.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Spa</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Top 10+ care advice for your toenails</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_02.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Beauty</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">The secret of your beauty is handmade soap</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_03.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Beauty</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Benefits of face mask made from mud</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_04.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Spa</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Relax with the unique warmth of candle flavor</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="cat02" className="tabcontent">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_05.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Fashion</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">2017 summer stamp will have design models here</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_06.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Collections</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Which color is the most suitable color for you?</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_07.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Fashion</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Subscribe to these sites to keep an eye on the fashion</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_08.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Trends</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">The most trends of this year with color combination</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="cat03" className="tabcontent">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_09.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Tourism</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">I visited the architects of Istanbul for you</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_11.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Travel</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Prepared handmade dish dish in the Netherlands</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_12.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">City Tours</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">I recommend you visit the fairy chimneys</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_13.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Tourism</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">One of the most beautiful ports in the world</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="cat04" className="tabcontent">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_14.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Places</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">A collection of the most beautiful shop designs</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_15.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Designs</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">America's and Canada's most beautiful wine houses</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_16.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Minimalism</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">The most professional ways to color your walls</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_17.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Furnishings</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Stylish cabinet designs and furnitures</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="cat05" className="tabcontent">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_18.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Vegetables</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Grilled vegetable with fish prepared with fish</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_19.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Restaurants</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">The world's finest and clean meat restaurants</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_20.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Meat foods</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Fried veal and vegetable dish</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                            <div className="blog-box">
                                                                <div className="post-media">
                                                                    <a href="single.html" title="">
                                                                        <img src="upload/menu_21.jpg" alt="" className="img-fluid"/>
                                                                        <div className="hovereffect">
                                                                        </div>
                                                                        <span className="menucat">Pastas</span>
                                                                    </a>
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h4><a href="single.html" title="">Tasty pasta sauces and recipes</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown has-submenu">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Features</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                                    <li><a className="dropdown-item" href="single.html">Single Blog <span className="hidden-md-down hidden-sm-down hidden-xs-down"><i className="fa fa-angle-right"></i></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="single.html">Single Default</a></li>
                                            <li><a className="dropdown-item" href="single-fullwidth.html">Single Fullwidth</a></li>
                                            <li><a className="dropdown-item" href="single-slider.html">Single Gallery</a></li>
                                            <li><a className="dropdown-item" href="single-video.html">Single Video</a></li>
                                            <li><a className="dropdown-item" href="single-audio.html">Single Audio</a></li>
                                            <li><a className="dropdown-item" href="single-no-media.html">Single No Media</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="single.html">Blog Category <span className="hidden-md-down hidden-sm-down hidden-xs-down"><i className="fa fa-angle-right"></i></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="blog-category-01.html">Blog Category A</a></li>
                                            <li><a className="dropdown-item" href="blog-category-02.html">Blog Category B</a></li>
                                            <li><a className="dropdown-item" href="blog-category-03.html">Blog Category C</a></li>
                                            <li><a className="dropdown-item" href="blog-category-04.html">Blog Category D</a></li>
                                            <li><a className="dropdown-item" href="blog-category-05.html">Blog Category E</a></li>
                                            <li><a className="dropdown-item" href="blog-category-06.html">Blog Category F</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="blog-author.html">Blog Author</a></li>
                                    <li><a className="dropdown-item" href="page-contact.html">Contact Page</a></li>
                                    <li><a className="dropdown-item" href="page.html">Default Page</a></li>
                                    <li><a className="dropdown-item" href="page-fullwidth.html">Fullwidth Page</a></li>
                                    <li><a className="dropdown-item" href="page-404.html">Not Found Page</a></li>
                                    <li><a className="dropdown-item" href="page-sitemap.html">Sitemap & Archives</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-pink-hover" href="blog-category-01.html">Fashion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-red-hover" href="blog-category-02.html">Food</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-aqua-hover" href="blog-category-03.html">Lifestyle</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="blog-category-04.html">Travel</a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link color-yellow-hover" href="blog-category-05.html"><i className="fa fa-play-circle-o"></i> Vlogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-grey-hover" href="blog-category-06.html">Health</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                    <div className="left-side">
                        <div className="masonry-box post-media">
                             <img src="upload/blog_masonry_01.jpg" alt="" className="img-fluid"/>
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
                             <img src="upload/blog_masonry_02.jpg" alt="" className="img-fluid"/>
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
                             <img src="upload/blog_masonry_03.jpg" alt="" className="img-fluid"/>
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
                             <img src="upload/blog_masonry_04.jpg" alt="" className="img-fluid"/>
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
                             <img src="upload/blog_masonry_05.jpg" alt="" className="img-fluid"/>
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

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h3 className="color-aqua"><a href="blog-category-01.html" title="">Lifestyle</a></h3>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="blog-box">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_05.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect">
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="blog-meta big-meta">
                                        <h4><a href="single.html" title="">The golden rules you need to know for a positive life</a></h4>
                                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                        <small><a href="blog-category-01.html" title="">Lifestyle</a></small>
                                        <small><a href="single.html" title="">24 July, 2017</a></small>
                                        <small><a href="blog-author.html" title="">by Amanda</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="blog-box">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_06.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect">
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="blog-meta big-meta">
                                        <h4><a href="single.html" title="">I have a desert visit this summer</a></h4>
                                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                        <small><a href="blog-category-01.html" title="">Lifestyle</a></small>
                                        <small><a href="single.html" title="">22 July, 2017</a></small>
                                        <small><a href="blog-author.html" title="">by Martines</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h3 className="color-pink"><a href="blog-category-01.html" title="">Fashion</a></h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="blog-box">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_01.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect">
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="blog-meta">
                                        <h4><a href="single.html" title="">What is your favorite leather jacket color</a></h4>
                                        <small><a href="blog-category-01.html" title="">Fashion</a></small>
                                        <small><a href="blog-category-01.html" title="">21 July, 2017</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="blog-box">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_02.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect">
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="blog-meta">
                                        <h4><a href="single.html" title="">Is summer, have you bought a cane</a></h4>
                                        <small><a href="blog-category-01.html" title="">Fashion</a></small>
                                        <small><a href="blog-category-01.html" title="">11 July, 2017</a></small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="blog-box">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_03.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect">
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="blog-meta">
                                        <h4><a href="single.html" title="">This year's fashionable long beard</a></h4>
                                        <small><a href="blog-category-01.html" title="">Fashion</a>, <a href="blog-category-01.html" title="">Man</a></small>
                                        <small><a href="blog-category-01.html" title="">08 July, 2017</a></small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                <div className="blog-box">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_04.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect">
                                                <span></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="blog-meta">
                                        <h4><a href="single.html" title="">How to be more cool with clothing</a></h4>
                                        <small><a href="blog-category-01.html" title="">Fashion</a>, <a href="blog-category-01.html" title="">Style</a></small>
                                        <small><a href="blog-category-01.html" title="">04 July, 2017</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="invis1"/>

                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="banner-spot clearfix">
                            <div className="banner-img">
                                <img src="upload/banner_01.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="invis1"/>

                <div className="row">
                    <div className="col-lg-9">
                        <div className="blog-list clearfix">
                            <div className="section-title">
                                <h3 className="color-green"><a href="blog-category-01.html" title="">Travel</a></h3>
                            </div>

                            <div className="blog-box row">
                                <div className="col-md-4">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_square_01.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect"></div>
                                        </a>
                                    </div>
                                </div>

                                <div className="blog-meta big-meta col-md-8">
                                    <h4><a href="single.html" title="">5 Beautiful buildings you need to visit without dying</a></h4>
                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                    <small><a href="blog-category-01.html" title="">Travel</a></small>
                                    <small><a href="single.html" title="">21 July, 2017</a></small>
                                    <small><a href="blog-author.html" title="">by Boby</a></small>
                                </div>
                            </div>

                            <hr className="invis"/>

                            <div className="blog-box row">
                                <div className="col-md-4">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_square_02.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect"></div>
                                        </a>
                                    </div>
                                </div>

                                <div className="blog-meta big-meta col-md-8">
                                    <h4><a href="single.html" title="">Let's make an introduction to the glorious world of history</a></h4>
                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                    <small><a href="blog-category-01.html" title="">Travel</a></small>
                                    <small><a href="single.html" title="">20 July, 2017</a></small>
                                    <small><a href="blog-author.html" title="">by Samanta</a></small>
                                </div>
                            </div>

                            <hr className="invis"/>

                            <div className="blog-box row">
                                <div className="col-md-4">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_square_03.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect"></div>
                                        </a>
                                    </div>
                                </div>

                                <div className="blog-meta big-meta col-md-8">
                                    <h4><a href="single.html" title="">Did you see the most beautiful sea in the world?</a></h4>
                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                    <small><a href="blog-category-01.html" title="">Travel</a></small>
                                    <small><a href="single.html" title="">19 July, 2017</a></small>
                                    <small><a href="blog-author.html" title="">by Jackie</a></small>
                                </div>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="blog-list clearfix">
                            <div className="section-title">
                                <h3 className="color-red"><a href="blog-category-01.html" title="">Food</a></h3>
                            </div>

                            <div className="blog-box row">
                                <div className="col-md-4">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_square_05.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect"></div>
                                        </a>
                                    </div>
                                </div>

                                <div className="blog-meta big-meta col-md-8">
                                    <h4><a href="single.html" title="">Banana-chip chocolate cake recipe</a></h4>
                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                    <small><a href="blog-category-01.html" title="">Food</a></small>
                                    <small><a href="single.html" title="">11 July, 2017</a></small>
                                    <small><a href="blog-author.html" title="">by Matilda</a></small>
                                </div>
                            </div>

                            <hr className="invis"/>

                            <div className="blog-box row">
                                <div className="col-md-4">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_square_06.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect"></div>
                                        </a>
                                    </div>
                                </div>

                                <div className="blog-meta big-meta col-md-8">
                                    <h4><a href="single.html" title="">10 practical ways to choose organic vegetables</a></h4>
                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                    <small><a href="blog-category-01.html" title="">Food</a></small>
                                    <small><a href="single.html" title="">10 July, 2017</a></small>
                                    <small><a href="blog-author.html" title="">by Matilda</a></small>
                                </div>
                            </div>

                            <hr className="invis"/>

                            <div className="blog-box row">
                                <div className="col-md-4">
                                    <div className="post-media">
                                        <a href="single.html" title="">
                                            <img src="upload/blog_square_07.jpg" alt="" className="img-fluid"/>
                                            <div className="hovereffect"></div>
                                        </a>
                                    </div>
                                </div>

                                <div className="blog-meta big-meta col-md-8">
                                    <h4><a href="single.html" title="">We are making homemade ravioli</a></h4>
                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                    <small><a href="blog-category-01.html" title="">Food</a></small>
                                    <small><a href="single.html" title="">09 July, 2017</a></small>
                                    <small><a href="blog-author.html" title="">by Matilda</a></small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="section-title">
                            <h3 className="color-yellow"><a href="blog-category-01.html" title="">Vlogs</a></h3>
                        </div>

                        <div className="blog-box">
                            <div className="post-media">
                                <a href="single.html" title="">
                                    <img src="upload/blog_10.jpg" alt="" className="img-fluid"/>
                                    <div className="hovereffect">
                                        <span className="videohover"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="single.html" title="">We are guests of ABC Design Studio - Vlog</a></h4>
                                <small><a href="blog-category-01.html" title="">Videos</a></small>
                                <small><a href="blog-category-01.html" title="">21 July, 2017</a></small>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="blog-box">
                            <div className="post-media">
                                <a href="single.html" title="">
                                    <img src="upload/blog_11.jpg" alt="" className="img-fluid"/>
                                    <div className="hovereffect">
                                        <span className="videohover"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="single.html" title="">Nostalgia at work</a></h4>
                                <small><a href="blog-category-01.html" title="">Videos</a></small>
                                <small><a href="blog-category-01.html" title="">20 July, 2017</a></small>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="blog-box">
                            <div className="post-media">
                                <a href="single.html" title="">
                                    <img src="upload/blog_12.jpg" alt="" className="img-fluid"/>
                                    <div className="hovereffect">
                                        <span className="videohover"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="single.html" title="">How to become a good vlogger</a></h4>
                                <small><a href="blog-category-01.html" title="">Beauty</a></small>
                                <small><a href="blog-category-01.html" title="">20 July, 2017</a></small>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="section-title">
                            <h3 className="color-grey"><a href="blog-category-01.html" title="">Health</a></h3>
                        </div>

                        <div className="blog-box">
                            <div className="post-media">
                                <a href="single.html" title="">
                                    <img src="upload/blog_07.jpg" alt="" className="img-fluid"/>
                                    <div className="hovereffect">
                                        <span></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="single.html" title="">Opened the doors of the Istanbul spa center</a></h4>
                                <small><a href="blog-category-01.html" title="">Spa</a></small>
                                <small><a href="blog-category-01.html" title="">21 July, 2017</a></small>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="blog-box">
                            <div className="post-media">
                                <a href="single.html" title="">
                                    <img src="upload/blog_08.jpg" alt="" className="img-fluid"/>
                                    <div className="hovereffect">
                                        <span></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="single.html" title="">2017 trends in health tourism</a></h4>
                                <small><a href="blog-category-01.html" title="">Health</a></small>
                                <small><a href="blog-category-01.html" title="">20 July, 2017</a></small>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="blog-box">
                            <div className="post-media">
                                <a href="single.html" title="">
                                    <img src="upload/blog_09.jpg" alt="" className="img-fluid"/>
                                    <div className="hovereffect">
                                        <span></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="single.html" title="">Experience the effects of miraculous stones</a></h4>
                                <small><a href="blog-category-01.html" title="">Beauty</a></small>
                                <small><a href="blog-category-01.html" title="">20 July, 2017</a></small>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="invis1"/>

                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="banner-spot clearfix">
                            <div className="banner-img">
                                <img src="upload/banner_02.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Recent Posts</h2>
                            <div className="blog-list-widget">
                                <div className="list-group">
                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src="upload/blog_square_01.jpg" alt="" className="img-fluid float-left"/>
                                            <h5 className="mb-1">5 Beautiful buildings you need to before dying</h5>
                                            <small>12 Jan, 2016</small>
                                        </div>
                                    </a>

                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src="upload/blog_square_02.jpg" alt="" className="img-fluid float-left"/>
                                            <h5 className="mb-1">Let's make an introduction for creative life</h5>
                                            <small>11 Jan, 2016</small>
                                        </div>
                                    </a>

                                    <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 last-item justify-content-between">
                                            <img src="upload/blog_square_03.jpg" alt="" className="img-fluid float-left"/>
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
                                            <img src="upload/blog_square_04.jpg" alt="" className="img-fluid float-left"/>
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
                                            <img src="upload/blog_square_07.jpg" alt="" className="img-fluid float-left"/>
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
                                            <img src="upload/blog_square_06.jpg" alt="" className="img-fluid float-left"/>
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

                <hr className="invis1"/>

                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="widget">
                            <div className="footer-text text-center">
                                <a href="index.html"><img src="images/flogo.png" alt="" className="img-fluid"/></a>
                                <p>Cloapedia is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
                                <div className="social">
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>              
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i className="fa fa-google-plus"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                                </div>

                                <hr className="invis"/>

                                <div className="newsletter-widget text-center">
                                    <form className="form-inline">
                                        <input type="text" className="form-control" placeholder="Enter your email address"/>
                                        <button type="submit" className="btn btn-primary">Subscribe <i className="fa fa-envelope-open-o"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <br/>
                        <div className="copyright">&copy; Cloapedia. Design: <a href="http://html.design">HTML Design</a>.</div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="dmtop">Scroll to Top</div>
        
    </div>

      </>
    );
  };

}


