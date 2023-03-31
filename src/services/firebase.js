import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFRxvobjWBjd7oRhNvUZRUTYUdxLrjkTg",
  authDomain: "cvesteb.firebaseapp.com",
  projectId: "cvesteb",
  storageBucket: "cvesteb.appspot.com",
  messagingSenderId: "596913321493",
  appId: "1:596913321493:web:183702522bd399e97d801c",
  measurementId: "G-G8BRNHX498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default firebase;
