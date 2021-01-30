import React, { Component } from 'react'

export default class InsertBrand extends Component {
    render() {
        return (
            <>
                <form ref={this.form}>
                    <div className="form-group name_product">
                        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                        <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Tên sản phẩm" name="name_product" />
                    </div>
                    <button type="reset" onClick={(event)=>this.onClickAddProduct(event)} className="btn btn-primary">Thêm mới</button>
                </form>
            </>
        )
    }
}
