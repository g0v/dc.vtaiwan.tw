"use strict"
import React from 'react'
import Transmit from 'react-transmit'
import './App.css'

import AppBar from '../AppBar/AppBar.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import {RouteHandler} from 'react-router'

import categoryData from '../Category/data/Category'

class App extends React.Component {
    static propTypes = { id: React.PropTypes.string }
    static contextTypes = { router: React.PropTypes.func }
    constructor(props) { super(props)
        var showNavBar = true; //window.innerWidth < 600 ? false:true;

        this.state = {
            showNavBar: showNavBar,
            navList: null
        }
    }
    componentWillMount() {
        if(typeof window !== 'undefined' && window.screen.availWidth <= 600) {
            this.setState({ showNavBar: false });
        }
    }
    componentWillReceiveProps(nextProps) {
    }
    handleNavBar () {
        this.setState({ showNavBar: !this.state.showNavBar });
    }
    setNavList(navList) {
        const prevNavList = this.state.navList
        if (JSON.stringify(navList) === JSON.stringify(prevNavList)) { return }
        this.setState({navList, prevNavList})
    }
    render() {
        var {router} = this.context;
        var {proposalName, category} = router.getCurrentParams();
        // var coverImg = require("./images/cover_small.jpg");
        return (
            <div className="App">
                <NavBar nav_list={ this.state.navList }
                        handleNavBar={this.handleNavBar.bind(this)}
                        activePath={router.getCurrentPath()}
                        showNavBar={this.state.showNavBar}/>
                <AppBar handleNavBar={this.handleNavBar.bind(this)} />
                <div className={ this.state.showNavBar ? "App-content activeNavBar" : "App-content"} >
                    <div className="App-wrapper">
                    <RouteHandler setNavList={this.setNavList.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Transmit.createContainer(App, {
    queries: {}
})
