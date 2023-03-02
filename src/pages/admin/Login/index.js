import React, { useState } from "react";
import "./style.scss";
import { authLogin } from "../../../api/User";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPass, setErrPass] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    if (email === "" || pass === '') {
      setErrEmail('Email is required!');
      setErrPass('Password is required!');
      return;
    }
    // re check authen from api
    const loginData = {
      email:email,
      password: pass
    }
    
    authLogin(JSON.stringify(loginData))
    .then(response=>{
      console.log(response)
      // window.location.href = "admin/dashboard";
      alert("login success");
    })
    .catch(err=>{
      console.log(err);
    })
  };

  // save info email to cookie
  const checkRemember = (e)=>{
    
  }

  const validate = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      if (e.target.value && !checkValidate(e.target.value)) {
        e.target.style = "border: 1px solid red";
        setErrEmail("Email is not valid!");
      } else if (!e.target.value) {
        e.target.style = "border: none";
        setErrEmail("");
      } else {
        setEmail(e.target.value);
        setErrEmail("");
        e.target.style = "border: 1px solid green";
      }
    }else{
      if(e.target.value && !checkValidatePass(e.target.value)){
        e.target.style = "border: 1px solid red";
        setErrPass("Password must be at least 6 letters long!");
      }else if (!e.target.value) {
        e.target.style = "border: none";
        setErrPass("");
      } else {
        setPass(e.target.value);
        setErrPass("");
        e.target.style = "border: 1px solid green";
      }
    }
  };

  const checkValidate = (email) => {
    let patternValidateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return patternValidateEmail.test(email);
  };

  const checkValidatePass = (pass) => {
    let parttern = /\w{6,30}/;
    return parttern.test(pass);
  };

  return (
    <div className="animated bounceInDown">
      <div className="container">
        <span className="error animated tada" id="msg"></span>
        <form
          onSubmit={onLogin}
          method="post"
          name="form1"
          className="box box-login"
        >
          <h4>
            Admin<span>Dashboard</span>
          </h4>
          <h5>Sign in to your account.</h5>
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            onChange={validate}
          />
          <p className="error error-email text-danger">
            {errEmail ?? errEmail}
          </p>
          <input
            onChange={validate}
            type="password"
            name="password"
            placeholder="Passsword"
            id="pwd"
            autoComplete="off"
          />
          <p className="error error-email text-danger">
            {errPass ?? errPass}
          </p>

          <label>
            <label htmlFor="remember" className="rmb">
              Remember me
            </label>
            <input type="checkbox" name="rememeber" id="remember" />
          </label>
          <a href="#" className="forgetpass">
            Forget Password?
          </a>
          <input
            type="submit"
            value="Sign in"
            className="btn1 mb-3 mt-3 btn-login"
          />
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
