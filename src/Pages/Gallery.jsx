import React from 'react'
import "../index.css";
import gallery_img1 from "../Images/gallery_img1.jpg";
import gallery_img2 from "../Images/gallery_img2.jpg";
import gallery_img3 from "../Images/gallery_img3.jpg";
import gallery_img4 from "../Images/gallery_img4.jpg";
import gallery_img5 from "../Images/gallery_img5.jpg";
import gallery_img6 from "../Images/gallery_img6.jpg";
import gallery_img7 from "../Images/gallery_img7.jpg";
import gallery_img8 from "../Images/gallery_img8.jpg";
import gallery_img9 from "../Images/gallery_img9.jpg";

function Gallery() {
    return (
        <>
            <div className='gallery_section' id='gallery_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='gallery_title'> Our Gallery</h1>
                            <p className='gallery_text'>Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard
                                dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <div className='gallery_sec2'>
                        <div className='row'>
                            <div className='col-4'>
                                <img className='gallery_img' src={gallery_img1} alt="img_1" />
                            </div>
                            <div className='col-4'>
                                <img className='gallery_img' src={gallery_img2} alt="img_2" />
                            </div>
                            <div className='col-4'>
                                <img className='gallery_img' src={gallery_img3} alt="img_3" />
                            </div>
                        </div>
                    </div>
                    <div className='gallery_sec3'>
                        <div className='row'>
                            <div className='col-4'>
                                <img className='gallery_img' src={gallery_img4} alt="img_4" />
                            </div>
                            <div className='col-4'>
                                <img className='gallery_img' src={gallery_img5} alt="img_5" />
                            </div>
                            <div className='col-4'>
                                <img className='gallery_img' src={gallery_img6} alt="img_6" />
                            </div>
                        </div>
                    </div>
                    <div className='gallery_sec4'>
                        <div className='row'>
                            <div className='col-4'>
                                <img className='gallery_img' src={gallery_img7} alt="img_7" />
                            </div>
                            <div className='col-4'>
                                <img className='gallery_img' src={gallery_img8} alt="img_8" />
                            </div>
                            <div className='col-4'>
                                <img className='gallery_img' src={gallery_img9} alt="img_9" />
                            </div>
                        </div>
                    </div>
                    <div className='seemore_btn'>
                        <button className='seemore_bt'>See More</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Gallery;