import React, { useState } from 'react';
import "../index.css";
import cup_1 from "../Images/cup_icon1.png";
import cup_2 from "../Images/cup_icon2.png";
import cup_3 from "../Images/cup_icon3.png";

function Service() {
    const [isExpanded_1, setIsExpanded_1] = useState(false);
    const [isExpanded_2, setIsExpanded_2] = useState(false);
    const [isExpanded_3, setIsExpanded_3] = useState(false);

    const fullText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, consequatur?";
    const lessText = "";


    const handleToggle_1 = () => {
        setIsExpanded_1(!isExpanded_1);
    }
    const handleToggle_2 = () => {
        setIsExpanded_2(!isExpanded_2);
    }
    const handleToggle_3 = () => {
        setIsExpanded_3(!isExpanded_3);
    }
    return (
        <>
            <div className='service_section' id='service_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='service_title'>Services</h1>
                            <p className='service_text'>Typesetting industry lorem Ipsum is simply dummy text of the</p>
                        </div>
                    </div>
                    <div className='service_section2'>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='box_main'>
                                    <img src={cup_1} alt="coffeecup" className='cup_1' />
                                    <h3 className='heading_text'>Original Coffee</h3>
                                    <p className='para_text'>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                                    <p style={{ color: "#fefefe", }}>{isExpanded_1 ? fullText : lessText}</p>
                                    <button className='readmore_bt' onClick={handleToggle_1}>{isExpanded_1 ? "READ LESS" : "READ MORE"}</button>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='box_main'>
                                    <img src={cup_2} alt="coffeecup" className='cup_2' />
                                    <h3 className='heading_text'>20 Coffee Flavors</h3>
                                    <p className='para_text'>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                                    <p style={{ color: "#fefefe", }}>{isExpanded_2 ? fullText : lessText}</p>
                                    <button className='readmore_bt' onClick={handleToggle_2}>{isExpanded_2 ? "READ LESS" : "READ MORE"}</button>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='box_main'>
                                    <img src={cup_3} alt="coffeecup" className='cup_3' />
                                    <h3 className='heading_text'>Pleasant Abient</h3>
                                    <p className='para_text'>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                                    <p style={{ color: "#fefefe", }}>{isExpanded_3 ? fullText : lessText}</p>
                                    <button className='readmore_bt' onClick={handleToggle_3}>{isExpanded_3 ? "READ LESS" : "READ MORE"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;