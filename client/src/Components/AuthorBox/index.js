import React, { Component } from 'react';

export default class AuthorBox extends Component {

    render() {
        return (
            <div className="custombox authorbox clearfix">
                <h4 className="small-title">About author</h4>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                        <img src="upload/author.jpg" alt="" className="img-fluid rounded-circle" />
                    </div>

                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                        <h4><a href="#">Jessica</a></h4>
                        <p>Quisque sed tristique felis. Lorem <a href="#">visit my website</a> amet, consectetur adipiscing elit. Phasellus quis mi auctor, tincidunt nisl eget, finibus odio. Duis tempus elit quis risus congue feugiat. Thanks for stop Cloapedia!</p>

                        <div className="topsocial">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fa fa-youtube"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Website"><i className="fa fa-link"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}