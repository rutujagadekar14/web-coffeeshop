import React from 'react'
import "../index.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleLearnMoreBtn = () => {
       navigate('/gallery');
    }
    return (
        <>
            <div className='home_section' id='home_section'>
                <div className='container'>
                    {/* Carousel */}
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        {/* The slideshow/carousel  */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='home_title'>
                                            <h1 className='outstanding_text'>Outstanding</h1>
                                            <h1 className='coffeeshop_text'>Coffee Shop</h1>
                                            <p className='there_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />  Suscipit doloremque similique obcaecati provident, tempore <br /> architecto quas est libero repellendus cum.</p>
                                            <button className='Learn_btn' onClick={handleLearnMoreBtn}>LEARN MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='home_title'>
                                            <h1 className='outstanding_text'>Outstanding</h1>
                                            <h1 className='coffeeshop_text'>Coffee Shop</h1>
                                            <p className='there_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />  Suscipit doloremque similique obcaecati provident, tempore <br /> architecto quas est libero repellendus cum.</p>
                                            <button className='Learn_btn' onClick={handleLearnMoreBtn}>LEARN MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='home_title'>
                                            <h1 className='outstanding_text'>Outstanding</h1>
                                            <h1 className='coffeeshop_text'>Coffee Shop</h1>
                                            <p className='there_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />  Suscipit doloremque similique obcaecati provident, tempore <br /> architecto quas est libero repellendus cum.</p>
                                            <button className='Learn_btn' onClick={handleLearnMoreBtn}>LEARN MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Left and right controls/icons */}
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;