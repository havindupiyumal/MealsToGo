import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBecdv3ln8GFxhjjS1jfOOza9srzMoRsSU",
  authDomain: "mealstogo-344208.firebaseapp.com",
  projectId: "mealstogo-344208",
  storageBucket: "mealstogo-344208.appspot.com",
  messagingSenderId: "1025241113292",
  appId: "1:1025241113292:web:1d8917df2583a67e795869",
};

const defaultApp = initializeApp(firebaseConfig);
try {
  initializeAuth(defaultApp, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (error) {}

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const auth = getAuth(defaultApp); // only one instanse per application
