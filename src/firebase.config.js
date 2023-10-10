// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr-jt9PUfJNxCGHmYDqohlXXz9wDQtiM8",
  authDomain: "test-73f0e.firebaseapp.com",
  databaseURL: "https://test-73f0e-default-rtdb.firebaseio.com",
  projectId: "test-73f0e",
  storageBucket: "test-73f0e.appspot.com",
  messagingSenderId: "486355840335",
  appId: "1:486355840335:web:c3caac6031955d3565a93a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const autha = firebase.auth();

  export {autha};
  export default db;