import React, { useState } from 'react';
import "../index.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState('fa-regular fa-eye-slash');
    const initialValues = {
        email: "",
        password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormError] = useState({});
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(true);
    const navigate = useNavigate();

    //password show and hide
    const handleToggle = (type) => {
        if (type === 'password') {
            setIcon('fa-regular fa-eye');
            setType('text')
        } else {
            setIcon('fa-regular fa-eye-slash');
            setType('password')
        }
    }

    // handle all input field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    }

    // this function is use for validate the i/p fields, i.e. email and password
    const validate = (values) => {
        const errors = {};
        // this regex usage for check if user has entered correct email pattern on not
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // this is check for if user has entered value in email i/p box or not
        if (!values.email) {
            errors.email = "Email is required!";
        }
        // this is check for if user entered email but it is valid pattern or not
        else if (values.email && !regex.test(values.email)) {
            errors.email = "Please enter a valid email.";
        }
        // this check is for if user has entered passowrd or not
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password && values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        } else if (values.password && values.password.length > 14) {
            errors.password = "Password cannot exceed more than 14 characters";
        }
        // this errors obj return all errors
        return errors;
    }

    // use of this function is to submit the form
    const handleSubmit = (e) => {
        e.preventDefault();                                // This method is called on the event object to prevent the default behavior of the form submission.
        const errors = validate(formValues);               //This line calls a function named validate with formValues as an argument.
        setFormError(errors);                              // sets the errors in errors object.
        if (Object.keys(errors).length === 0) {            //This conditional statement checks if the errors object is empty (i.e., no validation errors). If there are no errors, the code inside the block will execute.
            login();                                        //login function would typically handle the login process (such as sending the login request to a server).
        }
    }

    //handleuser login logic
    const login = () => {
        const userData = JSON.parse(localStorage.getItem('userData'));      //JSON.parse - converts the retrieved JSON string back into a JavaScript object. 

        const foundEmail = userData.find((user) => { return user.email === formValues.email })
        if (foundEmail && foundEmail.password === formValues.password) {
            setIsLoginSuccessful(true);
            navigate = "/";
        } else {
            setIsLoginSuccessful(false);
        }
    }

    const handleSignupClick = () => {
        navigate('/signup');
    }

    return (
        <>
            <div className='login_form' id='login_form'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <form onSubmit={handleSubmit}>
                                <div className='form_body'>
                                    <h3 className='form_title'>Log in</h3>
                                    <div>
                                        <input type="email" id="email" name="email" className='login_emailinput' placeholder='Enter email' onChange={handleChange} />
                                    </div>
                                    <p style={{ color: "red" }}>{formErrors.email}</p>
                                    <div className='d-flex login_password'>
                                        <input type={type} name="password" className='login_passinput' placeholder='Password' onChange={handleChange} />
                                        <i className={icon} onClick={() => handleToggle(type)}></i>
                                    </div>
                                    <p style={{ color: "red" }}>{formErrors.password}</p>
                                    {!isLoginSuccessful && <p style={{ color: "red" }}> Invalid credentials! </p>}
                                    <div>
                                        <input type="submit" value="Submit" className='login_btn' />
                                    </div>
                                    <div className='forgot_password'>
                                        <a href="#login_form">Forgotten account?</a>
                                        <a href="#login_form" className='click_signup' onClick={handleSignupClick}> Sign up</a>
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

export default Login