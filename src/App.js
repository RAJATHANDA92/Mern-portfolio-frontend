import './App.css';
import Allcources from './component/Allcources';
import { Container, Row, Col } from 'reactstrap';
import Menu1 from './component/Menu1';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; 
import About from './component/About';
import ContactUs from './component/ContactUs';
import AddCourse from './component/AddCource';
import Nav from './component/Nav';
import Userdetails from './component/Userdetails';
import AddEdit from './component/AddEdit';
import { ProSidebarProvider } from 'react-pro-sidebar';
import View from './component/View';
import Login from './auth/Login';
import Register from './auth/Register';
import Education from './component/Education';
import Project from './component/Project';
import LearnMore from './component/LearnMore';
import { useState } from 'react';
import Experience from './component/Experience';

function App() {

  const [data,_data] = useState(JSON.parse(localStorage.getItem('userData')))



  return (
    <div >
      <Router>
        <Nav />
       <br />
       <Container>
        <Row>
          <Col md={3}>
            <ProSidebarProvider>
            {data!==null&&data!==undefined&&data!==''?
            <Menu1 />
            :""}
            </ProSidebarProvider>             
          </Col>
          <Col md={9}>
          <Routes>
          {data!==null&&data!==undefined&&data!==''?
          <>
            <Route
              path="/"
              element={
                <Home name="Rajat Handa" title="Full Stack Developer" />
              }
              exact
            />

            <Route path="/add-course" element={<AddCourse />} exact />
            <Route path="/view-courses" element={<Allcources />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/contact-us" element={<ContactUs />} exact />
            <Route path="/userdetails" element={<Userdetails />} exact />
            <Route path="/addcontact" element={<AddEdit/>} exact />
            <Route path="/update/:id" element={<AddEdit/>} exact />
            <Route path="/view/:id" element={<View/>} exact />
            <Route path="/education" element={<Education/>} exact />
            <Route path="/experience" element={<Experience/>} exact />
            <Route path="/projects" element={<Project/>} exact />
            <Route path="/learnmore" element={<LearnMore/>} exact />
            <Route path="*" element={ <Navigate to="/" /> } />

          </>
          :
          <>
            <Route path="/login" element={<Login/>} exact />
            <Route path="/singup" element={<Register/>} exact />
            <Route path="*" element={ <Navigate to="/login" /> } />
          </>
          }
              </Routes>
           </Col>
        </Row>
        </Container>
       
        </Router>
      
    </div>
  
  );
}

export default App;