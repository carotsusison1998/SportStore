import './css/App.css';
import React, { Component } from 'react'
import RouterLink from './router/RouterLink';
import Header from './components/headers/Header';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {
   render() {
      return (
         <div className="container">
            <Header />
            <RouterLink />
            <ToastContainer />
         </div>
      )
   }
}
