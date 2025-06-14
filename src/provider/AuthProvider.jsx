import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {
  const [loading,setLoading] = useState(true);
  const [user,setUser]=useState(null);
  const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn = (email,password) =>{
  return signInWithEmailAndPassword(auth,email,password);
}

  const updateUser = (updatedData) =>{
  return updateProfile(auth.currentUser,updatedData);
};

  const googleSignIn = ()=>{
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider);
};

 const logout = () =>{
    return signOut(auth);
}

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
      if(currentUser?.email){
        const userData = {email: currentUser.email};
        axios.post('https://online-group-study-server-delta.vercel.app/jwt', userData, {
          withCredentials: true
        })
        .then(res=>{
          console.log('token after jwt',res.data)
        })
        .catch(error=>console.log(error))
      }
    //   console.log('User in the auth state change ',currentUser);
    })
    return () =>{
      unSubscribe();
    }
  },[])

  const authInfo = {
   user,
   setUser,
   loading,
   createUser,
   signIn,
   googleSignIn,
   updateUser,
   logout,
   
  }

    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;