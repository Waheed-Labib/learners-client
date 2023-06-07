import React, { useContext } from 'react';
import Course from '../shared/Course/Course';
import { FaBrain } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './Courses.css'
import InstructorList from './InstructorList';
import Quotes from '../shared/Quotes/Quotes';

const Courses = () => {
    const { theme } = useContext(AuthContext);
    const courses = useLoaderData();


    // console.log(courses)

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
                                <Course key={course.id} course={course}></Course>
                            </Col>

                        )
                    }
                </Row>

            </Col>

            {/* Show Instructor List */}
            <Col className='mb-5 rounded px-5'>
                <InstructorList></InstructorList>
                <Quotes></Quotes>
            </Col>
        </Row >

    );
};

export default Courses;