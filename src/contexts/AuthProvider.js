import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const user = {
        displayName: 'Majhi Mia',
        photoURL: 'https://th.bing.com/th/id/OIP.SG8jlsSnko3e4HymJwZv4wHaLL?pid=ImgDet&rs=1'
    }

    const authInfo = { user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;