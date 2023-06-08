import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const InstructorInfo = ({ instructor }) => {

    const { theme } = useContext(AuthContext);

    const { course_id, name, image, designation, institute, course, email } = instructor;

    return (
        <div>
            <Image src={image} height={'200px'} width={'200px'} roundedCircle></Image>
            < h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>{name}</h3>
            <div className='text-start'>
                <p><span className='text-primary'>{designation}</span> at <span className='text-primary'>{institute}</span></p>
                <p>Email: <span className='text-primary'>{email}</span></p>
                <p>Course Instructor : <Link className='fs-5' to={`/course-details/${course_id}`}>{course}</Link></p>

            </div>

        </div>
    );
};

export default InstructorInfo;     