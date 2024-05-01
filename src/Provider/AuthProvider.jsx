import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

import PropTypes from 'prop-types';


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // user create
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password )
    }

    // login user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }
   

    // uesr checking
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)
        })
        return () => {
            return unSubscribe
        };
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.object.isRequired
}

export default AuthProvider;