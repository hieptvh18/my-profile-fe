import React, { useState } from "react";
import "./style.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPass, setErrPass] = useState("");

  const clickLogin = ()=>{
    if(email == ''){
        console.log('is required email');
        return;
    }
    //  if(pass == ''){
    //     console.log('is required password');
    //     return
    // }
    window.location.href = '/dashboard';
    alert('login success');
  }

  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value && !checkValidate(e.target.value)) {
      e.target.style = 'border: 1px solid red';
      setErrEmail('Email is not valid!')
    }else if(!e.target.value){
      e.target.style = 'border: none';
      setErrEmail('');
    }
    else{
        setErrEmail('');
        e.target.style = 'border: 1px solid green';
    }
  };

  const checkValidate = (email) => {
    let patternValidateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return patternValidateEmail.test(email);
  };

  const checkValidatePass = (pass)=>{

  }

  return (
    <div className="animated bounceInDown">
      <div className="container">
        <span className="error animated tada" id="msg"></span>
        <form action="/login/post" method="post" name="form1" className="box box-login">
          <h4>
            Admin<span>Dashboard</span>
          </h4>
          <h5>Sign in to your account.</h5>
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            onChange={validateEmail}
            required
          />
           <p className="error error-email text-danger">
            {errEmail ?? errEmail}
          </p>
          <input
            type="password"
            name="password"
            placeholder="Passsword"
            id="pwd"
            autoComplete="off"
            required
          />
         
          <label>
            <label htmlFor="remember" className="rmb">
              Remember me
            </label>
            <input type="checkbox" name="rememeber" id="remember" />
          </label>
          <a href="#" className="forgetpass">
            Forget Password?
          </a>
          <input onClick={clickLogin} type="button" value="Sign in" className="btn1 mb-3 mt-3 btn-login" />
        </form>
        <a href="#" className="dnthave mt-3">
          Don’t have an account? Sign up
        </a>
      </div>
      <div className="footer">
        <span>
          Made with <i className="fa fa-heart pulse"></i>By Hiep Hoang Tran
        </span>
      </div>
    </div>
  );
};

export default Login;
