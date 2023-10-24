import  { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../assets/firebase/firebase.config';




export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loding, setloding] = useState(true)
    const [name, setname] = useState('')
    const [img, setimg] = useState('')
    const provider = new GoogleAuthProvider();

    const googlelogin = () => {
        return signInWithPopup(auth, provider)
    }

    const singup = (email, password, name, profile,) => {
        setimg(profile)
        setname(name)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setimg('')
        setname('')
        return signOut(auth)
    }

    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setuser(currentUser);
            setloding(false)
        })
        return unSuscribe;
    }, [])

    const authInfo = {
        user,
        loding,
        name,
        img,
        singup,
        login,
        logout,
        googlelogin
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}

        </authContext.Provider>
    );
};

export default AuthProvider;