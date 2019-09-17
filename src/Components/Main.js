import React, { Component } from 'react'
import Navbaar from './Navbar/Navbaar'
import {Route} from 'react-router-dom';
import Login from './Login/Login'
class Main extends Component {
    render() {
        return (
            <div>
            {/*Render Different Component based on Route*/}
            <Route path="/" component={Navbaar}/>
            <Route path="/login" component={Login}/>
            {/* <Route path="/home" component={Home}/>
            <Route path="/delete" component={Delete}/>
            <Route path="/create" component={Create}/>  */}
            
        </div>
        )
    }
}

export default Main
