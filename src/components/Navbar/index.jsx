import React from "react";
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    //get the required class elements
    const navbarList = document.querySelector(".navbar-list-bg")
    const navbarNav = document.querySelector(".navbar-list-bg .navbar-list-nav")

    // open the navbar
    function handleOpenNavbar() {
        navbarList.classList.add("display-bar")
        navbarNav.classList.remove("animateit")
    }

    // close the navbar
    function handleCloseNavbar() {
        navbarNav.classList.add("animateit")
        setTimeout( () => {
            navbarList.classList.remove("display-bar")
        } , 1000)
    }
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-md d-md-none d-block">
                    <div class="container d-flex align-items-center justify-content-between">
                        <a class="navbar-brand" href="/">&lt;?=FCodeHub?&gt;</a>
                        <button onClick={handleOpenNavbar} className="open-navbar nav-btn" >
                            <FontAwesomeIcon icon={faBars} color="white" />
                        </button>
                    </div>
                </nav>
                <div className="navbar-list-bg d-md-none">
                    <button onClick={handleCloseNavbar} className="cancel-navbar nav-btn">
                        <FontAwesomeIcon icon={faX} color="white" />
                    </button>
                    <ul className="list-unstyled navbar-list-nav">
                        <li className="navbar-list">
                            <NavLink className="navbar-list-link home" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="navbar-list">
                            <NavLink className="navbar-list-link contact" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="navbar-list">
                            <NavLink className="navbar-list-link about" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="navbar-list">
                            <NavLink className="navbar-list-link project" to="/projects">
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar