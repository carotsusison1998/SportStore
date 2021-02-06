import './css/App.css';
import React, { Component } from 'react'
import Login from './components/users/Login';
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
   checkAuth  = () => {
      if(localStorage.getItem("token")){
         return (
                  <Router>
                     { window.location.pathname === '/login' ? null : <Header /> } 
                     {
                        localStorage.getItem("token") && window.location.pathname === '/login' ? window.location.href = "/dashboard" : null 
                     }
                     {
                        localStorage.getItem("token") == null ? window.location.href = "/login" : null 
                     }
                     <RouterLink />
                     <ToastContainer />
                  </Router>
               )
      }else{
         return (<Login />);
      }
   }
   render() {
      return (
         <div className="container">
            {this.checkAuth()}
         </div>
      )
   }
}
