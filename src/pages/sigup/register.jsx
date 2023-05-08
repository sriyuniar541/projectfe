import React, { useState } from "react";
import "./sighup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const api_key = process.env.REACT_APP_API_KEY_BE;
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    fullname: "",
    adress: "",
    gender: "",
    phoneNumber: "",
    role: "",
  });
  const [photo, setPhoto] = useState(null);

  const registerHandling = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);
    formData.append("fullname", inputData.fullname);
    formData.append("adress", inputData.adress);
    formData.append("gender", inputData.gender);
    formData.append("phonenumber", inputData.phoneNumber);
    formData.append("role", inputData.role);
    formData.append("photo", photo);
    
    axios
      .post(api_key + `/users/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Register sukses");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err, "post data fail");
        alert(err.response.data.data );
      });
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <div className="bacground_register">
      <div className="col-lg-4">
        <div className="container page_register">
          <h3>Register</h3>
          <input
            type="file"
            placeholder="photo"
            className="input_photo"
            onChange={handlePhoto}
            required
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={inputData.email}
            onChange={onChangeHandler}
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={inputData.password}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="fullname"
            name="fullname"
            value={inputData.fullname}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="adress"
            name="adress"
            value={inputData.adress}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="gender"
            name="gender"
            value={inputData.gender}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={inputData.phoneNumber}
            onChange={onChangeHandler}
            required
          />
          <input
            type="select"
            placeholder="Role"
            value={inputData.role}
            name="role"
            onChange={onChangeHandler}
            required
          />
          <button onClick={registerHandling} className="btn btn-primary">
            Register
          </button>
          <p>Warning........!</p>
          <p>Semua inputan dan phhoto wajib diisi</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
