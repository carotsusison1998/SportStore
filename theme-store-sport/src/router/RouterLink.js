import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import InsertProduct from '../components/products/InsertProduct';

export default class RouterLink extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        
                    </Route>
                    <Route path="/products">
                        <InsertProduct />
                    </Route>
                </Switch>
            </Router> 
        )
    }
}
