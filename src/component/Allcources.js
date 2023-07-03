import React from 'react'
import Cource from './Cource'
import { useState } from 'react';
import { useEffect } from 'react';


const Allcources = () => {
    useEffect(() => {
        document.title = "Technologies";
      });  
    const [cource, setCources] = useState([
        {
            name:<h5>React</h5>, titel:"Java Script Librery",  discription:"It is used for Frontend"
        },
        {
             name:<h5>ExpressJs</h5>, titel:"NodeJs FrameWork",  discription:"It is used for Backend" 
        },
        { 
            name:<h5>MongoDb</h5>, titel:"DataBase",  discription:"It is used to Store and Retrive data" 
         }
  
    ]);
    return (
        <div>
         
          <h1>Technologies</h1>
          <p>List of Technologies Used in this project are as follows</p>
          {cource.length > 0
            ? 
    cource.map
    ((item) => <Cource cource={item} />)
            : "No courses"}
        </div>
    );
}

export default Allcources