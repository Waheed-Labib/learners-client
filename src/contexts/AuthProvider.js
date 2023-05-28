import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const user = {
        displayName: 'Majhi Mia',
        photoURL: 'https://th.bing.com/th/id/OIP.SG8jlsSnko3e4HymJwZv4wHaLL?pid=ImgDet&rs=1'
    }

    // const user = null;

    const authInfo = {
        user,
        theme,
        setTheme
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;