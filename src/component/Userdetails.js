import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Userdetails.css";
import { toast } from "react-toastify";

const Userdetails = () => {
  useEffect(() => {
    document.title = "Userdetails";
  });
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5050/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);


  const deleteContact = (id) => {
    if(window.confirm("Are you sure?")){
      axios.delete(`http://localhost:5050/api/remove/${id}`);
      toast.success("Contact Delete Successfully!");
      setTimeout(() => loadData(), 500);
    
    }
  };


  return (
    <div style={{ marginTop: "15px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/update/${item._id}`}>
                    <button className="btn-edit">Edit</button>
                  </Link>&nbsp;
                  <Link>
                    <button className="btn-delete" onClick= {() => deleteContact(item._id)}>Delete</button>
                  </Link>&nbsp;
                  <Link to={`/view/${item._id}`}>
                    <button className="btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Userdetails;