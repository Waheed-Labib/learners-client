import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBrain } from 'react-icons/fa';

const Header = () => {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container className=''>
                <Link className='me-5' to='/'>
                    <FaBrain className='text-white fs-1 me-3 ms-1'></FaBrain>
                    <img src={require('../../images/learners.png')} alt='site-name' width='130px' height='60px'></img>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/home' className='me-3'>Home</Link>
                        <Link to='/courses' className='me-3'>Courses</Link>
                        <Link to='/faq' className='me-3'>FAQ</Link>
                        <Link to='/blog' className='me-3'>Blog</Link>
                    </Nav>
                    <Nav>
                        <Link to='/profile' className='me-3'>Profile</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}



export default Header;