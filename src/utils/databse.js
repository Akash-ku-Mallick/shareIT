// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDoBmeQwd6DJ4jD1xfZX9mefr3yS8odvM",
  authDomain: "share-it-akash.firebaseapp.com",
  projectId: "share-it-akash",
  storageBucket: "share-it-akash.appspot.com",
  messagingSenderId: "10545849507",
  appId: "1:10545849507:web:51cac9f1bd4af73091cb16",
  measurementId: "G-RD70G68Q67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics }