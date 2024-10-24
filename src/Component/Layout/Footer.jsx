import React from 'react'
// import "../index.css";

function Footer() {
    return (
        <>
            <div className='footer_section' id='footer_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <h3 className='footer_heading'>About</h3>
                            <ul>
                                <li><span>consectetur adipiscing elit, sed do</span></li>
                                <li><span>eiusmod tempor incididunt ut labore</span></li>
                                <li><span>et dolore magna aliqua. Ut enim ad</span></li>
                                <li><span>minim veniam, quis nostrud</span></li>
                                <li><span>exercitation u</span></li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <h3 className='footer_heading'>Menu</h3>
                            <ul>
                                <li><span>Home</span></li>
                                <li><span>About Us</span></li>
                                <li><span>Gallery</span></li>
                                <li><span>Services</span></li>
                                <li><span>Contact Us</span></li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <h3 className='footer_heading'>Useful Link</h3>
                            <ul>
                                <li><span>Adipiscing</span></li>
                                <li><span>Elit, sed do</span></li>
                                <li><span>Eiusmod</span></li>
                                <li><span>Tempor</span></li>
                                <li><span>incididunt</span></li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <h3 className='footer_heading'>Contact Us</h3>
                            <div className='location_text'>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-location-dot" />
                                            <span>Address : Pune</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-phone" />
                                            <span>Call : +01 1234567890</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-envelope" />
                                            <span>Email : demo@gmail.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;