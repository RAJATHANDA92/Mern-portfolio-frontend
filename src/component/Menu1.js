import React,{useState} from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Menu1 = () => {

  const [data,_data] = useState(JSON.parse(localStorage.getItem('userData')))


  return (
    <Sidebar>
      <Menu>
          <MenuItem
            routerLink={
              <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/"
                action
              />
            }
          >
            <b> Home</b>
          </MenuItem>
          <MenuItem
            routerLink={
              <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/education"
                action
              />
            }
          >
            <b> Education</b>
          </MenuItem>
          <MenuItem
            routerLink={
              <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/projects"
                action
              />
            }
          >
            <b> Projects</b>
            </MenuItem>
          <MenuItem
            routerLink={
              <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/experience"
                action
              />
            }
          >
            <b> Experience</b>
          </MenuItem>
          <MenuItem
            routerLink={
              <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/view-courses"
                action
              />
            }
          >
            <b> Technologies</b>
          </MenuItem>
          <MenuItem
            routerLink={
              <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/about"
                action
              />
            }
          >
            <b> About</b>
          </MenuItem>
          <MenuItem
            routerLink={
              <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/contact-us"
                action
              ></Link>
            }
          >
            <b> Contact</b>
          </MenuItem>
          <MenuItem
            routerLink={
              <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/addcontact"
                action
              ></Link>
            }
          >
            <b> AddUser</b>
          </MenuItem>
          <MenuItem
            routerLink={
              <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/userdetails"
                action
              >
                <b> Userdetails</b>
              </Link>
            }
          >
            <b> Userdetails</b>
          </MenuItem>
          <MenuItem
            routerLink={
              <Link>
                <b> Userdetails</b>
              </Link>
            }
          ></MenuItem>
          <MenuItem
            routerLink={
              <Link>
                <b> Userdetails</b>
              </Link>
            }
          ></MenuItem>
          <MenuItem
            routerLink={
              <Link>
                <b> Userdetails</b>
              </Link>
            }
          ></MenuItem>
          <MenuItem
            routerLink={
              <Link>
                <b> Userdetails</b>
              </Link>
            }
          ></MenuItem>
          <MenuItem
            routerLink={
              <Link>
                <b> Userdetails</b>
              </Link>
            }
          ></MenuItem>
          <MenuItem
            routerLink={
              <Link>
                <b> Userdetails</b>
              </Link>
            }
          ></MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Menu1;