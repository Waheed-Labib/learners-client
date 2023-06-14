import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseList from '../shared/CourseList/CourseList';
import Quotes from '../shared/Quotes/Quotes';
import Instructors from '../shared/Instructors/Instructors';
import AuthorList from '../shared/AuthorList/AuthorList';
import { Link } from 'react-router-dom';
import Course from '../shared/Course/Course';
import { AuthContext } from '../../contexts/AuthProvider';
import BlogCard from '../shared/BlogCard/BlogCard';
import FAQBody from '../shared/FAQBody/FAQBody';
import './Home.css'
import Slider from '../shared/Slider/Slider';
import useDataKey from '../../hooks/useDataKey';


const Home = () => {

    const { theme } = useContext(AuthContext);

    // fetching courses data
    const courses = useDataKey('courses');

    // fetching blogs data
    const blogs = useDataKey('blogs');

    return (
        <Row className='px-3 pb-5'>
            {/* left side nav */}
            <Col className='d-none d-md-inline' xs={12} md={2}>
                <CourseList></CourseList>
                <Quotes></Quotes>
            </Col>

            {/* main body */}
            <Col xs={12} md={8}>
                {/* slider */}
                <Slider></Slider>

                {/* courses */}
                <Row className='pt-5'>

                    < h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Get Your Course Today</h3>
                    {
                        courses.slice(0, 2).map(course =>
                            <Col xs={12} md={6}>
                                <Link style={{ textDecoration: 'none' }} to={`/course-details/${course.id}`}><Course key={course.id} course={course}></Course></Link>
                            </Col>
                        )
                    }
                </Row>

                <Link className='' to='/courses'>View All</Link>

                {/* Blogs */}
                <Row className='pt-4'>

                    < h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Read Our Blogs</h3>
                    {
                        blogs.slice(0, 1).map(blog =>
                            <Col xs={12}>
                                <Link to={`/blog-post/${blog.id}`} style={{ textDecoration: 'none' }}><BlogCard key={blog.id} blog={blog}></BlogCard></Link>
                            </Col>

                        )
                    }
                </Row>

                <Link className='' to='/blogs'>View All</Link>

                {/* FAQ */}
                < h3 className={`mt-4 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Frequently Asked Qustions</h3>
                <FAQBody></FAQBody>
            </Col>

            {/* left side nav shown in column for smaller devices */}
            <Col className='d-block d-md-none' xs={12} md={2}>
                <CourseList></CourseList>
                <Quotes></Quotes>
            </Col>

            {/* right side nav */}
            <Col xs={12} md={2}>
                <Instructors></Instructors>
                <AuthorList></AuthorList>
            </Col>
        </Row >
    );
};

export default Home;