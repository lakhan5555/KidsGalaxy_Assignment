import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="container-fluid">
          <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
          </ul>      
           
          <Link className="btn btn-outline-light" to="/tasks/add">Add Task</Link>  
          </div>
            
        </div>
        
    </nav>
    ) 
}

export default Navbar;