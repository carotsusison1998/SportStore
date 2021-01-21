import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const axios = require('axios').default;

export default class InsertProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            name_product: '',
            price_product: '',
            sale_product: '',
            quantity_product: '',
            image_product: [],
            description_product: ''
        };
        this.form = React.createRef();
    }
    isChange = (event) => {
        $(".msg-error").remove();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    isChangeFile = (event) => {
        const files = [...this.state.image_product];
        files.push(...event.target.files);
        this.setState({
            image_product: files
        });
    }
    onClickAddProduct = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("name_product", this.state.name_product);
        data.append("price_product", this.state.price_product);
        data.append("sale_product", this.state.sale_product);
        data.append("quantity_product", this.state.quantity_product);
        data.append("description_product", this.state.description_product);
        this.state.image_product.forEach((file) => data.append('image_product', file));
        // const progress = {
        //     onUploadProgress: progressEvent => {
        //         this.notify("upload thành công" + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%");
        //     }
        // }
        await axios.post('http://localhost:3100/products', data).then(response => { 
            if(response.data.status === true){
                this.notify(response.data.message);
            }else{
                this.notify("Thêm dữ liệu thất bại");
            }
        }).catch(error => {
            if($("."+error.response.data.error.details[0].context.key).find()){
                $("."+error.response.data.error.details[0].context.key).append("<p class='msg-error'>"+error.response.data.error.details[0].message+"</p>");
            }
        });
        this.form.current.reset();
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
                <form ref={this.form}>
                    <div className="form-group name_product">
                        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Tên sản phẩm" name="name_product" />
                    </div>
                    <div className="form-group price_product">
                        <label htmlFor="exampleInputEmail1">Giá sản phẩm</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Giá sản phẩm" name="price_product" />
                    </div>
                    <div className="form-group sale_product">
                        <label htmlFor="exampleInputEmail1">Giá sale sản phẩm</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Giá sale sản phẩm" name="sale_product" />
                    </div>
                    <div className="form-group quantity_product">
                        <label htmlFor="exampleInputEmail1">Số lượng sản phẩm</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Số lượng sản phẩm" name="quantity_product" />
                    </div>
                    <div className="form-group image_product">
                        <label htmlFor="exampleInputEmail1">Hình ảnh sản phẩm</label>
                        <input type="file" multiple onChange={(event)=>this.isChangeFile(event)} className="form-control" placeholder="Hình ảnh sản phẩm" name="image_product" />
                    </div>
                    <div className="form-group description_product">
                        <label htmlFor="exampleInputEmail1">Mô tả sản phẩm</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                this.setState({
                                    description_product: data
                                })
                            } }
                        />
                    </div>
                    <button type="reset" onClick={(event)=>this.onClickAddProduct(event)} className="btn btn-primary">Thêm mới</button>
                </form>
            </>
        )
    }
}
