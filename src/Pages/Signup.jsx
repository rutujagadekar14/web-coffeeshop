// import React, { useState } from 'react';
import React, { useState } from "react";
import "../index.css";
import signupForm from '../Images/signup_form.jpg';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState('fa-regular fa-eye-slash');
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        username: "",
        password: "",
        repeatPassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [registerError, setRegisterError] = useState(false);


    //handle passowrd show and hide
    const handleToggle = (type) => {
        if (type === 'password') {
            setIcon('fa-regular fa-eye')
            setType('text')
        }
        else {
            setIcon('fa-regular fa-eye-slash')
            setType('password')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    }

    const validate = (values) => {
        const errors = {};

        //pattern for email address
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (values.email && !regex.test(values.email)) {
            errors.email = "Please enter valid email!";
        }

        if (!values.username) {
            errors.username = "Username is required!";
        }

        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password && values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        } else if (values.password && values.password.length > 14) {
            errors.password = "Password cannot exceed more than 14 characters";
        }

        if (values.repeatPassword !== values.password) {
            errors.repeatPassword = "Password does not match!";
        }

        return errors;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            regsiter();
        }
    }

    const regsiter = () => {
        const usersData = JSON.parse(localStorage.getItem('userData'));
        let updatedUsers = [];
        if (usersData) {
            updatedUsers = [...usersData, formValues];
        } else {
            updatedUsers = [formValues];
        }

        const emailFound = usersData.find((user) => { return user.email === formValues.email })
        if (emailFound) {
            setRegisterError(true);              //when user is entered same email then set error
        } else {
            localStorage.setItem('userData', JSON.stringify(updatedUsers));
            navigate('/login');
        }
    }

    const handleLoginClick = () => {
        navigate('/login');
    }

    return (
        <>
            <div className='signup_form' id='signup_form'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <img src={signupForm} alt="coffee_img" style={{ marginTop: "50px", height: "548px", width: '100%' }} />
                        </div>
                        <div className='col-6'>
                            <form onSubmit={handleSubmit}>
                                <div className='signup_body'>
                                    <div className='signup_title'>Register</div>
                                    <div>
                                        <input type="email" className='signup_input' name="email" placeholder='Email address' onChange={handleChange} />
                                    </div>
                                    <p style={{ color: "red" }}>{formErrors.email}</p>
                                    <div>
                                        <input type="text" className='signup_input' name="username" placeholder='Username' onChange={handleChange} />
                                    </div>
                                    <p style={{ color: "red" }}>{formErrors.username}</p>
                                    <div className="signup_password">
                                        <input type={type} className='signup_input' name="password" placeholder='Password' onChange={handleChange} />
                                        <i className={icon} onClick={() => handleToggle(type)}></i>
                                    </div>
                                    <p style={{ color: "red" }}>{formErrors.password}</p>
                                    <div className="signup_password">
                                        <input type='password' className='signup_input' name="repeatPassword" placeholder='Repeat password' onChange={handleChange} />
                                    </div>
                                    <p style={{ color: "red" }}>{formErrors.repeatPassword}</p>
                                    {registerError && <p style={{ color: "red" }}>User has already registered!</p>}
                                    <button className='signup_btn' id='signup_btn' type='submit'>SIGN UP</button>
                                    <div className='for_login'>
                                        <h6 className='signup_que'>Have an account?</h6>
                                        <a href="#signup_form" className='click_login' onClick={handleLoginClick}>Login here</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;