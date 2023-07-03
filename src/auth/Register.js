import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = 
e.target
;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, phone, work, password, cpassword } = user;
    if (name && email && phone && work && password && password === cpassword) {
      
axios.post("http://localhost:5050/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="register">
      {console.log("User", user)}
      <h1>Register</h1>
      
      <input
        type="text"
        name="name"
        value={
user.name
}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={
user.email
}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="number"
        name="phone"
        value={
user.phone
}
        placeholder="Your Phone"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="work"
        value={
user.work
}
        placeholder="Your work"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="cpassword"
        value={user.cpassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
};

export default Register; 