import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { getThemeFromLocalStorage } from '../utilities/getThemeFromLocalStorage';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const themeInLS = getThemeFromLocalStorage();
    const [theme, setTheme] = useState(themeInLS || 'light');

    const [user, setUser] = useState(null);

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