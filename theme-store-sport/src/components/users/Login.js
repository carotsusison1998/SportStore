import React, { Component } from 'react';
const {noticeMessage} = require('../../libs/libs');
const axios = require('axios').default;

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    onLogin = (e) => {
        e.preventDefault();
        console.log(e);
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:3100/users/login", data).then((response)=>{
            if(response.status === 200){
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('token', response.data.token);
                window.location.href = '/dashboard'
            }
        }).catch((err)=>{
            noticeMessage(err.response.data.message);
        })
    }
    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <h3>ĐĂNG NHẬP</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" onChange={(event)=>this.isChange(event)} name="email" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" onChange={(event)=>this.isChange(event)} name="password" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>this.onLogin(e)}>Submit</button>
                </form>
            </>
        )
    }
}
