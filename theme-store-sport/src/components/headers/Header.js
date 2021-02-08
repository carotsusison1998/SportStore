import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameLogin: '',
            rule: ''
        };
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            this.setState({
                nameLogin: user.lastName,
                rule: user.rule
            })
        }
    }
    logout = (e) => {
        localStorage.removeItem("token"); 
        localStorage.removeItem("user");
        window.location.href = "/login";
    }
    showMenu = () => {
        if(this.state.rule === 0){
            return (
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/dashboard">Home</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="/">Products<span className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/dashboard/list-product">List</Link></li>
                                    <li><Link to="/dashboard/insert-product">Insert</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="/">Brands<span className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/dashboard/list-brand">List</Link></li>
                                    <li><Link to="/dashboard/insert-brand">Insert</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav user">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="/">{this.state.nameLogin ? this.state.nameLogin : ""}<span className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><button onClick={(e) => this.logout(e)}>Logout</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        }else{
            return (
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/dashboard">Home</Link></li>
                        </ul>
                        <ul className="nav navbar-nav user">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="/">{this.state.nameLogin ? this.state.nameLogin : ""}<span className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><button onClick={(e) => this.logout(e)}>Logout</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
    
    render() {
        return (
            <> 
                {this.showMenu()}
            </>
        )
    }
}
