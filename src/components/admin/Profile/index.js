import React, { useEffect, useState } from "react";
import "./style.scss";
import { getUser } from "../../../api/User";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { updateUser } from "../../../api/User";

const Profile = () => {
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState({name:'',email:''});
  const [message,setMessage] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const users = await getUser();
      setUser(users.data.data);
    };
    getUserData();
  }, []);

  const changeAvatar = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let avatarUrl = URL.createObjectURL(e.target.files[0]);

      setAvatar(avatarUrl);
    }
  };

  const removeSelectedImage = () => {
    setAvatar();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData); // convert arr value to object value

    if(validateForm(formProps)){
      // handle call api update info
      console.log('update infomation');
      
      if(formProps.avatar.size === 0){
        delete formProps.avatar;
      }
      if(formProps.cv.size === 0){
        delete formProps.cv;
      }

      console.log(formProps);

      updateUser(formProps)
      .then(res=>{
        console.log(res)
        setMessage({message:res.data.message,status:res.data.status})
      })
      .catch(err=>{
        console.log(err)
      })
    }
  };

  // validate form input
  const validateForm = (formData) => {
    let flag = true;
    let errMsg = {};
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordPattern = /\w{6,30}/;

    // username
    if (!formData.name) {
      let err = 'Field name is required!';
      errMsg.name = err;
    } else {
      errMsg.name= '';
    }

    // email
    if (!formData.email) {
      errMsg.email = 'Field email is requried!';
    }
    else if(!emailPattern.test(formData.email)){
      errMsg.email = 'Email is invalid!';
    } else {
      errMsg.email = '';
    }

    // age
    let age = parseInt(formData.age);
    if(formData.age && Number.isInteger(age) && age > 0){
      errMsg.age = ''
    }else{
      errMsg.age = 'Age is invalid!';
    }

    // phone
    let phonePattern = /\d{10,15}$/
    if (!formData.phone) {
      errMsg.phone = 'Field phone is requried!';
    }
    else if(!phonePattern.test(formData.phone)){
      errMsg.phone = 'Phone is invalid!';
    }
    else {
      errMsg.phone = '';
    }

    // password
    // if (!formData.password) {
    //   errMsg.password = 'Field password is requried!';
    // }
    // else if(!passwordPattern.test(formData.password)){
    //   errMsg.password = 'Password is invalid(6-30 character)!';
    // } else {
    //   errMsg.password = '';
    // }

    // avatar
    let exImg = ['image/jpg','image/png','image/jpeg'];
    let maxFileSize = 1024 * 1024 * 3; // 3mb-> bytes
    if(formData.avatar.size > 0 && !exImg.includes(formData.avatar.type)){
      errMsg.avatar = 'avatar is should be png,jpg,jpeg file!';
    }
    else if(formData.avatar.size > 0 && formData.avatar.size >= maxFileSize){
      errMsg.avatar = 'Avatar size should be < 2mb';
    }
    else{
      errMsg.avatar = '';
    }

    // cv
    if(formData.cv.size > 0 && formData.cv.type !== 'application/pdf'){
      errMsg.cv = 'CV is should be PDF file!';
    }
    else if(formData.cv.size > 0 && formData.cv.size >= maxFileSize){
      errMsg.cv = 'CV size should be < 2mb';
    }
    else{
      errMsg.cv = '';
    }

    setErrors(errMsg);
    // check error -> set flag
    if(checkObjValue(errMsg)){
      flag = false;
    }

    return flag;
  };

  const checkObjValue = (obj) =>{
    let valueMsgErr = Object.values(obj);
    let arrMsgFilter = valueMsgErr.filter(val => val !== '');
    return arrMsgFilter.length;
  }

  // upload file to cloundainary->get link cdn
  const uploadFileCnd = (file)=>{

  }

  const MessageElemnts = ()=>{

    let el = '';

    if(message.status && message.status === 'success'){
      el = <div className="alert alert-success">{message.message}</div>
    }else if(message.status && message.status === 'error'){
      el = <div className="alert alert-danger">{message.message}</div>
    }
    
    return (
      <div>{el}</div>
    )
  };

  return (
    <section style={{ backgroundColor: "#fff", padding: "10px" }}>
      <h2>Profile manage</h2>

      {message.status && <MessageElemnts/>}
    
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div className="form-group row">
          <div className="mb-3 col-6">
            <label htmlFor="name" className="form-label">
              Full name
            </label>
            <input
              type="text"
              defaultValue={user.name ?? user.name}
              name="name"
              className="form-control"
              id="name"
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              defaultValue={user.email}
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>
        </div>
        
        <div className="form-group row">
          <div className="mb-3 col-6">
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <input
              defaultValue={user.phone ?? user.phone}
              type="text"
              name="phone"
              className="form-control"
              id="phone"
            />
              {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              defaultValue={user.age ?? user.age}
              name="age"
              className="form-control"
              id="age"
            />
              {errors.age && <small className="text-danger">{errors.age}</small>}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea className="form-control" name="address">
            {user.address ?? user.address}
          </textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">
            Avatar
          </label>
          <input
            type="file"
            onChange={changeAvatar}
            name="avatar"
            className="form-control"
            id="avatar"
          />
          {errors.avatar && <small className="text-danger">{errors.avatar}</small>}
          {avatar && (
            <div className="display-avatar">
              <img src={avatar} alt="Thumb" width={"300px"} />
              <div className="close-img" onClick={removeSelectedImage}></div>
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="cv" className="form-label">
            My CV
          </label>
          <input type="file" name="cv" className="form-control" id="cv" />
          {errors.cv && <small className="text-danger">{errors.cv}</small>}
          <div className="display-cv"></div>
        </div>
        {/* <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            defaultValue={user.password ?? user.password}
          />
          {errors.password && <small className="text-danger">{errors.password}</small>}
          <div id="emailHelp" className="form-text">
            You shouldn't share your password with anyone else.
          </div>
        </div> */}

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </section>
  );
};

export default Profile;
