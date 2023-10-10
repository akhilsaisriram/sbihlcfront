// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOfA5Zv3mnFfLupzghRaS0HX-r5sM76Ks",
    authDomain: "otptest-fb2e3.firebaseapp.com",
    projectId: "otptest-fb2e3",
    storageBucket: "otptest-fb2e3.appspot.com",
    messagingSenderId: "414961462219",
    appId: "1:414961462219:web:529712bc7594da496f244e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);