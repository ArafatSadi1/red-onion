// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqveenKMRTK2Hj9X7BUoBpUMo67cLPSZw",
  authDomain: "red-onion-753e4.firebaseapp.com",
  projectId: "red-onion-753e4",
  storageBucket: "red-onion-753e4.appspot.com",
  messagingSenderId: "318786453834",
  appId: "1:318786453834:web:42cea8da11703b59f681b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
