// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6rDmrpKqrhHZe2PLue7IMq43lm7dNPZQ",
  authDomain: "catafalmoto.firebaseapp.com",
  projectId: "catafalmoto",
  storageBucket: "catafalmoto.appspot.com",
  messagingSenderId: "581322855209",
  appId: "1:581322855209:web:b254ecdcd392175f435d38",
  measurementId: "G-6L1ER7K6DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


