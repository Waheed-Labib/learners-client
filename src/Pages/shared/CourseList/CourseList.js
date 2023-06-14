import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaBrain } from 'react-icons/fa';
import useDataKey from '../../../hooks/useDataKey';

const CourseList = () => {
    const { theme } = useContext(AuthContext);

    const courses = useDataKey('courses');

    return (
        <div>
            <FaBrain className={`fs-1 mt-5 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            < h3 className={`mb-5 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>All Courses</h3>

            {
                courses.map(course => <Link to={`/course-details/${course.id}`}>
                    <div className='text-start'>
                        <p> {course.course_name}</p>

                    </div>
                </Link>)
            }
        </div>
    );
};

export default CourseList;