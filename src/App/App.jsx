import React from 'react'
import Transmit from 'react-transmit'
import './App.css'

import AppBar from '../AppBar/AppBar.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import {RouteHandler} from 'react-router'

import Nav, {NavList} from './data/Nav'
import categoryData from '../Category/data/Category'

class App extends React.Component {
    static propTypes = { id: React.PropTypes.string }
    static contextTypes = { router: React.PropTypes.func }
    constructor(props) { super(props)
        var showNavBar = window.innerWidth < 600 ? false:true;

        this.state = {
            showNavBar: showNavBar,
            navList: null
        }
    }
    componentWillMount() {
        if(typeof window !== 'undefined' && window.screen.availWidth > 600) {
            this.setState({ showNavBar: true });
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
        var coverImg = require("./images/cover_small.jpg");
        return (
            <div className="App">
                <NavBar nav_list={ this.state.navList }  
                        handleNavBar={this.handleNavBar.bind(this)}
                        showNavBar={this.state.showNavBar}/>
                <AppBar handleNavBar={this.handleNavBar.bind(this)} />

                <div className="App-cover">
                    
                    <div className="App-intro">
                        <p>在數位化生活的時代，要怎樣利用網路無遠弗屆的特性，創造更多的想像空間？</p>
                        <p>我們希望能完整討論相關問題，進而為每項提案徵集工作小組，形成法規草案。</p>
                        <p>作為公眾參與政策形成與法令訂定過程透明化的一次實驗，各項議題會分四個階段進行。</p>
                    </div>

        
                </div>
                <div className={ this.state.showNavBar? "App-content activeNavBar" : "App-content"} >
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
