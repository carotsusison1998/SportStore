import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/#">Home</a></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="/">Products<span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="/list-product">List</a></li>
                                <li><a href="/insert-product">Insert</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="/">Brands<span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="/list-brand">List</a></li>
                                <li><a href="/insert-brand">Insert</a></li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </nav>
            </>
        )
    }
}
