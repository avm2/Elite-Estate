// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "elite-estate-9311e.firebaseapp.com",
  projectId: "elite-estate-9311e",
  storageBucket: "elite-estate-9311e.appspot.com",
  messagingSenderId: "164829961734",
  appId: "1:164829961734:web:4014deb90afb4f066ced87"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);