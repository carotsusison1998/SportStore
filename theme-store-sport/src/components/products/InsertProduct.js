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
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    isChangeFile = (event) => {
        let image = event.target.files[0];
        this.setState({
            image_product: image
        })
    }
    onClickAddProduct = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("name_product", this.state.name_product);
        data.append("price_product", this.state.price_product);
        data.append("sale_product", this.state.sale_product);
        data.append("quantity_product", this.state.quantity_product);
        data.append("image_product", this.state.image_product);
        data.append("description_product", this.state.description_product);
        const progress = {
            onUploadProgress: progressEvent => {
                this.notify("upload thành công" + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%");
            }
        }
        const result = await axios.post('http://localhost:3100/products', data, progress);
        console.log("result", result);
        if(result.data.status === true){
            this.notify(result.data.message);
        }else{
            this.notify("Thêm dữ liệu thất bại");
        }
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3100/products',
        //     data: data,
        //     headers: {'Content-Type': 'multipart/form-data' },
        //     progress,
        // })
        // .then(function (response) {
        //     //handle success
        //     console.log(response);
        // })
        // .catch(function (response) {
        //     //handle error
        //     console.log(response);
        // });


        // axios.post('http://localhost:3100/products', data, {
        //     headers: {'Content-Type': 'multipart/form-data' }
        // } ).then(res => console.log(res)).catch( error => console.log(error));
        
        // axios.post('http://localhost:3100/products', {
        //     name_product: this.state.name_product,
        //     price_product: this.state.price_product,
        //     sale_product: this.state.sale_product,
        //     quantity_product: this.state.quantity_product,
        //     image_product: this.state.image_product,
        //     description_product: this.state.description_product,
        //   })
        //   .then(response => { 
        //     console.log(response)
        //  })
        //  .catch(error => {
        //    console.log(error.response)
        //  });
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
                        <input type="file" onChange={(event)=>this.isChangeFile(event)} className="form-control" placeholder="Hình ảnh sản phẩm" name="image_product" />
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
