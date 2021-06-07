import React, { Component } from 'react';
import TopBar from '../SearchBar';
import HeaderLogo from '../Logo';
import BottomBar from '../NavBar';

export default class Menu extends Component {

    render() {
        return (
            <>
                <TopBar />
                <HeaderLogo />
                <BottomBar />
            </>
        )
    }
}