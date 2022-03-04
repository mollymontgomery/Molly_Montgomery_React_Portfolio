import React from "react";
import './style.css';
import { NavLink } from 'react-router-dom';



function Navigation() {

    return (

        <nav className="navbar navbar-expand-lg ">
            <NavLink className="navbar-brand" to="/">Molly Montgomery</NavLink>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span><img className="plus" src='../../assets/images/plus.svg' alt="plus sign" aria-hidden="true"></img></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/music">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/resume">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/contact">Resume</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )

};
//

export default Navigation;