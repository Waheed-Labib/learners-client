import React, { useContext } from 'react';
import { FaBrain, FaCheck } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './CourseDetails.css'
import { Col, Image, Row } from 'react-bootstrap';
import Rating from '../shared/Rating/Rating';
import Features from './Features';
import CourseList from '../shared/CourseList/CourseList';
import Quotes from '../shared/Quotes/Quotes';

const CourseDetails = () => {
    const { theme } = useContext(AuthContext);
    const course = useLoaderData();

    return (
        <Row className=''>

            {/* Show Course Details */}
            <Col xs={12} lg={9} className='my-5 px-5'>

                {/* page header */}

                <FaBrain className={`text-start fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
                < h3 className={` mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>
                    {course.course_name} course
                </h3>

                {/* image */}

                <p className={`text-start mx-auto ${theme === 'dark' ? 'light-grey-text' : ''}`}>{course.short_description}</p>
                <Image src={course.image} rounded fluid></Image>

                {/* rating, purchase btn, etc */}

                <Row className='d-flex justify-content-between align-items-center mb-0 mt-4'>

                    {/* rating */}

                    <Col xs={6} md={4} className='rating d-flex justify-content-start'>
                        <Rating rating={course.rating}></Rating>
                        <p className='ms-3 mt-1'>{course.rating}</p>
                    </Col>

                    {/* total credits */}

                    <Col xs={6} className='d-md-none text-end'>
                        <p>Total Credits : <span className='text-success fw-semibold fs-5'>{course.credits}</span></p>
                    </Col>

                    {/* get premium access button */}

                    <Col xs={6} md={4} className='get-premium-btn d-flex'>
                        <div>
                            <button className='btn btn-outline-primary p-1 px-2 rounded fw-semibold'>
                                <p className='m-0'>Get Premium Access</p>
                                <p className='m-0'><small>{course.price} ৳</small></p>
                            </button>
                        </div>

                    </Col>

                    {/* how many already enrolled */}

                    <Col xs={6} md={4} className='text-end'>
                        <p>
                            <span className='text-danger fs-3 fw-semibold'>{course.enrolled}</span> already enrolled
                        </p>
                    </Col>

                </Row>

                <Features course={course}></Features>

            </Col>

            {/* Right Side Bar */}
            <Col className='mb-5 rounded px-5'>
                <CourseList></CourseList>
                <Quotes></Quotes>
            </Col>
        </Row >

    );
};

export default CourseDetails;