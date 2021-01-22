import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import InsertProduct from '../components/products/InsertProduct';
import ListProduct from '../components/products/ListProduct';

export default class RouterLink extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        
                    </Route>
                    <Route path="/insert-product">
                        <InsertProduct />
                    </Route>
                    <Route path="/list-product">
                        <ListProduct />
                    </Route>
                </Switch>
            </Router> 
        )
    }
}
