import React, { useContext } from 'react';
import { FaBrain } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './CourseDetails.css'
import { Col, Image, Row } from 'react-bootstrap';
import Rating from '../shared/Rating/Rating';

const CourseDetails = () => {
    const { theme } = useContext(AuthContext);
    const course = useLoaderData();

    return (
        <div className='my-5 px-5'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            < h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>
                {course.course_name} course
            </h3>
            <p className={`w-75 mx-auto ${theme === 'dark' ? 'text-primary' : ''}`}>{course.short_description}</p>
            <Image src={course.image} rounded fluid></Image>

            <Row className='d-flex justify-content-between align-items-center mb-0 mt-4'>

                <Col xs={12} md={4} className='rating d-flex'>
                    <Rating rating={course.rating}></Rating>
                    <p className='ms-3 mt-1 fs-3'>{course.rating}</p>
                </Col>

                <Col xs={6} md={4} className='get-premium-btn d-flex'>
                    <div>
                        <button className='btn btn-outline-primary p-1 px-2 rounded fw-semibold'>
                            <p className='m-0'>Get Premium Access</p>
                            <p className='m-0'><small>{course.price} ৳</small></p>
                        </button>
                    </div>

                </Col>

                <Col xs={6} md={4} className='text-end'>
                    <p>
                        <span className='text-danger fs-3 fw-semibold'>{course.enrolled}</span> already enrolled
                    </p>
                </Col>






            </Row>
        </div>
    );
};

export default CourseDetails;