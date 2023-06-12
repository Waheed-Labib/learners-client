import React, { useContext } from 'react';
import Course from '../shared/Course/Course';
import { FaBrain } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './Courses.css'
import Quotes from '../shared/Quotes/Quotes';
import Instructors from '../shared/Instructors/Instructors';



const Courses = () => {
    const { theme } = useContext(AuthContext);
    const courses = useLoaderData();

    return (
        <Row className=''>
            {/* Show Courses */}
            <Col xs={12} lg={9} className='mt-5 px-5'>
                <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
                < h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Our Courses</h3>
                <Row>
                    {
                        courses.map(course =>
                            <Col xs={12} md={6}>
                                <Link style={{ textDecoration: 'none' }} to={`/course-details/${course.id}`}><Course key={course.id} course={course}></Course></Link>
                            </Col>

                        )
                    }
                </Row>

            </Col>

            {/* Right Side Bar */}
            <Col className='mb-5 rounded px-5'>
                <Instructors></Instructors>
                <Quotes></Quotes>
            </Col>
        </Row >

    );
};

export default Courses;