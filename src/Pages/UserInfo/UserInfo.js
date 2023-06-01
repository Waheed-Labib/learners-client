import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaBrain } from 'react-icons/fa';

const UserInfo = () => {

    const { theme, user } = useContext(AuthContext);
    const { displayName, photoURL, email } = user;

    return (
        <div className='my-5 w-75 mx-auto'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>User Information</h3>
        </div>
    );
};

export default UserInfo;