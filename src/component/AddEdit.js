import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const AddEdit = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const { name, email, contact } = state;

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/get/${id}`)
      .then((resp) => setState({ ...resp.data.data }));
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name | !email | !contact) {
      toast.error("please provide value into each input field");
    } else {
      if (!id) {
        axios
          .post("http://localhost:5050/api/post", state)
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact Added Successfully");
        setTimeout(() => navigate("/"), 10);
      } else {
        axios
          .put(`http://localhost:5050/api/update/${id}`, state)
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact Updated Successfully");
        setTimeout(() => navigate("/"), 10);
      }
    }
  };
  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          value={name || ""}
          onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email ..."
          value={email || ""}
          onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your Contact No ..."
          value={contact || ""}
          onChange={(e) => handleInputChange(e)}
        />
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/userdetails">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;