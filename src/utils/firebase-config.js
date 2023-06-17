import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

import { getAuth } from "firebase/auth";

import {
  getFirestore,
  doc, // get docment
  getDoc, // get document data
  setDoc, // set document data
  query,
  getDocs,
  collection,
} from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBecdv3ln8GFxhjjS1jfOOza9srzMoRsSU",
  authDomain: "mealstogo-344208.firebaseapp.com",
  projectId: "mealstogo-344208",
  storageBucket: "mealstogo-344208.appspot.com",
  messagingSenderId: "1025241113292",
  appId: "1:1025241113292:web:1d8917df2583a67e795869",
};

initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const auth = getAuth(); // only one instanse per application

export const db = getFirestore();

export const getAuthUserData = async (user) => {
  if (!user) return;
  const userDocRef = doc(db, "users", user.uid);

  const userSnapshot = await getDoc(userDocRef);

  return userSnapshot;
};

export const createUserDocumentFromAuth = async (
  user,
  additionalInformation = {}
) => {
  if (!user) return;
  const userDocRef = doc(db, "users", user.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // create a new user document in the fire store

    const { displayName, email } = user;
    const createdAt = new Date();

    const userData = {
      displayName,
      email,
      createdAt,
      ...additionalInformation,
    };

    try {
      await setDoc(userDocRef, userData);
    } catch (error) {
      console.log(error);
    }
  }

  // if a users exists, return userSnapshot
  return userSnapshot;
};
