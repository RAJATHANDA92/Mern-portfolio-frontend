import React,{useEffect} from 'react'

const Project = () => {
  useEffect(() => {
    document.title = "Projects";
  }); 
  return (
    <div>
   <h2><b>Projects</b></h2>
   <div className="row">
  <div className="col-sm-12">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">BE-FIT</h5>
        <p className="card-text">Fitness Website</p>
        <p className="card-text">HTML, CSS, NodeJs</p>
      </div>
    </div>
  </div>
  <div className="col-sm-12">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">QuickMart</h5>
        <p className="card-text">E-Commerce Website</p>
        <p className="card-text">Thymleaf, Spring Boot, MySQL</p>
      </div>
    </div>
  </div>
  <div className="col-sm-12">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Portfolio</h5>
        <p className="card-text">React App</p>
        <p className="card-text">React, NodeJs, MongoDB</p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Project