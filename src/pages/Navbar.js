import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const Navbar = () => {

    return (
        <Nav class="navbar navbar-expand-lg bg-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a className="navlinks" href="/">
                            <NavLink to="/login" className="fs-5 text-dark nav-link">Login</NavLink>
                        </a>
                        <a className="navlinks" href="/">
                            <NavLink to="/budget" className="fs-5 text-dark nav-link">Budget</NavLink>
                        </a>
                    </div>
                </div>
            </div>
        </Nav>
    )
}

export default Navbar;