import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../contexts/AuthProvider';
import './Course.css'

const Course = () => {

    const { theme } = useContext(AuthContext);

    return (
        <Card style={{ width: '18rem' }} className={`mx-auto my-5 ${theme === 'dark' ? 'bg-dark light-shadow border-light' : 'bg-light dark-shadow border-dark'}`}>
            <Card.Img variant="top" src='https://th.bing.com/th/id/OIP.CloeOwVYEYxa7X5u_qBQ9AHaEo?pid=ImgDet&rs=1' />
            <Card.Body className='text-start'>
                <Card.Title className={`${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Machine Learning</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <button className={`${theme === 'dark' ? 'btn btn-outline-light' : 'btn btn-outline-dark'} me-2 p-2 rounded`}>View Details</button>
                <button className='btn btn-outline-primary p-2 rounded fw-semibold'>Add to List</button>
            </Card.Body>
        </Card>
    );
}



export default Course;