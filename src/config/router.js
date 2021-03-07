import React from 'react'
import Home from '../containers/Home'

import About from '../containers/About'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



  class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
            </Router>
        )
    }
}
export default AppRouter