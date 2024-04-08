
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-OBf63W6Brwe1FgiHghsSVhROfN95OAo",
  authDomain: "otp-project-e5c19.firebaseapp.com",
  projectId: "otp-project-e5c19",
  storageBucket: "otp-project-e5c19.appspot.com",
  messagingSenderId: "986545667543",
  appId: "1:986545667543:web:5bc02ef6b882928bc11f92",
  measurementId: "G-72HVK8ZSFH"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firebase authentication instance
export const auth = getAuth(app);
