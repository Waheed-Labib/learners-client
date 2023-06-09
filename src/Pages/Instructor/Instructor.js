import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseList from '../shared/CourseList/CourseList';
import Instructors from '../shared/Instructors/Instructors';
import InstructorInfo from '../shared/InstructorInfo/InstructorInfo';
import { useLoaderData } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import { AuthContext } from '../../contexts/AuthProvider';

const Instructor = () => {

    const { theme } = useContext(AuthContext);

    const instructor = useLoaderData();

    if (!instructor) return <PageNotFound></PageNotFound>

    return (
        <Row className='px-5 pt-1 pb-5'>

            <Col className={` d-none d-md-inline`} md={2}>
                <CourseList></CourseList>
            </Col>

            <Col className={` pt-5 rounded`} xs={12} md={8}>
                <InstructorInfo instructor={instructor}></InstructorInfo>
            </Col>


            <Col xs={12} md={2}>
                <Instructors></Instructors>
            </Col>
        </Row>
    );
};

export default Instructor;