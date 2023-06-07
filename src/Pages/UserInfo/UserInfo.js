import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaBrain } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Image } from 'react-bootstrap';
import './UserInfo.css'
import { toast } from 'react-hot-toast';

const UserInfo = () => {

    const { theme, user, updateUserProfile, resetPassword } = useContext(AuthContext);
    const { displayName, photoURL, email } = user;
    const [changeName, setChangeName] = useState(false);
    const [changePhoto, setChangePhoto] = useState(false);
    const [name, setName] = useState(displayName);
    const [photo, setPhoto] = useState(photoURL);

    const handleUpdateName = () => {
        const profile = {
            displayName: name,
            photoURL: photo
        }

        updateUserProfile(profile)
        setChangeName(!changeName)
        toast.success('Please reload to see the changes')
    }
    const handleUpdatePhoto = () => {
        const profile = {
            displayName: name,
            photoURL: photo
        }

        updateUserProfile(profile)
        setChangePhoto(!changePhoto)
        toast.success('Please reload to see the changes')
    }

    const handleNameBlur = event => {
        const newName = event.target.value;
        setName(newName);
    }

    const handlePhotoBlur = event => {
        const newPhoto = event.target.value;
        setPhoto(newPhoto);
    }

    const handleForgottenPassword = () => {

        resetPassword(email)
            .then(() => {
                toast.success('Password reset email sent. Please check your email.')
            }).catch(error => {
                toast.error('Something went wrong.')
            })
    }

    return (
        <div className='my-5 w-75 mx-auto'>
            <FaBrain className={`fs-1 mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}></FaBrain>
            <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'primary-color'}`}>User Information</h3>

            <Image src={photoURL} height='200px' width='200px' roundedCircle></Image>

            <Table className='mt-3' responsive striped bordered hover variant={theme}>

                <tbody className='text-start'>
                    <tr>
                        <td>Name</td>
                        {
                            changeName ?

                                <td className='d-flex flex-column justify-content-between'>
                                    <input defaultValue={displayName} onBlur={handleNameBlur} type='text'></input>
                                    <button onClick={handleUpdateName} className={`edit-btn rounded py-2 ${changePhoto && 'large-btn'}`}>Update</button>
                                    <button onClick={() => setChangeName(!changeName)} className={`edit-btn rounded py-2 ${changePhoto && 'large-btn'}`}>Cancel</button>

                                </td>
                                :
                                <td className='d-flex flex-column justify-content-between'>
                                    {displayName}
                                    <button onClick={() => setChangeName(!changeName)} className={`edit-btn rounded py-2 ${changePhoto && 'large-btn'}`}>Change</button>
                                </td>
                        }

                    </tr>

                    <tr>
                        <td>PhotoURL</td>
                        {
                            changePhoto ?

                                <td className='d-flex flex-column justify-content-between'>
                                    <input onBlur={handlePhotoBlur} type='text' name='photoInput'></input>
                                    <button onClick={handleUpdatePhoto} className={`edit-btn rounded py-2 ${changePhoto && 'large-btn'}`}>Update</button>
                                    <button onClick={() => setChangePhoto(!changePhoto)} className={`edit-btn rounded py-2 ${changePhoto && 'large-btn'}`}>Cancel</button>
                                </td>

                                :

                                <td className='d-flex flex-column justify-content-between'>
                                    {photoURL}
                                    <button onClick={() => setChangePhoto(!changePhoto)} className={`edit-btn rounded py-2 ${changePhoto && 'large-btn'}`}>Change</button>
                                </td>
                        }
                    </tr>

                    <tr>
                        <td>Email</td>
                        <td>{email} <br></br><span className='text-danger'>(Immutable)</span></td>
                    </tr>

                </tbody>
            </Table>

            <p onClick={handleForgottenPassword} className={`text-center ${theme === 'dark' ? 'text-white' : ''}`}><Link>Reset Password</Link></p>

        </div>
    );
};

export default UserInfo;