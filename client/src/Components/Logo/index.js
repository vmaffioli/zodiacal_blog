import React, { Component } from 'react';

export default class HeaderLogo extends Component {

    render() {
        return (
            <div className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="logo">
                                <a href="index.html"><img src="images/logo.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}