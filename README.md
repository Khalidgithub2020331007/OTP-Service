# OTP-Service
    npm install -g create-react-app
    npx create-react-app my-react-app
    cd my-react-app
    npm i otp-input-react
    npm install react-phone-input-2  --save
    npm start

# For npm
    npm install firebase


# Then, initialize Firebase and begin using the SDKs for the products you'd like to use.
```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```
