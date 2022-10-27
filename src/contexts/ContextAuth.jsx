import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const updateUserProfile = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const verifyMail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  const signIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  console.log(user);

  const authContent = {
    handleEmailPass,
    signWithGoogle,
    user,
    setUser,
    userSignOut,
    updateUserProfile,
    signIn,
    verifyMail,
  };
  return (
    <AuthContext.Provider value={authContent}>{children}</AuthContext.Provider>
  );
};

export default ContextAuth;
