import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import InsertBrand from '../components/brands/InsertBrand';
import InsertProduct from '../components/products/InsertProduct';
import ListProduct from '../components/products/ListProduct';
import Login from '../components/users/Login';

export default class RouterLink extends Component {
    render() {
        return (
           
            <Switch>
                <Route exact path="/dashboard">
                    
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/dashboard/insert-product">
                    <InsertProduct />
                </Route>
                <Route path="/dashboard/list-product">
                    <ListProduct />
                </Route>
                <Route path="/dashboard/insert-brand">
                    <InsertBrand />
                </Route>
            </Switch>
        )
    }
}
