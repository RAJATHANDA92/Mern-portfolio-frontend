import React from 'react'
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = "About";
      }); 
  return (
    <>
    <h2><b>Skills</b></h2>
    <div className="row">
    <div className="col-12 ">
      <div className="card" style={{width: "25rem"}}>
        <div className="card-body">
          <h5 className="card-title">FrontEnd Technologies</h5>
          <p className="card-text">React.Js, CSS, HTML</p>
          <p className="card-text">JavaScript, Bootstrap</p>
        </div>
      </div>
    </div>
    <div className="col-12">
      <div className="card" style={{width: "25rem"}}>
        <div className="card-body">
          <h5 className="card-title">Backend Technologies</h5>
          <p className="card-text">Java, C++, C#, Spring Boot</p>
          <p className="card-text">JavaScript, NodeJs</p>
        </div>
      </div>
    </div>
    <div className="col-12">
      <div className="card" style={{width: "25rem"}}>
        <div className="card-body">
          <h5 className="card-title">Database Technologies</h5>
          <p className="card-text">Oracle, SQL, MySQL</p>
          <p className="card-text">Pl SQL, MongoDb</p>
        </div>
      </div>
    </div>
  </div> 
  </>
  )
}

export default About