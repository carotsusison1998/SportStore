import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const axios = require('axios').default;

export default class DetailProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            dataImage: []
        };
    }
    getDetailProduct = () => {
        if(this.state.data.length > 0){
            return this.state.data.map((value) => {
                return (
                    <div key={value.id}>
                        <button className="btn btn-warning" onClick={this.props.history.goBack}>Back</button>
                        <h3>{value.name_product}</h3>
                        <p>Giá bán: <NumberFormat value={value.price_product} displayType={'text'} thousandSeparator={true} />VND</p>
                        <p>Giá khuyến mãi: <NumberFormat value={value.sale_product} displayType={'text'} thousandSeparator={true} />VND</p>
                        <p>Số lượng: <NumberFormat value={value.quantity_product} displayType={'text'} thousandSeparator={true} />/sp</p>
                        <img src={"http://localhost:3100/"+value.image_product} />
                        <CKEditor
                            editor={ ClassicEditor }
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                // console.log( 'Editor is ready to use!', editor );
                            } }
                            data={value.description_product}
                        />
                    </div>
                )
            })
        }
    }
    getImageProduct = () => {
        if(this.state.dataImage.length > 0){
            return this.state.dataImage.map((item) => {
                return <img src={"http://localhost:3100/"+item.image} key={item.id}/>
            })
        }
    }
    async componentDidMount() {
        await axios.get('http://localhost:3100/products/'+this.props.match.params.id).then(response => { 
            if(response.data.result){
                this.setState({
                    data: response.data.result
                })
            }
        })
        await axios.get('http://localhost:3100/images/'+this.props.match.params.id).then(response => { 
            if(response.data.result){
                this.setState({
                    dataImage: response.data.result
                })
            }
        })

    }
    
    render() {
        return (
            <>
                {this.getDetailProduct()}
                {this.getImageProduct()}
            </>
        )
    }
}
