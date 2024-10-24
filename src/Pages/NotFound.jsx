import React from 'react'
import error_img from "../Images/error-404_img.jpg";
import { NavLink, useRouteError } from 'react-router-dom'

function NotFound() {
    const error = useRouteError();
    console.log(error);

    if (error.status === 404) {
        return (
            <>
                <section style={styles.container}>
                    <img src={error_img} alt="error page" />
                    <h1 style={styles.title}>Page Not Found</h1>
                    <p style={styles.message}>
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <NavLink to="/" style={styles.NavLink}>Go back to Home</NavLink>
                </section>
            </>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        color: '#343a40',

    },
    title: {
        fontSize: '3rem',
        marginBottom: '1rem',
    },
    message: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
    },

    NavLink: {
        textDecoration: 'none',
        color: '#007bff',
        fontSize: '20px',

    }
}

export default NotFound;