import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseList from '../shared/CourseList/CourseList';
import Instructors from '../shared/Instructors/Instructors';
import InstructorInfo from '../shared/InstructorInfo/InstructorInfo';
import { useLoaderData } from 'react-router-dom';

const Instructor = () => {

    const instructor = useLoaderData();

    return (
        <Row className='px-5 pb-5'>
            <Col className='d-none d-md-inline' md={3}>
                <CourseList></CourseList>
            </Col>

            <Col className='pt-5' xs={12} md={6}>
                <InstructorInfo instructor={instructor}></InstructorInfo>
            </Col>

            <Col className='d-none d-md-inline' md={3}>
                <Instructors></Instructors>
            </Col>
        </Row>
    );
};

export default Instructor;