import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class ColorController extends Component {

    render() {

        return <Button onClick={this.props.changePageColor}>
                    Change Color
                </Button>

    };

}