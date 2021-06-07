import React, { Component } from 'react';

export default class BottomBar extends Component {

    render() {
        return (
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
                                                                            <img src="upload/menu_01.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_02.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_03.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_04.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_05.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_06.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_07.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_08.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_09.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_11.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_12.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_13.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_14.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_15.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_16.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_17.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_18.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_19.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_20.jpg" alt="" className="img-fluid" />
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
                                                                            <img src="upload/menu_21.jpg" alt="" className="img-fluid" />
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
        )
    }
}