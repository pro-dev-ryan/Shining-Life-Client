import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase.init";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

const ContextAuth = ({ children }) => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);

  const handleEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();
  const signWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid) {
        setUser(user);
      }
    });
    return unsubscribe();
  }, []);

  console.log(user);

  const userSignOut = () => {
    return signOut(auth);
  };

  const authContent = {
    handleEmailPass,
    signWithGoogle,
    user,
    setUser,
    userSignOut,
  };
  return (
    <AuthContext.Provider value={authContent}>{children}</AuthContext.Provider>
  );
};

export default ContextAuth;
