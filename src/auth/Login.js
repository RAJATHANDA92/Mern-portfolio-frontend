import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading,_loading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    _loading(true)
    axios.post("http://localhost:5050/login", user).then((res) => {
      localStorage.setItem("userData",JSON.stringify(res.data.userData))
      alert(res.data.message);
      window.location.reload()
      _loading(false)
    });
  };

  // useEffect(()=>{
  //   navigate("/");
  // },[])

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      {loading?
      <div className="button">
        Please Wait...
      </div>:
      <div className="button" onClick={login}>
        Login
      </div>
      }
      <div>or</div>
      <div className="button" onClick={() => navigate("/singup")}>
        Register
      </div>
    </div>
  );
};

export default Login;
