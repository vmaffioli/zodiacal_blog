import React, { Component } from 'react';


export default class Title extends Component {

    render() {
        return (
            <div className="page-title wb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h2><i className="fa fa-user-md bg-grey"></i> Health <small className="hidden-xs-down hidden-sm-down">Nulla felis eros, varius sit amet volutpat non. </small></h2>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Blog</a></li>
                                <li className="breadcrumb-item active">Fashion</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}