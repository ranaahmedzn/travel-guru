import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const user = 'Rana Sheikh'

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        resetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;