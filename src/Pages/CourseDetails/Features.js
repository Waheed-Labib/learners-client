import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

const Features = ({ course }) => {
    return (
        <div className='border border-secondary rounded mt-5'>
            <h4 className='text-success mt-3 fs-6 fw-bold text-start ms-3 mb-1'>WHAT YOU WILL LEARN</h4>
            <p className='d-none d-md-block text-start ms-3'><small>Total Credits : </small><span className='text-secondary fw-semibold fs-6'>{course.credits}</span></p>

            {/* features */}
            <Row className='p-2 ps-3 mt-2'>
                {
                    course.features.map(feature =>

                        <Col xs={12} md={6} className='d-flex'>
                            <FaCheck className='text-success me-3'></FaCheck>
                            <p className='text-start w-75'>{feature}</p>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Features;