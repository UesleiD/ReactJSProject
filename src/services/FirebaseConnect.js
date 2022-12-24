// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVqDZby5CckTKXKSowQeCBQ0MT03t4gU0",
  authDomain: "reactproject-c258f.firebaseapp.com",
  projectId: "reactproject-c258f",
  storageBucket: "reactproject-c258f.appspot.com",
  messagingSenderId: "595434988539",
  appId: "1:595434988539:web:1cb9b508bee945ffb8215e",
  measurementId: "G-ZSM0KL0WYT" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);