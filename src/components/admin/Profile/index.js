import React, { useEffect, useState } from "react";
import "./style.scss";
import { getUser } from "../../../api/User";

const Profile = () => {
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState('');

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

  return (
    <section>
      <h2>Profile manage</h2>
      <form method="post" encType="multipart/form-data">
        <div className="mb-3">
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
        </div>
        <div className="mb-3">
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
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone number
          </label>
          <input
          defaultValue={user.phone ?? user.phone}
            type="text"
            name="avatar"
            className="form-control"
            id="phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input type="number" 
          defaultValue={user.age ?? user.age}
          name="age" className="form-control" id="age" />
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
          {
            avatar && (
                <div className="display-avatar">
                    <img
                    src={avatar}
                    alt="Thumb"
                    width={"300px"}
                    />
                    <div className="close-img" onClick={removeSelectedImage}></div>
                </div>
            )
          }
        </div>
        <div className="mb-3">
          <label htmlFor="cv" className="form-label">
            My CV
          </label>
          <input type="file" name="cv" className="form-control" id="cv" />
          <div className="display-cv"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
          <div id="emailHelp" className="form-text">
            You shouldn't share your password with anyone else.
          </div>
        </div>

        <button type="button" className="btn btn-primary">
          Update
        </button>
      </form>
    </section>
  );
};

export default Profile;
