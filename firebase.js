// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNvnYo6wEEG6nT9XOZXg_QkUtxWdn7gGU",
  authDomain: "shopkeepingapp.firebaseapp.com",
  projectId: "shopkeepingapp",
  storageBucket: "shopkeepingapp.appspot.com",
  messagingSenderId: "972475008398",
  appId: "1:972475008398:web:ca1d185c797e8e3c0890df",
  measurementId: "G-W0TESC4MZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);