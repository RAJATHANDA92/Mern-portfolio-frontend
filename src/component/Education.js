import React,{useEffect} from 'react'

const Education = () => {
  useEffect(() => {
    document.title = "Education";
  }); 
  return (
    <div className="main">
   <div>
    <h2><b>Education</b></h2>
   <div className="row">
  <div className="col-6">
    <div className="card" style={{width: "23rem"}}>
      <div className="card-body">
        <h5 className="card-title">Post Graduation Diploma in Advance Computing</h5>
        <p className="card-text">March 2022 To Sep 2022</p>
        <p className="card-text">Completed With 65.8% Marks</p>
      </div>
    </div>
  </div>
  <div className="col-6">
    <div className="card" style={{width: "23rem"}}>
      <div className="card-body">
        <h5 className="card-title">B.Tech</h5>
        <p className="card-text">July 2014 To Jun 2018</p>
        <p className="card-text">Completed With 65.8% Marks</p>
      </div>
    </div>
  </div>
</div>
</div>
<br/>
   <div>
   <div className="row">
  <div className="col-6">
    <div className="card" style={{width: "23rem"}}>
      <div className="card-body">
        <h5 className="card-title">Intermediate</h5>
        <p className="card-text">July 2011 To Jun 2012</p>
        <p className="card-text">Completed With 55% Marks</p>
      </div>
    </div>
  </div>
  <div className="col-6">
    <div className="card" style={{width: "23rem"}}>
      <div className="card-body">
        <h5 className="card-title">High School</h5>
        <p className="card-text">July 2009 To Jun 2010</p>
        <p className="card-text">Completed With 58.3% Marks</p>
      </div>
    </div>
  </div>
</div> 
</div>
</div>

  )
}

export default Education