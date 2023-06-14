import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaBrain } from 'react-icons/fa';
import './AuthorList.css'
import useDataKey from '../../../hooks/useDataKey';

const AuthorList = () => {

    const { theme } = useContext(AuthContext);

    const authors = useDataKey('authors');

    return (
        <div className='my-5'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            < h3 className={` mb-5 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>Our Authors</h3>

            {
                authors.map(author =>

                    < Link style={{ textDecoration: 'none' }} to={`/authors/${author.id}`} className='author-on-side text-primary mt-5'>
                        <Image src={author.image} height={'100px'} width={'100px'} roundedCircle className='mb-2'></Image>
                        <h5>{author.name}</h5></Link>

                )
            }

        </div >
    );
};

export default AuthorList;