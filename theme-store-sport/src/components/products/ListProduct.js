import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
const axios = require('axios').default;
const limitText = require("../../libs/libs");

export default class ListProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    async componentDidMount() {
        await axios.get('http://localhost:3100/products').then(response => { 
            if(response.data.result){
                this.setState({
                    data: response.data.result
                })
            }
        })
    }
    showData = () => {
        if(this.state.data.length > 0){
            let i = 1;
            return this.state.data.map((value, key) => {
                return  <tr key={value.id}>
                            <td>{i++}</td>
                            <td><img src={"http://localhost:3100/"+value.image_product} /></td>
                            <td>{limitText.limitText(value.name_product, 8)}</td>
                            <td><NumberFormat value={value.price_product} displayType={'text'} thousandSeparator={true} /></td>
                            <td><NumberFormat value={value.sale_product} displayType={'text'} thousandSeparator={true} /></td>
                            <td><NumberFormat value={value.quantity_product} displayType={'text'} thousandSeparator={true} /></td>
                            <td>
                                <button className="btn btn-primary">Sửa</button>
                                <button className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
            })
        }
    }
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Sale</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showData()}
                </tbody>
            </table>
        )
    }
}
