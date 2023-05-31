import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider';
import './Register.css'
import { FaBrain, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Register = () => {

    const { theme, setUser, googleSignIn, githubSignIn } = useContext(AuthContext);

    const handleLogInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user)
            }).catch(error => console.error(error))
    }

    const handleLogInWithGithub = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                setUser(user)
            }).catch(error => console.error(error))
    }

    return (
        <div className='my-5 w-75 mx-auto'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Please Register</h3>
            <Form>
                <Form.Group className='mb-3' controlId="formBasicName">
                    {/* <Form.Label>Your Name</Form.Label> */}
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    {/* <Form.Label>photo URL</Form.Label> */}
                    <Form.Control type="text" placeholder="photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <button className='mb-2 px-3 py-2 w-100 mt-2 rounded primary-btn' type="submit">
                    Register
                </button>
            </Form>
            <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>

            <div className='d-flex justify-content-center my-2'>
                <hr className='login-divider'></hr>
                <p className='mx-2 mt-1'>Or</p>
                <hr className='login-divider'></hr>
            </div>

            <div className='d-flex flex-column align-items-center mb-5'>
                <button onClick={handleLogInWithGoogle} className={`mb-2 px-3 py-2 w-100 mt-2 rounded ${theme === 'dark' ? 'primary-btn' : 'white-btn'}`} type="submit">
                    <FaGoogle></FaGoogle> Login with Google
                </button>

                <button onClick={handleLogInWithGithub} className={`mb-5 px-3 py-2 w-100 mt-2 rounded ${theme === 'dark' ? 'primary-btn' : 'white-btn'}`} type="submit">
                    <FaGithub></FaGithub> Login with Github
                </button>
            </div>
        </div>
    );
}


export default Register;