import React, { useState } from "react";
import "./sighup.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const api_key = process.env.REACT_APP_API_KEY_BE;
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const loginHandle = async (e) => {
    e.preventDefault();
    const { email, password } = inputData;
    const data = { email, password };
    const res = await (
      await fetch(api_key + `/users/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
    ).json();
    if (res.success) {
      alert(res.message);
      setInputData({
        email: "",
        password: "",
      });
      navigate("/artikel/admin");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
    } 
    if (inputData.email === "") {
      return alert("Email cannot be empty");
    } 
    if (inputData.password === "") {
      return alert("Password cannot be empty");
    } 
    if (res.message == null) {
      alert("Wrong Password");
      console.log(res);
    } 
    else {
      alert(res.message);
      console.log(res);
    }
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  return (
    <div className="bacground_login">
      <div className="col-lg-4">
        <div className="container page_login">
          <h3>Login</h3>
          <input
            type="email"
            placeholder="email"
            value={inputData.email}
            name="email"
            onChange={onChangeHandler}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={inputData.password}
            name="password"
            onChange={onChangeHandler}
            required
          />
          <button onClick={loginHandle} className="btn btn-primary">
            Login
          </button>
          <p>Warning........!</p>
          <p>Semua inputan dan phhoto wajib diisi</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
