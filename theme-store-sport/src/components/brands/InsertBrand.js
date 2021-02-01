import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class InsertBrand extends Component {
    constructor(props){
        super(props);
        this.state = {
            name_brand: '',
            description_brand: '',
        };
    }
    isChange = (event) => {
        this.setState({
            name_brand: event.target.value
        })
    }
    render() {
        return (
            <>
                <form ref={this.form}>
                    <div className="form-group name_brand">
                        <label htmlFor="exampleInputEmail1">Tên thương hiệu</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Tên sản phẩm" name="name_product" />
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
                    <button type="reset" onClick="" className="btn btn-primary">Thêm mới</button>
                </form>
            </>
        )
    }
}
