import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaBrain } from 'react-icons/fa';


const Instructors = () => {

    const { theme } = useContext(AuthContext);

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://learners-server-side.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div>
            <FaBrain className={`fs-1 mt-5 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            < h3 className={`mb-5 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Our Instructors</h3>

            {
                instructors.map(instructor => <Link to={`/instructor/${instructor.id}`}>
                    <div className='d-flex justify-content-between'>
                        <p> {instructor.name}</p>
                        <Image src={instructor.image} alt={instructor.name} height={'25px'} width={'25px'} rounded></Image>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default Instructors;