import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../utils/firebase-config";

import {
  createAuthUserWithEmailAndPassword,
  signInUserWithEmailAndPassword,
  signOutAuthUser,
  updateUserProfileDisplayName,
} from "./authentication.service";

//Asynch Storage utility Functions
const storeAuth = async (auth) => {
  try {
    const jsonValue = JSON.stringify(auth);
    await AsyncStorage.setItem("@auth", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getAuth = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@auth");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const AuthenticationContext = createContext({
  currentUser: {},
  setCurrentUser: () => null,
  isLoading: false,
  setIsLoading: () => null,
  error: null,
  setError: () => null,
  logOutUser: () => null,
  registerUser: () => null,
});

export const AuthenticationProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // If a user is already authentication, grab the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        console.log("On Load :- ", user);
        setCurrentUser(user);
      },
      (e) => {
        setError(e.code);
      }
    );
    return unsubscribe;
  }, []);

  // API functions
  const loginUser = async (email, password) => {
    setError(null);
    setIsLoading(true);
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setIsLoading(false);
      setCurrentUser(user);
    } catch (e) {
      setIsLoading(false);
      setError(e.code);
    }
  };

  const registerUser = async (email, password, displayName) => {
    setError(null);
    setIsLoading(true);

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setIsLoading(false);
      setCurrentUser(user);
    } catch (e) {
      setIsLoading(false);
      setError(e.code);
    }
  };

  const logOutUser = () => {
    setCurrentUser(null);
    signOutAuthUser();
  };

  const value = {
    currentUser,
    isLoading,
    error,
    loginUser,
    logOutUser,
    registerUser,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
