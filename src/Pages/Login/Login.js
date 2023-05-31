import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { FaBrain, FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';



const Login = () => {

    const { theme } = useContext(AuthContext);

    return (
        <div className='my-5 w-75 mx-auto'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            < h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Please Login</h3>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <p className={`text-end ${theme === 'dark' ? 'text-white' : ''}`}><small><Link>forgotten password?</Link></small></p>
                <button className='mb-2 px-3 py-2 w-100 mt-2 rounded primary-btn' type="submit">
                    Login
                </button>
            </Form>
            <p><small>Don't have an account? <Link to='/register'>Register.</Link> It's free!</small></p>
            <div className='d-flex justify-content-center my-2'>
                <hr className='login-divider'></hr>
                <p className='mx-2 mt-1'>Or</p>
                <hr className='login-divider'></hr>
            </div>

            <div className='d-flex flex-column align-items-center mb-5'>
                <button className={`mb-2 px-3 py-2 w-100 mt-2 rounded ${theme === 'dark' ? 'primary-btn' : 'white-btn'}`} type="submit">
                    <FaGoogle></FaGoogle> Login with Google
                </button>

                <button className={`mb-5 px-3 py-2 w-100 mt-2 rounded ${theme === 'dark' ? 'primary-btn' : 'white-btn'}`} type="submit">
                    <FaGithub></FaGithub> Login with Github
                </button>
            </div>
        </div>

    );
};

export default Login;