import React, { useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import Footer from '../../Shared/Footer/Footer';
import logo from '../../../images/268400530_373968071167259_3189583390863392829_n.png';
import NavTop from '../../Shared/NavTop/NavTop';
import Navigation from '../../Shared/Navigation/Navigation';

const Signup = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { isLoading, registerUser, authError } = useFirebase();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.confirmPassword) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
    }
    return (
        <>
        <NavTop />
        <Navigation />
            <Container className="py-5">
            <h2 className="mb-4"><img style={{height: '100px'}} className='img-fluid' src={logo} alt="" />Water <span className="text-info">Kingdom</span></h2>
                <Form onSubmit={handleRegisterSubmit}>
                    {!isLoading && <div className="d-flex flex-column align-items-center">
                        <Form.Floating onBlur={handleOnBlur} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingInputCustom2"
                                type="text"
                                name="name"
                                placeholder="name"
                                className="border border-info"
                            />
                            <label htmlFor="floatingInputCustom2">Name</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handleOnBlur} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingInputCustom3"
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                className="border border-info"
                            />
                            <label htmlFor="floatingInputCustom3">Email address</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handleOnBlur} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingPasswordCustom2"
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="border border-info"
                            />
                            <label htmlFor="floatingPasswordCustom2">Password</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handleOnBlur} className="mb-3 col-12 col-md-4">
                            <Form.Control
                                id="floatingPasswordCustom3"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="border border-info"
                            />
                            <label htmlFor="floatingPasswordCustom3">Confirm Password</label>
                        </Form.Floating>
                        <Button variant="info" className="col-12 col-md-4 py-3 text-white fw-bold" type="submit">Sign up</Button>
                        {authError && <Alert variant="danger">{authError}</Alert>}
                        <p className="mt-3">Already have an account??
                            <Link to="/login" className="text-decoration-none text-primary fw-bold"> Login</Link></p>
                    </div>}
                </Form>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Signup;