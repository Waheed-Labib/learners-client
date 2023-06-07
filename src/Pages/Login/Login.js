import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaBrain, FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {

    const { theme, user, setUser, logIn, googleSignIn, githubSignIn, resetPassword, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogIn = (event) => {
        event.preventDefault();
        setError('');
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setSuccess(true);
                // console.log(user);
                form.reset();

                if (user.emailVerified) navigate(from, { replace: true })
                else toast.error("You have not verified your email. Please check your email.")

            }).catch(error => {
                setError(error.message)
            }).finally(setLoading(false))

    }
    const handleLogInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user)
                // console.log(user)
            }).catch(error => setError(error.message))
    }
    const handleLogInWithGithub = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                setUser(user)
            }).catch(error => setError(error.message))
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleForgottenPassword = () => {
        setError('')

        if (!email) {
            setError('Please insert your Email')
            return
        }
        resetPassword(email)
            .then(() => {
                toast.success('Password reset email sent. Please check your email.')
            }).catch(error => {
                console.error(error.message)
                setError(error.message)
            })
    }

    return (
        <div className='my-5 w-75 mx-auto'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            {
                success && user ?
                    <h4 className='text-success mb-3'>Login Successful. Please verify your Email first. Then visit the site.</h4>
                    :
                    < h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Please Login</h3>
            }

            {
                error && <p className='w-100 text-danger border border-danger'>{error}</p>
            }

            <Form onSubmit={handleLogIn}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control onBlur={handleEmailBlur} name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <p onClick={handleForgottenPassword} className={`text-end ${theme === 'dark' ? 'text-white' : ''}`}><small><Link>forgotten password?</Link></small></p>
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
                <button onClick={handleLogInWithGoogle} className={`mb-2 px-3 py-2 w-100 mt-2 rounded ${theme === 'dark' ? 'primary-btn' : 'white-btn'}`} type="submit">
                    <FaGoogle></FaGoogle> Login with Google
                </button>

                <button onClick={handleLogInWithGithub} className={`mb-5 px-3 py-2 w-100 mt-2 rounded ${theme === 'dark' ? 'primary-btn' : 'white-btn'}`} type="submit">
                    <FaGithub></FaGithub> Login with Github
                </button>
            </div>
        </div>

    );
};

export default Login;