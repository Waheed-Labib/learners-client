import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaBrain } from 'react-icons/fa';

const CourseList = () => {
    const { theme } = useContext(AuthContext);

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://learners-server-side.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <FaBrain className={`fs-1 mt-5 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            < h3 className={`mb-5 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>All Courses</h3>

            {
                courses.map(course => <Link to={`/course-details/${course.id}`}>
                    <div className='d-flex justify-content-between'>
                        <p> {course.course_name}</p>

                    </div>
                </Link>)
            }
        </div>
    );
};

export default CourseList;