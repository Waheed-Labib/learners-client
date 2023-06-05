import React, { useContext } from 'react';
import Course from './Course';
import { FaBrain } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const Courses = () => {
    const { theme } = useContext(AuthContext);
    const courses = useLoaderData();
    console.log(courses)

    return (
        <div className='my-5 px-5'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            < h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Our Courses</h3>
            <Row>
                {
                    courses.map(course =>
                        <Col xs={12} md={6} lg={4}>
                            <Course key={course.id} course={course}></Course>
                        </Col>

                    )
                }
            </Row>

        </div>
    );
};

export default Courses;