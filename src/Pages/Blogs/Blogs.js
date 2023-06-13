import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FaBrain } from 'react-icons/fa';
import BlogCard from '../shared/BlogCard/BlogCard';
import AuthorList from '../shared/AuthorList/AuthorList';

const Blogs = () => {
    const { theme } = useContext(AuthContext);
    const blogs = useLoaderData();

    return (
        <Row className='p-5'>
            {/* Show Blogs */}
            <Col xs={12} md={9} lg={8}>
                <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
                < h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Blogs</h3>
                <div>
                    {
                        blogs.map(blog =>
                            <Col xs={12}>
                                <Link to={`/blog-post/${blog.id}`} style={{ textDecoration: 'none' }}    ><BlogCard key={blog.id} blog={blog}></BlogCard></Link>
                            </Col>

                        )
                    }
                </div>

            </Col>

            {/* Right Side Bar */}
            <Col xs={12} md={3} lg={4} className='mb-5 rounded px-5'>
                <AuthorList></AuthorList>
            </Col>
        </Row >
    );
};

export default Blogs;