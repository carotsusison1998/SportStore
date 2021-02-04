import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
const {noticeMessage} = require('../../libs/libs');


export default class InsertBrand extends Component {
    constructor(props){
        super(props);
        this.state = {
            name_brand: '',
            description_brand: '',
        };
        this.form = React.createRef();
    }
    isChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name] : value
        })
    }
    onClickAddBrand = (e) => {
        e.preventDefault();
        const data = {
            name_brand: this.state.name_brand,
            description_brand: this.state.description_brand
        }
        axios.post("http://localhost:3100/brands", data)
        .then((response) => {
            if(response.data.status === true){
                noticeMessage(response.data.message);
                this.form.current.reset();
            }
        }).catch((err) => {
            noticeMessage(err.response.data.message);
        })
    }
    render() {
        return (
            <>
                <form ref={this.form}>
                    <div className="form-group name_brand">
                        <label htmlFor="exampleInputEmail1">Tên thương hiệu</label>
                        <input type="text" onChange={(e)=>this.isChange(e)} className="form-control" placeholder="Tên sản phẩm" name="name_brand" />
                    </div>
                    <div className="form-group description_brand">
                        <label htmlFor="exampleInputEmail1">Mô tả thương hiệu</label>
                        <CKEditor
                            editor={ ClassicEditor }
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                // console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                this.setState({
                                    description_brand: data
                                })
                            } }
                        />
                    </div>
                    <button type="reset" onClick={(e) => this.onClickAddBrand(e)} className="btn btn-primary">Thêm mới</button>
                </form>
            </>
        )
    }
}
