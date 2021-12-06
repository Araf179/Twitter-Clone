// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6OSOQoMeEqg80FIa1wOiooDhGWaQi7v0",
  authDomain: "twitter-clone-a57a4.firebaseapp.com",
  projectId: "twitter-clone-a57a4",
  storageBucket: "twitter-clone-a57a4.appspot.com",
  messagingSenderId: "477956327550",
  appId: "1:477956327550:web:3500e0abfce1f1d4f8b02f",
  measurementId: "G-ERWXZ188C4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
