import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

const Features = ({ course }) => {
    return (
        <div className='ps-1 pt-2 rounded mt-5 bg-success'>
            <h4 className='text-warning mt-3 fs-6 fw-bold text-start ms-3 mb-1'>WHAT YOU WILL LEARN FROM THIS COURSE</h4>
            <p className={`d-none d-md-block text-start ms-3 text-light`}><small>Total Credits : </small><span className='text-white fw-semibold fs-6'>{course.credits}</span></p>

            {/* features */}
            <Row className='p-2 ps-3 mt-2'>
                {
                    course.features.map(feature =>

                        <Col xs={12} md={6} className='d-flex'>
                            <FaCheck className='text-warning me-3'></FaCheck>
                            <p className={`text-start w-75 text-light`}>{feature}</p>
                        </Col>
                    )
                }
            </Row>

            <small className='bg-secondary text-light px-1 mb-3'>{course.course_name} course by learners</small>

        </div>
    );
};

export default Features;