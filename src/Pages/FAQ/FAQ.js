import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaBrain } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import FAQBody from '../shared/FAQBody/FAQBody';

const FAQ = () => {
    const { theme } = useContext(AuthContext);

    return (
        <div className='p-5'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            < h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Frequently Asked Qustions</h3>
            <FAQBody></FAQBody>
        </div>

    );
}

export default FAQ;