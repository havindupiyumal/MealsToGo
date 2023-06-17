import React, { createContext, useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../utils/firebase-config";

import {
  signInUserWithEmailAndPassword,
  signOutAuthUser,
} from "./authentication.service";

export const AuthenticationContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  isLoading: false,
  setIsLoading: () => null,
  error: null,
  setError: () => null,
});

export const AuthenticationProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // If a user is already authentication, grab the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        setCurrentUser(userAuth);
      },
      (e) => {
        setError(e);
      }
    );
    return unsubscribe;
  }, []);

  // API functions
  const loginUser = (email, password) => {
    setIsLoading(true);
    signInUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setIsLoading(false);
        setCurrentUser(authUser);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  const logOutUser = () => signOutAuthUser();

  const value = {
    currentUser,
    isLoading,
    error,
    loginUser,
    logOutUser,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
