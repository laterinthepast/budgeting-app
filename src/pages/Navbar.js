import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Pig from '../images/pig.png'
import { Image } from 'react-bootstrap';

const Navbar = () => {

    return (
        <Nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">
                    <Image src={Pig} alt="" className="logo"></Image>
                </a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="navlinks" href="/">
                            <NavLink to="/login" className="fs-5 text-light nav-link">Login</NavLink>
                        </a>
                        <a className="navlinks" href="/">
                            <NavLink to="/budget" className="fs-5 text-light nav-link">Budget</NavLink>
                        </a>
                    </div>
                </div>
            </div>
        </Nav>
    )
}

export default Navbar;