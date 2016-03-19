"use strict"
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import './AppBar.css'

class AppBar extends React.Component {

    render() {

        var imgURL = require("./images/AppBar-logo.png");
        var toggleIcon = window.innerWidth > 600 ? (
                <span className="fa-stack">
                    <i className="fa fa-bars fa-stack-1x" />
                </span>) : (
                <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className="fa fa-bars fa-stack-1x fa-inverse" />
                </span>);
        return (
            <div className="AppBar">
                <div className="AppBar-navCtrl" onClick={this.props.handleNavBar}>
                    {toggleIcon}
                </div>
                <Link to="/">
                    <div className="AppBar-siteLogo">
                        <img className="AppBar-siteLogoImg"
                             src={imgURL}/>
                        <div className="AppBar-siteLogoText">匯流五法：線上諮詢</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Transmit.createContainer(AppBar, {})
