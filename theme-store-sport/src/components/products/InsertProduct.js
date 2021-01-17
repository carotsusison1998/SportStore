import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios').default;

export default class InsertProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            name_product: '',
            price_product: '',
            sale_product: '',
            quantity_product: '',
            image_product: '',
            description_product: ''
        };
    }
    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    onClickAddProduct = async (event) => {
        event.preventDefault();
        const result = await axios({
            method: 'post',
            url: 'http://localhost:3100/products',
            data: {
                name_product: this.state.name_product,
                price_product: this.state.price_product,
                sale_product: this.state.sale_product,
                quantity_product: this.state.quantity_product,
                image_product: this.state.image_product,
                description_product: this.state.description_product,
            }
        });
        // if(result.data.status = true){
        //     this.notify(result.data.message);
        // }
        console.log(result.data);
    }
    notify = (message) => {
        toast(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Tên sản phẩm" name="name_product" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Giá sản phẩm</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Giá sản phẩm" name="price_product" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Giá sale sản phẩm</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Giá sale sản phẩm" name="sale_product" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Số lượng sản phẩm</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Số lượng sản phẩm" name="quantity_product" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Hình ảnh sản phẩm</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Hình ảnh sản phẩm" name="image_product" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả sản phẩm</label>
                        <textarea onChange={(event)=>this.isChange(event)} className="form-control" name="description_product" id="" rows="3"></textarea>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" onClick={(event)=>this.onClickAddProduct(event)} className="btn btn-primary">Thêm mới</button>
                </form>
            </>
        )
    }
}
