import React, { useContext } from 'react';
import { FaBrain } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { Image } from 'react-bootstrap';
import './GetPremium.css'

const GetPremium = () => {
    const { theme, user } = useContext(AuthContext);
    const course = useLoaderData();

    return (
        <div className='mt-5 px-5 pb-5 text-start'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            < h3 className={` mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>

                <small>Buy</small>
                <span className='text-success'> {course.course_name}</span>
                <small> course </small>

            </h3>

            <p className={` mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>
                Price : <span className='bg-success p-1 rounded text-white'>{course.price} tk</span>
            </p>
            <small><Link>financial aid available</Link></small>

            <div className='border border-secondary rounded mt-5'>
                <h4 className='text-success mt-3 fs-5 fw-bold text-start ms-3 mb-1'>Payment Options</h4>
                <p className='text-start ms-3'><small>Logged in as </small><span className='text-secondary fw-semibold fs-6'>{user.displayName}</span></p>

                <div className='d-flex justify-content-center p-5'>
                    <Image src={'https://www.bangladeshmonitor.com.bd/corporate_img/bkash_logo.jpg'} height={'65px'} width={'65px'} rounded className='payment-option me-3'></Image>
                    <Image src={'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2020/01/15/nagad_logo_0.jpg?itok=7UbqU-On&timestamp=1608546188'} height={'65px'} width={'65px'} rounded className='payment-option me-3'></Image>
                    <Image src={'https://media-exp1.licdn.com/dms/image/C510BAQECvetZN5XgCg/company-logo_200_200/0?e=2159024400&v=beta&t=k94cYh0ziK2DgOHzyZbVYuMREBjHxOXBoLtMtIZSXyI'} height={'65px'} width={'65px'} rounded className='payment-option me-3'></Image>
                </div>
            </div>
        </div >
    );
};

export default GetPremium;