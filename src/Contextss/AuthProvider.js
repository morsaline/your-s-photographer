import React, { createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(app);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curuser) => {
      setUser(curuser);
      setLoading(false);
      return () => {
        return unsubscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    loading,
    createuser,
    updateUserProfile,
    setLoading,
    providerLogin,
    login,
    logout,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
