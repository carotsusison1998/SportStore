import React, { Component } from 'react';
import $ from 'jquery';
const {limitText, noticeMessage} = require('../../libs/libs');
const axios = require('axios').default;

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            status: false
        };
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    isChangeRegister = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    onLogin = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:3100/users/login", data).then((response)=>{
            if(response.status === 200){
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('rule', response.data.user.rule);
                window.location.href = '/dashboard'
            }
        }).catch((err)=>{
            if(err.response.data.message === "ERROR VALIDATES"){
                if(err.response.status === 400){
                    if($("."+err.response.data.result.details[0].context.key).find()){
                        if($(".msg-error").find()){
                            $(".msg-error").remove();
                        }
                        $("."+err.response.data.result.details[0].context.key).append("<p class='msg-error'>"+err.response.data.result.details[0].message+"</p>");
                    }
                }
            }else{
                noticeMessage(err.response.data.message);
            }
        })
    }
    onRegister = (e) => {
        e.preventDefault();
        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:3100/users/register", data).then((response)=>{
            if(response.status === 200){
                noticeMessage(response.data.message);
            }
        }).catch((err)=>{
            if(err.response.data.message === "ERROR VALIDATES"){
                if(err.response.status === 400){
                    if($("."+err.response.data.result.details[0].context.key).find()){
                        if($(".msg-error").find()){
                            $(".msg-error").remove();
                        }
                        $("."+err.response.data.result.details[0].context.key).append("<p class='msg-error'>"+err.response.data.result.details[0].message+"</p>");
                    }
                }
            }else{
                noticeMessage(err.response.data.message);
            }
        })
    }
    showForm = () => {
        if(this.state.status === false){
            return (
                <form>
                    <div className="form-group">
                        <h3>ĐĂNG NHẬP</h3>
                    </div>
                    <div className="form-group email">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" onChange={(event)=>this.isChange(event)} name="email" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group password">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" onChange={(event)=>this.isChange(event)} name="password" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <a href="/#" className="register-link" onClick={(e) => this.checkForm()}>Đăng Ký</a>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>this.onLogin(e)}>Đăng Nhập</button>
                </form>
            )
        }else{
            return (
                <form>
                    <div className="form-group">
                        <h3>ĐĂNG KÝ</h3>
                    </div>
                    <div className="form-group first_name">
                        <label htmlFor="exampleInputEmail1">Họ</label>
                        <input type="text" className="form-control" onChange={(event)=>this.isChangeRegister(event)} name="first_name" placeholder="Họ" />
                    </div>
                    <div className="form-group last_name">
                        <label htmlFor="exampleInputEmail1">Tên</label>
                        <input type="text" className="form-control" onChange={(event)=>this.isChangeRegister(event)} name="last_name" placeholder="Tên" />
                    </div>
                    <div className="form-group email">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" onChange={(event)=>this.isChangeRegister(event)} name="email" placeholder="Email" />
                    </div>
                    <div className="form-group password">
                        <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                        <input type="password" className="form-control" onChange={(event)=>this.isChangeRegister(event)} name="password" placeholder="Mật khẩu" />
                    </div>
                    <div className="form-group form-check">
                        <a href="/#" className="register-link" onClick={(e) => this.checkForm()}>Đăng Nhập</a>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>this.onRegister(e)}>Đăng Ký</button>
                </form>
            )
        }
    }
    checkForm = async () => {
        this.setState({
            status : !this.state.status
        })
    }
    render() {
        return (
            <>
                {this.showForm()}
            </>
        )
    }
}
