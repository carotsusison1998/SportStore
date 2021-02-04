import './css/App.css';
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import RouterLink from './router/RouterLink';
import Header from './components/headers/Header';
import { ToastContainer } from 'react-toastify';


export default class App extends Component {
   constructor(props){
      super(props);
      this.state = {
      };  
   }
   render() {
      return (
         <div className="container">
            <Router>
               { window.location.pathname === '/login' ? null : <Header /> }
               <RouterLink />
               <ToastContainer />
            </Router>
          
         </div>
      )
   }
}
