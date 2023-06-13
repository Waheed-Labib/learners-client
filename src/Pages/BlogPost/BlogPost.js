import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { Card, Col, Image, Row } from 'react-bootstrap';
import Rating from '../shared/Rating/Rating';
import { FaArrowRight, FaBrain } from 'react-icons/fa';
import PageNotFound from '../PageNotFound/PageNotFound';

const BlogPost = () => {
    const { theme } = useContext(AuthContext);
    const blog = useLoaderData();

    const { date, id, heading, author, author_id, author_image, post_image, body, rating } = blog;

    if (!blog) return <PageNotFound></PageNotFound>
    return (
        <div className='p-5'>
            <Row>
                <Col xs={12} md={8}>
                    <Card className={`p-3 mx-auto my-5 ${theme === 'dark' ? 'bg-dark light-shadow border-light' : 'bg-light dark-shadow border-dark'}`}>
                        <small className={`text-start mb-2 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Posted on : {date}</small>
                        <Card.Img className='bg-light' variant="top" src={post_image} height='200px' />
                        <Card.Body className='text-start'>
                            <Card.Title>
                                <h4 className={`mb-0 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>{heading}</h4>

                                <div className='mt-3 d-flex justify-content-between'>
                                    <Link className='author' style={{ textDecoration: 'none' }} to={`/authors/${author_id}`}>
                                        <small className={`d-flex ${theme === 'dark' ? 'lightblue' : 'text-secondary'}`}>
                                            <Image className='me-2' src={author_image} height={'20px'} width={'20px'} rounded></Image>
                                            {author}
                                        </small>
                                    </Link>

                                    <p className='d-none d-md-flex'>
                                        <Rating rating={rating}></Rating>
                                        <span className='ms-3 mt-1'>{rating}</span>
                                    </p>
                                </div>

                            </Card.Title>

                            <p className={theme === 'dark' ? 'text-light' : 'text-dark'}>

                                {
                                    body.map(paragraph => <p>{paragraph}</p>)
                                }


                            </p>

                            <hr className='w-100 d-block d-md-none'></hr>
                            <p className='d-flex d-md-none'>
                                <Rating rating={rating}></Rating>
                                <span className='ms-3 mt-1'>{rating}</span>
                            </p>

                        </Card.Body>
                    </Card >
                </Col>

                <Col xs={12} md={4}>
                    <div className='my-5'>
                        <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
                        < h3 className={` mb-5 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Visit Author</h3>



                        < Link style={{ textDecoration: 'none' }} to={`/authors/${author_id}`} className='author-on-side text-primary mt-5'>
                            <Image src={author_image} height={'100px'} width={'100px'} roundedCircle className='mb-2'></Image>
                            <h5>{author}</h5></Link>



                    </div >
                </Col>
            </Row>

            <Link to='/blogs'>
                <small className='text-primary'>Read More Blogs <FaArrowRight></FaArrowRight></small>
            </Link>

        </div>
    );
};

export default BlogPost;