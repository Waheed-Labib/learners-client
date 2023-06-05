import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../contexts/AuthProvider';
import './Course.css';
import { FaStar } from 'react-icons/fa';


const Course = ({ course }) => {

    const { theme } = useContext(AuthContext);
    const { id, image, course_name, teachers, rating, credits, price } = course;

    return (
        <Card className={`mx-auto my-5 ${theme === 'dark' ? 'bg-dark light-shadow border-light' : 'bg-light dark-shadow border-dark'}`}>
            <Card.Img variant="top" src={image} height='200px' />
            <Card.Body className='text-start'>
                <Card.Title>
                    <h4 className={`mb-0 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>{course_name}</h4>
                    <small className={`${theme === 'dark' ? 'text-secondary' : ''}`}>by {
                        teachers.map(teacher => {
                            if (teachers.indexOf(teacher) === teachers.length - 1)
                                return < span key={teacher} className={`${theme === 'dark' ? 'lightblue' : 'text-secondary'}`}> {teacher}</span>

                            else return < span key={teacher} className={`${theme === 'dark' ? 'lightblue' : 'text-secondary'}`} > {teacher}, </span>
                        })
                    } </small>
                </Card.Title>

                <div className='d-flex justify-content-between align-items-center mb-0 mt-4'>
                    <p>
                        <FaStar className='text-warning'></FaStar>
                        <span> {rating}</span>
                    </p>

                    <p>
                        <span className='text-danger'>{credits}</span> credits
                    </p>

                    <h3>
                        {price} ৳
                    </h3>


                </div>

                <div>
                    <button className={`${theme === 'dark' ? 'btn btn-outline-light' : 'btn btn-outline-dark'} me-2 p-2 rounded`}>View Details</button>
                    <button className='btn btn-outline-primary p-2 rounded fw-semibold'>Add to List</button>
                </div>

            </Card.Body>
        </Card >
    );
}



export default Course;