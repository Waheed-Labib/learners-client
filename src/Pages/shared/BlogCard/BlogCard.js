import React, { useContext } from 'react';
import { Card, Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
    const { theme } = useContext(AuthContext);
    const { date, id, heading, author, author_id, author_image, post_image, body, rating } = blog;
    return (
        <Card className={`p-3 mx-auto my-5 ${theme === 'dark' ? 'bg-dark light-shadow border-light' : 'bg-light dark-shadow border-dark'}`}>
            <small className={`text-start mb-2 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Posted on : {date}</small>
            <Card.Img className='bg-light' variant="top" src={post_image} height='200px' />
            <Card.Body className='text-start'>
                <Card.Title>
                    <Link style={{ textDecoration: 'none' }} to={`/blog-post/${blog.id}`}>
                        <h4 className={`mb-0 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>{heading}</h4>
                    </Link>
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
                        body[0].slice(0, 150)
                    }

                    <span className='text-primary'> ...Read full post</span>
                </p>

                <hr className='w-100 d-block d-md-none'></hr>
                <p className='d-flex d-md-none'>
                    <Rating rating={rating}></Rating>
                    <span className='ms-3 mt-1'>{rating}</span>
                </p>

            </Card.Body>
        </Card >
    );
};

export default BlogCard;