import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../assets/firebase/firebase.config';




export const AuthContext = createContext(null);

const AuthPro = ({ children }) => {
    const auth =getAuth(app)
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider()
    const googlesingin = () => {
        return signInWithPopup(auth, provider)
    }

    const singup = (email, password, ) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const singout=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const Unsubscribe =  onAuthStateChanged(auth,currentuser=>{
            console.log(currentuser);
            setUser(currentuser)
        });
        return Unsubscribe;

    },[])

    const authInfo = {
        user,
        singup,
        singin,
        singout,
        googlesingin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPro;