import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Navbar  extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
             <Link  to="/" className="navbar-brand">WorkoutMonitor</Link>
             <button  type ="button" className="navbar-toggler" data-toggle="collapse" data-target="#appNav">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className= "collapse navbar-collapse" id="appNav">
               <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Workouts</Link>  
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link"> Create Workout Log</Link>  
                </li>
                <li className="nav-item">
                  <Link to="/user" className="nav-link">Create User</Link>  
                </li>
               </ul>
             </div>
            </nav>
        );
    }
}
