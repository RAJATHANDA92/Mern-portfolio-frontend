import React from 'react'
import './Home.css'
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function Home({ name, titel }) {
    useEffect(() => {
        document.title = "HomePage";
      },[]); 
    // const notify = () => toast.success(<>{titel}</>, {position:"top-center"});
  return (
    <div className='text-center'>
     <div class="jumbotron m-3">
  <h1 class="display-4"> {name} </h1>
  <p class="lead"><b>Full Stack Developer</b></p>
  <hr class="my-4" />
  <p>This is M-E-R-N Project Devloped by Me using React as frontend and Express as backend and MongoDb as DataBase and NodeJs as javaScript Web Server</p>
  <Link type="button" className='btn btn-primary' to="/learnmore" >Learn More</Link>
          <ToastContainer/>
</div>
</div>
  )
}

export default Home
