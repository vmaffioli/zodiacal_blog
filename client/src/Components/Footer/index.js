import React, { Component } from 'react';
import Subscribe from '../Subscribe';

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <Subscribe />
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <br />
                            <div className="copyright">&copy; Cloapedia. Design: <a href="http://html.design">HTML Design</a>.</div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}