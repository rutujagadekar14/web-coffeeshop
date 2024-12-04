import React from 'react'
// import "../index.css";
import { NavLink } from 'react-router-dom';

function Header() {
    const NavLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? 'chocolate' : 'white',
        }
    }

    return (
        <>
            <header className='bg-dark'>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid px-5">
                        <a className="navbar-brand logo" href="#">GrandCoffee</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style={{"--bsScrollHeight": "100px"}}>
                                <li className='nav-item'>
                                    <a className='nav-link' href="#home_section">
                                        <NavLink style={NavLinkStyle} to="/" id='linkstyle'>Home</NavLink>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link ' href="#about_section">
                                        <NavLink style={NavLinkStyle} to="/about" id='linkstyle'> About Us</NavLink></a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="#gallery_section">
                                        <NavLink style={NavLinkStyle} to="/gallery" id='linkstyle'>Gallery</NavLink>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="#service_section">
                                        <NavLink style={NavLinkStyle} to="/services" id='linkstyle'>Services</NavLink>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href="#contact_section">
                                        <NavLink style={NavLinkStyle} to="/contact" id='linkstyle'> Contact Us</NavLink>
                                    </a>
                                </li>
                                <li className="nav-item login">
                                    <a className='nav-link ' href="#Login_form">
                                        <NavLink style={NavLinkStyle} to="/login" id='linkstyle'>Log in</NavLink>
                                    </a>
                                </li>
                                <li className="nav-item signup">
                                    <a className='nav-link' href="#signUp_form" >
                                        <NavLink style={NavLinkStyle} to="/signup" id='linkstyle'>Sign up</NavLink>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;