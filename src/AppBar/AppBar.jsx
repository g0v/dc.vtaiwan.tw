"use strict"
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import {Site} from '../SUMMARY.json'
import './AppBar.css'

const imgURL = require("./images/AppBar-logo.png");

class AppBar extends React.Component {

    render() {
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
                        <div className="AppBar-siteLogoText">{Site.title}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Transmit.createContainer(AppBar, {})
