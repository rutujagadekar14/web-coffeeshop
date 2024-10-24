import React, { useState } from 'react';
import "../index.css";

function Contact() {

    const initialValues = {
        name: "",
        email: "",
        phoneNo: "",
        massage: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^\d{10}$/;

        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        }
        else if (values.email && !emailRegex.test(values.email)) {
            errors.email = "Enter valid email!";
        }
        if (!values.phoneNo) {
            errors.phoneNo = "Phone No is required!";
        }
        else if (values.phoneNo && !phoneRegex.test(values.phoneNo)) {
            errors.phoneNo = "Please enter valid phone number";
        }
        if (!values.massage) {
            errors.massage = "Massage is required!";
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();   // Prevent form submission
        const error = (validate(formValues));
        setFormErrors(error);
    }

    return (
        <>
            <div className='contact_section'>
                <div className='container_fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='contact_heading'>Contact Us</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='mail_section'>
                                <form onSubmit={handleSubmit}>
                                    <div className='form_body'>
                                        <div className='email_form'>
                                            <label htmlFor="text" className='form_label'>Name:</label>
                                            <input type="text" className='form_input' name='name' placeholder='full name' onChange={handleInput} />
                                        </div>
                                        <p style={{ color: "red", paddingLeft: "50px" }}>{formErrors.name}</p>
                                        <div className='email_form'>
                                            <label htmlFor="email" className='form_label' >Email:</label>
                                            <input type="email" className='form_input' name='email' placeholder='name@gmail.com' onChange={handleInput} /> <br />
                                        </div>
                                        <p style={{ color: "red", paddingLeft: "50px" }}>{formErrors.email}</p>
                                        <div className='email_form'>
                                            <label htmlFor="tel" className='form_label'>Phone No:</label>
                                            <input type="tel" className='form_input' name='phoneNo' placeholder='+91' onChange={handleInput} />
                                        </div>
                                        <p style={{ color: "red", paddingLeft: "50px" }}>{formErrors.phoneNo}</p>
                                        <div className='email_form'>
                                            <label htmlFor="text" className='form_label'>Massage:</label>
                                            <input type="text" className='msg_btn' name='massage' onChange={handleInput} />
                                        </div>
                                        <p style={{ color: "red", paddingLeft: "50px" }}>{formErrors.massage}</p>
                                        <div className='email_form'>
                                            <div className='form_btn'>
                                                <button type='submit' className='send_btn' >SEND</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-6'>
                            <iframe
                                id='google_map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388947.743744511!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba68a2e5e455f%3A0x7f1d6a2a1f4c3c3!2sPune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1643723408577!5m2!1sen!2sin"
                                width="90%"
                                height="80%"
                                style={{ border: 0, marginTop: "7%" }}
                                allowFullScreen="false"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact