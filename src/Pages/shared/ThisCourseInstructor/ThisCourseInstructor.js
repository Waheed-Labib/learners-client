import React, { useContext, useEffect, useState } from 'react';
import { FaBrain } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ThisCourseInstructor = ({ course }) => {

    const { theme } = useContext(AuthContext);

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://learners-server-side.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    const thisCourseInstructors = instructors.filter(instructor => instructor.course === course.course_name)

    return (
        <div className='mb-5'>
            <FaBrain className={`fs-1 mt-5 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            < h3 className={` mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Course Instructors</h3>

            {
                thisCourseInstructors.map(instructor =>

                    <div className='mt-5'>
                        <Image src={instructor.image} height={'100px'} width={'100px'} roundedCircle className='mb-2'></Image>
                        <Link to={`/instructor/${instructor.id}`}><h5>{instructor.name}</h5></Link>
                    </div>
                )
            }

        </div>
    );
};

export default ThisCourseInstructor;