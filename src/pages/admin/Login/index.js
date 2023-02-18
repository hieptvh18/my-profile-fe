import React, { useState } from "react";
import './style.scss';

const Login = (props)=>{

    const [email,setEmail] = useState([]);
        

    return (
    <div className="animated bounceInDown">
    <div className="container">
        <span className="error animated tada" id="msg"></span>
        <form action="/login/post" method="post" name="form1" className="box">
            <h4>Admin<span>Dashboard</span></h4>
            <h5>Sign in to your account.</h5>
            <input type="text" name="email" placeholder="Email" autoComplete="off"/>
            <i className="typcn typcn-eye" id="eye"></i>
            <input type="password" name="password" placeholder="Passsword" id="pwd" autoComplete="off"/>
            <label>
                <label for="remember" className="rmb">Remember me</label>
                <input type="checkbox" name="rememeber" id="remember"/>
            </label>
            <a href="#" className="forgetpass">Forget Password?</a>
            <input type="submit" value="Sign in" className="btn1 mb-3 mt-3"/>
        </form>
        <a href="#" className="dnthave mt-3">Don’t have an account? Sign up</a>
    </div>
    <div className="footer">
        <span>Made with <i className="fa fa-heart pulse"></i>By Hiep Hoang Tran</span>
    </div>
</div>)
}

export default Login;