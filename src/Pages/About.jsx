import React, { useState } from 'react'
import "../index.css";
import About_img from "../Images/about-img.png";

function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    const fullText = "Ipsum is simply dummy text of the printing and typesetting inLoremdustry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply";
    const lesstext = "";

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <>
            <div className='about_section' id='about_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='left_side'>
                                <h1 className='about_heading'>ABOUT US</h1>
                                <p className='about_mainpara'>Full cleaning and housekeeping services for companies and households.
                                </p>
                                <p className='about_secpara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply
                                </p>
                                <p className='about_thirdpara' style={{fontSize:"20px",color:'#3b3a3a'}}> {isExpanded ? fullText : lesstext} </p>
                                <button className='readmore_btn' onClick={handleToggle}>{isExpanded? 'Read Less':'Read More'}</button>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='right_side'>
                                <div className='about_img'>
                                    <img src={About_img} alt="about_img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About