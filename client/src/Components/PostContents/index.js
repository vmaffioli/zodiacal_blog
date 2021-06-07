import React, { Component } from 'react';
import SideBar from '../SideBar';

export default class PostContents extends Component {

    render() {
        return (
            <>
                <section className="section wb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <div className="page-wrapper">
                                    <div className="blog-title-area">
                                        <ol className="breadcrumb hidden-xs-down">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">Blog</a></li>
                                            <li className="breadcrumb-item active">Opened the doors of the Istanbul spa center</li>
                                        </ol>

                                        <span className="color-grey"><a href="blog-category-01.html" title="">Health</a></span>

                                        <h3>Opened the doors of the Istanbul spa center</h3>

                                        <div className="blog-meta big-meta">
                                            <small><a href="single.html" title="">21 July, 2017</a></small>
                                            <small><a href="blog-author.html" title="">by Jessica</a></small>
                                            <small><a href="#" title=""><i className="fa fa-eye"></i> 2344</a></small>
                                        </div>

                                        <div className="post-sharing">
                                            <ul className="list-inline">
                                                <li><a href="#" className="fb-button btn btn-primary"><i className="fa fa-facebook"></i> <span className="down-mobile">Share on Facebook</span></a></li>
                                                <li><a href="#" className="tw-button btn btn-primary"><i className="fa fa-twitter"></i> <span className="down-mobile">Tweet on Twitter</span></a></li>
                                                <li><a href="#" className="gp-button btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="single-post-media">
                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <img className="d-block img-fluid" src="upload/blog_07.jpg" alt="First slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block img-fluid" src="upload/blog_08.jpg" alt="Second slide" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block img-fluid" src="upload/blog_09.jpg" alt="Third slide" />
                                                </div>
                                            </div>
                                            <ol className="carousel-indicators">
                                                <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                                                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                                                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                                            </ol>
                                        </div>
                                    </div>

                                    <div className="blog-content">
                                        <div className="pp">
                                            <p>In lobortis pharetra mattis. Morbi nec nibh iaculis, <a href="#">bibendum augue a</a>, ultrices nulla. Nunc velit ante, lacinia id tincidunt eget, faucibus nec nisl. In mauris purus, bibendum et gravida dignissim, venenatis commodo lacus. Duis consectetur quis nisi nec accumsan. Pellentesque enim velit, ut tempor turpis. Mauris felis neque, egestas in lobortis et,iaculis at nunc ac, rhoncus sagittis ipsum. </p>

                                            <h3><strong>Maecenas non convallis quam, eu sodales justo. Pellentesque quis lectus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></h3>

                                            <p>Donec nec metus sed leo sollicitudin ornare sed consequat neque. Aliquam iaculis neque quis dui venenatis, eget posuere felis viverra. Ut sit amet feugiat elit, nec elementum velit. Sed eu nisl convallis, efficitur turpis eu, euismod nunc. Proin neque enim, malesuada non lobortis nec, facilisis et lectus. Ie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere. </p>

                                            <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>

                                        </div>

                                        <img src="upload/blog_11.jpg" alt="" className="img-fluid img-fullwidth" />

                                        <div className="pp">
                                            <h3><strong>Nam non velit est. Sed lobortis arcu vitae nunc molestie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere. </strong></h3>

                                            <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>

                                            <p>Morbi pharetra porta consequat. Aenean et diam sapien. <a href="#">Interdum et malesuada</a> fames ac ante ipsum primis in faucibus. Pellentesque dictum ligula iaculis, feugiat metus eu, sollicitudin ex. Quisque eu ullamcorper ligula. In vel ex ac purus finibus viverra. Maecenas pretium lobortis turpis. Fusce lacinia nisi in tortor massa nunc.</p>

                                            <ul className="check">
                                                <li>Integer sit amet odio ac lectus imperdiet elementum.</li>
                                                <li>Praesent vitae lacus sed lacus ullamcorper mollis.</li>
                                                <li>Donec vitae metus ac felis vulputate tincidunt non et ex.</li>
                                                <li>In dapibus sapien at viverra venenatis.</li>
                                                <li>Pellentesque mollis velit id maximus finibus.</li>
                                            </ul>

                                            <p>Proin ultricies nulla consectetur, sollicitudin dolor at, sollicitudin mauris. Maecenas at nunc nunc. Ut nulla felis, tincidunt et porttitor at, rutrum in dolor. Aenean id tincidunt ligula. Donec vitae placerat odio. Mauris accumsan nibh ut nunc maximus, ac auctor elit vehicula. Cras leo sem, vehicula a ultricies ac, condimentum vitae lectus. Sed ut eros euismod, luctus nisl eu, congue odio. </p>

                                            <p><img src="upload/blog_01.jpg" className="float-left" width="340" alt="" />Suspendisse ultrices placerat dolor sed efficitur. Morbi in laoreet diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut massa id lectus laoreet porta non in metus. Donec nibh justo, tincidunt non justo ut, tincidunt malesuada turpis. Cras pellentesque sollicitudin ex eget pharetra.</p>

                                            <h3><strong>Nam non velit est. Sed lobortis arcu vitae nunc molestie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere. </strong></h3>


                                            <p>Aliquam eget maximus odio. Aliquam varius nisl ut leo fermentum, id fringilla magna tempus. Curabitur quis bibendum lorem, ut suscipit tellus. Morbi id dictum justo, et massa nunc. Mauris laoreet, neque et varius malesuada, justo neque consequat dolor, sit amet semper dui ligula commodo enim. Duis mauris magna, euismod in ante sed, laoreet faucibus elit. Nam euismod vulputate lorem, nec tincidunt lacus volutpat sit amet. In libero eros, dignissim vitae quam sed, maximus consectetur justo. Donec id orci eget odio convallis pellentesque. Quisque urna cras amet.Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>

                                            <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>
                                        </div>
                                    </div>

                                    <div className="blog-title-area">
                                        <div className="tag-cloud-single">
                                            <span>Tags</span>
                                            <small><a href="#" title="">lifestyle</a></small>
                                            <small><a href="#" title="">colorful</a></small>
                                            <small><a href="#" title="">trending</a></small>
                                            <small><a href="#" title="">another tag</a></small>
                                        </div>

                                        <div className="post-sharing">
                                            <ul className="list-inline">
                                                <li><a href="#" className="fb-button btn btn-primary"><i className="fa fa-facebook"></i> <span className="down-mobile">Share on Facebook</span></a></li>
                                                <li><a href="#" className="tw-button btn btn-primary"><i className="fa fa-twitter"></i> <span className="down-mobile">Tweet on Twitter</span></a></li>
                                                <li><a href="#" className="gp-button btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>



                                    <hr className="invis1" />

                                    <div className="custombox prevnextpost clearfix">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="blog-list-widget">
                                                    <div className="list-group">
                                                        <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                                            <div className="w-100 justify-content-between text-right">
                                                                <img src="upload/blog_square_02.jpg" alt="" className="img-fluid float-right" />
                                                                <h5 className="mb-1">5 Beautiful buildings you need to before dying</h5>
                                                                <small>Prev Post</small>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="blog-list-widget">
                                                    <div className="list-group">
                                                        <a href="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                                            <div className="w-100 justify-content-between">
                                                                <img src="upload/blog_square_03.jpg" alt="" className="img-fluid float-left" />
                                                                <h5 className="mb-1">Let's make an introduction to the glorious world of history</h5>
                                                                <small>Next Post</small>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="invis1" />



                                </div>
                            </div >

                        <SideBar />
                        </div>
                    </div>
                </section>

            </>
        )
    }
}