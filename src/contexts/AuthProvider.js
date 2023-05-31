import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { getThemeFromLocalStorage } from '../utilities/getThemeFromLocalStorage';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const themeInLS = getThemeFromLocalStorage();
    const [theme, setTheme] = useState(themeInLS || 'light');

    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubProvider = new GithubAuthProvider();

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => unSubscribe()
    }, [])

    const authInfo = {
        user,
        setUser,
        theme,
        setTheme,
        googleSignIn,
        githubSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;