import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
const axios = require('axios').default;
const libs = require("../../libs/libs");

export default class ShowProduct extends Component {
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
                return  <div className="col-sm-3 card">
                            <img src={"http://localhost:3100/"+value.image_product} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{libs.limitText(value.name_product, 8)}</h5>
                                <p className="card-text"><NumberFormat value={value.price_product} displayType={'text'} thousandSeparator={true} /> VND</p>
                                <a href="#" className="btn btn-primary">Thêm giỏ hàng</a>
                            </div>
                        </div>
            })
        }
    }
    render() {
        return (
            <div className="row">
                {this.showData()}
            </div>
        )
    }
}
