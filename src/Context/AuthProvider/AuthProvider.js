import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const providerLogin = (provider) => {
        setLoader(false);
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        setLoader(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const signIn = (email, password) => {
        setLoader(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = () => {
        setLoader(false);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user state change', currentUser)
            setUser(currentUser)
            setLoader(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loader, 
        providerLogin, 
        logOut, 
        createUser, 
        signIn, 
        updateUserProfile,
        verifyEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;