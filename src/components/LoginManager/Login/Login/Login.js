import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import Footer from '../../Shared/Footer/Footer';
import logo from '../../../images/268400530_373968071167259_3189583390863392829_n.png';
import NavTop from '../../Shared/NavTop/NavTop';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, authError, signInWithGoogle } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }
    return (
        <>
        <NavTop />
        <Navigation />
            <Container className="py-5">
                <Form onSubmit={handleLoginSubmit}>
                    <div className="d-flex flex-column align-items-center">
                        <div className="text-center col-8 col-md-4">
                            <h2 className="mb-4"><img style={{height: '100px'}} className='img-fluid' src={logo} alt="" />Water <span className="text-info">Kingdom</span></h2>
                        </div>
                        <Form.Floating onChange={handleOnChange} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingInputCustom1"
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                className="border border-info"
                            />
                            <label htmlFor="floatingInputCustom1">Email address</label>
                        </Form.Floating>
                        <Form.Floating onChange={handleOnChange} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingPasswordCustom1"
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="border border-info"
                            />
                            <label htmlFor="floatingPasswordCustom1">Password</label>
                        </Form.Floating>
                        <Button className="col-12 col-md-4 py-3 text-white fw-bold" variant="info" type="submit">Log in</Button>
                        <div className="text-center col-12 col-md-4 mt-4">
                            {authError && <Alert variant="danger">{authError}</Alert>}
                            <p>Don't have an account?? <Link to="/signup" className="text-decoration-none fw-bold text-primary">Sign Up</Link></p>
                            <Button variant="primary" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Sign in with google</Button>
                        </div>
                    </div>
                </Form>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;