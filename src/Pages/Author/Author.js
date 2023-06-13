import React, { useContext, useEffect, useState } from 'react';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Link, useLoaderData } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider';
import BlogCard from '../shared/BlogCard/BlogCard';

const Author = () => {

    const { theme } = useContext(AuthContext);

    const author = useLoaderData();
    const { name, id, image, designation, institute } = author;

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://learners-server-side.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const thisAuthorsBlogs = blogs.filter(blog => blog.author_id === id);

    if (!author) return <PageNotFound></PageNotFound>

    return (
        <div className='p-5'>
            <Row>
                <Col xs={12} md={4} className='text-start'>
                    <Image className='me-5' src={image} height={'300px'} width={'300px'} rounded></Image>
                    <div className='mt-3'>
                        <h4 className={`${theme === 'dark' ? 'text-white' : 'primary-color'}`}>{name}</h4>
                        <p className='my-1'><span className='text-secondary'>{designation}</span> at</p>
                        <p className='text-secondary'>{institute}</p>
                    </div>
                </Col>

                <Col xs={12} md={8} className=''>
                    <h5 className={`${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Posts by this author : </h5>
                    {
                        thisAuthorsBlogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                    }
                </Col>

            </Row>

            <Link to='/blogs'><small>Go to Blogs</small></Link>
        </div>


    );
};

export default Author;