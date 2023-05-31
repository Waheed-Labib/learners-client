import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider';
import './Register.css'
import { FaBrain, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Register = () => {

    const { theme, setUser, createUser, updateUserProfile, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        setError('');
        setSuccess(false);
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            setError('Passwords did not match. Please try again.');
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);

                const profile = {
                    displayName: name,
                    photoURL: photoURL
                }

                updateUserProfile(profile)
                    .then(() => { })
                    .catch(error => console.error(error))

                console.log(user);
                form.reset();
                setSuccess(true);
            }).catch(error => {
                setError(error.message)
            })
    }

    const handleLogInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user)
            }).catch(error => setError(error.message))
    }

    const handleLogInWithGithub = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                setUser(user)
            }).catch(error => setError(error.message))
    }

    return (
        <div className='my-5 w-75 mx-auto'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            {
                success ?
                    <h4 className='text-success mb-3'>Account Creation Successful ! <br></br><small>Go to <Link to='/'>Home</Link></small></h4>
                    :
                    <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Please Register</h3>
            }


            {
                error && <p className='w-100 text-danger border border-danger'>{error}</p>
            }



            <Form onSubmit={handleRegister}>
                <Form.Group className='mb-3' controlId="formBasicName">
                    {/* <Form.Label>Your Name</Form.Label> */}
                    <Form.Control name='name' type="text" placeholder="Full Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    {/* <Form.Label>photo URL</Form.Label> */}
                    <Form.Control name='photoURL' type="text" placeholder="photoURL (optional)" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control name='confirm' type="password" placeholder="Confirm Password" required />
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