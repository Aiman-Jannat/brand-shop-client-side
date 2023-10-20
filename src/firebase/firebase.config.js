// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj6tNOtZPRFBkGUPVx62jDdULEQyftniM",
  authDomain: "client-server-auth-361d9.firebaseapp.com",
  projectId: "client-server-auth-361d9",
  storageBucket: "client-server-auth-361d9.appspot.com",
  messagingSenderId: "434755230245",
  appId: "1:434755230245:web:f413cdca124fc95060fdcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;